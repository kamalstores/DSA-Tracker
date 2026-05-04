export const SHEETS = [
  {
    id: 'a2z_flawless',
    name: 'Striver A2Z',
    file: '/data/a2z_flawless.json',
    description: '<a href="https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" target="_blank" rel="noopener noreferrer">A-Z sheet</a> by Striver.'
  },
  {
    id: 'SDE',
    name: 'SDE Sheet',
    file: '/data/SDE.json',
    description: '<a href="https://takeuforward.org/dsa/strivers-sde-sheet-top-coding-interview-problems" target="_blank" rel="noopener noreferrer">SDE sheet</a> by Striver.'
  },
  {
    id: 'blind75',
    name: 'Blind 75',
    file: '/data/blind75.json',
    description: 'Leetcode - <a href="https://neetcode.io/practice/practice/neetcode150" target="_blank" rel="noopener noreferrer">Blind 75</a>.'
  },
  {
    id: 'neetcode150',
    name: 'NeetCode 150',
    file: '/data/neetcode150.json',
    description: '<a href="https://neetcode.io/practice/practice/neetcode150" target="_blank" rel="noopener noreferrer">150 hand-picked questions</a> by NeetCode.'
  },
  {
    id: 'neetcode250',
    name: 'NeetCode 250',
    file: '/data/neetcode250.json',
    description: '<a href="https://neetcode.io/practice/practice/neetcode250" target="_blank" rel="noopener noreferrer">250 hand-picked questions</a> by NeetCode.'
  }
];

export const fetchAndParseSheet = async (sheetId) => {
  const sheetInfo = SHEETS.find(s => s.id === sheetId);
  if (!sheetInfo) return null;

  try {
    const response = await fetch(sheetInfo.file);
    const data = await response.json();

    let normalized = [];
    let totalQuestions = 0;

    // A2Z Flawless format (hierarchical: steps -> sub_steps -> topics)
    if (Array.isArray(data) && data.length > 0 && data[0].step_no) {
      normalized = data.map(step => {
        const subcategories = step.sub_steps?.map(sub => {
          const questions = sub.topics?.map(topic => {
            totalQuestions++;
            return {
              id: topic.id,
              title: topic.question_title,
              url: topic.lc_link || topic.gfg_link || topic.cs_link || topic.post_link,
              links: {
                blog: topic.post_link,
                yt: topic.yt_link,
                lc: topic.lc_link,
                gfg: topic.gfg_link,
                cn: topic.cs_link,
                tuf: topic.plus_link
              },
              difficulty: topic.difficulty || 0
            };
          }) || [];
          return {
            title: `${sub.sub_step_no}. ${sub.sub_step_title}`,
            questions
          };
        }) || [];

        return {
          title: `Step ${step.step_no}: ${step.step_title}`,
          isHeading: true,
          subcategories,
          questions: []
        };
      });
    }
    // Neetcode format (array of { category, problems }) or { heading, problems }
    else if (Array.isArray(data) && data.length > 0 && (data[0].category || data[0].heading)) {
      normalized = data.map(group => {
        const title = group.category || group.heading;
        const questions = group.problems.map(q => {
          totalQuestions++;
          let diff = 1;
          if (q.difficulty?.toLowerCase() === 'easy') diff = 0;
          else if (q.difficulty?.toLowerCase() === 'hard') diff = 2;

          return {
            id: q.id,
            title: q.title,
            url: q.link || q.leetcode_link,
            links: { lc: q.link || q.leetcode_link },
            difficulty: diff
          };
        });
        return {
          title,
          isHeading: true,
          questions,
          subcategories: []
        };
      });
    }
    // SDE format (object with array values)
    else if (!Array.isArray(data) && typeof data === 'object') {
      normalized = Object.keys(data).map(category => {
        const questions = data[category].map(q => {
          totalQuestions++;
          return {
            id: q.id,
            title: q.Question,
            url: q.Question_link,
            links: { lc: q.Question_link?.includes('leetcode') ? q.Question_link : null, yt: q.Solution_link },
            difficulty: 1
          };
        });
        let formattedTitle = category.toUpperCase();
        if (formattedTitle.endsWith('III')) formattedTitle = formattedTitle.slice(0, -3) + ' - III';
        else if (formattedTitle.endsWith('II')) formattedTitle = formattedTitle.slice(0, -2) + ' - II';
        else if (formattedTitle.endsWith('IV')) formattedTitle = formattedTitle.slice(0, -2) + ' - IV';
        else if (formattedTitle.endsWith('I')) formattedTitle = formattedTitle.slice(0, -1) + ' - I';

        return {
          title: formattedTitle,
          isHeading: true,
          questions,
          subcategories: []
        };
      });
    }
    // Blind 75 format (flat array)
    else if (Array.isArray(data)) {
      const questions = data.map(q => {
        totalQuestions++;
        let diff = 1;
        if (q.title?.toLowerCase().includes('easy')) diff = 0;
        else if (q.title?.toLowerCase().includes('hard')) diff = 2;

        return {
          id: q.id || q.title?.substring(0, 20),
          title: q.title?.split('\n')[0] || 'Unknown Problem',
          url: q.url || q.link,
          links: { lc: q.url || q.link },
          difficulty: diff
        };
      });
      normalized = [{
        title: 'All Problems',
        isHeading: false, // Don't make it a collapsible heading for Blind75
        questions,
        subcategories: []
      }];
    }

    return {
      info: sheetInfo,
      data: normalized,
      totalQuestions
    };
  } catch (error) {
    console.error("Failed to load sheet data", error);
    return null;
  }
};
