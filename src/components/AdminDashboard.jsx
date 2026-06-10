import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { SHEETS, fetchAndParseSheet } from '../utils/dataParser';
import AdminUsers from './AdminUsers';

// ─────────────────────────────────────────────
// 🔐 Replace this with YOUR Firebase UID
//    Firebase Console → Authentication → Users → UID column
// ─────────────────────────────────────────────
const ADMIN_UIDS = ['JROhXIAevXfsMos9qTTXcpf92vD2', 'kcFyQ6WdW9VBxUnCMt1NIBzJRyL2'];

// Map sheet IDs to display labels for the topic chart
const SHEET_LABELS = Object.fromEntries(SHEETS.map(s => [s.id, s.name]));

function timeAgo(ts) {
  if (!ts) return 'Never';
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function getActivityLevel(ts) {
  if (!ts) return { className: 'activity-never', text: 'Never' };
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  const diffHours = (Date.now() - date.getTime()) / 3600000;
  
  if (diffHours < 1) return { className: 'activity-high', text: timeAgo(ts) };
  if (diffHours < 24) return { className: 'activity-medium', text: timeAgo(ts) };
  if (diffHours > 72) return { className: 'activity-low', text: timeAgo(ts) };
  return { className: 'activity-normal', text: timeAgo(ts) };
}

const SHEET_TOTALS = {
  a2z_flawless: 455,
  SDE: 191,
  blind75: 75,
  neetcode150: 150,
  neetcode250: 250
};

const VALID_SHEET_IDS = new Set(SHEETS.map(s => s.id));

const normalizeQuestionProgress = (value) => {
  if (typeof value === 'boolean') {
    return { status: value, revision: false, note: '' };
  }

  if (!value || typeof value !== 'object') {
    return { status: false, revision: false, note: '' };
  }

  return {
    status: Boolean(value.status),
    revision: Boolean(value.revision),
    note: value.note || '',
  };
};

const countSolved = (progressBySheet) => Object.values(progressBySheet).reduce(
  (sum, sheet) => sum + Object.values(sheet || {}).filter(q => q?.status).length,
  0
);

function isSolvedToday(ts) {
  if (!ts) return false;
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  const now = new Date();
  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
}

function isOnlineRecently(ts) {
  if (!ts) return false;
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  const diffMinutes = (Date.now() - date.getTime()) / 60000;
  return diffMinutes <= 15; // Online if active in the last 15 minutes
}

const StatCard = ({ value, label, color }) => (
  <div className="admin-stat-card" style={{ borderTopColor: color }}>
    <div className="admin-stat-value" style={{ color }}>{value}</div>
    <div className="admin-stat-label">{label}</div>
  </div>
);

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState('totalSolved');
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  // Set of question IDs that belong to A2Z sheet — used for consolidation
  const [a2zQuestionIds, setA2ZQuestionIds] = useState(new Set());

  const isAdmin = user && ADMIN_UIDS.includes(user.uid);

  // Load A2Z question IDs once — used to detect and fix scattered progress
  useEffect(() => {
    const loadA2ZIds = async () => {
      const parsed = await fetchAndParseSheet('a2z_flawless');
      if (!parsed) return;
      const ids = new Set();
      const traverse = (groups) => {
        groups.forEach(g => {
          (g.questions || []).forEach(q => { if (q.id) ids.add(q.id); });
          (g.subcategories || []).forEach(sub => traverse([sub]));
        });
      };
      traverse(parsed.data);
      setA2ZQuestionIds(ids);
    };
    loadA2ZIds();
  }, []);

  useEffect(() => {
    if (!isAdmin) return;
    const fetchUsers = async () => {
      try {
        const snap = await getDocs(collection(db, 'users'));
        const data = snap.docs.map(d => ({ uid: d.id, ...d.data() }));
        setUsers(data);
      } catch (e) {
        setError('Failed to load user data. Check Firestore rules.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [isAdmin]);

  // ── Access denied ──
  if (!user) {
    return (
      <div className="admin-access-denied">
        <div className="admin-lock">🔒</div>
        <h2>Sign in required</h2>
        <p>Please sign in with your admin account to access this page.</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="admin-access-denied">
        <div className="admin-lock">⛔</div>
        <h2>Access Denied</h2>
        <p>You don't have permission to view this page.</p>
        <p className="admin-uid-hint">Your UID: <code>{user.uid}</code></p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="admin-spinner" />
        <p>Loading admin data…</p>
      </div>
    );
  }

  if (error) {
    return <div className="admin-access-denied"><div className="admin-lock">⚠️</div><h2>{error}</h2></div>;
  }

  // ── Aggregate stats ──
  // Consolidate handles flat, nested, and mixed format progress
  const consolidate = (prog) => {
    if (!prog) return {};
    const fixed = {};
    const putQuestion = (sheetId, qId, qData) => {
      const normalized = normalizeQuestionProgress(qData);
      if (!fixed[sheetId]) fixed[sheetId] = {};
      const existing = fixed[sheetId][qId];
      fixed[sheetId][qId] = existing
        ? {
            status: existing.status || normalized.status,
            revision: existing.revision || normalized.revision,
            note: existing.note || normalized.note,
          }
        : normalized;
    };

    for (const [key, value] of Object.entries(prog)) {
      if (typeof value === 'boolean') {
        putQuestion('a2z_flawless', key, value);
      } else if (value && typeof value === 'object') {
        if (VALID_SHEET_IDS.has(key)) {
          for (const [qId, qData] of Object.entries(value)) {
            const realSheet = a2zQuestionIds.has(qId) ? 'a2z_flawless' : key;
            putQuestion(realSheet, qId, qData);
          }
        } else if ('status' in value || 'revision' in value || 'note' in value) {
          putQuestion('a2z_flawless', key, value);
        }
      }
    }
    return fixed;
  };

  const getSolved = (u) => {
    const prog = u.progress || {};
    const fixed = consolidate(prog);
    const calculated = countSolved(fixed);

    if (Object.keys(prog).length > 0) return calculated;
    return Number(u.totalSolved) || 0;
  };

  // Count solved for a specific sheet column
  const getSheetSolved = (u, sheetId) => {
    const prog = u.progress || {};
    const fixed = consolidate(prog);
    const sheetProg = fixed[sheetId] || {};
    return countSolved({ [sheetId]: sheetProg });
  };

  const totalUsers = users.length;
  const solvedTodayCount = users.filter(u => isSolvedToday(u.lastSolvedAt)).length;
  const onlineNowCount = users.filter(u => isOnlineRecently(u.updatedAt)).length;
  const totalProblemsAllTime = users.reduce((acc, u) => acc + getSolved(u), 0);
  const mostActive = users.reduce((max, u) => (!max || getSolved(u) > getSolved(max)) ? u : max, null);

  // ── Engagement Health ──
  const activeUsersCount = users.filter(u => getSolved(u) > 0).length;
  const zeroSolversCount = totalUsers - activeUsersCount;
  const activeUsersPct = totalUsers > 0 ? Math.round((activeUsersCount / totalUsers) * 100) : 0;
  const dropOffPct = totalUsers > 0 ? Math.round((zeroSolversCount / totalUsers) * 100) : 0;
  const avgSolves = activeUsersCount > 0 ? Math.round(totalProblemsAllTime / activeUsersCount) : 0;

  // ── User Segmentation ──
  const powerUsers = users.filter(u => getSolved(u) >= 100).length;
  const activeUsersSeg = users.filter(u => getSolved(u) >= 10 && getSolved(u) < 100).length;
  const starterUsers = users.filter(u => getSolved(u) >= 1 && getSolved(u) < 10).length;

  // ── Demographics ──
  const usersWithLocation = users.filter(u => u.location && u.location !== 'Unknown');
  const indianUsers = usersWithLocation.filter(u => u.location.toLowerCase().includes('india')).length;
  const overseasUsers = usersWithLocation.length - indianUsers;

  // ── Sheet Adoption (per sheet) ──
  const sheetStats = {};
  let maxCompletionPct = 1;
  SHEETS.forEach(s => {
    let totalSolvesInSheet = 0;
    let uniqueUsersInSheet = 0;
    users.forEach(u => {
      const solved = getSheetSolved(u, s.id);
      if (solved > 0) {
        uniqueUsersInSheet++;
        totalSolvesInSheet += solved;
      }
    });
    const totalPossible = activeUsersCount * (SHEET_TOTALS[s.id] || 1);
    const completionPct = activeUsersCount > 0 ? ((totalSolvesInSheet / totalPossible) * 100) : 0;
    if (completionPct > maxCompletionPct) maxCompletionPct = completionPct;
    sheetStats[s.id] = { completionPct, uniqueUsersInSheet };
  });

  // ── Sorted + filtered user list ──
  const filteredUsers = users
    .filter(u => {
      const q = search.toLowerCase();
      return (
        (u.displayName || '').toLowerCase().includes(q) ||
        (u.email || '').toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      if (sortBy === 'totalSolved') return getSolved(b) - getSolved(a);
      if (sortBy === 'lastActiveAt') {
        const da = a.updatedAt?.toDate?.() || new Date(0);
        const db2 = b.updatedAt?.toDate?.() || new Date(0);
        return db2 - da;
      }
      return (a.displayName || '').localeCompare(b.displayName || '');
    });

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-subtitle">Live data from Firestore · {totalUsers} registered users</p>
        </div>
        <span className="admin-badge">🛡️ Admin</span>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="admin-tabs">
        <button 
          className={`admin-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📊 Overview
        </button>
        <button 
          className={`admin-tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          👥 Users
        </button>
      </div>

      {activeTab === 'overview' ? (
        <>
          {/* Platform Stats */}
          <div className="admin-section">
            <h2 className="admin-section-title">Platform Stats</h2>
            <div className="admin-stats-grid">
              <StatCard value={totalUsers} label="Total Users" color="#8ab4f8" />
              <StatCard value={totalProblemsAllTime} label="Total Solves" color="#fdd663" />
              <StatCard value={solvedTodayCount} label="Active Today" color="#3ddc84" />
              <StatCard value={onlineNowCount} label="Online Now" color="#34d399" />
            </div>
          </div>

          {/* Engagement Health */}
          <div className="admin-section">
            <h2 className="admin-section-title">Engagement Health</h2>
            <div className="admin-stats-grid">
              <StatCard value={`${activeUsersPct}%`} label={`Active Users (${activeUsersCount})`} color="#8ab4f8" />
              <StatCard value={avgSolves} label="Avg Solves / Active User" color="#3ddc84" />
              <StatCard value={`${dropOffPct}%`} label={`Drop-off Rate (${zeroSolversCount} users)`} color="#f28b82" />
              <StatCard
                value={mostActive ? getSolved(mostActive) : 0}
                label={`Top Solver: ${mostActive?.displayName?.split(' ')[0] || '—'}`}
                color="#fdd663"
              />
            </div>
          </div>

          {/* User Segmentation */}
          <div className="admin-section">
            <h2 className="admin-section-title">User Segmentation</h2>
            <div className="admin-stats-grid">
              <StatCard value={powerUsers} label="Power (100+)" color="#a855f7" />
              <StatCard value={activeUsersSeg} label="Active (10-99)" color="#3b82f6" />
              <StatCard value={starterUsers} label="Starters (1-9)" color="#10b981" />
              <StatCard value={zeroSolversCount} label="Ghosts (0)" color="#64748b" />
            </div>
          </div>

          {/* Demographics */}
          <div className="admin-section">
            <h2 className="admin-section-title">Demographics</h2>
            <div className="admin-stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <StatCard value={indianUsers} label="Indian Users" color="#ff9933" />
              <StatCard value={overseasUsers} label="Overseas Users" color="#3b82f6" />
              <StatCard value={totalUsers - usersWithLocation.length} label="Unknown Location" color="#64748b" />
            </div>
          </div>

          {/* Sheet Activity Chart */}
          <div className="admin-section">
            <h2 className="admin-section-title">Solves by Sheet</h2>
            <div className="admin-topic-chart">
              {SHEETS.map(s => {
                const stats = sheetStats[s.id] || { completionPct: 0, uniqueUsersInSheet: 0 };
                const relativePct = maxCompletionPct > 0 ? (stats.completionPct / maxCompletionPct) * 100 : 0;
                return (
                  <div key={s.id} className="admin-topic-row">
                    <div className="admin-topic-name-wrap">
                      <span className="admin-topic-name">{s.name}</span>
                      <span className="admin-topic-subtext">{stats.uniqueUsersInSheet} users</span>
                    </div>
                    <div className="admin-topic-bar-track">
                      <div
                        className="admin-topic-bar-fill"
                        style={{ width: `${relativePct}%` }}
                      />
                    </div>
                    <span className="admin-topic-count">{stats.completionPct.toFixed(1)}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <AdminUsers 
          users={users} 
          getSolved={getSolved} 
          getSheetSolved={getSheetSolved} 
        />
      )}
    </div>
  );
};

export default AdminDashboard;
