# React Learning Journey 🚀

A comprehensive collection of React projects demonstrating core concepts, hooks, state management, routing, and modern UI patterns with TypeScript and Tailwind CSS.

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite)

---

## 📚 Projects Overview

| #   | Project               | Concepts                       | Tech Stack                            | Status |
| --- | --------------------- | ------------------------------ | ------------------------------------- | ------ |
| 01  | **Functions**         | Event Handlers, Mouse Events   | React, TypeScript                     | ✅     |
| 02  | **useState**          | State Management Basics        | React, TypeScript                     | ✅     |
| 03  | **useState Advanced** | Arrays, Objects, Batch Updates | React, TypeScript                     | ✅     |
| 04  | **Form Handling**     | Forms, Events, preventDefault  | React, TypeScript                     | ✅     |
| 05  | **Two-Way Binding**   | Controlled Components          | React, TypeScript                     | ✅     |
| 06  | **Notes App**         | CRUD Operations, State         | React, TypeScript                     | ✅     |
| 07  | **LocalStorage**      | Browser Storage, Persistence   | React, TypeScript                     | ✅     |
| 08  | **API Calling**       | Axios, Fetch, Async/Await      | React, TypeScript, Axios              | ✅     |
| 09  | **useEffect**         | Side Effects, Lifecycle        | React, TypeScript                     | ✅     |
| 10  | **Gallery Project**   | Complex UI, Animations         | React, TypeScript, Tailwind           | ✅     |
| 11  | **React Router DOM**  | Routing, Navigation            | React Router v7, TypeScript           | ✅     |
| 12  | **Advanced Routing**  | Nested Routes, Params          | React Router v7, TypeScript, Tailwind | ✅     |
| 13  | **Context API**       | Global State, Theme Toggle     | React, TypeScript, Tailwind           | ✅     |

---

## 🎯 Learning Path

### **Fundamentals** (Projects 01-05)

- Event handling and user interactions
- State management with useState
- Form handling and controlled components
- Two-way data binding

### **Intermediate** (Projects 06-09)

- Building real applications (Notes App)
- Browser APIs (localStorage)
- API integration and data fetching
- Side effects with useEffect

### **Advanced** (Projects 10-13)

- Complex UI with animations (Gallery)
- Client-side routing (React Router)
- Nested routes and dynamic routing
- Global state management (Context API)

---

## 🚀 Quick Start

### **Prerequisites**

- Node.js (v22.x or higher)
- npm (v11.x or higher)

### **Clone Repository**

```bash
git clone <repository-url>
cd reactLearning
```

### **Run Any Project**

```bash
# Navigate to projects folder, then choose a project
cd projects/13-Context-API

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

> 💡 **New to this repo?** Check out [GETTING_STARTED.md](./GETTING_STARTED.md) for a detailed beginner's guide!

---

## 📖 Detailed Project Descriptions

### **01-Functions**

Event handling fundamentals with mouse events and wheel events.

**Key Concepts:**

- `onClick`, `onMouseMove`, `onWheel` events
- Event object properties
- Event handlers

---

### **02-useState**

Introduction to React state management.

**Key Concepts:**

- `useState` hook basics
- State updates
- Multiple state variables
- Counter implementation

---

### **03-useState-Advanced**

Advanced state management patterns.

**Key Concepts:**

- State with arrays and objects
- Immutable updates
- Batch state updates
- Spread operator usage

---

### **04-Form-Handling**

Form submission and event handling.

**Key Concepts:**

- Form events
- `preventDefault()`
- Input handling
- Form submission

---

### **05-Two-Way-Binding**

Controlled components and two-way data binding.

**Key Concepts:**

- Controlled inputs
- Value and onChange
- Real-time updates
- Form state management

---

### **06-Notes-App**

Full CRUD application for managing notes.

**Key Concepts:**

- Create, Read, Update, Delete operations
- Array manipulation
- State management
- TypeScript interfaces

---

### **07-LocalStorage**

Browser storage integration.

**Key Concepts:**

- localStorage API
- Data persistence
- JSON serialization
- State initialization from storage

---

### **08-API-Calling**

External API integration with Axios.

**Key Concepts:**

- Axios library
- Async/await
- API requests
- Data fetching
- Error handling

**API Used:** [Picsum Photos](https://picsum.photos/)

---

### **09-useEffect**

Side effects and component lifecycle.

**Key Concepts:**

- `useEffect` hook
- Dependency arrays
- Cleanup functions
- Component lifecycle

---

### **10-Gallery-Project** ⭐

Beautiful image gallery with advanced features.

**Features:**

- Infinite scroll pagination
- Like/unlike functionality
- Comment system
- Image modal view
- Glass morphism UI
- Smooth animations
- Responsive design

**Tech:** React 19, TypeScript, Tailwind CSS 4, Axios

---

### **11-React-Router-DOM**

Client-side routing basics.

**Key Concepts:**

- React Router v7
- Routes and Route components
- Link navigation
- BrowserRouter
- Basic routing

---

### **12-Advanced-Routing** ⭐

Advanced routing patterns.

**Features:**

- Nested routes
- Dynamic route parameters
- 404 page with spotlight effect
- Navigation components
- Sticky footer
- Tailwind CSS styling

**Key Concepts:**

- Nested routing
- `useParams` hook
- `useNavigate` hook
- Route parameters
- Outlet component

---

### **13-Context-API** ⭐⭐

Global state management with Context API.

**Features:**

- Dark/Light theme toggle
- Global state management
- Custom hooks
- Beautiful gradient UI
- Glass morphism effects
- Smooth transitions
- Responsive design

**Key Concepts:**

- `createContext`
- `useContext` hook
- Provider pattern
- Custom hooks
- TypeScript with Context
- Theme management

---

## 🛠️ Tech Stack

### **Core Technologies**

- **React** 19.x - UI Library
- **TypeScript** 5.x - Type Safety
- **Vite** 6.x-8.x - Build Tool

### **Styling**

- **Tailwind CSS** 4.x - Utility-first CSS
- **CSS3** - Custom styles

### **Routing**

- **React Router DOM** 7.x - Client-side routing

### **HTTP Client**

- **Axios** - API requests

### **Development Tools**

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TS linting

---

## 📁 Repository Structure

```
reactLearning/
├── projects/                      # 🎯 All Learning Projects
│   ├── 01-Functions/              # Event handling
│   ├── 02-useState/               # State basics
│   ├── 03-useState-Advanced/      # Advanced state
│   ├── 04-Form-Handling/          # Forms
│   ├── 05-Two-Way-Binding/        # Controlled components
│   ├── 06-Notes-App/              # CRUD app
│   ├── 07-LocalStorage/           # Browser storage
│   ├── 08-API-Calling/            # API integration
│   ├── 09-useEffect/              # Side effects
│   ├── 10-Gallery-Project/        # Image gallery ⭐
│   ├── 11-React-Router-DOM/       # Basic routing
│   ├── 12-Advanced-Routing/       # Advanced routing ⭐
│   ├── 13-Context-API/            # Context API ⭐⭐
│   └── ui_project/                # UI experiments
├── docs/                          # 📚 Documentation
│   ├── guides/                    # Additional guides
│   │   ├── COMMIT_GUIDE.md        # Commit guidelines
│   │   └── FINAL_SUMMARY.md       # Project summary
│   ├── CHANGELOG.md               # Version history
│   ├── CODE_OF_CONDUCT.md         # Community guidelines
│   ├── CONTRIBUTING.md            # Contribution guide
│   ├── NAMING_CONVENTIONS.md      # Coding standards
│   └── SECURITY.md                # Security policy
├── .vscode/                       # ⚙️ VS Code settings
├── .github/                       # 🔧 GitHub workflows
├── .env.example                   # Environment template
├── .gitignore                     # Git ignore rules
├── GETTING_STARTED.md             # 🚀 Quick start guide
├── LICENSE                        # ⚖️ MIT License
└── README.md                      # 📖 This file
```

---

## 🎓 Key Learnings

### **React Fundamentals**

✅ Component architecture  
✅ Props and state management  
✅ Event handling  
✅ Conditional rendering  
✅ Lists and keys

### **React Hooks**

✅ `useState` - State management  
✅ `useEffect` - Side effects  
✅ `useContext` - Global state  
✅ `useParams` - Route parameters  
✅ `useNavigate` - Programmatic navigation  
✅ Custom hooks

### **TypeScript**

✅ Type safety  
✅ Interfaces and types  
✅ Generic types  
✅ Type inference  
✅ Props typing

### **Modern Patterns**

✅ Context API for state management  
✅ Custom hooks for reusability  
✅ Component composition  
✅ Controlled components  
✅ Error boundaries

### **Styling**

✅ Tailwind CSS utility classes  
✅ Responsive design  
✅ Animations and transitions  
✅ Glass morphism effects  
✅ Gradient backgrounds

---

## 🎨 Design Patterns Used

### **Component Patterns**

- Presentational vs Container components
- Compound components
- Higher-order components (HOC)
- Render props
- Custom hooks

### **State Management**

- Local state with useState
- Global state with Context API
- Lifting state up
- State colocation

### **Code Organization**

- Feature-based folder structure
- Separation of concerns
- DRY (Don't Repeat Yourself)
- Single Responsibility Principle

---

## 📚 Resources & Documentation

### **Official Documentation**

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vite.dev/)

### **Learning Resources**

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Cheatsheet](https://nerdcave.com/tailwind-cheat-sheet)
- [React Patterns](https://reactpatterns.com/)

### **Project Documentation**

- [📚 Documentation Hub](./docs/README.md) - All documentation in one place
- [🚀 Getting Started Guide](./GETTING_STARTED.md) - Quick start for beginners
- [📑 Project Index](./docs/PROJECT_INDEX.md) - Browse all projects
- [📝 Naming Conventions](./docs/NAMING_CONVENTIONS.md) - Code standards
- [📜 Changelog](./docs/CHANGELOG.md) - Version history
- [🤝 Contributing Guide](./docs/CONTRIBUTING.md) - How to contribute

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./docs/CONTRIBUTING.md) for details on:

- Code of conduct
- Development process
- Submitting pull requests
- Coding standards

---

## 📝 Coding Standards

This repository follows strict coding standards:

### **Naming Conventions**

- **Components**: PascalCase (`UserProfile.tsx`)
- **Variables**: camelCase (`userData`, `isLoading`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`)
- **Files**: PascalCase for components, camelCase for utilities

### **Code Quality**

- ✅ TypeScript for type safety
- ✅ ESLint for code linting
- ✅ Prettier for code formatting
- ✅ No unused imports
- ✅ Proper error handling
- ✅ Meaningful variable names

See [Naming Conventions Guide](./docs/NAMING_CONVENTIONS.md) for complete details.

---

## 🔒 Security

Please report security vulnerabilities to the repository maintainer. See [SECURITY.md](./docs/SECURITY.md) for details.

---

## 📊 Project Statistics

- **Total Projects**: 13
- **Lines of Code**: 10,000+
- **Components**: 50+
- **Custom Hooks**: 5+
- **Technologies**: 10+

---

## 🎯 Future Enhancements

### **Planned Projects**

- [ ] Redux Toolkit integration
- [ ] React Query for data fetching
- [ ] Form validation with React Hook Form
- [ ] Authentication with JWT
- [ ] Real-time features with WebSockets
- [ ] Testing with Jest and React Testing Library
- [ ] Storybook for component documentation
- [ ] Performance optimization techniques

---

## 🏆 Best Practices Implemented

✅ **Modern React** - No class components, hooks-based  
✅ **TypeScript** - Full type safety  
✅ **Clean Code** - Readable and maintainable  
✅ **Component Reusability** - DRY principle  
✅ **Performance** - Optimized renders  
✅ **Accessibility** - WCAG compliant  
✅ **Responsive Design** - Mobile-first approach  
✅ **Error Handling** - Graceful error management  
✅ **Code Splitting** - Lazy loading  
✅ **SEO Friendly** - Semantic HTML

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

**Nitin Pradhan**

---

## 🙏 Acknowledgments

- React team for the amazing library
- TypeScript team for type safety
- Tailwind CSS for utility-first styling
- Vite team for blazing fast builds
- Open source community

---

## 📞 Support

If you have any questions or need help:

- Open an issue on GitHub
- Check existing documentation
- Review the code examples

---

## ⭐ Star This Repository

If you find this repository helpful, please give it a star! ⭐

---

**Happy Learning! 🚀**

_Built with ❤️ using React, TypeScript, and Tailwind CSS_

---

**Last Updated**: May 2026  
**Version**: 2.0.0  
**Status**: Active Development
