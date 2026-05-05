import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { ChevronDown, ChevronRight, Star, Lock } from 'lucide-react';
import { ProgressContext } from '../context/ProgressContext';
import { AuthContext } from '../context/AuthContext';

/* ─── Celebration messages ───────────────────────────────────── */
const SINGLE_PRAISE = [
  '🔥 Keep going!',       '💪 Crushed it!',      '⚡ One more down!',
  '🎯 Nailed it!',        '🚀 On fire!',          '✨ Nice work!',
  '🧠 Big brain move!',
];

const SUB_PRAISE = [
  '🎉 Sub-topic cleared!',  '🏅 Section smashed!',   '💥 You\'re on a roll!',
  '⚡ Lightning fast!',     '🦾 Unstoppable!',        '🌊 Riding the wave!',
  '🎖️ Badge earned!',
];

const HEADING_PRAISE = [
  '🏆 LEGENDARY!',          '👑 Absolute king!',      '🔱 Master of this topic!',
  '🌟 Hall of fame!',       '🎊 GOAT behaviour!',     '💎 Diamond grind!',
  '🚀 To the moon!',
];

/* ─── Canvas Confetti helper (no dependency) ─────────────────── */
function fireConfetti(canvas, count = 60, spread = 'normal') {
  const ctx = canvas.getContext('2d');
  const W = canvas.width  = canvas.offsetWidth;
  const H = canvas.height = canvas.offsetHeight;
  const colors = ['#8ab4f8','#3ddc84','#fdd663','#f28b82','#c58af9','#ff9800'];

  const particles = Array.from({ length: count }, () => ({
    x: spread === 'center' ? W / 2 : Math.random() * W,
    y: spread === 'center' ? H * 0.35 : -10,
    r: Math.random() * 8 + 4,
    d: Math.random() * count,
    color: colors[Math.floor(Math.random() * colors.length)],
    tilt: Math.random() * 10 - 10,
    tiltAngle: 0,
    tiltAngleInc: Math.random() * 0.07 + 0.05,
    speedY: Math.random() * 4 + 2,
    speedX: (Math.random() - 0.5) * (spread === 'center' ? 8 : 3),
    opacity: 1,
    shape: Math.random() > 0.5 ? 'rect' : 'circle',
  }));

  let frame;
  let elapsed = 0;
  const DURATION = spread === 'center' ? 150 : 90;

  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.tiltAngle += p.tiltAngleInc;
      p.y += p.speedY;
      p.x += p.speedX;
      p.tilt = Math.sin(p.tiltAngle) * 15;
      if (elapsed > DURATION * 0.55) p.opacity = Math.max(0, p.opacity - 0.03);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(p.x + p.tilt, p.y, p.r, p.r / 2);
      }
    });
    ctx.globalAlpha = 1;
    elapsed++;
    if (elapsed < DURATION) frame = requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, W, H);
  };
  cancelAnimationFrame(frame);
  draw();
}

/* ─── Micro burst near checkbox ──────────────────────────────── */
function spawnMicroBurst(x, y) {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999`;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#3ddc84','#8ab4f8','#fdd663','#f28b82','#c58af9'];
  const dots = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2;
    const speed = Math.random() * 3 + 2;
    return { x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      r: Math.random() * 4 + 2, color: colors[i % colors.length], life: 1 };
  });
  let frame;
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    dots.forEach(d => {
      d.x += d.vx; d.y += d.vy; d.vy += 0.15; d.life -= 0.035;
      if (d.life <= 0) return;
      alive = true;
      ctx.globalAlpha = d.life;
      ctx.fillStyle = d.color;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    if (alive) frame = requestAnimationFrame(draw);
    else { cancelAnimationFrame(frame); canvas.remove(); }
  };
  draw();
}

/* ─── Celebration Overlay (sub / heading complete) ───────────── */
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const CelebrationOverlay = ({ type, title, tagline, onClose }) => {
  const canvasRef = useRef(null);
  const isHeading = type === 'heading';

  useEffect(() => {
    if (canvasRef.current) {
      fireConfetti(canvasRef.current, isHeading ? 200 : 100, 'center');
    }
    const t = setTimeout(onClose, isHeading ? 4000 : 3000);
    return () => clearTimeout(t);
  }, []); // eslint-disable-line

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        cursor: 'pointer',
      }}
    >
      {/* Confetti canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2001 }}
      />

      {/* Cinematic text — no card, no border */}
      <div style={{ position: 'relative', zIndex: 2002, textAlign: 'center', padding: '0 2rem' }}>

        {/* Main headline */}
        <div style={{
          fontSize: isHeading ? 'clamp(2rem, 6vw, 3.5rem)' : 'clamp(1.6rem, 5vw, 2.6rem)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          background: isHeading
            ? 'linear-gradient(90deg, #3ddc84 0%, #8ab4f8 50%, #c58af9 100%)'
            : 'linear-gradient(90deg, #3ddc84 0%, #8ab4f8 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'cin-slide-up 0.5s cubic-bezier(0.22,1,0.36,1) both',
          marginBottom: '0.75rem',
          textShadow: 'none',
          filter: 'drop-shadow(0 0 32px rgba(61,220,132,0.35))',
        }}>
          {isHeading ? '🏆 STEP CONQUERED! 🏆' : '🎉 SUBTOPIC CLEARED! 🎉'}
        </div>

        {/* Title */}
        <div style={{
          color: 'rgba(255,255,255,0.85)',
          fontSize: isHeading ? '1.1rem' : '0.95rem',
          fontWeight: 600,
          animation: 'cin-slide-up 0.5s 0.1s cubic-bezier(0.22,1,0.36,1) both',
          marginBottom: '0.5rem',
        }}>
          "{title}"
        </div>

        {/* Tagline */}
        <div style={{
          color: isHeading ? '#3ddc84' : '#8ab4f8',
          fontSize: isHeading ? '1rem' : '0.9rem',
          fontWeight: 700,
          animation: 'cin-slide-up 0.5s 0.2s cubic-bezier(0.22,1,0.36,1) both',
          marginBottom: '2rem',
        }}>
          {tagline}
        </div>


      </div>

      <style>{`
        @keyframes cin-slide-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};


/* ─── Single-question praise toast ───────────────────────────── */
const PraiseToast = ({ message, visible }) => (
  <div style={{
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    transform: `translateY(${visible ? '0' : '20px'}) scale(${visible ? 1 : 0.92})`,
    opacity: visible ? 1 : 0,
    transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
    background: 'rgba(32,33,36,0.88)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(61,220,132,0.45)',
    color: '#3ddc84',
    borderRadius: '0.9rem',
    padding: '0.75rem 1.25rem',
    fontWeight: 800,
    fontSize: '0.95rem',
    boxShadow: '0 0 20px rgba(61,220,132,0.2), 0 8px 32px rgba(0,0,0,0.4)',
    zIndex: 1500,
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  }}>
    <span style={{ fontSize: '1.1rem' }}>✅</span>
    {message}
  </div>
);

/* ─── Auth toast (sign-in prompt) ────────────────────────────── */
const AuthToast = ({ message, onLogin, visible }) => (
  <div style={{
    position: 'fixed', bottom: '2rem', left: '50%',
    transform: `translateX(-50%) translateY(${visible ? '0' : '80px'})`,
    opacity: visible ? 1 : 0,
    transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
    background: 'var(--surface-color)', border: '1px solid var(--border-color)',
    borderRadius: '0.75rem', padding: '0.9rem 1.5rem',
    display: 'flex', alignItems: 'center', gap: '1rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.4)', zIndex: 1000,
    pointerEvents: visible ? 'all' : 'none', minWidth: '300px',
  }}>
    <Lock size={18} color="var(--revision-color)" />
    <span style={{ flex: 1, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{message}</span>
    <button onClick={onLogin} style={{
      background: 'var(--primary-color)', color: '#fff', border: 'none',
      borderRadius: '0.5rem', padding: '0.4rem 0.9rem', fontWeight: 700,
      cursor: 'pointer', fontSize: '0.85rem', whiteSpace: 'nowrap',
    }}>
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

/* ─── Question Table ─────────────────────────────────────────── */
const QuestionTable = ({ questions, sheetId, onAuthRequired, onQuestionToggle }) => {
  const { progress, updateQuestionStatus } = useContext(ProgressContext);
  const { user } = useContext(AuthContext);

  const showBlog = sheetId === 'a2z_flawless' || sheetId === 'SDE';
  const showYt   = sheetId === 'a2z_flawless' || sheetId === 'SDE';
  const showGfg  = sheetId === 'a2z_flawless';
  const showCn   = sheetId === 'a2z_flawless';
  const showTuf  = sheetId === 'a2z_flawless';


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
            const done = qProgress.status;
            return (
              <tr key={q.id} className={done ? 'q-row-done' : ''}>
                <td style={{ position: 'relative' }}>
                  <div className="question-title-cell">
                    <span style={{
                      width: '3px', height: '100%', position: 'absolute', left: 0, top: 0,
                      borderRadius: '0 2px 2px 0',
                      backgroundColor: done ? '#3ddc84' : 'transparent',
                      boxShadow: done ? '0 0 8px rgba(61,220,132,0.6)' : 'none',
                      transition: 'all 0.4s ease',
                    }} />
                    <a href={q.url} target="_blank" rel="noreferrer" className="question-link"
                      style={{ textDecoration: done ? 'line-through' : 'none', opacity: done ? 0.55 : 1, transition: 'all 0.3s ease' }}>
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

                {/* Custom Done Checkbox */}
                <td style={{ textAlign: 'center' }}>
                  <button
                    className={`custom-checkbox ${done ? 'checked' : ''} ${!user ? 'disabled' : ''}`}
                    onClick={(e) => {
                      if (!user) { onAuthRequired(); return; }
                      const next = !done;
                      updateQuestionStatus(sheetId, q.id, next, false);
                      if (next) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        spawnMicroBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
                        onQuestionToggle(sheetId, q.id);
                      }
                    }}
                    title={done ? 'Mark as undone' : 'Mark as done'}
                  >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      {done && <polyline points="2,8 6,12 14,4" />}
                    </svg>
                  </button>
                </td>

                {/* Revision */}
                <td style={{ textAlign: 'center' }}>
                  <Star
                    size={20}
                    fill={qProgress.revision ? 'currentColor' : 'none'}
                    className={`action-icon ${qProgress.revision ? 'active' : ''}`}
                    style={{ cursor: user ? 'pointer' : 'not-allowed', opacity: user ? 1 : 0.5 }}
                    onClick={() => { if (!user) { onAuthRequired(); return; } updateQuestionStatus(sheetId, q.id, !qProgress.revision, true); }}
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

/* ─── Accordion Group ────────────────────────────────────────── */
const QuestionGroup = ({ group, sheetId, defaultOpen = false, isSub = false, onAuthRequired, onQuestionToggle, onCelebrate }) => {
  const { progress } = useContext(ProgressContext);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const prevCompleted = useRef(null);

  useEffect(() => { if (defaultOpen) setIsOpen(true); }, [defaultOpen]);

  if (!group) return null;
  if (group.isHeading === false)
    return <QuestionTable questions={group.questions} sheetId={sheetId} onAuthRequired={onAuthRequired} onQuestionToggle={onQuestionToggle} />;

  const hasQ   = group.questions?.length > 0;
  const hasSub = group.subcategories?.length > 0;
  if (!hasQ && !hasSub) return null;

  const sheetProgress = progress[sheetId] || {};
  const prog = group.originalProg || getProgress(group, sheetProgress);
  const isComplete = prog.total > 0 && prog.completed === prog.total;

  // Detect group completion after progress change
  useEffect(() => {
    if (prog.total === 0) return;
    if (prevCompleted.current === null) {
      prevCompleted.current = prog.completed;
      return;
    }
    if (prevCompleted.current < prog.total && prog.completed === prog.total) {
      onCelebrate(isSub ? 'sub' : 'heading', group.title);
    }
    prevCompleted.current = prog.completed;
  }, [prog.completed, prog.total]); // eslint-disable-line

  const percentage = prog.total === 0 ? 0 : Math.round((prog.completed / prog.total) * 100);

  // Background: green glow when complete, gradient fill otherwise
  const completeBg  = isSub
    ? 'linear-gradient(90deg, rgba(61,220,132,0.22) 0%, rgba(61,220,132,0.08) 100%)'
    : 'linear-gradient(90deg, rgba(61,220,132,0.18) 0%, rgba(61,220,132,0.05) 100%)';
  const progressBg = isSub ? 'rgba(16,185,129,0.15)' : 'rgba(59,130,246,0.12)';
  const emptyBg    = isSub ? 'var(--bg-color)' : 'var(--surface-color)';
  const bg = isComplete
    ? completeBg
    : percentage > 0
    ? `linear-gradient(to right, ${progressBg} ${percentage}%, ${emptyBg} ${percentage}%)`
    : emptyBg;

  const completeBorder = isComplete
    ? (isSub ? '1px solid rgba(61,220,132,0.3)' : '1px solid rgba(61,220,132,0.45)')
    : undefined;

  return (
    <div
      className={`accordion-group ${isSub ? 'sub-group' : 'main-group'} ${isComplete ? 'group-complete' : ''}`}
      style={{
        border: isSub ? 'none' : completeBorder,
        borderRadius: isSub ? '0' : undefined,
        boxShadow: isComplete && !isSub ? '0 0 0 1px rgba(61,220,132,0.15)' : undefined,
        transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div className={`accordion-header ${isSub ? 'sub-header' : 'main-header'}`}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: bg,
          transition: 'background 0.5s ease',
          borderBottom: isOpen && hasQ ? '1px solid var(--border-color)' : 'none',
          color: isComplete ? '#3ddc84' : isSub ? 'var(--text-secondary)' : 'var(--primary-color)',
          fontSize: isSub ? '1rem' : '1.15rem',
        }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {isComplete && <span style={{ fontSize: '0.9em', filter: 'drop-shadow(0 0 4px #3ddc84)' }}>✅</span>}
          {group.title}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            fontSize: '0.85rem', fontWeight: 700, opacity: 0.9,
            color: isComplete ? '#3ddc84' : 'inherit',
          }}>{prog.completed}/{prog.total}</span>
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
      </div>

      {isOpen && (
        <div className="accordion-body">
          {hasSub && (
            <div className="subcategories-container">
              {group.subcategories.map((sub, i) => (
                <QuestionGroup
                  key={i} group={sub} sheetId={sheetId}
                  defaultOpen={defaultOpen} isSub
                  onAuthRequired={onAuthRequired}
                  onQuestionToggle={onQuestionToggle}
                  onCelebrate={onCelebrate}
                />
              ))}
            </div>
          )}
          {hasQ && (
            <QuestionTable
              questions={group.questions} sheetId={sheetId}
              onAuthRequired={onAuthRequired}
              onQuestionToggle={onQuestionToggle}
            />
          )}
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

  // Auth toast
  const [authToastVisible, setAuthToastVisible] = useState(false);
  const authTimer = useRef(null);

  // Single-question praise toast
  const [praiseMsg,     setPraiseMsg]     = useState('');
  const [praiseVisible, setPraiseVisible] = useState(false);
  const praiseTimer = useRef(null);

  // Group celebration overlay
  const [celebration, setCelebration] = useState(null); // { type: 'sub'|'heading', title }

  const showAuthToast = useCallback(() => {
    setAuthToastVisible(true);
    clearTimeout(authTimer.current);
    authTimer.current = setTimeout(() => setAuthToastVisible(false), 3500);
  }, []);

  // Called when a single question is checked ✓
  const handleQuestionToggle = useCallback(() => {
    setPraiseMsg(pick(SINGLE_PRAISE));
    setPraiseVisible(true);
    clearTimeout(praiseTimer.current);
    praiseTimer.current = setTimeout(() => setPraiseVisible(false), 2000);
  }, []);

  // Called by QuestionGroup when sub/heading fully completed
  const handleCelebrate = useCallback((type, title) => {
    const tagline = type === 'heading' ? pick(HEADING_PRAISE) : pick(SUB_PRAISE);
    setTimeout(() => setCelebration({ type, title, tagline }), 300);
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
    const prog         = getProgress(node, sheetProgress);
    const filteredQ    = node.questions    ? node.questions.filter(filterQuestion) : [];
    const filteredSubs = node.subcategories
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
          <QuestionGroup
            key={i} group={node} sheetId={sheetId}
            defaultOpen={isSearching}
            onAuthRequired={showAuthToast}
            onQuestionToggle={handleQuestionToggle}
            onCelebrate={handleCelebrate}
          />
        ))}
      </div>

      {/* Single-question praise */}
      <PraiseToast message={praiseMsg} visible={praiseVisible} />

      {/* Auth toast */}
      <AuthToast
        visible={authToastVisible}
        message="Sign in to track your progress!"
        onLogin={() => { setAuthToastVisible(false); login(); }}
      />

      {/* Group celebration overlay */}
      {celebration && (
        <CelebrationOverlay
          type={celebration.type}
          title={celebration.title}
          tagline={celebration.tagline}
          onClose={() => setCelebration(null)}
        />
      )}
    </>
  );
};

export default QuestionList;
