import React, { useState } from 'react';
import { SHEETS } from '../../utils/dataParser';

const StatCard = ({ value, label, color }) => (
  <div className="admin-stat-card" style={{ borderTopColor: color }}>
    <div className="admin-stat-value" style={{ color }}>{value}</div>
    <div className="admin-stat-label">{label}</div>
  </div>
);

// Simple SVG Line Chart for Activity Trend, with a hover tooltip that shows
// the exact date/value for the point under the cursor.
const ActivityTrendChart = ({ data }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  if (!data || data.length === 0) return <div className="admin-no-data">No data available</div>;

  const maxVal = Math.max(...data.map(d => Number(d.total_solves)), 1);
  const minVal = 0;

  const width = 800;
  const height = 200;
  const padding = 20;

  const getX = (index) => padding + (index * (width - 2 * padding) / Math.max(data.length - 1, 1));
  const getY = (val) => height - padding - ((val - minVal) / (maxVal - minVal)) * (height - 2 * padding);

  const points = data.map((d, i) => `${getX(i)},${getY(Number(d.total_solves))}`).join(' ');

  const hovered = hoverIndex !== null ? data[hoverIndex] : null;
  const tooltipLeftPct = hovered ? Math.min(95, Math.max(5, (getX(hoverIndex) / width) * 100)) : 0;
  const tooltipTopPx = hovered ? getY(Number(hovered.total_solves)) : 0;

  return (
    // No overflow set here on purpose — `overflowX: auto` on a child forces
    // its own overflowY to `auto` too (per the CSS overflow spec), which was
    // clipping the tooltip whenever a point sat near the top of the chart.
    // Reserve space above the chart instead, so the tooltip always has room.
    <div style={{ width: '100%', position: 'relative', paddingTop: '3rem' }}>
      <div className="admin-chart-container" style={{ width: '100%', overflowX: 'auto', paddingBottom: '1rem' }}>
        <svg viewBox={`0 0 ${width} ${height}`} style={{ minWidth: '600px', width: '100%', height: '200px' }}>
          {/* Y-axis lines */}
          <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="var(--border-color)" strokeWidth="1" strokeDasharray="4" />
          <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="var(--border-color)" strokeWidth="1" strokeDasharray="4" />
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="var(--border-color)" strokeWidth="1" />

          {/* Data Line */}
          <polyline points={points} fill="none" stroke="#8ab4f8" strokeWidth="3" strokeLinejoin="round" />

          {/* Vertical guide for the hovered point */}
          {hovered && (
            <line
              x1={getX(hoverIndex)} y1={padding} x2={getX(hoverIndex)} y2={height - padding}
              stroke="var(--border-color)" strokeWidth="1" strokeDasharray="3"
            />
          )}

          {/* Data Points, with a larger invisible hit area so hover is easy to trigger */}
          {data.map((d, i) => (
            <g key={i}>
              <circle
                cx={getX(i)}
                cy={getY(Number(d.total_solves))}
                r="12"
                fill="transparent"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex((cur) => (cur === i ? null : cur))}
              />
              <circle
                cx={getX(i)}
                cy={getY(Number(d.total_solves))}
                r={hoverIndex === i ? 6 : 4}
                fill={hoverIndex === i ? '#8ab4f8' : '#3ddc84'}
                style={{ pointerEvents: 'none', transition: 'r 0.1s ease' }}
              />
            </g>
          ))}
        </svg>
      </div>

      {hovered && (
        <div
          style={{
            position: 'absolute',
            left: `${tooltipLeftPct}%`,
            // 48px accounts for the paddingTop reserved above, so this lines
            // up with the point's actual pixel position inside the SVG.
            top: `${48 + tooltipTopPx}px`,
            transform: 'translate(-50%, calc(-100% - 10px))',
            background: 'var(--surface-color, #1f2937)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            padding: '0.4rem 0.6rem',
            fontSize: '0.8rem',
            color: 'var(--text-primary)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            zIndex: 10,
          }}
        >
          <strong>{hovered.total_solves}</strong> solves
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.7rem' }}>
            {new Date(hovered.activity_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
        </div>
      )}
    </div>
  );
};

const AdminOverview = ({
  users,
  activityTrend,
  activeUserStats
}) => {
  const getSolved = (u) => u.totalSolved || 0;
  const getSheetSolved = (u, sheetId) => u.sheetCounts?.[sheetId]?.solved || 0;

  const sheetStats = {};
  let maxCompletionPct = 1;
  SHEETS.forEach((s) => {
    let totalSolvesInSheet = 0;
    let uniqueUsersInSheet = 0;
    users.forEach((u) => {
      const solved = getSheetSolved(u, s.id);
      if (solved > 0) { uniqueUsersInSheet++; totalSolvesInSheet += solved; }
    });
    
    // Started vs Total students
    const startedCount = uniqueUsersInSheet;
    const totalStudents = users.length;
    const startedPct = totalStudents > 0 ? (startedCount / totalStudents) * 100 : 0;
    if (startedPct > maxCompletionPct) maxCompletionPct = startedPct;
    sheetStats[s.id] = { startedCount, totalStudents, startedPct, totalSolvesInSheet };
  });



  return (
    <>
      <div className="admin-section">
        <h2 className="admin-section-title">Activity Trend (Last 30 Days)</h2>
        <ActivityTrendChart data={activityTrend} />
      </div>

      <div className="admin-section">
        <h2 className="admin-section-title">Active Users</h2>
        <div className="admin-stats-grid">
          <StatCard value={activeUserStats?.dau ?? 0} label="Daily Active Users" color="#8ab4f8" />
          <StatCard value={activeUserStats?.wau ?? 0} label="Weekly Active Users" color="#3ddc84" />
          <StatCard value={activeUserStats?.mau ?? 0} label="Monthly Active Users" color="#f59e0b" />
        </div>
      </div>



      <div className="admin-section">
        <h2 className="admin-section-title">Sheet Participation</h2>
        <div className="admin-topic-chart">
          {SHEETS.map((s) => {
            const stats = sheetStats[s.id] || { startedCount: 0, totalStudents: users.length, startedPct: 0 };
            const relativePct = maxCompletionPct > 0 ? (stats.startedPct / maxCompletionPct) * 100 : 0;
            return (
              <div key={s.id} className="admin-topic-row">
                <div className="admin-topic-name-wrap">
                  <span className="admin-topic-name">{s.name}</span>
                </div>
                <div className="admin-topic-bar-track">
                  <div className="admin-topic-bar-fill" style={{ width: `${relativePct}%`, background: 'var(--primary-color)' }} />
                </div>
                <span className="admin-topic-count">
                  {stats.startedCount} / {stats.totalStudents} users ({stats.startedPct.toFixed(1)}%)
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdminOverview;