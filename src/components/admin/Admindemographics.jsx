import React, { useMemo, useState } from 'react';

// Pull a country out of a free-text location string like
// "Bilāspur, Chhattisgarh, India" -> "India". Falls back to the raw string
// if there's no comma to split on.
function getCountry(location) {
    if (!location || location === 'Unknown') return 'Unknown';
    const parts = location.split(',').map((p) => p.trim()).filter(Boolean);
    return parts.length > 0 ? parts[parts.length - 1] : location;
}

const AdminDemographics = ({ users }) => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all'); // all | known | unknown
    const [sortBy, setSortBy] = useState('count'); // count | name

    const totalUsers = users.length;
    const indianCount = users.filter((u) => u.location?.toLowerCase().includes('india')).length;
    const unknownCount = users.filter((u) => !u.location || u.location === 'Unknown').length;
    const overseasCount = totalUsers - indianCount - unknownCount;

    const countryBreakdown = useMemo(() => {
        const counts = {};
        users.forEach((u) => {
            const country = getCountry(u.location);
            counts[country] = (counts[country] || 0) + 1;
        });
        return Object.entries(counts).map(([country, count]) => ({ country, count }));
    }, [users]);

    const filteredBreakdown = countryBreakdown
        .filter((row) => {
            if (filter === 'known' && row.country === 'Unknown') return false;
            if (filter === 'unknown' && row.country !== 'Unknown') return false;
            if (search && !row.country.toLowerCase().includes(search.toLowerCase())) return false;
            return true;
        })
        .sort((a, b) => (sortBy === 'count' ? b.count - a.count : a.country.localeCompare(b.country)));

    const maxCount = Math.max(...countryBreakdown.map((r) => r.count), 1);

    return (
        <div className="admin-section">
            <div className="admin-section-header">
                <h2 className="admin-section-title">🌍 User Locations</h2>
                <div className="admin-controls" style={{ flexWrap: 'wrap' }}>
                    <div className="admin-filter-toggles">
                        <button
                            className={`filter-toggle-btn ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            All
                        </button>
                        <button
                            className={`filter-toggle-btn ${filter === 'known' ? 'active' : ''}`}
                            onClick={() => setFilter('known')}
                        >
                            Known Only
                        </button>
                        <button
                            className={`filter-toggle-btn ${filter === 'unknown' ? 'active' : ''}`}
                            onClick={() => setFilter('unknown')}
                        >
                            Unknown Only
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Search country…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="admin-search"
                    />
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="admin-select"
                    >
                        <option value="count">Sort: Most Users</option>
                        <option value="name">Sort: Country A–Z</option>
                    </select>
                </div>
            </div>

            <div className="admin-stats-grid" style={{ marginBottom: '1.5rem' }}>
                <div className="admin-stat-card" style={{ borderTopColor: '#3ddc84' }}>
                    <div className="admin-stat-value" style={{ color: '#3ddc84' }}>{indianCount}</div>
                    <div className="admin-stat-label">Indian</div>
                </div>
                <div className="admin-stat-card" style={{ borderTopColor: '#8ab4f8' }}>
                    <div className="admin-stat-value" style={{ color: '#8ab4f8' }}>{overseasCount}</div>
                    <div className="admin-stat-label">Overseas</div>
                </div>
                <div className="admin-stat-card" style={{ borderTopColor: '#64748b' }}>
                    <div className="admin-stat-value" style={{ color: '#64748b' }}>{unknownCount}</div>
                    <div className="admin-stat-label">Unknown</div>
                </div>
            </div>

            <div className="admin-table-wrapper">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Users</th>
                            <th>Share</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBreakdown.map((row) => {
                            const pct = totalUsers > 0 ? Math.round((row.count / totalUsers) * 100) : 0;
                            const relativePct = maxCount > 0 ? (row.count / maxCount) * 100 : 0;
                            return (
                                <tr key={row.country}>
                                    <td style={{ fontWeight: 600 }}>{row.country}</td>
                                    <td>{row.count}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ width: '40px' }}>{pct}%</span>
                                            <div style={{ flex: 1, height: '6px', background: 'var(--bg-color)', borderRadius: '3px', overflow: 'hidden', minWidth: '100px' }}>
                                                <div style={{ width: `${relativePct}%`, height: '100%', background: 'linear-gradient(90deg, #8ab4f8, #3ddc84)' }}></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                        {filteredBreakdown.length === 0 && (
                            <tr><td colSpan="3" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>No matching locations found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDemographics;
