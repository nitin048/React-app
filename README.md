# React Learning Projects 🚀

A collection of React projects built while learning React fundamentals, hooks, and state management using **Vite** and **Tailwind CSS**.

---

## 📚 Projects Overview

| Project                | Description                                   | Key Concepts                   |
| ---------------------- | --------------------------------------------- | ------------------------------ |
| **07-Functions**       | React component functions and basic structure | Components, JSX                |
| **08-useState**        | Introduction to `useState` hook               | State management               |
| **09-useState-Adv**    | Advanced `useState` patterns                  | Complex state, arrays, objects |
| **10-form-handling**   | Form handling with controlled components      | Forms, events, validation      |
| **11-two_way_binding** | Two-way data binding patterns                 | Controlled inputs              |
| **12-Notes_App**       | Complete notes app with CRUD operations       | Full app, state management     |
| **13-localStorage**    | Working with browser localStorage             | localStorage API, persistence  |
| **14-API_Calling**     | Fetching data from REST APIs                  | fetch, useEffect, async/await  |
| **ui_project**         | UI components and page layouts                | Component composition, styling |

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

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 8** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **ESLint** - Code linting
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
   cd 12-Notes_App
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

### Step 1: Create Vite Project

```bash
# Using npm
npm create vite@latest my-project-name -- --template react-ts

# Or using yarn
yarn create vite my-project-name --template react-ts
```

### Step 2: Navigate to Project

```bash
cd my-project-name
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Install Axios (for API calls)

```bash
npm install axios
```

### Step 5: Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 5: Configure Tailwind

**Update `tailwind.config.js`:**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 6: Add Tailwind to CSS

**Update `src/index.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 7: Start Development

```bash
npm run dev
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

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📝 Notes

These projects are part of my React learning journey, focusing on:

- ✅ Component architecture and composition
- ✅ State management with hooks (`useState`, `useEffect`)
- ✅ Form handling and validation
- ✅ Event handling and user interactions
- ✅ Styling with Tailwind CSS utility classes
- ✅ TypeScript for type safety
- ✅ Modern build tools (Vite)

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
