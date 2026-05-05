import React, { useState, useContext, useEffect, useCallback } from 'react';
import { ChevronDown, ChevronRight, Star, Lock } from 'lucide-react';
import { ProgressContext } from '../context/ProgressContext';
import { AuthContext } from '../context/AuthContext';

/* ─── Toast ─────────────────────────────────────────────────── */
const Toast = ({ message, onLogin, visible }) => (
  <div
    style={{
      position: 'fixed',
      bottom: '2rem',
      left: '50%',
      transform: `translateX(-50%) translateY(${visible ? '0' : '80px'})`,
      opacity: visible ? 1 : 0,
      transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
      background: 'var(--surface-color)',
      border: '1px solid var(--border-color)',
      borderRadius: '0.75rem',
      padding: '0.9rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
      zIndex: 1000,
      pointerEvents: visible ? 'all' : 'none',
      minWidth: '300px',
    }}
  >
    <Lock size={18} color="var(--revision-color)" />
    <span style={{ flex: 1, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{message}</span>
    <button
      onClick={onLogin}
      style={{
        background: 'var(--primary-color)',
        color: '#fff',
        border: 'none',
        borderRadius: '0.5rem',
        padding: '0.4rem 0.9rem',
        fontWeight: 700,
        cursor: 'pointer',
        fontSize: '0.85rem',
        whiteSpace: 'nowrap',
      }}
    >
      Sign In
    </button>
  </div>
);

/* ─── Link Icon ──────────────────────────────────────────────── */
const LinkIcon = ({ url, type }) => {
  if (!url) return <span style={{ opacity: 0.2 }}>-</span>;

  const logos = { blog: '/logo/post.svg', yt: '/logo/yt.svg', lc: '/logo/lc.svg', gfg: '/logo/gfg.svg', cn: '/logo/cn.svg', tuf: '/logo/tuf.svg' };
  const src = logos[type] || '';

  return (
    <a href={url} target="_blank" rel="noreferrer"
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}
      className="hover-scale"
    >
      {src ? <img src={src} alt={type} style={{ width: '20px', height: '20px', objectFit: 'contain' }} /> : <span>🔗</span>}
    </a>
  );
};

/* ─── Question Table ─────────────────────────────────────────── */
const QuestionTable = ({ questions, sheetId, onAuthRequired }) => {
  const { progress, updateQuestionStatus } = useContext(ProgressContext);
  const { user } = useContext(AuthContext);

  const showBlog = sheetId === 'a2z_flawless' || sheetId === 'SDE';
  const showYt   = sheetId === 'a2z_flawless' || sheetId === 'SDE';
  const showGfg  = sheetId === 'a2z_flawless';
  const showCn   = sheetId === 'a2z_flawless';
  const showTuf  = sheetId === 'a2z_flawless';

  const guard = (fn) => {
    if (!user) { onAuthRequired(); return; }
    fn();
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="questions-table">
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Topic</th>
            {showBlog && <th style={{ textAlign: 'center' }}>Blog</th>}
            {showYt   && <th style={{ textAlign: 'center' }}>YT</th>}
            <th style={{ textAlign: 'center' }}>LC</th>
            {showGfg  && <th style={{ textAlign: 'center' }}>GFG</th>}
            {showCn   && <th style={{ textAlign: 'center' }}>CN</th>}
            {showTuf  && <th style={{ textAlign: 'center' }}>TUF</th>}
            <th style={{ textAlign: 'center' }}>Done</th>
            <th style={{ textAlign: 'center' }}>Rev</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(q => {
            const qProgress = progress[sheetId]?.[q.id] || { status: false, revision: false };
            return (
              <tr key={q.id}>
                <td>
                  <div className="question-title-cell">
                    <span style={{
                      width: '4px', height: '100%', position: 'absolute', left: 0, top: 0,
                      backgroundColor: qProgress.status ? 'var(--primary-color)' : 'transparent'
                    }} />
                    <a href={q.url} target="_blank" rel="noreferrer" className="question-link"
                      style={{ textDecoration: qProgress.status ? 'line-through' : 'none', opacity: qProgress.status ? 0.7 : 1 }}>
                      {q.title}
                    </a>
                  </div>
                </td>
                {showBlog && <td style={{ textAlign: 'center' }}><LinkIcon url={q.links?.blog} type="blog" /></td>}
                {showYt   && <td style={{ textAlign: 'center' }}><LinkIcon url={q.links?.yt}   type="yt"   /></td>}
                <td style={{ textAlign: 'center' }}><LinkIcon url={q.links?.lc} type="lc" /></td>
                {showGfg  && <td style={{ textAlign: 'center' }}><LinkIcon url={q.links?.gfg}  type="gfg"  /></td>}
                {showCn   && <td style={{ textAlign: 'center' }}><LinkIcon url={q.links?.cn}   type="cn"   /></td>}
                {showTuf  && <td style={{ textAlign: 'center' }}><LinkIcon url={q.links?.tuf}  type="tuf"  /></td>}

                {/* Done */}
                <td style={{ textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    className="status-checkbox"
                    checked={qProgress.status}
                    style={{ cursor: user ? 'pointer' : 'not-allowed', opacity: user ? 1 : 0.5 }}
                    onChange={(e) => guard(() => updateQuestionStatus(sheetId, q.id, e.target.checked, false))}
                    onClick={(e) => { if (!user) { e.preventDefault(); onAuthRequired(); } }}
                  />
                </td>

                {/* Revision */}
                <td style={{ textAlign: 'center' }}>
                  <Star
                    size={20}
                    fill={qProgress.revision ? 'currentColor' : 'none'}
                    className={`action-icon ${qProgress.revision ? 'active' : ''}`}
                    style={{ cursor: user ? 'pointer' : 'not-allowed', opacity: user ? 1 : 0.5 }}
                    onClick={() => guard(() => updateQuestionStatus(sheetId, q.id, !qProgress.revision, true))}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

/* ─── Progress helper ────────────────────────────────────────── */
const getProgress = (node, sheetProgress) => {
  let total     = node.questions?.length || 0;
  let completed = node.questions?.filter(q => sheetProgress[q.id]?.status).length || 0;
  node.subcategories?.forEach(sub => {
    const s = getProgress(sub, sheetProgress);
    total     += s.total;
    completed += s.completed;
  });
  return { total, completed };
};

/* ─── Accordion Group ────────────────────────────────────────── */
const QuestionGroup = ({ group, sheetId, defaultOpen = false, isSub = false, onAuthRequired }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  useEffect(() => { if (defaultOpen) setIsOpen(true); }, [defaultOpen]);

  if (!group) return null;
  if (group.isHeading === false)
    return <QuestionTable questions={group.questions} sheetId={sheetId} onAuthRequired={onAuthRequired} />;

  const hasQ   = group.questions?.length > 0;
  const hasSub = group.subcategories?.length > 0;
  if (!hasQ && !hasSub) return null;

  const prog       = group.originalProg || { total: 0, completed: 0 };
  const percentage = prog.total === 0 ? 0 : Math.round((prog.completed / prog.total) * 100);
  const progressBg = isSub ? 'rgba(16,185,129,0.15)' : 'rgba(59,130,246,0.15)';
  const emptyBg    = isSub ? 'var(--bg-color)' : 'var(--surface-color)';
  const bg         = percentage > 0
    ? `linear-gradient(to right, ${progressBg} ${percentage}%, ${emptyBg} ${percentage}%)`
    : emptyBg;

  return (
    <div className={`accordion-group ${isSub ? 'sub-group' : 'main-group'}`}
      style={{ border: isSub ? 'none' : undefined, borderRadius: isSub ? '0' : undefined }}>
      <div className={`accordion-header ${isSub ? 'sub-header' : 'main-header'}`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ background: bg, borderBottom: isOpen && hasQ ? '1px solid var(--border-color)' : 'none',
          color: isSub ? 'var(--text-secondary)' : 'var(--primary-color)', fontSize: isSub ? '1rem' : '1.15rem' }}>
        <span>{group.title}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.9 }}>{prog.completed}/{prog.total}</span>
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
      </div>

      {isOpen && (
        <div className="accordion-body">
          {hasSub && (
            <div className="subcategories-container">
              {group.subcategories.map((sub, i) => (
                <QuestionGroup key={i} group={sub} sheetId={sheetId} defaultOpen={defaultOpen} isSub onAuthRequired={onAuthRequired} />
              ))}
            </div>
          )}
          {hasQ && <QuestionTable questions={group.questions} sheetId={sheetId} onAuthRequired={onAuthRequired} />}
        </div>
      )}
    </div>
  );
};

/* ─── Main QuestionList ──────────────────────────────────────── */
const QuestionList = ({ data, sheetId, filter, searchQuery }) => {
  const { progress } = useContext(ProgressContext);
  const { login }    = useContext(AuthContext);
  const sheetProgress = progress[sheetId] || {};

  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = React.useRef(null);

  const showToast = useCallback(() => {
    setToastVisible(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVisible(false), 3500);
  }, []);

  const filterQuestion = (q) => {
    if (searchQuery && !q.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    const p = sheetProgress[q.id] || { status: false, revision: false };
    if (filter === 'done'     && !p.status)   return false;
    if (filter === 'not_done' &&  p.status)   return false;
    if (filter === 'revision' && !p.revision) return false;
    return true;
  };

  const filterNode = (node) => {
    const prog            = getProgress(node, sheetProgress);
    const filteredQ       = node.questions   ? node.questions.filter(filterQuestion) : [];
    const filteredSubs    = node.subcategories
      ? node.subcategories.map(filterNode).filter(s => s.questions.length > 0 || s.subcategories.length > 0)
      : [];
    return { ...node, originalProg: prog, questions: filteredQ, subcategories: filteredSubs };
  };

  const isSearching  = searchQuery.length > 0 || filter !== 'all';
  const filteredData = data.map(filterNode).filter(n => n.questions.length > 0 || n.subcategories.length > 0);

  if (filteredData.length === 0)
    return <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>No problems match your filters.</div>;

  return (
    <>
      <div className="question-list-container">
        {filteredData.map((node, i) => (
          <QuestionGroup key={i} group={node} sheetId={sheetId} defaultOpen={isSearching} onAuthRequired={showToast} />
        ))}
      </div>

      <Toast
        visible={toastVisible}
        message="Sign in to track your progress!"
        onLogin={() => { setToastVisible(false); login(); }}
      />
    </>
  );
};

export default QuestionList;
