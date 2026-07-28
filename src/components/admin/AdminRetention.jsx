import React from 'react';

const AdminRetention = ({ cohorts }) => {
  if (!cohorts) return <div className="admin-loading"><div className="admin-spinner"></div></div>;

  return (
    <div className="admin-section">
      <h2 className="admin-section-title">Retention by Cohort</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        Percentage of users from each signup month who have been active in the last 30 days.
      </p>

      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Cohort Month</th>
              <th>Cohort Size</th>
              <th>Active (Last 30d)</th>
              <th>Retention %</th>
            </tr>
          </thead>
          <tbody>
            {cohorts.map((c, i) => {
              const monthStr = new Date(c.cohort_month).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
              return (
                <tr key={i}>
                  <td style={{ fontWeight: 600 }}>{monthStr}</td>
                  <td>{c.cohort_size} users</td>
                  <td>{c.active_count} users</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontWeight: 600, width: '40px' }}>{c.retention_pct}%</span>
                      <div style={{ flex: 1, height: '6px', background: 'var(--bg-color)', borderRadius: '3px', overflow: 'hidden', minWidth: '100px' }}>
                        <div style={{ width: `${c.retention_pct}%`, height: '100%', background: 'linear-gradient(90deg, #8ab4f8, #3ddc84)' }}></div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
            {cohorts.length === 0 && (
              <tr><td colSpan="4" style={{ textAlign: 'center' }}>No cohort data available.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRetention;