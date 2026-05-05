import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { ProgressProvider } from './context/ProgressContext'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import SheetView from './components/SheetView'
import Dashboard from './components/Dashboard'
import AdminDashboard from './components/AdminDashboard'

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return isMobile;
};

function App() {
  const isMobile = useIsMobile();
  const [activeSheet, setActiveSheet] = useState('a2z_flawless')
  const [showDashboard, setShowDashboard] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)
  // Desktop: sidebar open by default; Mobile: always use overlay
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 768)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  // Close mobile sidebar when a sheet is selected
  const handleSetActiveSheet = (id) => {
    setActiveSheet(id)
    setMobileSidebarOpen(false)
  }

  const handleSetShowDashboard = (v) => {
    setShowDashboard(v)
    setShowAdmin(false)
    setMobileSidebarOpen(false)
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <ProgressProvider>
          <div className="app-container">
            <Header
              setShowDashboard={handleSetShowDashboard}
              setShowAdmin={(v) => { setShowAdmin(v); setShowDashboard(false); }}
              mobileSidebarOpen={mobileSidebarOpen}
              setMobileSidebarOpen={setMobileSidebarOpen}
            />
            <div className="main-layout">
              {/* Mobile sidebar overlay backdrop */}
              {mobileSidebarOpen && (
                <div
                  onClick={() => setMobileSidebarOpen(false)}
                  style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 199,
                    background: 'rgba(0,0,0,0.55)',
                    backdropFilter: 'blur(2px)',
                    WebkitBackdropFilter: 'blur(2px)',
                  }}
                />
              )}

              <Sidebar
                activeSheet={activeSheet}
                setActiveSheet={handleSetActiveSheet}
                showDashboard={showDashboard}
                setShowDashboard={handleSetShowDashboard}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                mobileSidebarOpen={mobileSidebarOpen}
                setMobileSidebarOpen={setMobileSidebarOpen}
              />

              <main className="main-content" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1 }}>
                  {showAdmin ? (
                    <AdminDashboard />
                  ) : showDashboard ? (
                    <Dashboard setActiveSheet={handleSetActiveSheet} setShowDashboard={handleSetShowDashboard} />
                  ) : (
                    <SheetView activeSheet={activeSheet} />
                  )}
                </div>
                <footer style={{
                  textAlign: 'center',
                  paddingTop: '1.5rem',
                  marginTop: '4rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  borderTop: '1px solid var(--border-color)',
                  opacity: 0.8
                }}>
                  Created for educational purposes only - we respect creators and do not support piracy or unauthorized use of copyrighted content.
                </footer>
              </main>
            </div>
          </div>
        </ProgressProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
