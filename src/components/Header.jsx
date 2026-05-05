import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import { Sun, Moon, LogIn, LogOut, LayoutDashboard, ShieldCheck } from 'lucide-react';

// Must match the ADMIN_UID in AdminDashboard.jsx
const ADMIN_UID = 'JROhXIAevXfsMos9qTTXcpf92vD2';

const Header = ({ setShowDashboard, setShowAdmin }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(AuthContext);
  const isAdmin = user && user.uid === ADMIN_UID;

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo" onClick={() => setShowDashboard(false)}>Master DSA</div>
      </div>
      <div className="header-right">
        <a href="https://www.chai4.me/kamalsharma" target="_blank" rel="noreferrer" className="btn-secondary">
          Support Developer
        </a>

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
  );
};

export default Header;
