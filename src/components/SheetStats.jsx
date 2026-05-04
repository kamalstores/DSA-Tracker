import React from 'react';
import { BookOpen, CheckCircle2, TrendingUp, Flame } from 'lucide-react';

const SheetStats = ({ stats }) => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <BookOpen className="stat-icon" style={{color: '#3b82f6'}} />
        <div className="stat-value">{stats.total}</div>
        <div className="stat-label">Total Problems</div>
      </div>
      
      <div className="stat-card">
        <CheckCircle2 className="stat-icon" style={{color: 'var(--primary-color)'}} />
        <div className="stat-value">{stats.completed}</div>
        <div className="stat-label">Completed</div>
      </div>
      
      <div className="stat-card">
        <TrendingUp className="stat-icon" style={{color: '#a855f7'}} />
        <div className="stat-value">{stats.percentage}%</div>
        <div className="stat-label">Progress</div>
      </div>
    </div>
  );
};

export default SheetStats;
