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
| **ui_project**         | UI components and page layouts                | Component composition, styling |

---

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 8** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
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

### Step 4: Install Tailwind CSS

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
