import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { SHEETS, fetchAndParseSheet } from '../utils/dataParser';

// ─────────────────────────────────────────────
// 🔐 Replace this with YOUR Firebase UID
//    Firebase Console → Authentication → Users → UID column
// ─────────────────────────────────────────────
const ADMIN_UID = 'JROhXIAevXfsMos9qTTXcpf92vD2';

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

const StatCard = ({ icon, value, label, color }) => (
  <div className="admin-stat-card">
    <div className="admin-stat-icon" style={{ background: color + '22', color }}>{icon}</div>
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
  // Set of question IDs that belong to A2Z sheet — used for consolidation
  const [a2zQuestionIds, setA2ZQuestionIds] = useState(new Set());

  const isAdmin = user && user.uid === ADMIN_UID;

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
  // Handles two Firestore formats:
  //   OLD: progress = { questionId: true/false }  (flat booleans)
  //   NEW: progress = { sheetId: { questionId: { status: bool } } }  (nested objects)
  //   CORRUPTED NEW: A2Z questions scattered into wrong sheet buckets (fixed below)
  const isOldFormat = (prog) => {
    const firstVal = Object.values(prog || {})[0];
    return typeof firstVal === 'boolean';
  };

  // Consolidate nested progress: move any A2Z question found in a wrong bucket
  // back to a2z_flawless. This fixes data from a bad prior migration.
  const consolidate = (prog) => {
    if (!prog || isOldFormat(prog) || a2zQuestionIds.size === 0) return prog;
    const fixed = {};
    for (const [sheetKey, questions] of Object.entries(prog)) {
      if (!questions || typeof questions !== 'object') continue;
      for (const [qId, qData] of Object.entries(questions)) {
        const realSheet = a2zQuestionIds.has(qId) ? 'a2z_flawless' : sheetKey;
        if (!fixed[realSheet]) fixed[realSheet] = {};
        const existing = fixed[realSheet][qId];
        if (!existing) {
          fixed[realSheet][qId] = qData;
        } else {
          fixed[realSheet][qId] = {
            status: existing.status || qData.status,
            revision: existing.revision || qData.revision,
          };
        }
      }
    }
    return fixed;
  };

  const getSolved = (u) => {
    const prog = u.progress || {};
    if (Object.keys(prog).length === 0) return 0;

    if (isOldFormat(prog)) {
      // Old format: values are booleans — count the trues
      return Object.values(prog).filter(v => v === true).length;
    }
    // New format: consolidate first, then count all solved
    const fixed = consolidate(prog);
    return Object.values(fixed).reduce(
      (sum, sheet) => sum + Object.values(sheet || {}).filter(q => q && q.status).length, 0
    );
  };

  // Count solved for a specific sheet column
  const getSheetSolved = (u, sheetId) => {
    const prog = u.progress || {};
    if (isOldFormat(prog)) {
      // Old flat format: A2Z only — attribute all to a2z_flawless
      if (sheetId !== 'a2z_flawless') return 0;
      return Object.values(prog).filter(v => v === true).length;
    }
    // New format: consolidate first, then read the specific sheet bucket
    const fixed = consolidate(prog);
    const sheetProg = fixed[sheetId] || {};
    return Object.values(sheetProg).filter(q => q && q.status).length;
  };

  const totalUsers = users.length;
  const solvedTodayCount = users.filter(u => isSolvedToday(u.lastSolvedAt)).length;
  const totalProblemsAllTime = users.reduce((acc, u) => acc + getSolved(u), 0);
  const mostActive = users.reduce((max, u) => (!max || getSolved(u) > getSolved(max)) ? u : max, null);

  // ── Topic breakdown (per sheet) ──
  const sheetSolveCounts = {};
  users.forEach(u => {
    SHEETS.forEach(s => {
      const solved = getSheetSolved(u, s.id) ?? 0;
      sheetSolveCounts[s.id] = (sheetSolveCounts[s.id] || 0) + solved;
    });
  });
  const maxSheetCount = Math.max(1, ...Object.values(sheetSolveCounts));

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
      if (sortBy === 'lastSolvedAt') {
        const da = a.lastSolvedAt?.toDate?.() || new Date(0);
        const db2 = b.lastSolvedAt?.toDate?.() || new Date(0);
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

      {/* Stat Cards */}
      <div className="admin-stats-grid">
        <StatCard icon="👥" value={totalUsers} label="Total Users" color="#8ab4f8" />
        <StatCard icon="✅" value={solvedTodayCount} label="Active Today" color="#3ddc84" />
        <StatCard icon="🧩" value={totalProblemsAllTime} label="Total Solves (all users)" color="#fdd663" />
        <StatCard
          icon="🔥"
          value={mostActive ? (mostActive.totalSolved || 0) : 0}
          label={`Top Solver: ${mostActive?.displayName?.split(' ')[0] || '—'}`}
          color="#f28b82"
        />
      </div>

      {/* Sheet Activity Chart */}
      <div className="admin-section">
        <h2 className="admin-section-title">📊 Solves by Sheet</h2>
        <div className="admin-topic-chart">
          {SHEETS.map(s => {
            const count = sheetSolveCounts[s.id] || 0;
            const pct = Math.round((count / maxSheetCount) * 100);
            return (
              <div key={s.id} className="admin-topic-row">
                <span className="admin-topic-name">{s.name}</span>
                <div className="admin-topic-bar-track">
                  <div
                    className="admin-topic-bar-fill"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="admin-topic-count">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* User Table */}
      <div className="admin-section">
        <div className="admin-section-header">
          <h2 className="admin-section-title">👤 All Users</h2>
          <div className="admin-controls">
            <input
              type="text"
              placeholder="Search by name or email…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="admin-search"
              id="admin-user-search"
            />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="admin-select"
              id="admin-sort-select"
            >
              <option value="totalSolved">Sort: Most Solved</option>
              <option value="lastSolvedAt">Sort: Recent Activity</option>
              <option value="name">Sort: Name A–Z</option>
            </select>
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                {SHEETS.map(s => <th key={s.id}>{s.name}</th>)}
                <th>Total Solved</th>
                <th>Last Active</th>
                <th>Today</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(u => {
                const prog = u.progress || {};
                const activeToday = isSolvedToday(u.lastSolvedAt);
                return (
                  <tr key={u.uid} className={activeToday ? 'admin-row-active' : ''}>
                    <td>
                      <div className="admin-user-cell">
                        {u.photoURL
                          ? <img src={u.photoURL} alt="" className="admin-avatar" />
                          : <div className="admin-avatar-placeholder">{(u.displayName || u.email || '?')[0].toUpperCase()}</div>
                        }
                        <div>
                          <div className="admin-user-name">{u.displayName || 'Anonymous'}</div>
                          <div className="admin-user-email">{u.email}</div>
                        </div>
                      </div>
                    </td>
                    {SHEETS.map(s => {
                      const solved = getSheetSolved(u, s.id);
                      return (
                        <td key={s.id} className="admin-sheet-cell">
                          {solved > 0
                            ? <span className="admin-solved-badge">{solved}</span>
                            : <span className="admin-zero">—</span>}
                        </td>
                      );
                    })}
                    <td className="admin-total-cell">{getSolved(u)}</td>
                    <td className="admin-time-cell">{timeAgo(u.lastSolvedAt)}</td>
                    <td>{activeToday ? <span className="admin-dot-green" title="Active today" /> : <span className="admin-dot-gray" />}</td>
                  </tr>
                );
              })}
              {filteredUsers.length === 0 && (
                <tr><td colSpan={SHEETS.length + 4} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>No users found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
