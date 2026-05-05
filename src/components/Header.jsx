import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import { Sun, Moon, LogIn, LogOut, LayoutDashboard, ShieldCheck, X } from 'lucide-react';

// Must match the ADMIN_UID in AdminDashboard.jsx
const ADMIN_UID = 'JROhXIAevXfsMos9qTTXcpf92vD2';

/* ─── Support Modal ──────────────────────────────────────────── */
const SupportModal = ({ onClose }) => {
  const go = (url) => { window.open(url, '_blank', 'noreferrer'); onClose(); };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 3000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'modal-fade-in 0.2s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--surface-color)',
          border: '1px solid var(--border-color)',
          borderRadius: '1.25rem',
          padding: '2rem 2.25rem',
          maxWidth: '380px',
          width: '90%',
          boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
          animation: 'modal-pop 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'transparent', border: 'none',
          color: 'var(--text-secondary)', cursor: 'pointer',
          display: 'flex', padding: '0.25rem', borderRadius: '50%',
        }}>
          <X size={18} />
        </button>

        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>❤️</div>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
          Support the Developer
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          This tracker is free forever. If it helped you prep, consider supporting! First — where are you from?
        </p>

        {/* Location choice */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <button
            onClick={() => go('https://www.chai4.me/kamalsharma')}
            style={{
              flex: 1, padding: '0.85rem 0.5rem',
              borderRadius: '0.75rem', border: '2px solid var(--border-color)',
              background: 'var(--surface-hover)', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
              transition: 'all 0.2s', color: 'var(--text-primary)',
              fontWeight: 700, fontSize: '0.9rem',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.background = 'rgba(249,115,22,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.background = 'var(--surface-hover)'; }}
          >
            <span style={{ fontSize: '1.75rem' }}>🇮🇳</span>
            <span>India</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>via chai4.me</span>
          </button>

          <button
            onClick={() => go('https://www.paypal.me/kamalsharma05')}
            style={{
              flex: 1, padding: '0.85rem 0.5rem',
              borderRadius: '0.75rem', border: '2px solid var(--border-color)',
              background: 'var(--surface-hover)', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
              transition: 'all 0.2s', color: 'var(--text-primary)',
              fontWeight: 700, fontSize: '0.9rem',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#0070ba'; e.currentTarget.style.background = 'rgba(0,112,186,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.background = 'var(--surface-hover)'; }}
          >
            <span style={{ fontSize: '1.75rem' }}>🌍</span>
            <span>Other Countries</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>via PayPal</span>
          </button>
        </div>

        <button onClick={onClose} style={{
          width: '100%', padding: '0.6rem',
          background: 'transparent', border: '1px solid var(--border-color)',
          borderRadius: '0.6rem', color: 'var(--text-secondary)',
          cursor: 'pointer', fontSize: '0.85rem', transition: 'all 0.2s',
        }}>
          Maybe later
        </button>
      </div>

      <style>{`
        @keyframes modal-fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modal-pop {
          from { transform: scale(0.88); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
      `}</style>
    </div>
  );
};

/* ─── Header ─────────────────────────────────────────────────── */
const Header = ({ setShowDashboard, setShowAdmin }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(AuthContext);
  const isAdmin = user && user.uid === ADMIN_UID;
  const [showSupport, setShowSupport] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <div className="logo" onClick={() => setShowDashboard(false)}>Master DSA</div>
        </div>
        <div className="header-right">
          <button className="btn-secondary" onClick={() => setShowSupport(true)}>
            Support Developer
          </button>

          <button className="icon-btn" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {user ? (
            <>
              <button className="btn-secondary" onClick={() => setShowDashboard(true)}>
                <LayoutDashboard size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Dashboard
              </button>

              {/* Only visible to the admin */}
              {isAdmin && (
                <button
                  className="icon-btn"
                  onClick={() => setShowAdmin(true)}
                  title="Admin Dashboard"
                  id="header-admin-btn"
                >
                  <ShieldCheck size={20} />
                </button>
              )}

              <button className="btn-primary" onClick={logout} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <button className="btn-primary" onClick={login} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LogIn size={16} /> Sign In
            </button>
          )}
        </div>
      </header>

      {showSupport && <SupportModal onClose={() => setShowSupport(false)} />}
    </>
  );
};

export default Header;
