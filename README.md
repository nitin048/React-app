# React Learning Projects 🚀

A comprehensive collection of React projects built while mastering React fundamentals, hooks, state management, routing, and modern UI development using **Vite**, **TypeScript**, and **Tailwind CSS**.

**Developer:** Nitin Pradhan

---

## 📚 Projects Overview

| Project                   | Description                                                     | Key Concepts                                 | Libraries Used                    |
| ------------------------- | --------------------------------------------------------------- | -------------------------------------------- | --------------------------------- |
| **07-Functions**          | React component functions and basic structure                   | Components, JSX                              | React, Vite                       |
| **08-useState**           | Introduction to `useState` hook                                 | State management                             | React, Vite                       |
| **09-useState-Adv**       | Advanced `useState` patterns                                    | Complex state, arrays, objects               | React, Vite                       |
| **10-form-handling**      | Form handling with controlled components                        | Forms, events, validation                    | React, Vite                       |
| **11-two_way_binding**    | Two-way data binding patterns                                   | Controlled inputs                            | React, Vite                       |
| **12-Notes_App**          | Complete notes app with CRUD operations                         | Full app, state management                   | React, Vite                       |
| **13-localStorage**       | Working with browser localStorage                               | localStorage API, persistence                | React, Vite, Axios                |
| **14-API_Calling**        | Fetching data from REST APIs                                    | fetch, useEffect, async/await                | React, Vite, Axios                |
| **16-Gallery_Project** ⭐ | Award-winning photo gallery with likes, comments & landing page | sessionStorage, glassmorphism, animations    | React, Vite, Axios, Tailwind CSS  |
| **17-React-Router-DOM**   | Introduction to React Router v7                                 | Routing, navigation, Link, NavLink           | React, Vite, React Router DOM v7  |
| **18-Adv_Route**          | Advanced routing patterns and nested routes                     | Nested routes, dynamic routing, route params | React, Vite, React Router DOM, TW |
| **ui_project**            | UI components and page layouts                                  | Component composition, styling               | React, Vite                       |

---

## 🌟 Featured Project: Lumina Gallery (16-Gallery_Project)

A stunning, production-ready photo gallery application with modern design principles inspired by Awwwards and Untitled UI.

### ✨ Features

- **Landing Page**: Beautiful hero section with kinetic typography and glassmorphism effects
- **Photo Gallery**: Curated collection from Picsum Photos API with pagination
- **Like System**: Heart animation with sessionStorage persistence
- **Comment System**: Add/delete comments with timestamps
- **Image Modal**: Full-screen view with dark glass theme
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern UI**: Glassmorphism, 3D card effects, bokeh backgrounds, nebula clouds
- **Navigation**: Home button, pagination controls, smooth scrolling

### 🎨 Design Highlights

- Award-winning design patterns from Awwwards
- Untitled UI component library integration
- Custom animations (float, glow, pulse, shimmer)
- Gradient overlays and neon text effects
- Professional footer with developer credit

### 🛠️ Tech Stack

- React 19 + TypeScript 6
- Vite 8 + Tailwind CSS 4
- Axios for API calls
- sessionStorage for data persistence
- Component-based architecture with custom hooks

---

## 🧭 React Router DOM Projects

### 17-React-Router-DOM

Introduction to client-side routing with React Router v7.

**Key Features:**

- Basic routing setup with `BrowserRouter`
- Navigation with `Link` and `NavLink`
- Multiple pages (Home, About, Contact)
- Active link styling
- Navbar component with routing

**New Library:** `react-router-dom@7.15.1`

### 18-Adv_Route

Advanced routing patterns and techniques.

**Key Features:**

- Nested routes and layouts
- Dynamic route parameters
- Protected routes
- 404 Not Found pages
- Programmatic navigation
- Route guards and redirects

**Libraries:** `react-router-dom@7.15.1` + `tailwindcss@4.3.0`

---

## 🛠️ Tech Stack

### Core Technologies

- **React 19.2.4** - Latest React with new features
- **TypeScript 6.0.2** - Type safety and better DX
- **Vite 8.0.4** - Lightning-fast build tool
- **React Router DOM 7.15.1** - Client-side routing (NEW)

### Styling & UI

- **Tailwind CSS 4.3.0** - Utility-first CSS framework (NEW)
- **@tailwindcss/vite 4.3.0** - Vite plugin for Tailwind v4 (NEW)
- **PostCSS 8.5.14** - CSS transformations
- **Autoprefixer 10.5.0** - Vendor prefixes

### HTTP & Data

- **Axios 1.16.1** - HTTP client for API requests

### Development Tools

- **ESLint 9.39.4** - Code linting
- **TypeScript ESLint 8.58.0** - TypeScript linting rules
- **Babel 7.29.0** - JavaScript compiler
- **React Compiler** - Automatic optimization (NEW)
- **Prettier** - Code formatting

---

## 🌐 API Resources

### JSONPlaceholder - Free Fake REST API

For testing and prototyping, we use **JSONPlaceholder**: https://jsonplaceholder.typicode.com/

**Available Endpoints:**

```javascript
// Users
GET https://jsonplaceholder.typicode.com/users

// Posts
GET https://jsonplaceholder.typicode.com/posts
GET https://jsonplaceholder.typicode.com/posts/1
POST https://jsonplaceholder.typicode.com/posts

// Comments
GET https://jsonplaceholder.typicode.com/comments

// Albums
GET https://jsonplaceholder.typicode.com/albums

// Photos
GET https://jsonplaceholder.typicode.com/photos

// Todos
GET https://jsonplaceholder.typicode.com/todos
```

**Example Usage in React:**

```typescript
// Using fetch API
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
}

// Using Axios (Recommended)
import axios from 'axios'

const fetchUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(response.data)
}

// Fetch posts with Axios
const fetchPosts = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

// POST request with Axios
const createPost = async () => {
  const newPost = {
    title: 'My Post',
    body: 'This is my post content',
    userId: 1,
  }
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    newPost
  )
  console.log(response.data)
}
```

**Features:**

- ✅ No authentication required
- ✅ CORS enabled
- ✅ Supports GET, POST, PUT, PATCH, DELETE
- ✅ Returns realistic fake data
- ✅ Perfect for learning and testing

---

## 🛠️ Tech Stack

### Core Technologies

- **React 19.2.4** - Latest React with new features
- **TypeScript 6.0.2** - Type safety and better DX
- **Vite 8.0.4** - Lightning-fast build tool
- **React Router DOM 7.15.1** - Client-side routing (NEW)

### Styling & UI

- **Tailwind CSS 4.3.0** - Utility-first CSS framework (NEW)
- **@tailwindcss/vite 4.3.0** - Vite plugin for Tailwind v4 (NEW)
- **PostCSS 8.5.14** - CSS transformations
- **Autoprefixer 10.5.0** - Vendor prefixes

### HTTP & Data

- **Axios 1.16.1** - HTTP client for API requests

### Development Tools

- **ESLint 9.39.4** - Code linting
- **TypeScript ESLint 8.58.0** - TypeScript linting rules
- **Babel 7.29.0** - JavaScript compiler
- **React Compiler** - Automatic optimization (NEW)
- **Prettier** - Code formatting

---

## 📋 Prerequisites

Before running any project, make sure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

Check your versions:

```bash
node --version
npm --version
```

---

## 🚀 Quick Start

### Running an Existing Project

1. **Clone the repository**

   ```bash
   git clone https://github.com/nitin048/React-app.git
   cd React-app
   ```

2. **Navigate to any project**

   ```bash
   cd 16-Gallery_Project
   # or
   cd 17-React-Router-DOM
   # or
   cd 18-Adv_Route
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   - The app will run at `http://localhost:5173`
   - Vite will show the exact URL in the terminal

---

## 📦 Available Scripts

Each project has these npm scripts:

| Command           | Description                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start development server with hot reload  |
| `npm run build`   | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally          |
| `npm run lint`    | Run ESLint to check code quality          |
| `npm run format`  | Format code with Prettier                 |

---

## 🆕 Creating a New React + Vite + Tailwind Project

### Method 1: React + Vite + Tailwind (Recommended)

```bash
# Step 1: Create Vite project with React + TypeScript
npm create vite@latest my-project-name -- --template react-ts

# Step 2: Navigate to project
cd my-project-name

# Step 3: Install dependencies
npm install

# Step 4: Install Tailwind CSS v4 (Latest)
npm install -D tailwindcss@next @tailwindcss/vite@next

# Step 5: Install Axios (for API calls)
npm install axios

# Step 6: Install React Router (for routing)
npm install react-router-dom
```

### Method 2: Configure Tailwind CSS v4

**Update `vite.config.ts`:**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**Update `src/index.css`:**

```css
@import 'tailwindcss';

/* Your custom styles here */
```

### Method 3: Start Development

```bash
npm run dev
```

---

## 🧭 Setting Up React Router DOM

### Installation

```bash
npm install react-router-dom
```

### Basic Setup

**Update `src/main.tsx`:**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
```

**Update `src/App.tsx`:**

```tsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
```

### Advanced Routing Features

```tsx
// Dynamic routes
<Route path="/user/:id" element={<UserProfile />} />

// Nested routes
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

// 404 Not Found
<Route path="*" element={<NotFound />} />

// Programmatic navigation
import { useNavigate } from 'react-router-dom'

function MyComponent() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/about')
  }

  return <button onClick={handleClick}>Go to About</button>
}
```

---

## 🌐 Working with Axios

Axios is installed in all projects for making HTTP requests.

### Basic Usage

```typescript
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // GET request
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error:', error)
        setLoading(false)
      })
  }, [])

  return <div>{loading ? 'Loading...' : JSON.stringify(data)}</div>
}
```

### Axios Methods

```typescript
// GET request
axios.get('/users')

// POST request
axios.post('/users', { name: 'John', age: 30 })

// PUT request
axios.put('/users/1', { name: 'John Updated' })

// PATCH request
axios.patch('/users/1', { age: 31 })

// DELETE request
axios.delete('/users/1')
```

### Async/Await with Axios

```typescript
const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    console.log(response.data)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

### Axios Configuration

```typescript
// Set base URL
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

// Set default headers
axios.defaults.headers.common['Authorization'] = 'Bearer token'

// Create custom instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})
```

---

## 🎨 Using Tailwind CSS

Tailwind uses utility classes directly in your JSX:

```tsx
function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>
    </div>
  )
}
```

**Common Tailwind Classes:**

- Layout: `flex`, `grid`, `container`
- Spacing: `p-4`, `m-2`, `gap-4`
- Colors: `bg-blue-500`, `text-white`
- Typography: `text-xl`, `font-bold`
- Responsive: `md:text-2xl`, `lg:flex`

---

## 🔧 Project Structure

```
project-name/
├── node_modules/       # Dependencies (auto-generated)
├── public/            # Static assets
│   ├── favicon.svg
│   └── icons.svg
├── src/               # Source code
│   ├── assets/        # Images, fonts, etc.
│   ├── components/    # React components
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles (Tailwind)
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript config
├── vite.config.ts     # Vite config
└── eslint.config.js   # ESLint config
```

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Vite will automatically try the next available port
# Or specify a custom port:
npm run dev -- --port 3000
```

### Tailwind Styles Not Working

1. Check `index.css` has Tailwind imports
2. Verify `tailwind.config.js` content paths
3. Restart dev server: `Ctrl+C` then `npm run dev`

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Check TypeScript version
npm list typescript

# Rebuild TypeScript
npm run build
```

---

## 🔒 Security & Best Practices

### Security Checks

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Check outdated packages
npm outdated
```

### Environment Variables

**NEVER commit `.env` files!** Use `.env.example` as a template:

```bash
# Copy the example file
cp .env.example .env

# Add your actual values to .env
```

### Before Committing

- ✅ Run `npm run lint` to check code quality
- ✅ Run `npm run format` to format code
- ✅ Run `npm audit` to check for vulnerabilities
- ✅ Ensure no secrets or API keys in code
- ✅ Check `.gitignore` is working properly

### Important Files

- **SECURITY.md** - Security policies and reporting
- **CONTRIBUTING.md** - How to contribute safely
- **CODE_OF_CONDUCT.md** - Community guidelines
- **.env.example** - Template for environment variables
- **LICENSE** - MIT License
- **.github/BRANCH_PROTECTION.md** - Branch protection setup guide

---

## 🔐 Branch Protection

The `main` branch is **protected** - no one can push directly to it (including the owner).

### How to Contribute:

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes and commit**

   ```bash
   git add .
   git commit -m "Add: your feature description"
   ```

3. **Push to the feature branch**

   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request on GitHub**
   - Go to the repository on GitHub
   - Click "Compare & pull request"
   - Fill out the PR template
   - Wait for review and approval
   - Owner will merge after approval

### Protection Rules:

- ❌ No direct pushes to `main`
- ✅ All changes via Pull Requests
- ✅ Code review required (owner approval)
- ✅ CI/CD checks must pass
- ✅ No force pushes allowed
- ✅ Branch cannot be deleted

**See [Branch Protection Guide](.github/BRANCH_PROTECTION.md) for detailed setup instructions.**

---

## 📚 Learning Resources

### Official Documentation

- [React 19 Documentation](https://react.dev/) - Latest React features
- [Vite Documentation](https://vite.dev/) - Build tool guide
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs) - Utility-first CSS
- [React Router v7 Documentation](https://reactrouter.com/) - Client-side routing (NEW)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide
- [Axios Documentation](https://axios-http.com/docs/intro) - HTTP client

### Design Resources

- [Awwwards](https://www.awwwards.com/) - Award-winning web design inspiration
- [Untitled UI](https://www.untitledui.com/) - Professional UI component library
- [Tailwind UI](https://tailwindui.com/) - Official Tailwind components

### API Resources

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Free fake REST API
- [Picsum Photos](https://picsum.photos/) - Random image API

---

## 📝 Notes

These projects are part of my React learning journey, focusing on:

- ✅ Component architecture and composition
- ✅ State management with hooks (`useState`, `useEffect`)
- ✅ Form handling and validation
- ✅ Event handling and user interactions
- ✅ Client-side routing with React Router v7 (NEW)
- ✅ API integration with Axios
- ✅ Browser storage (localStorage, sessionStorage)
- ✅ Styling with Tailwind CSS v4 utility classes (NEW)
- ✅ TypeScript for type safety
- ✅ Modern build tools (Vite 8)
- ✅ Award-winning UI/UX design patterns (NEW)
- ✅ Glassmorphism and modern animations (NEW)
- ✅ Component-based architecture with custom hooks (NEW)

---

## 📄 License

This project is open source and available for learning purposes.

---

## 👤 Author

**Nitin Pradhan**

- GitHub: [@nitin048](https://github.com/nitin048)

---

## 🤝 Contributing

Feel free to fork this repository and submit pull requests. This is a learning project, so suggestions and improvements are welcome!

---

**Happy Coding! 💻✨**
