import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
  fetchAdminUsers,
  fetchSheets,
  fetchActivityTrend,
  fetchUserSegments,
  fetchRetentionCohorts
} from '../services/adminService';

import AdminOverview from './admin/AdminOverview';
import AdminUsers from './AdminUsers';
import AdminRetention from './admin/AdminRetention';
import AdminDemographics from './admin/Admindemographics';

const AdminDashboard = () => {
  const { user, isAdmin } = useContext(AuthContext);

  // Data states
  const [users, setUsers] = useState([]);
  const [sheetTotals, setSheetTotals] = useState({});
  const [activityTrend, setActivityTrend] = useState(null);
  const [engagementHealth, setEngagementHealth] = useState(null);
  const [userSegments, setUserSegments] = useState(null);
  const [retentionCohorts, setRetentionCohorts] = useState(null);
  const [activeUserStats, setActiveUserStats] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  // Cross-component state
  const [segmentFilter, setSegmentFilter] = useState(''); // E.g., 'power', 'active', 'starters', 'ghosts'

  useEffect(() => {
    if (!user || !isAdmin) { setLoading(false); return; }
    let cancelled = false;

    (async () => {
      try {
        const [
          rows,
          sheetsData,
          activity,
          segments,
          retention
        ] = await Promise.all([
          fetchAdminUsers(),
          fetchSheets(),
          fetchActivityTrend(),
          fetchUserSegments(),
          fetchRetentionCohorts()
        ]);

        if (cancelled) return;

        // Map users
        const mappedUsers = rows.map((r) => {
          const sheetCounts = r.sheet_counts || {};
          // The per-sheet solved counts are what the "View Sheets" breakdown
          // actually shows, but the profile's cached total_solved field can
          // drift out of sync with it (e.g. after the Firebase→Supabase
          // merge). Trust the sheet sum as the source of truth whenever we
          // have sheet data, so the "Total Solved" column always matches
          // what you see when you expand a user's row.
          const sheetSolvedSum = Object.values(sheetCounts)
            .reduce((sum, sc) => sum + (sc?.solved || 0), 0);

          return {
            uid: r.user_id,
            email: r.email,
            displayName: r.display_name,
            photoURL: r.photo_url,
            location: r.location,
            totalSolved: sheetSolvedSum > 0 ? sheetSolvedSum : (r.total_solved || 0),
            createdAt: r.created_at,
            lastSeenAt: r.last_seen_at,
            lastSolvedAt: r.last_solved_at,
            sheetCounts,
          };
        });
        setUsers(mappedUsers);
        setSheetTotals(Object.fromEntries(sheetsData.map((s) => [s.id, s.total_questions])));
        setActivityTrend(activity);
        setUserSegments(segments);
        setRetentionCohorts(retention);

        // Derive Engagement Health from user segments and activity (we can do it client side or combined)
        const totalUsers = mappedUsers.length;
        const activeUsersCount = mappedUsers.filter(u => (u.totalSolved || 0) > 0).length;
        const totalProblemsAllTime = mappedUsers.reduce((acc, u) => acc + (u.totalSolved || 0), 0);
        const mostActive = mappedUsers.reduce((max, u) => (!max || (u.totalSolved || 0) > (max.totalSolved || 0)) ? u : max, null);

        // Find users who have visited recently but have 0 solves
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).getTime();
        const browsingOnlyCount = mappedUsers.filter(u =>
          (u.totalSolved || 0) === 0 &&
          u.lastSeenAt &&
          new Date(u.lastSeenAt).getTime() > thirtyDaysAgo
        ).length;

        setEngagementHealth({
          active_count: activeUsersCount,
          active_pct: totalUsers > 0 ? Math.round((activeUsersCount / totalUsers) * 100) : 0,
          drop_off_pct: totalUsers > 0 ? Math.round(((totalUsers - activeUsersCount) / totalUsers) * 100) : 0,
          avg_solves: activeUsersCount > 0 ? Math.round(totalProblemsAllTime / activeUsersCount) : 0,
          browsing_only_count: browsingOnlyCount,
          top_solver: mostActive ? { name: mostActive.displayName?.split(' ')[0] || 'Unknown', count: mostActive.totalSolved } : null
        });

        // Daily / Weekly / Monthly active users, based on the most recent
        // activity timestamp we have for each user (seen or solved).
        const now = Date.now();
        const DAY_MS = 24 * 60 * 60 * 1000;
        const getLatestActivityMs = (u) => {
          const candidates = [u.lastSeenAt, u.lastSolvedAt]
            .filter(Boolean)
            .map((ts) => new Date(ts).getTime())
            .filter((t) => !Number.isNaN(t));
          return candidates.length ? Math.max(...candidates) : 0;
        };
        let dau = 0, wau = 0, mau = 0;
        mappedUsers.forEach((u) => {
          const activityMs = getLatestActivityMs(u);
          if (!activityMs) return;
          const ageDays = (now - activityMs) / DAY_MS;
          if (ageDays <= 1) dau++;
          if (ageDays <= 7) wau++;
          if (ageDays <= 30) mau++;
        });
        setActiveUserStats({ dau, wau, mau });

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

  // Top strip helpers
  const isSolvedToday = (ts) => {
    if (!ts) return false;
    const d = new Date(ts);
    const now = new Date();
    return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  };
  const isOnlineRecently = (ts) => ts && ((Date.now() - new Date(ts).getTime()) / 60000 <= 15);

  const solvedTodayCount = users.filter((u) => isSolvedToday(u.lastSolvedAt)).length;
  const onlineNowCount = users.filter((u) => isOnlineRecently(
    [u.lastSeenAt, u.lastSolvedAt].filter(Boolean).sort().pop()
  )).length;

  return (
    <div className="admin-dashboard">
      <div className="admin-header" style={{ marginBottom: '1rem' }}>
        <div>
          <h1 className="admin-title">Admin Dashboard</h1>
        </div>
        <span className="admin-badge">🛡️ Admin</span>
      </div>

      {/* Top Strip */}
      <div style={{ display: 'flex', gap: '2rem', padding: '0.75rem 1rem', background: 'var(--surface-color)', borderRadius: '0.75rem', marginBottom: '2rem', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
        <div><span style={{ color: 'var(--text-secondary)' }}>Total Users: </span><strong style={{ color: 'var(--text-primary)' }}>{users.length}</strong></div>
        <div><span style={{ color: 'var(--text-secondary)' }}>Active Today: </span><strong style={{ color: '#3ddc84' }}>{solvedTodayCount}</strong></div>
        <div><span style={{ color: 'var(--text-secondary)' }}>Online Now: </span><strong style={{ color: '#34d399' }}>{onlineNowCount}</strong></div>
      </div>

      <div className="admin-tabs">
        {[
          { id: 'overview', label: '📊 Overview' },
          { id: 'users', label: '👥 Users' },
          { id: 'retention', label: '📈 Retention' },
          { id: 'locations', label: '🌍 Locations' }
        ].map(tab => (
          <button
            key={tab.id}
            className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <AdminOverview
          users={users}
          activityTrend={activityTrend}
          engagementHealth={engagementHealth}
          userSegments={userSegments}
          activeUserStats={activeUserStats}
          sheetTotals={sheetTotals}
          setActiveTab={setActiveTab}
          setSegmentFilter={setSegmentFilter}
        />
      )}

      {activeTab === 'users' && (
        <AdminUsers
          users={users}
          sheetTotals={sheetTotals}
          segmentFilter={segmentFilter}
          setSegmentFilter={setSegmentFilter}
        />
      )}

      {activeTab === 'retention' && <AdminRetention cohorts={retentionCohorts} />}
      {activeTab === 'locations' && <AdminDemographics users={users} />}
    </div>
  );
};

export default AdminDashboard;