import React, { createContext, useState, useEffect } from 'react';

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  // stored as { [sheetId]: { [questionId]: { status: 'done' | 'revision' } } }
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('dsaTrackerProgress');
    if (stored) {
      setProgress(JSON.parse(stored));
    }
  }, []);

  const saveProgress = (newProgress) => {
    setProgress(newProgress);
    localStorage.setItem('dsaTrackerProgress', JSON.stringify(newProgress));
  };

  const updateQuestionStatus = (sheetId, questionId, status, isRevision = false) => {
    const newProgress = { ...progress };
    if (!newProgress[sheetId]) newProgress[sheetId] = {};
    
    if (!newProgress[sheetId][questionId]) {
      newProgress[sheetId][questionId] = { status: false, revision: false };
    }
    
    if (isRevision) {
      newProgress[sheetId][questionId].revision = status;
    } else {
      newProgress[sheetId][questionId].status = status;
    }
    
    saveProgress(newProgress);
  };

  const getSheetStats = (sheetId, totalQuestions) => {
    const sheetProgress = progress[sheetId] || {};
    let completed = 0;
    let revision = 0;
    
    Object.values(sheetProgress).forEach(q => {
      if (q.status) completed++;
      if (q.revision) revision++;
    });

    return {
      completed,
      revision,
      total: totalQuestions,
      percentage: totalQuestions === 0 ? 0 : Math.round((completed / totalQuestions) * 100)
    };
  };

  return (
    <ProgressContext.Provider value={{ progress, updateQuestionStatus, getSheetStats }}>
      {children}
    </ProgressContext.Provider>
  );
};
