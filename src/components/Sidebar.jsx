import React, { useState, useRef, useEffect } from 'react';
import { SHEETS } from '../utils/dataParser';
import { Book, Layout, GripVertical, ChevronDown, PanelLeftClose, PanelLeftOpen, X, HelpCircle } from 'lucide-react';

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return isMobile;
};

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
  setSidebarOpen,
  mobileSidebarOpen,
  setMobileSidebarOpen,
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

  const isMobile = useIsMobile();
  const showSidebarLabels = sidebarOpen || isMobile;

  const sidebarContent = (
    <>
      {/* Top bar with title + close/toggle */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: sidebarOpen ? 'space-between' : 'center',
        padding: '0 1rem 1rem',
        borderBottom: '1px solid var(--border-color)',
        marginBottom: '1rem'
      }}>
        {sidebarOpen && <div className="sidebar-title" style={{ padding: 0, margin: 0 }}>Menu</div>}
        {/* Desktop collapse toggle — hidden on mobile */}
        <button
          className="sidebar-toggle-btn desktop-only"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{ position: 'static', transform: 'none' }}
          title={sidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
        >
          {sidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
        </button>
        {/* Mobile close button — hidden on desktop */}
        <button
          className="sidebar-toggle-btn mobile-only"
          onClick={() => setMobileSidebarOpen(false)}
          title="Close"
        >
          <X size={20} />
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

      <div className="sidebar-spacer" />
      <a
        className="sheet-item sidebar-help-link"
        href="https://www.reddit.com/user/a_shutterbug/"
        target="_blank"
        rel="noreferrer"
        title="Contact Developer"
      >
        <HelpCircle size={18} style={{ flexShrink: 0 }} />
        {showSidebarLabels && <span>Help / Contact</span>}
      </a>
    </>
  );

  // On mobile: render a slide-in overlay sidebar
  // On desktop: render the collapsible aside sidebar
  if (isMobile) {
    return (
      <>
        {/* Mobile slide-in overlay */}
        <aside
          style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            bottom: 0,
            width: '280px',
            zIndex: 200,
            background: 'var(--surface-color)',
            borderRight: '1px solid var(--border-color)',
            overflowY: 'auto',
            padding: '1.5rem 0',
            boxShadow: '4px 0 24px rgba(0,0,0,0.3)',
            transform: mobileSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {sidebarContent}
        </aside>
      </>
    );
  }

  // Desktop sidebar
  return (
    <aside className={`sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
      {sidebarContent}
    </aside>
  );
};

export default Sidebar;
