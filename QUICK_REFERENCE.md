# ⚡ Quick Reference

Fast access to common commands and information.

---

## 🚀 Quick Start

```bash
# Clone repository
git clone <repository-url>
cd reactLearning

# Run any project
cd projects/<project-name>
npm install
npm run dev
```

---

## 📁 Project Locations

All projects are in the `projects/` folder:

```
projects/
├── 01-Functions/
├── 02-useState/
├── 03-useState-Advanced/
├── 04-Form-Handling/
├── 05-Two-Way-Binding/
├── 06-Notes-App/
├── 07-LocalStorage/
├── 08-API-Calling/
├── 09-useEffect/
├── 10-Gallery-Project/
├── 11-React-Router-DOM/
├── 12-Advanced-Routing/
└── 13-Context-API/
```

---

## 🛠️ Common Commands

### Development

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (usually http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

### Git

```bash
git status                    # Check status
git add .                     # Stage all changes
git commit -m "message"       # Commit changes
git push origin main          # Push to remote
git checkout -b feature-name  # Create new branch
```

---

## 📚 Documentation Links

| Document                                         | Purpose            |
| ------------------------------------------------ | ------------------ |
| [README.md](./README.md)                         | Main documentation |
| [GETTING_STARTED.md](./GETTING_STARTED.md)       | Beginner's guide   |
| [docs/README.md](./docs/README.md)               | Documentation hub  |
| [docs/PROJECT_INDEX.md](./docs/PROJECT_INDEX.md) | All projects       |
| [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md)   | How to contribute  |

---

## 🎯 Learning Path

### Beginner (Start Here)

```
01-Functions → 02-useState → 04-Form-Handling → 05-Two-Way-Binding
```

### Intermediate

```
06-Notes-App → 07-LocalStorage → 08-API-Calling → 09-useEffect
```

### Advanced

```
10-Gallery-Project → 11-React-Router-DOM → 12-Advanced-Routing → 13-Context-API
```

---

## 🔧 Troubleshooting

### Port Already in Use

```bash
lsof -ti:5173 | xargs kill -9
```

### Module Not Found

```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear Cache

```bash
npm run build -- --force
```

---

## 📊 Project Stats

- **Total Projects:** 13
- **Beginner:** 5 projects
- **Intermediate:** 4 projects
- **Advanced:** 4 projects

---

## 🎨 Tech Stack

- **React** 19.x
- **TypeScript** 5.8.x
- **Vite** 6.x-8.x
- **Tailwind CSS** 4.x
- **React Router** 7.x

---

## 📝 Naming Conventions

### Components

```typescript
// ✅ Good - PascalCase
UserProfile.tsx
NavBar.tsx

// ❌ Bad
userProfile.tsx
navbar.tsx
```

### Variables

```typescript
// ✅ Good - camelCase
const userName = 'John'
const [isLoading, setIsLoading] = useState(false)

// ❌ Bad
const UserName = 'John'
const [IsLoading, SetIsLoading] = useState(false)
```

### Constants

```typescript
// ✅ Good - UPPER_SNAKE_CASE
const API_URL = 'https://api.example.com'
const MAX_ITEMS = 100

// ❌ Bad
const apiUrl = 'https://api.example.com'
const maxItems = 100
```

---

## 🔗 Useful Links

### Official Docs

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)

### Tools

- [VS Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

---

## 💡 Quick Tips

1. **Start Simple** - Begin with project 01
2. **Read Code** - Don't just run it, understand it
3. **Experiment** - Change things and see what happens
4. **Use DevTools** - Press F12 in browser
5. **Check Console** - Look for errors and warnings

---

## 🆘 Need Help?

1. Check project README
2. Review [GETTING_STARTED.md](./GETTING_STARTED.md)
3. Search [docs/](./docs/)
4. Open GitHub issue

---

## ⚡ VS Code Shortcuts

```
rafce  - React Arrow Function Component Export
rafc   - React Arrow Function Component
ctrl+` - Toggle terminal
cmd+p  - Quick file open
cmd+shift+p - Command palette
```

---

## 📦 Project Structure

```
reactLearning/
├── projects/          # All learning projects
├── docs/              # Documentation
├── .vscode/           # VS Code settings
├── README.md          # Main docs
├── GETTING_STARTED.md # Quick start
└── QUICK_REFERENCE.md # This file
```

---

**Last Updated:** May 2026  
**Version:** 2.0.0

---

_For detailed information, see [README.md](./README.md) or [GETTING_STARTED.md](./GETTING_STARTED.md)_
