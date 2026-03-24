# A2Z DSA Tracker

A premium, interactive web app to track your progress through **Striver's A2Z DSA Course** — 454 problems across 16 steps.

![Dark Theme](https://img.shields.io/badge/theme-dark%20%2F%20light-10b981)
![Static Site](https://img.shields.io/badge/stack-HTML%20%2F%20CSS%20%2F%20JS-3b82f6)

## ✨ Features

- **Progress Tracking** — Check off problems as you solve them, with progress bars at every level
- **🎉 Celebrations** — 8 unique animations triggered on completion (confetti, emoji rain, star burst, etc.)
- **⭐ Revision Marks** — Star any question you want to revisit later
- **🔍 Search** — Instant search across all topics and problems (⌘K shortcut)
- **🎯 Filters** — Filter by All / Done / Revision / Not Done
- **🌙 Dark & Light Mode** — Toggle between themes
- **🔥 Streak Counter** — Track your daily solving streak
- **📦 Backup & Restore** — Export/Import progress as JSON
- **📱 Responsive** — Works on desktop and mobile

## 🚀 Getting Started

### Run Locally

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/a2z-dsa-tracker.git
cd a2z-dsa-tracker

# Serve with any static server
python3 -m http.server 3000
# or
npx serve .
```

Open **http://localhost:3000** in your browser.

> ⚠️ Don't open `index.html` directly as a file — the JSON data won't load due to browser security restrictions.

### Deploy to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Deploy — zero config needed!

## 📁 Project Structure

```
├── index.html          # Main app (HTML + JS)
├── styles.css          # All styles (dark/light themes)
├── a2z_flawless.json   # Problem data (454 questions)
├── assets/
│   └── logo/           # Platform logos (LeetCode, GFG, YouTube, etc.)
├── .gitignore
└── README.md
```

## 🛠 Tech Stack

- **HTML5** + **Vanilla JS** — No frameworks, no build step
- **CSS3** — Custom properties, glassmorphism, animations
- **localStorage** — All progress stored locally in the browser

## 📸 Preview

| Feature | Description |
|---------|-------------|
| 🎯 Filter Bar | Quickly view Done, Revision, or Not Done questions |
| ⭐ Revision Stars | Mark any question for later review |
| 🎉 Celebrations | Confetti, emoji rain, trophies on completion |
| 📦 Backup | Export/import your full progress as JSON |

## 📄 License

MIT — feel free to fork and customize!
