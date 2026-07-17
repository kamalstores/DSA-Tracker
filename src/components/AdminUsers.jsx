import React, { useState } from 'react';
import { SHEETS } from '../utils/dataParser';

// Duplicated simple utils for AdminUsers
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
  neetcode250: 250,
  striver_cp: 297
};

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
  return diffMinutes <= 15;
}

function getTimestampMillis(ts) {
  if (!ts) return 0;
  const date = ts.toDate ? ts.toDate() : new Date(ts);
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

const AdminUsers = ({ users, getSolved, getSheetSolved, sheetTotals }) => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('totalSolved');
  const [filterOnline, setFilterOnline] = useState(false);
  const [filterActiveToday, setFilterActiveToday] = useState(false);

  // Filter and sort
  const filteredUsers = users
    .filter(u => {
      const q = search.toLowerCase();
      const matchesSearch = (u.displayName || '').toLowerCase().includes(q) || (u.email || '').toLowerCase().includes(q);
      
      const isOnline = isOnlineRecently(getUserActivityAt(u));
      const activeToday = isSolvedToday(u.lastSolvedAt);

      if (filterOnline && !isOnline) return false;
      if (filterActiveToday && !activeToday) return false;
      return matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'totalSolved') return getSolved(b) - getSolved(a);
      if (sortBy === 'lastActiveAt') {
        return getTimestampMillis(getUserActivityAt(b)) - getTimestampMillis(getUserActivityAt(a));
      }
      return (a.displayName || '').localeCompare(b.displayName || '');
    });

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2 className="admin-section-title">👤 All Users</h2>
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
              {SHEETS.map(s => <th key={s.id}>{s.name}</th>)}
              <th>Total</th>
              <th>Last Active</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((u, idx) => {
              const activityAt = getUserActivityAt(u);
              const isOnline = isOnlineRecently(activityAt);
              const activeToday = isSolvedToday(u.lastSolvedAt);
              const totalU = getSolved(u);
              const activityLevel = getActivityLevel(activityAt);
              
              // Rank medal
              let rankDisplay = `#${idx + 1}`;
              if (sortBy === 'totalSolved' && totalU > 0) {
                if (idx === 0) rankDisplay = '🥇';
                else if (idx === 1) rankDisplay = '🥈';
                else if (idx === 2) rankDisplay = '🥉';
              }

              return (
                <tr key={u.uid} className={isOnline ? 'admin-row-online' : (activeToday ? 'admin-row-active' : '')}>
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
                  {SHEETS.map(s => {
                    const solved = getSheetSolved(u, s.id);
                    // Live totals from the sheets table; hardcoded map is only a fallback.
                    const totalQ = (sheetTotals && sheetTotals[s.id]) || SHEET_TOTALS[s.id] || 1;
                    const pct = Math.round((solved / totalQ) * 100);
                    return (
                      <td key={s.id} className="admin-sheet-cell">
                        {solved > 0 ? (
                          <div className="admin-table-progress">
                            <div className="admin-table-progress-text">
                              <span className="admin-solved-badge">{solved}</span>
                              <span className="admin-table-progress-pct">{pct}%</span>
                            </div>
                            <div className="admin-table-progress-bar">
                              <div className="admin-table-progress-fill" style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                        ) : (
                          <span className="admin-zero">—</span>
                        )}
                      </td>
                    );
                  })}
                  <td className="admin-total-cell">{totalU}</td>
                  <td className="admin-time-cell">
                    <span className={activityLevel.className}>{activityLevel.text}</span>
                  </td>
                </tr>
              );
            })}
            {filteredUsers.length === 0 && (
              <tr><td colSpan={SHEETS.length + 5} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>No users found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
