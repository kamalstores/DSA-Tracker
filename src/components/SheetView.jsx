import React, { useState, useEffect, useContext } from 'react';
import { fetchAndParseSheet } from '../utils/dataParser';
import { ProgressContext } from '../context/ProgressContext';
import SheetStats from './SheetStats';
import FilterSearch from './FilterSearch';
import QuestionList from './QuestionList';

const SheetView = ({ activeSheet }) => {
  const [sheetData, setSheetData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState('all'); // all, done, not_done, revision
  const [searchQuery, setSearchQuery] = useState('');

  const { progress, getSheetStats, loadingCloud } = useContext(ProgressContext);
  const hasLoadedProgress = Object.values(progress || {}).some(sheet => Object.keys(sheet || {}).length > 0);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchAndParseSheet(activeSheet);
      setSheetData(data);
      // Reset filters when changing sheets
      setFilter('all');
      setSearchQuery('');
      setLoading(false);
    };

    loadData();
  }, [activeSheet]);

  if (loading || !sheetData) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading sheet data...</div>;
  }

  if (loadingCloud && !hasLoadedProgress) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading your saved progress...</div>;
  }

  const stats = getSheetStats(activeSheet, sheetData.totalQuestions);

  return (
    <div className="sheet-view">
      <div className="sheet-header">
        <h1>{sheetData.info.name}</h1>
        <p dangerouslySetInnerHTML={{ __html: sheetData.info.description }}></p>
      </div>

      <SheetStats stats={stats} />

      <FilterSearch
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <QuestionList
        data={sheetData.data}
        sheetId={activeSheet}
        filter={filter}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default SheetView;
