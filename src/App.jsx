import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { ProgressProvider } from './context/ProgressContext'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import SheetView from './components/SheetView'
import Dashboard from './components/Dashboard'

function App() {
  const [activeSheet, setActiveSheet] = useState('a2z_flawless')
  const [showDashboard, setShowDashboard] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <ThemeProvider>
      <AuthProvider>
        <ProgressProvider>
          <div className="app-container">
            <Header setShowDashboard={setShowDashboard} />
            <div className="main-layout">
              <Sidebar 
                activeSheet={activeSheet} 
                setActiveSheet={setActiveSheet} 
                showDashboard={showDashboard}
                setShowDashboard={setShowDashboard}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <main className="main-content" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1 }}>
                  {showDashboard ? (
                    <Dashboard setActiveSheet={setActiveSheet} setShowDashboard={setShowDashboard} />
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
