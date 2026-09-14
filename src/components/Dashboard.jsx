import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ProgressContext } from '../context/ProgressContext';
import { SHEETS, fetchAndParseSheet } from '../utils/dataParser';

const Dashboard = ({ setActiveSheet, setShowDashboard }) => {
  const { user } = useContext(AuthContext);
  const { progress, loadingCloud } = useContext(ProgressContext);

  const [sheetTotals, setSheetTotals] = useState({});
  const [sheetValidIds, setSheetValidIds] = useState({});
  const [viewMode, setViewMode] = useState('mine'); // 'mine' or 'all'
  const hasLoadedProgress = Object.values(progress || {}).some(sheet => Object.keys(sheet || {}).length > 0);

  useEffect(() => {
    const loadTotals = async () => {
      const totals = {};
      const validIds = {};
      for (const s of SHEETS) {
        const parsed = await fetchAndParseSheet(s.id);
        totals[s.id] = parsed ? parsed.totalQuestions : 0;
        validIds[s.id] = parsed ? new Set(parsed.questionIds) : new Set();
      }
      setSheetTotals(totals);
      setSheetValidIds(validIds);
    };
    loadTotals();
  }, []);

  if (!user) {
    return (
      <div className="dashboard-empty">
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Combined Progress</h1>
        <p>Please sign in to view your combined progress and dashboard.</p>
      </div>
    );
  }

  if (loadingCloud && !hasLoadedProgress) {
    return (
      <div className="dashboard-empty">
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Combined Progress</h1>
        <p>Loading your saved progress...</p>
      </div>
    );
  }

  let totalDone = 0;
  let totalRevise = 0;
  let totalQuestions = 0;

  SHEETS.forEach(sheet => {
    const sheetProgress = progress[sheet.id] || {};
    const validSet = sheetValidIds[sheet.id] || new Set();
    let doneInSheet = 0;
    let reviseInSheet = 0;
    
    Object.entries(sheetProgress).forEach(([qId, q]) => {
      if (!validSet.has(String(qId))) return; // Ignore ghost questions completely
      if (q.status) doneInSheet++;
      if (q.revision) reviseInSheet++;
    });
    
    if (doneInSheet > 0) {
      totalDone += doneInSheet;
      totalRevise += reviseInSheet;
      totalQuestions += (sheetTotals[sheet.id] || 0);
    }
  });

  const progressPercentage = totalQuestions === 0 ? 0 : Number(((totalDone / totalQuestions) * 100).toFixed(4));

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Combined Progress</h1>

      <div className="dashboard-profile" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <img src={user.photoURL} alt="Profile" className="profile-img" />
        <div className="profile-info">
          <h2>{user.displayName}</h2>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>{user.email}</div>
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



      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Individual Sheet Reports</h2>
        <div style={{ display: 'flex', background: 'var(--surface-color)', borderRadius: '0.5rem', padding: '0.25rem', border: '1px solid var(--border-color)' }}>
          <button
            onClick={() => setViewMode('mine')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.35rem',
              border: 'none',
              background: viewMode === 'mine' ? 'var(--primary-color)' : 'transparent',
              color: viewMode === 'mine' ? '#fff' : 'var(--text-secondary)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Mine
          </button>
          <button
            onClick={() => setViewMode('all')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.35rem',
              border: 'none',
              background: viewMode === 'all' ? 'var(--primary-color)' : 'transparent',
              color: viewMode === 'all' ? '#fff' : 'var(--text-secondary)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            All Sheets
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {(() => {
          let displaySheets = SHEETS.map(sheet => {
            const sheetProgress = progress[sheet.id] || {};
            const validSet = sheetValidIds[sheet.id] || new Set();
            let done = 0;
            let revise = 0;
            Object.entries(sheetProgress).forEach(([qId, q]) => {
              if (!validSet.has(String(qId))) return;
              if (q.status) done++;
              if (q.revision) revise++;
            });
            const totalQ = sheetTotals[sheet.id] || 0;
            const percentage = totalQ === 0 ? 0 : Number(((done / totalQ) * 100).toFixed(4));
            return { ...sheet, done, revise, totalQ, percentage };
          });

          if (viewMode === 'mine') {
            displaySheets = displaySheets.filter(s => s.done > 0);
          }

          displaySheets.sort((a, b) => {
            if (b.percentage !== a.percentage) {
              return b.percentage - a.percentage;
            }
            return a.name.localeCompare(b.name);
          });

          if (viewMode === 'mine' && displaySheets.length === 0) {
            return (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', background: 'var(--surface-color)', borderRadius: '0.75rem', border: '1px dashed var(--border-color)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>You haven't started any sheets yet</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Switch to "All Sheets" or select a sheet from the sidebar to start your journey.</p>
              </div>
            );
          }

          return displaySheets.map(sheet => (
            <div
              key={sheet.id}
              className="sheet-report-card"
              style={{ cursor: 'pointer', opacity: 1 }}
              onClick={() => {
                setActiveSheet(sheet.id);
                setShowDashboard(false);
              }}
            >
              <div className="sheet-report-header">
                <h3>{sheet.name}</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{sheet.done} / {sheet.totalQ} Solved</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                    <span>Done</span>
                    <span style={{ color: 'var(--primary-color)' }}>{sheet.done}</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: `${Math.min(100, sheet.percentage)}%`, backgroundColor: 'var(--primary-color)' }}></div>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                    <span>Revise</span>
                    <span style={{ color: 'var(--revision-color)' }}>{sheet.revise}</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: sheet.totalQ ? `${Math.min(100, (sheet.revise / sheet.totalQ) * 100)}%` : '0%', backgroundColor: 'var(--revision-color)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ));
        })()}
      </div>
    </div>
  );
};

export default Dashboard;
