import React from 'react';
import { SHEETS } from '../utils/dataParser';
import { Book, Layout } from 'lucide-react';

const Sidebar = ({ activeSheet, setActiveSheet, showDashboard, setShowDashboard }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Progress Overview</div>
      <ul className="sheet-list" style={{ marginBottom: '2rem' }}>
        <li 
          className={`sheet-item ${showDashboard ? 'active' : ''}`}
          onClick={() => setShowDashboard(true)}
        >
          <Layout size={18} /> Combined
        </li>
      </ul>

      <div className="sidebar-title">DSA Sheets</div>
      <ul className="sheet-list">
        {SHEETS.map(sheet => (
          <li 
            key={sheet.id}
            className={`sheet-item ${(!showDashboard && activeSheet === sheet.id) ? 'active' : ''}`}
            onClick={() => {
              setActiveSheet(sheet.id);
              setShowDashboard(false);
            }}
          >
            <Book size={18} /> {sheet.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
