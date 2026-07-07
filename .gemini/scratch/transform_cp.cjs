const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/data/striver_cp.json'), 'utf8'));

// Group by heading (extract just the category name, without the count)
const groups = {};
const groupOrder = [];

data.forEach(item => {
  const headingParts = item.heading.split('\n');
  const categoryName = headingParts[0].trim();
  
  if (!groups[categoryName]) {
    groups[categoryName] = [];
    groupOrder.push(categoryName);
  }
  groups[categoryName].push(item);
});

// Build the new structure matching neetcode150 format
let globalCounter = 1;
const result = groupOrder.map(heading => {
  const problems = groups[heading].map(item => {
    const sanitizedTitle = item.title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .substring(0, 15);
    
    const id = `strivercp_${sanitizedTitle}_${globalCounter}`;
    globalCounter++;
    
    return {
      id: id,
      title: item.title,
      link: item.link,
      difficulty: "Medium",
      platform: item.platform
    };
  });

  return {
    heading: heading,
    problems: problems
  };
});

// Count total
let total = 0;
result.forEach(g => { total += g.problems.length; });
console.log('Total problems:', total);

// Check for duplicate IDs
const allIds = [];
result.forEach(g => g.problems.forEach(p => allIds.push(p.id)));
const uniqueIds = new Set(allIds);
console.log('Unique IDs:', uniqueIds.size);
console.log('Duplicate IDs:', allIds.length - uniqueIds.size);

if (allIds.length !== uniqueIds.size) {
  // Find duplicates
  const seen = {};
  allIds.forEach(id => {
    seen[id] = (seen[id] || 0) + 1;
  });
  Object.entries(seen).filter(([, count]) => count > 1).forEach(([id, count]) => {
    console.log(`  Duplicate: ${id} (${count} times)`);
  });
}

fs.writeFileSync(
  path.join(__dirname, '../../public/data/striver_cp.json'),
  JSON.stringify(result, null, 4) + '\n'
);

console.log('Done! File written successfully.');
console.log('Number of categories:', result.length);
