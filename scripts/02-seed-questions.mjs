// ═══════════════════════════════════════════════════════════════════════════
// PHASE 2 — Seed the Supabase catalog (sheets + questions) from the app's
// static JSON files. Idempotent: upserts on natural keys. Run before the
// user migration AND after any future change to public/data/*.json.
//
// Usage:  npm run seed
// ═══════════════════════════════════════════════════════════════════════════
import { readFileSync } from 'node:fs';
import { getSupabase, DATA_DIR } from './lib/clients.mjs';

const SHEETS = [
  { id: 'a2z_flawless', name: 'Striver A2Z',      file: 'a2z_flawless.json', position: 1 },
  { id: 'SDE',          name: 'SDE Sheet',        file: 'SDE.json',          position: 2 },
  { id: 'blind75',      name: 'Blind 75',         file: 'blind75.json',      position: 3 },
  { id: 'neetcode150',  name: 'NeetCode 150',     file: 'neetcode150.json',  position: 4 },
  { id: 'neetcode250',  name: 'NeetCode 250',     file: 'neetcode250.json',  position: 5 },
  { id: 'striver_cp',   name: 'Striver CP Sheet', file: 'striver_cp.json',   position: 6 },
];

const diffOf = (d) => {
  const s = (d || '').toLowerCase();
  if (s === 'easy') return 0;
  if (s === 'hard') return 2;
  return 1;
};

/** Port of src/utils/dataParser.js — flattens every supported JSON format. */
function parseSheet(sheetId, raw) {
  const rows = [];
  let pos = 0;
  const push = (q, category = '', subcategory = '') => rows.push({
    sheet_id: sheetId,
    slug: q.slug,
    title: q.title || q.slug,
    url: q.url || '',
    links: q.links || {},
    difficulty: q.difficulty ?? 1,
    category,
    subcategory,
    position: ++pos,
    is_active: true,
    source: 'seed',
  });

  if (Array.isArray(raw) && raw.length && raw[0].step_no) {                    // A2Z hierarchical
    for (const step of raw) {
      for (const sub of step.sub_steps || []) {
        for (const t of sub.topics || []) {
          push({
            slug: t.id,
            title: t.question_title,
            url: t.lc_link || t.gfg_link || t.cs_link || t.post_link || '',
            links: { blog: t.post_link, yt: t.yt_link, lc: t.lc_link, gfg: t.gfg_link, cn: t.cs_link, tuf: t.plus_link },
            difficulty: t.difficulty ?? 0,
          }, `Step ${step.step_no}: ${step.step_title}`, `${sub.sub_step_no}. ${sub.sub_step_title}`);
        }
      }
    }
  } else if (Array.isArray(raw) && raw.length && (raw[0].category || raw[0].heading)) { // NeetCode / CP
    for (const group of raw) {
      for (const q of group.problems || []) {
        const link = q.link || q.leetcode_link || '';
        const linkKey = q.platform ? 'cf' : 'lc';
        push({ slug: q.id, title: q.title, url: link, links: { [linkKey]: link }, difficulty: diffOf(q.difficulty) },
          group.category || group.heading || '');
      }
    }
  } else if (!Array.isArray(raw) && typeof raw === 'object') {                  // SDE object format
    for (const [categoryRaw, list] of Object.entries(raw)) {
      const category = categoryRaw.replace(/\d+\/\d+$/, '').trim();
      for (const q of list) {
        push({
          slug: q.id,
          title: q.Question,
          url: q.Question_link || '',
          links: { blog: q.Blog_link || null, yt: q.Solution_link || null, lc: q.Question_link?.includes('leetcode') ? q.Question_link : null },
          difficulty: 1,
        }, category);
      }
    }
  } else if (Array.isArray(raw)) {                                             // Blind 75 flat
    for (const q of raw) {
      const title = (q.title || '').split('\n')[0] || 'Unknown Problem';
      const low = (q.title || '').toLowerCase();
      push({
        slug: q.id || (q.title || '').substring(0, 20),
        title,
        url: q.url || q.link || '',
        links: { lc: q.url || q.link },
        difficulty: low.includes('easy') ? 0 : low.includes('hard') ? 2 : 1,
      });
    }
  }
  return rows;
}

const supabase = getSupabase();
let grandTotal = 0;

for (const sheet of SHEETS) {
  const raw = JSON.parse(readFileSync(`${DATA_DIR}/${sheet.file}`, 'utf8'));
  const rows = parseSheet(sheet.id, raw);

  const slugs = new Set(rows.map((r) => r.slug));
  if (slugs.size !== rows.length) throw new Error(`Duplicate slugs inside ${sheet.id} — aborting.`);

  const { error: sheetErr } = await supabase.from('sheets').upsert({
    id: sheet.id, name: sheet.name, position: sheet.position, total_questions: rows.length,
  }, { onConflict: 'id' });
  if (sheetErr) throw new Error(`sheets upsert failed for ${sheet.id}: ${sheetErr.message}`);

  for (let i = 0; i < rows.length; i += 500) {
    const { error } = await supabase.from('questions')
      .upsert(rows.slice(i, i + 500), { onConflict: 'sheet_id,slug' });
    if (error) throw new Error(`questions upsert failed for ${sheet.id}: ${error.message}`);
  }

  grandTotal += rows.length;
  console.log(`✅ ${sheet.id.padEnd(14)} ${String(rows.length).padStart(4)} questions seeded`);
}

const { count } = await supabase.from('questions').select('*', { count: 'exact', head: true });
console.log(`\n🎯 Catalog complete: ${grandTotal} seeded this run, ${count} total in Supabase.`);
console.log('Next: npm run migrate:dry  (then npm run migrate)');
