import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { SHEETS } from '../utils/dataParser';
import { fetchAdminUsers, fetchSheets } from '../services/adminService';
import AdminUsers from './AdminUsers';

// ═══════════════════════════════════════════════════════════════════════════
// Admin dashboard — data comes from the admin_list_users() RPC.
//
// Security model (replaces the old client-side ADMIN_UIDS check):
//   • profiles.is_admin is set in the database (admin_emails allow-list).
//   • The RPC is SECURITY DEFINER and raises 'admin only' for everyone else.
//   • Non-admins cannot read ANY other user's data — RLS guarantees it.
// The rows arrive pre-aggregated (total_solved + per-sheet counts from
// user_sheet_stats), so no client-side normalization of legacy formats and
// no scanning of raw progress is needed.
// ═══════════════════════════════════════════════════════════════════════════

function timeAgo(ts) {
  if (!ts) return 'Never';
  const date = new Date(ts);
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function isSolvedToday(ts) {
  if (!ts) return false;
  const date = new Date(ts);
  const now = new Date();
  return date.getDate() === now.getDate()
    && date.getMonth() === now.getMonth()
    && date.getFullYear() === now.getFullYear();
}

function isOnlineRecently(ts) {
  if (!ts) return false;
  return (Date.now() - new Date(ts).getTime()) / 60000 <= 15;
}

const StatCard = ({ value, label, color }) => (
  <div className="admin-stat-card" style={{ borderTopColor: color }}>
    <div className="admin-stat-value" style={{ color }}>{value}</div>
    <div className="admin-stat-label">{label}</div>
  </div>
);

const AdminDashboard = () => {
  const { user, isAdmin } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [sheetTotals, setSheetTotals] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!user || !isAdmin) { setLoading(false); return; }
    let cancelled = false;

    (async () => {
      try {
        const [rows, sheets] = await Promise.all([fetchAdminUsers(), fetchSheets()]);
        if (cancelled) return;
        // Map RPC rows to the field names the table component renders.
        setUsers(rows.map((r) => ({
          uid: r.user_id,
          email: r.email,
          displayName: r.display_name,
          photoURL: r.photo_url,
          location: r.location,
          totalSolved: r.total_solved,
          createdAt: r.created_at,
          lastSeenAt: r.last_seen_at,
          lastSolvedAt: r.last_solved_at,
          sheetCounts: r.sheet_counts || {},
        })));
        setSheetTotals(Object.fromEntries(sheets.map((s) => [s.id, s.total_questions])));
      } catch (e) {
        if (!cancelled) setError(e.message === 'admin only'
          ? 'Access denied by the server: this account is not an admin.'
          : `Failed to load admin data: ${e.message}`);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => { cancelled = true; };
  }, [user, isAdmin]);

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

  const getSolved = (u) => u.totalSolved || 0;
  const getSheetSolved = (u, sheetId) => u.sheetCounts?.[sheetId]?.solved || 0;
  const getUserActivityAt = (u) => {
    const times = [u.lastSeenAt, u.lastSolvedAt].filter(Boolean).map((t) => new Date(t).getTime());
    return times.length ? new Date(Math.max(...times)).toISOString() : null;
  };

  // ── Aggregates (rows are small + pre-aggregated; fine to fold client-side) ─
  const totalUsers = users.length;
  const solvedTodayCount = users.filter((u) => isSolvedToday(u.lastSolvedAt)).length;
  const onlineNowCount = users.filter((u) => isOnlineRecently(getUserActivityAt(u))).length;
  const totalProblemsAllTime = users.reduce((acc, u) => acc + getSolved(u), 0);
  const mostActive = users.reduce((max, u) => (!max || getSolved(u) > getSolved(max)) ? u : max, null);

  const activeUsersCount = users.filter((u) => getSolved(u) > 0).length;
  const zeroSolversCount = totalUsers - activeUsersCount;
  const activeUsersPct = totalUsers > 0 ? Math.round((activeUsersCount / totalUsers) * 100) : 0;
  const dropOffPct = totalUsers > 0 ? Math.round((zeroSolversCount / totalUsers) * 100) : 0;
  const avgSolves = activeUsersCount > 0 ? Math.round(totalProblemsAllTime / activeUsersCount) : 0;

  const powerUsers = users.filter((u) => getSolved(u) >= 100).length;
  const activeUsersSeg = users.filter((u) => getSolved(u) >= 10 && getSolved(u) < 100).length;
  const starterUsers = users.filter((u) => getSolved(u) >= 1 && getSolved(u) < 10).length;

  const usersWithLocation = users.filter((u) => u.location && u.location !== 'Unknown');
  const indianUsers = usersWithLocation.filter((u) => u.location.toLowerCase().includes('india')).length;
  const overseasUsers = usersWithLocation.length - indianUsers;

  const sheetStats = {};
  let maxCompletionPct = 1;
  SHEETS.forEach((s) => {
    let totalSolvesInSheet = 0;
    let uniqueUsersInSheet = 0;
    users.forEach((u) => {
      const solved = getSheetSolved(u, s.id);
      if (solved > 0) { uniqueUsersInSheet++; totalSolvesInSheet += solved; }
    });
    const totalPossible = activeUsersCount * (sheetTotals[s.id] || 1);
    const completionPct = activeUsersCount > 0 ? ((totalSolvesInSheet / totalPossible) * 100) : 0;
    if (completionPct > maxCompletionPct) maxCompletionPct = completionPct;
    sheetStats[s.id] = { completionPct, uniqueUsersInSheet };
  });

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-subtitle">Live data from Supabase · {totalUsers} registered users</p>
        </div>
        <span className="admin-badge">🛡️ Admin</span>
      </div>

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
          <div className="admin-section">
            <h2 className="admin-section-title">Platform Stats</h2>
            <div className="admin-stats-grid">
              <StatCard value={totalUsers} label="Total Users" color="#8ab4f8" />
              <StatCard value={totalProblemsAllTime} label="Total Solves" color="#fdd663" />
              <StatCard value={solvedTodayCount} label="Active Today" color="#3ddc84" />
              <StatCard value={onlineNowCount} label="Online Now" color="#34d399" />
            </div>
          </div>

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

          <div className="admin-section">
            <h2 className="admin-section-title">User Segmentation</h2>
            <div className="admin-stats-grid">
              <StatCard value={powerUsers} label="Power (100+)" color="#a855f7" />
              <StatCard value={activeUsersSeg} label="Active (10-99)" color="#3b82f6" />
              <StatCard value={starterUsers} label="Starters (1-9)" color="#10b981" />
              <StatCard value={zeroSolversCount} label="Ghosts (0)" color="#64748b" />
            </div>
          </div>

          <div className="admin-section">
            <h2 className="admin-section-title">Demographics</h2>
            <div className="admin-stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <StatCard value={indianUsers} label="Indian Users" color="#ff9933" />
              <StatCard value={overseasUsers} label="Overseas Users" color="#3b82f6" />
              <StatCard value={totalUsers - usersWithLocation.length} label="Unknown Location" color="#64748b" />
            </div>
          </div>

          <div className="admin-section">
            <h2 className="admin-section-title">Solves by Sheet</h2>
            <div className="admin-topic-chart">
              {SHEETS.map((s) => {
                const stats = sheetStats[s.id] || { completionPct: 0, uniqueUsersInSheet: 0 };
                const relativePct = maxCompletionPct > 0 ? (stats.completionPct / maxCompletionPct) * 100 : 0;
                return (
                  <div key={s.id} className="admin-topic-row">
                    <div className="admin-topic-name-wrap">
                      <span className="admin-topic-name">{s.name}</span>
                      <span className="admin-topic-subtext">{stats.uniqueUsersInSheet} users</span>
                    </div>
                    <div className="admin-topic-bar-track">
                      <div className="admin-topic-bar-fill" style={{ width: `${relativePct}%` }} />
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
          sheetTotals={sheetTotals}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
