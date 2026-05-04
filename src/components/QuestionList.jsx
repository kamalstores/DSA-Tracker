import React, { useState, useContext, useEffect } from 'react';
import { ChevronDown, ChevronRight, Star, Youtube, FileText, Code2, Globe } from 'lucide-react';
import { ProgressContext } from '../context/ProgressContext';

const LinkIcon = ({ url, type }) => {
  if (!url) return <span style={{opacity: 0.2}}>-</span>;
  
  let src = '';
  
  if (type === 'blog') src = '/logo/post.svg';
  else if (type === 'yt') src = '/logo/yt.svg';
  else if (type === 'lc') src = '/logo/lc.svg';
  else if (type === 'gfg') src = '/logo/gfg.svg';
  else if (type === 'cn') src = '/logo/cn.svg';
  else if (type === 'tuf') src = '/logo/tuf.svg';

  return (
    <a href={url} target="_blank" rel="noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s'}} className="hover-scale">
      {src ? <img src={src} alt={type} style={{width: '20px', height: '20px', objectFit: 'contain'}} /> : <span>🔗</span>}
    </a>
  );
};

const QuestionTable = ({ questions, sheetId }) => {
  const { progress, updateQuestionStatus } = useContext(ProgressContext);

  const showBlog = sheetId === 'a2z_flawless';
  const showYt = sheetId === 'a2z_flawless' || sheetId === 'SDE';
  const showGfg = sheetId === 'a2z_flawless';
  const showCn = sheetId === 'a2z_flawless';
  const showTuf = sheetId === 'a2z_flawless';

  return (
    <div style={{overflowX: 'auto'}}>
      <table className="questions-table">
        <thead>
          <tr>
            <th style={{width: '40%'}}>Topic</th>
            {showBlog && <th style={{textAlign: 'center'}}>Blog</th>}
            {showYt && <th style={{textAlign: 'center'}}>YT</th>}
            <th style={{textAlign: 'center'}}>LC</th>
            {showGfg && <th style={{textAlign: 'center'}}>GFG</th>}
            {showCn && <th style={{textAlign: 'center'}}>CN</th>}
            {showTuf && <th style={{textAlign: 'center'}}>TUF</th>}
            <th style={{textAlign: 'center'}}>Done</th>
            <th style={{textAlign: 'center'}}>Rev</th>
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
                    }}></span>
                    <a href={q.url} target="_blank" rel="noreferrer" className="question-link" style={{textDecoration: qProgress.status ? 'line-through' : 'none', opacity: qProgress.status ? 0.7 : 1}}>
                      {q.title}
                    </a>
                  </div>
                </td>
                {showBlog && <td style={{textAlign: 'center'}}><LinkIcon url={q.links?.blog} type="blog" /></td>}
                {showYt && <td style={{textAlign: 'center'}}><LinkIcon url={q.links?.yt} type="yt" /></td>}
                <td style={{textAlign: 'center'}}><LinkIcon url={q.links?.lc} type="lc" /></td>
                {showGfg && <td style={{textAlign: 'center'}}><LinkIcon url={q.links?.gfg} type="gfg" /></td>}
                {showCn && <td style={{textAlign: 'center'}}><LinkIcon url={q.links?.cn} type="cn" /></td>}
                {showTuf && <td style={{textAlign: 'center'}}><LinkIcon url={q.links?.tuf} type="tuf" /></td>}
                <td style={{textAlign: 'center'}}>
                  <input 
                    type="checkbox" 
                    className="status-checkbox"
                    checked={qProgress.status}
                    onChange={(e) => updateQuestionStatus(sheetId, q.id, e.target.checked, false)}
                  />
                </td>
                <td style={{textAlign: 'center'}}>
                  <Star 
                    size={20} 
                    fill={qProgress.revision ? "currentColor" : "none"}
                    className={`action-icon ${qProgress.revision ? 'active' : ''}`}
                    onClick={() => updateQuestionStatus(sheetId, q.id, !qProgress.revision, true)}
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

const getProgress = (node, sheetProgress) => {
  let total = node.questions?.length || 0;
  let completed = node.questions?.filter(q => sheetProgress[q.id]?.status).length || 0;
  
  if (node.subcategories) {
    node.subcategories.forEach(sub => {
      const subProg = getProgress(sub, sheetProgress);
      total += subProg.total;
      completed += subProg.completed;
    });
  }
  return { total, completed };
};

const QuestionGroup = ({ group, sheetId, defaultOpen = false, isSub = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    if (defaultOpen) setIsOpen(true);
  }, [defaultOpen]);

  if (!group) return null;

  if (group.isHeading === false) {
    return <QuestionTable questions={group.questions} sheetId={sheetId} />;
  }

  const hasQuestions = group.questions && group.questions.length > 0;
  const hasSubcategories = group.subcategories && group.subcategories.length > 0;

  if (!hasQuestions && !hasSubcategories) return null;

  const prog = group.originalProg || { total: 0, completed: 0 };
  const percentage = prog.total === 0 ? 0 : Math.round((prog.completed / prog.total) * 100);
  
  const progressBg = isSub ? 'rgba(16, 185, 129, 0.15)' : 'rgba(59, 130, 246, 0.15)';
  const emptyBg = isSub ? 'var(--bg-color)' : 'var(--surface-color)';
  const background = percentage > 0 
    ? `linear-gradient(to right, ${progressBg} ${percentage}%, ${emptyBg} ${percentage}%)` 
    : emptyBg;

  return (
    <div className={`accordion-group ${isSub ? 'sub-group' : 'main-group'}`} style={{ border: isSub ? 'none' : undefined, borderRadius: isSub ? '0' : undefined }}>
      <div 
        className={`accordion-header ${isSub ? 'sub-header' : 'main-header'}`} 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: background,
          borderBottom: isOpen && hasQuestions ? '1px solid var(--border-color)' : 'none',
          color: isSub ? 'var(--text-secondary)' : 'var(--primary-color)',
          fontSize: isSub ? '1rem' : '1.15rem'
        }}
      >
        <span>{group.title}</span>
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <span style={{fontSize: '0.85rem', fontWeight: 600, opacity: 0.9}}>
            {prog.completed}/{prog.total}
          </span>
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
      </div>
      
      {isOpen && (
        <div className="accordion-body">
          {hasSubcategories && (
            <div className="subcategories-container">
              {group.subcategories.map((sub, i) => (
                <QuestionGroup 
                  key={i} 
                  group={sub} 
                  sheetId={sheetId} 
                  defaultOpen={defaultOpen} 
                  isSub={true} 
                />
              ))}
            </div>
          )}
          {hasQuestions && (
            <QuestionTable questions={group.questions} sheetId={sheetId} />
          )}
        </div>
      )}
    </div>
  );
};

const QuestionList = ({ data, sheetId, filter, searchQuery }) => {
  const { progress } = useContext(ProgressContext);
  const sheetProgress = progress[sheetId] || {};

  const filterQuestion = (q) => {
    if (searchQuery && !q.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    const p = sheetProgress[q.id] || { status: false, revision: false };
    if (filter === 'done' && !p.status) return false;
    if (filter === 'not_done' && p.status) return false;
    if (filter === 'revision' && !p.revision) return false;

    return true;
  };

  const filterNode = (node) => {
    const prog = getProgress(node, sheetProgress);
    
    const filteredQuestions = node.questions ? node.questions.filter(filterQuestion) : [];
    const filteredSubs = node.subcategories 
      ? node.subcategories.map(filterNode).filter(sub => sub.questions.length > 0 || sub.subcategories.length > 0)
      : [];

    return {
      ...node,
      originalProg: prog,
      questions: filteredQuestions,
      subcategories: filteredSubs
    };
  };

  const isSearching = searchQuery.length > 0 || filter !== 'all';

  const filteredData = data.map(filterNode).filter(node => node.questions.length > 0 || node.subcategories.length > 0);

  if (filteredData.length === 0) {
    return <div style={{padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)'}}>No problems match your filters.</div>;
  }

  return (
    <div className="question-list-container">
      {filteredData.map((node, index) => (
        <QuestionGroup 
          key={index} 
          group={node} 
          sheetId={sheetId} 
          defaultOpen={isSearching} 
        />
      ))}
    </div>
  );
};

export default QuestionList;
