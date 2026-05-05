import React, { useState, useRef } from 'react';
import { SHEETS } from '../utils/dataParser';
import { Book, Layout, GripVertical, ChevronDown, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

const STORAGE_KEY = 'dsa_sheet_order';

const getSavedOrder = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const ids = JSON.parse(saved);
      const ordered = ids.map(id => SHEETS.find(s => s.id === id)).filter(Boolean);
      const remaining = SHEETS.filter(s => !ids.includes(s.id));
      return [...ordered, ...remaining];
    }
  } catch { }
  return SHEETS;
};

const Sidebar = ({
  activeSheet,
  setActiveSheet,
  showDashboard,
  setShowDashboard,
  sidebarOpen,
  setSidebarOpen
}) => {
  const [sheets, setSheets] = useState(getSavedOrder);
  const [sheetsOpen, setSheetsOpen] = useState(true);
  const dragIndex = useRef(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleDragStart = (index) => { dragIndex.current = index; };
  const handleDragOver = (e, index) => { e.preventDefault(); setDragOverIndex(index); };
  const handleDragEnd = () => { dragIndex.current = null; setDragOverIndex(null); };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const from = dragIndex.current;
    if (from === null || from === dropIndex) { setDragOverIndex(null); return; }
    const reordered = [...sheets];
    const [moved] = reordered.splice(from, 1);
    reordered.splice(dropIndex, 0, moved);
    setSheets(reordered);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reordered.map(s => s.id)));
    dragIndex.current = null;
    setDragOverIndex(null);
  };

  return (
    <aside className={`sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: sidebarOpen ? 'space-between' : 'center',
        padding: '0 1rem 1rem',
        borderBottom: sidebarOpen ? '1px solid var(--border-color)' : 'none',
        marginBottom: '1rem'
      }}>
        {sidebarOpen && <div className="sidebar-title" style={{ padding: 0, margin: 0 }}>Menu</div>}
        <button
          className="sidebar-toggle-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{ position: 'static', transform: 'none' }}
          title={sidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
        >
          {sidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
        </button>
      </div>

      <div className="sidebar-title">Progress Overview</div>
      <ul className="sheet-list" style={{ marginBottom: '2rem' }}>
        <li
          className={`sheet-item ${showDashboard ? 'active' : ''}`}
          onClick={() => setShowDashboard(true)}
        >
          <Layout size={18} /> Combined
        </li>
      </ul>

      {/* Collapsible DSA Sheets header */}
      <div
        className="sidebar-title"
        onClick={() => setSheetsOpen(o => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          userSelect: 'none',
          paddingRight: '1.5rem',
        }}
      >
        <span>DSA Sheets</span>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '20px',
          height: '20px',
          borderRadius: '4px',
          background: 'var(--surface-hover)',
          transition: 'transform 0.25s ease',
          transform: sheetsOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
        }}>
          <ChevronDown size={14} />
        </span>
      </div>

      {/* Animated sheet list */}
      <ul
        className="sheet-list"
        style={{
          maxHeight: sheetsOpen ? `${sheets.length * 60}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {sheets.map((sheet, index) => (
          <li
            key={sheet.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
            className={`sheet-item ${(!showDashboard && activeSheet === sheet.id) ? 'active' : ''}`}
            onClick={() => { setActiveSheet(sheet.id); setShowDashboard(false); }}
            style={{
              opacity: dragIndex.current === index ? 0.4 : 1,
              borderTop: dragOverIndex === index && dragIndex.current !== index
                ? '2px solid var(--primary-color)'
                : '2px solid transparent',
              transition: 'border-color 0.15s, opacity 0.15s',
              cursor: 'grab',
            }}
          >
            <GripVertical size={16} style={{ opacity: 0.35, flexShrink: 0, cursor: 'grab' }} />
            <Book size={18} style={{ flexShrink: 0 }} />
            <span>{sheet.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
