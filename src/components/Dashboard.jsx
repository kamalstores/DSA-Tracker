import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ProgressContext } from '../context/ProgressContext';
import { SHEETS, fetchAndParseSheet } from '../utils/dataParser';

const Dashboard = ({ setActiveSheet, setShowDashboard }) => {
  const { user } = useContext(AuthContext);
  const { progress } = useContext(ProgressContext);

  const [selectedSheets, setSelectedSheets] = useState(() => SHEETS.map(s => s.id));
  const [sheetTotals, setSheetTotals] = useState({});

  useEffect(() => {
    const loadTotals = async () => {
      const totals = {};
      for (const s of SHEETS) {
        const parsed = await fetchAndParseSheet(s.id);
        totals[s.id] = parsed ? parsed.totalQuestions : 0;
      }
      setSheetTotals(totals);
    };
    loadTotals();
  }, []);

  const toggleSheet = (sheetId) => {
    setSelectedSheets(prev => {
      if (prev.includes(sheetId)) return prev.filter(id => id !== sheetId);
      return [...prev, sheetId];
    });
  };

  if (!user) {
    return (
      <div className="dashboard-empty">
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Combined Progress</h1>
        <p>Please sign in to view your combined progress and dashboard.</p>
      </div>
    );
  }

  // Calculate combined stats
  let totalDone = 0;
  let totalRevise = 0;
  let totalQuestions = 0;

  selectedSheets.forEach(sheetId => {
    const sheetProgress = progress[sheetId] || {};
    Object.values(sheetProgress).forEach(q => {
      if (q.status) totalDone++;
      if (q.revision) totalRevise++;
    });
    totalQuestions += (sheetTotals[sheetId] || 0);
  });

  const progressPercentage = totalQuestions === 0 ? 0 : Math.round((totalDone / totalQuestions) * 100);

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Combined Progress</h1>

      <div className="dashboard-profile" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <img src={user.photoURL} alt="Profile" className="profile-img" />
        <div className="profile-info">
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>
              {totalDone} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/ {totalQuestions}</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Solved</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--revision-color)' }}>{totalRevise}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>To Revise</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#3b82f6' }}>{progressPercentage}%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Progress</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>{SHEETS.filter(s => Object.values(progress[s.id] || {}).some(q => q.status)).length}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sheets Started</div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Select Sheets to Combine Progress</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {SHEETS.map(sheet => (
            <label key={sheet.id} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 1rem', background: 'var(--surface-color)',
              borderRadius: '0.5rem', border: '1px solid var(--border-color)',
              cursor: 'pointer', transition: 'background-color 0.2s'
            }} className="filter-tab">
              <input
                type="checkbox"
                checked={selectedSheets.includes(sheet.id)}
                onChange={() => toggleSheet(sheet.id)}
                style={{ accentColor: 'var(--primary-color)', width: '1.2rem', height: '1.2rem' }}
              />
              <span style={{ fontWeight: 600 }}>{sheet.name}</span>
            </label>
          ))}
        </div>
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Individual Sheet Reports</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {SHEETS.map(sheet => {
          const sheetProgress = progress[sheet.id] || {};
          let done = 0;
          let revise = 0;
          Object.values(sheetProgress).forEach(q => {
            if (q.status) done++;
            if (q.revision) revise++;
          });
          const totalQ = sheetTotals[sheet.id] || 0;

          return (
            <div
              key={sheet.id}
              className="sheet-report-card"
              style={{ cursor: 'pointer', opacity: selectedSheets.includes(sheet.id) ? 1 : 0.5 }}
              onClick={() => {
                setActiveSheet(sheet.id);
                setShowDashboard(false);
              }}
            >
              <div className="sheet-report-header">
                <h3>{sheet.name}</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{done} / {totalQ} Solved</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                    <span>Done</span>
                    <span style={{ color: 'var(--primary-color)' }}>{done}</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: totalQ ? `${Math.min(100, (done / totalQ) * 100)}%` : '0%', backgroundColor: 'var(--primary-color)' }}></div>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                    <span>Revise</span>
                    <span style={{ color: 'var(--revision-color)' }}>{revise}</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: totalQ ? `${Math.min(100, (revise / totalQ) * 100)}%` : '0%', backgroundColor: 'var(--revision-color)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
