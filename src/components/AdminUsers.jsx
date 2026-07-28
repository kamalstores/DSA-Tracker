import React, { useState } from 'react';
import { SHEETS } from '../utils/dataParser';

// Duplicated simple utils for AdminUsers
function timeAgo(ts) {
  if (!ts) return 'Never';
  const date = new Date(ts);
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function getActivityLevel(ts) {
  if (!ts) return { className: 'activity-never', text: 'Never' };
  const date = new Date(ts);
  const diffHours = (Date.now() - date.getTime()) / 3600000;

  if (diffHours < 1) return { className: 'activity-high', text: timeAgo(ts) };
  if (diffHours < 24) return { className: 'activity-medium', text: timeAgo(ts) };
  if (diffHours > 72) return { className: 'activity-low', text: timeAgo(ts) };
  return { className: 'activity-normal', text: timeAgo(ts) };
}

function isSolvedToday(ts) {
  if (!ts) return false;
  const date = new Date(ts);
  const now = new Date();
  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
}

function isOnlineRecently(ts) {
  if (!ts) return false;
  const date = new Date(ts);
  const diffMinutes = (Date.now() - date.getTime()) / 60000;
  return diffMinutes <= 15;
}

function getTimestampMillis(ts) {
  if (!ts) return 0;
  const date = new Date(ts);
  const time = date.getTime();
  return Number.isNaN(time) ? 0 : time;
}

function getUserActivityAt(user) {
  return [user.lastSeenAt, user.updatedAt, user.lastSolvedAt]
    .filter(Boolean)
    .reduce(
      (latest, current) => getTimestampMillis(current) > getTimestampMillis(latest) ? current : latest,
      null
    );
}

function getInitials(name, email) {
  if (name && name.trim().length > 0) {
    const parts = name.trim().split(' ');
    if (parts.length > 1) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  if (email && email.trim().length > 0) {
    return email.substring(0, 2).toUpperCase();
  }
  return '?';
}

const AdminUsers = ({ users, sheetTotals, segmentFilter, setSegmentFilter }) => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('totalSolved');
  const [filterOnline, setFilterOnline] = useState(false);
  const [filterActiveToday, setFilterActiveToday] = useState(false);
  const [expandedUser, setExpandedUser] = useState(null);

  const getSolved = (u) => u.totalSolved || 0;
  const getSheetSolved = (u, sheetId) => u.sheetCounts?.[sheetId]?.solved || 0;

  // Filter and sort
  const filteredUsers = users
    .filter(u => {
      const q = search.toLowerCase();
      const matchesSearch = (u.displayName || '').toLowerCase().includes(q) || (u.email || '').toLowerCase().includes(q);

      const activityAt = getUserActivityAt(u);
      const isOnline = isOnlineRecently(activityAt);
      const activeToday = isSolvedToday(u.lastSolvedAt);

      if (filterOnline && !isOnline) return false;
      if (filterActiveToday && !activeToday) return false;

      // Segment filter from Overview tab
      if (segmentFilter) {
        const solved = getSolved(u);
        if (segmentFilter === 'power' && solved < 100) return false;
        if (segmentFilter === 'active' && (solved < 10 || solved >= 100)) return false;
        if (segmentFilter === 'starters' && (solved < 1 || solved >= 10)) return false;
        if (segmentFilter === 'ghosts' && solved > 0) return false;
      }

      return matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'totalSolved') return getSolved(b) - getSolved(a);
      if (sortBy === 'lastActiveAt') {
        return getTimestampMillis(getUserActivityAt(b)) - getTimestampMillis(getUserActivityAt(a));
      }
      return (a.displayName || '').localeCompare(b.displayName || '');
    });

  const exportCSV = () => {
    const headers = ['Name', 'Email', 'Total Solved', 'Last Active', 'Joined Date', 'Location'];
    const rows = filteredUsers.map(u => [
      `"${u.displayName || 'Anonymous'}"`,
      `"${u.email}"`,
      getSolved(u),
      `"${getUserActivityAt(u) ? new Date(getUserActivityAt(u)).toISOString() : 'Never'}"`,
      `"${u.createdAt ? new Date(u.createdAt).toISOString() : 'Unknown'}"`,
      `"${u.location || 'Unknown'}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8,"
      + headers.join(",") + "\n"
      + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "dsa_tracker_users.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2 className="admin-section-title">
          {segmentFilter ? `👥 Users (${segmentFilter.charAt(0).toUpperCase() + segmentFilter.slice(1)})` : '👥 All Users'}
        </h2>
        <div className="admin-controls" style={{ flexWrap: 'wrap' }}>
          <div className="admin-filter-toggles">
            <button
              className={`filter-toggle-btn ${filterOnline ? 'active' : ''}`}
              onClick={() => setFilterOnline(!filterOnline)}
            >
              🟢 Online Now
            </button>
            <button
              className={`filter-toggle-btn ${filterActiveToday ? 'active' : ''}`}
              onClick={() => setFilterActiveToday(!filterActiveToday)}
            >
              ✅ Active Today
            </button>
            {segmentFilter && (
              <button
                className="filter-toggle-btn"
                style={{ borderColor: '#ef4444', color: '#ef4444' }}
                onClick={() => setSegmentFilter('')}
              >
                Clear Segment ✖
              </button>
            )}
            <button
              className="filter-toggle-btn"
              onClick={exportCSV}
            >
              📥 Export CSV
            </button>
          </div>

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
            <option value="lastActiveAt">Sort: Recent Activity</option>
            <option value="name">Sort: Name A–Z</option>
          </select>
        </div>
      </div>

      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Status</th>
              <th>Total Solved</th>
              <th>Last Active</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((u, idx) => {
              const activityAt = getUserActivityAt(u);
              const isOnline = isOnlineRecently(activityAt);
              const activeToday = isSolvedToday(u.lastSolvedAt);
              const totalU = getSolved(u);
              const activityLevel = getActivityLevel(activityAt);
              const isExpanded = expandedUser === u.uid;

              // Rank medal
              let rankDisplay = `#${idx + 1}`;
              if (sortBy === 'totalSolved' && totalU > 0) {
                if (idx === 0) rankDisplay = '🥇';
                else if (idx === 1) rankDisplay = '🥈';
                else if (idx === 2) rankDisplay = '🥉';
              }

              return (
                <React.Fragment key={u.uid}>
                  <tr className={isOnline ? 'admin-row-online' : (activeToday ? 'admin-row-active' : '')}>
                    <td className="admin-rank-cell">{totalU > 0 || sortBy !== 'totalSolved' ? rankDisplay : '-'}</td>
                    <td>
                      <div className="admin-user-cell">
                        <div style={{ position: 'relative' }}>
                          <img
                            src={u.photoURL || 'invalid'}
                            alt=""
                            className="admin-avatar"
                            style={{ display: u.photoURL ? 'block' : 'none' }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              if (e.target.nextElementSibling) {
                                e.target.nextElementSibling.style.display = 'flex';
                              }
                            }}
                          />
                          <div
                            className="admin-avatar-placeholder"
                            style={{ display: u.photoURL ? 'none' : 'flex' }}
                          >
                            {getInitials(u.displayName, u.email)}
                          </div>
                          {isOnline && (
                            <div className="admin-online-indicator" title="Online now" />
                          )}
                        </div>
                        <div>
                          <div className="admin-user-name">{u.displayName || 'Anonymous'}</div>
                          <div className="admin-user-email">{u.email}</div>
                          {u.location && u.location !== 'Unknown' && (
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                              <span style={{ fontSize: '0.8rem' }}>🌍</span> {u.location}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      {isOnline ? (
                        <span className="admin-status-badge online">Online</span>
                      ) : activeToday ? (
                        <span className="admin-status-badge active-today">Active Today</span>
                      ) : (
                        <span className="admin-status-badge offline">Offline</span>
                      )}
                    </td>
                    <td className="admin-total-cell" style={{ fontSize: '1.2rem' }}>{totalU}</td>
                    <td className="admin-time-cell">
                      <span className={activityLevel.className}>{activityLevel.text}</span>
                    </td>
                    <td className="admin-time-cell">
                      {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'Unknown'}
                    </td>
                    <td>
                      <button
                        className="filter-toggle-btn"
                        onClick={() => setExpandedUser(isExpanded ? null : u.uid)}
                      >
                        {isExpanded ? 'Hide Sheets' : 'View Sheets'}
                      </button>
                    </td>
                  </tr>

                  {isExpanded && (
                    <tr style={{ background: 'var(--bg-color)' }}>
                      <td colSpan="7" style={{ padding: '1rem 2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                          {SHEETS.map(s => {
                            const solved = getSheetSolved(u, s.id);
                            const totalQ = sheetTotals[s.id] || 1;
                            const pct = Math.round((solved / totalQ) * 100);
                            return (
                              <div key={s.id} style={{ background: 'var(--surface-color)', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', minWidth: '150px' }}>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>{s.name}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: solved > 0 ? 'var(--primary-color)' : 'var(--text-secondary)' }}>
                                    {solved} / {totalQ}
                                  </span>
                                  <div style={{ flex: 1, height: '4px', background: 'var(--bg-color)', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{ width: `${pct}%`, height: '100%', background: 'linear-gradient(90deg, #8ab4f8, #3ddc84)' }}></div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
            {filteredUsers.length === 0 && (
              <tr><td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>No users found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;