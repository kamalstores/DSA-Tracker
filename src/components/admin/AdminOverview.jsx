import React from 'react';
import { SHEETS } from '../../utils/dataParser';

const StatCard = ({ value, label, color }) => (
  <div className="admin-stat-card" style={{ borderTopColor: color }}>
    <div className="admin-stat-value" style={{ color }}>{value}</div>
    <div className="admin-stat-label">{label}</div>
  </div>
);

const BarChart = ({ data, color = '#8ab4f8', maxValue, emptyLabel = 'No data available' }) => {
  if (!data || data.length === 0) return <div className="admin-no-data">{emptyLabel}</div>;

  const chartMax = maxValue || Math.max(...data.map((item) => item.value), 1);

  return (
    <div className="admin-bar-chart" role="img" aria-label="Bar chart">
      {data.map((item) => {
        const height = `${Math.max((item.value / chartMax) * 100, item.value > 0 ? 4 : 0)}%`;
        return (
          <div className="admin-bar-column" key={item.id} title={`${item.label}: ${item.displayValue ?? item.value}`}>
            <div className="admin-bar-value">{item.displayValue ?? item.value}</div>
            <div className="admin-bar-track">
              <div className="admin-bar-fill" style={{ height, background: color }} />
            </div>
            <div className="admin-bar-label">{item.label}</div>
            {item.secondary && <div className="admin-bar-secondary">{item.secondary}</div>}
          </div>
        );
      })}
    </div>
  );
};

const ActivityTrendChart = ({ data }) => (
  <BarChart
    color="#8ab4f8"
    data={(data || []).map((item) => ({
      id: item.activity_date,
      label: new Date(item.activity_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: Number(item.total_solves) || 0,
    }))}
  />
);

const AdminOverview = ({ users, activityTrend, activeUserStats }) => {
  const getSheetSolved = (user, sheetId) => user.sheetCounts?.[sheetId]?.solved || 0;
  const totalStudents = users.length;
  const sheetStats = SHEETS.map((sheet) => {
    const startedCount = users.reduce(
      (count, user) => count + (getSheetSolved(user, sheet.id) > 0 ? 1 : 0),
      0
    );
    const startedPct = totalStudents ? (startedCount / totalStudents) * 100 : 0;
    return {
      id: sheet.id,
      label: sheet.name,
      value: startedPct,
      displayValue: startedCount,
      secondary: `${startedPct.toFixed(1)}% of users`,
    };
  });

  return (
    <>
      <div className="admin-section">
        <h2 className="admin-section-title">Problems Solved Per Day (Current Month)</h2>
        <ActivityTrendChart data={activityTrend} />
      </div>

      <div className="admin-section">
        <h2 className="admin-section-title">Active Users</h2>
        <div className="admin-stats-grid admin-stats-grid-active">
          <StatCard value={activeUserStats?.dau ?? 0} label="Daily Active Users" color="#8ab4f8" />
          <StatCard value={activeUserStats?.wau ?? 0} label="Weekly Active Users" color="#3ddc84" />
          <StatCard value={activeUserStats?.mau ?? 0} label="Monthly Active Users" color="#f59e0b" />
        </div>
      </div>

      <div className="admin-section">
        <h2 className="admin-section-title">Sheet Participation</h2>
        <BarChart color="#8ab4f8" maxValue={100} data={sheetStats} />
      </div>
    </>
  );
};

export default AdminOverview;
