import React from 'react';
import { Search } from 'lucide-react';

const FilterSearch = ({ filter, setFilter, searchQuery, setSearchQuery }) => {
  return (
    <div className="filter-search-container">
      <div className="search-bar">
        <Search size={20} color="var(--text-secondary)" />
        <input 
          type="text" 
          placeholder="Search topics or problems..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="filter-tabs">
        <button 
          type="button"
          className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          type="button"
          className={`filter-tab ${filter === 'done' ? 'active' : ''}`}
          onClick={() => setFilter('done')}
        >
          ✅ Done
        </button>
        <button 
          type="button"
          className={`filter-tab ${filter === 'revision' ? 'active' : ''}`}
          onClick={() => setFilter('revision')}
        >
          ⭐ Revision
        </button>
        <button 
          type="button"
          className={`filter-tab ${filter === 'not_done' ? 'active' : ''}`}
          onClick={() => setFilter('not_done')}
        >
          ⬜ Not Done
        </button>
      </div>
    </div>
  );
};

export default FilterSearch;
