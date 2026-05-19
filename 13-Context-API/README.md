# 19-Context_API 🎨

A beautiful React + TypeScript project demonstrating the **Context API** for global state management with a stunning dark/light theme toggle.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.4.2-646CFF?style=for-the-badge&logo=vite)

---

## 🚀 Features

### ✨ **Context API Implementation**

- ✅ Global state management without prop drilling
- ✅ Custom `useTheme()` hook for easy access
- ✅ TypeScript interfaces for type safety
- ✅ Provider pattern with React Context

### 🎨 **Beautiful UI/UX**

- ✅ **Dark Mode**: Pure dark theme (black, gray-900, gray-800)
- ✅ **Light Mode**: Colorful gradients (blue, purple, pink)
- ✅ Smooth 500ms transitions
- ✅ Glass morphism effects
- ✅ Hover animations and scale effects
- ✅ Sticky navbar with backdrop blur
- ✅ Responsive design for all screen sizes

### 🎯 **Modern Design Patterns**

- ✅ Gradient backgrounds
- ✅ Backdrop blur effects
- ✅ Feature cards with hover states
- ✅ Professional typography
- ✅ Smooth color transitions

---

## 📦 Tech Stack

| Technology               | Version | Purpose        |
| ------------------------ | ------- | -------------- |
| **React**                | 19.1.0  | UI Library     |
| **TypeScript**           | 5.8.3   | Type Safety    |
| **Vite**                 | 6.4.2   | Build Tool     |
| **Tailwind CSS**         | 4.0     | Styling        |
| **@tailwindcss/postcss** | Latest  | PostCSS Plugin |

---

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 📁 Project Structure

```
19-Context_API/
├── src/
│   ├── Components/
│   │   ├── Navbar.tsx       # Main navigation bar
│   │   └── Nav2.tsx          # Navigation links & theme toggle
│   ├── Context/
│   │   └── ThemeContext.tsx  # Context API implementation
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

---

## 🎯 What is Context API?

Context API is a React feature that allows you to **share state across the entire app** (or part of it) without passing props down manually at every level.

### **Benefits:**

- ✅ **No Prop Drilling** - Access state from any component
- ✅ **Global State** - Share data across component tree
- ✅ **Clean Code** - Reduces prop passing complexity
- ✅ **Type Safe** - Full TypeScript support

### **Common Use Cases:**

- 🌙 Theme management (dark/light mode)
- 👤 User authentication state
- 🌍 Language/localization settings
- 🛒 Shopping cart data
- 🎨 UI preferences

---

## 💡 How It Works

### **1. Create Context & Provider** (`ThemeContext.tsx`)

```tsx
import { createContext, useState, useContext } from 'react'
import type { ReactNode } from 'react'

interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
```

### **2. Wrap App with Provider** (`main.tsx`)

```tsx
import { ThemeProvider } from './Context/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
```

### **3. Use Context in Components** (`App.tsx`, `Navbar.tsx`, etc.)

```tsx
import { useTheme } from './Context/ThemeContext'

const App = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      {/* Your content */}
    </div>
  )
}
```

---

## 🎨 Theme Implementation

### **Dark Theme Colors:**

- Background: `gray-950` → `gray-900` → `black` gradient
- Cards: `gray-800/50` with `gray-700` borders
- Text: White and gray shades
- Button: White with black text

### **Light Theme Colors:**

- Background: `blue-50` → `purple-50` → `pink-50` gradient
- Cards: `white/70` with colored borders
- Text: Gray-900 and gray-700
- Button: Purple to blue gradient

### **Transitions:**

- All color changes: `500ms` smooth transition
- Hover effects: `300ms` transform
- Scale animations on hover

---

## 🎯 Key Components

### **ThemeContext.tsx**

- Creates React Context
- Provides theme state to entire app
- Custom `useTheme()` hook for easy access

### **Navbar.tsx**

- Sticky navigation bar
- Backdrop blur effect
- Logo with theme-aware styling

### **Nav2.tsx**

- Navigation links (Home, About, Contact)
- Theme toggle button
- Smooth hover effects

### **App.tsx**

- Main application layout
- Hero section with gradient text
- Feature cards with animations
- Theme-aware styling

---

## 🚀 Features Showcase

### **1. Smooth Theme Toggle**

Click the theme button to switch between light and dark modes with smooth transitions.

### **2. Glass Morphism Cards**

Three feature cards with:

- Backdrop blur effects
- Hover scale animations
- Theme-aware colors

### **3. Gradient Text**

Large heading with gradient colors in light mode and solid white in dark mode.

### **4. Sticky Navbar**

Navigation bar that stays at the top with blur effect while scrolling.

### **5. Responsive Design**

Works perfectly on desktop, tablet, and mobile devices.

---

## 📚 Learning Objectives

This project demonstrates:

1. ✅ **Context API** - Global state management
2. ✅ **Custom Hooks** - Creating reusable hooks
3. ✅ **TypeScript** - Type-safe React development
4. ✅ **Tailwind CSS** - Modern utility-first styling
5. ✅ **Component Architecture** - Clean component structure
6. ✅ **State Management** - Managing theme state
7. ✅ **Animations** - Smooth transitions and effects

---

## 🎓 Best Practices Used

- ✅ **TypeScript Interfaces** - Type safety for props and context
- ✅ **Custom Hooks** - Reusable `useTheme()` hook
- ✅ **Error Handling** - Context usage validation
- ✅ **Component Composition** - Modular component structure
- ✅ **Naming Conventions** - PascalCase for components, camelCase for variables
- ✅ **Clean Code** - No prop drilling, clean imports
- ✅ **Modern React** - No unused React imports (React 17+)

---

## 🔧 Configuration Files

### **tailwind.config.js**

```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### **postcss.config.js**

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

---

## 📖 Resources

- [React Context API Documentation](https://react.dev/reference/react/createContext)
- [useContext Hook](https://react.dev/reference/react/useContext)
- [TypeScript with React](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vite.dev/)

---

## 🎯 Next Steps

Want to extend this project? Try:

1. **Persist Theme** - Save theme preference to localStorage
2. **More Themes** - Add blue, green, or custom themes
3. **System Theme** - Detect and use system theme preference
4. **Animation Library** - Add Framer Motion for advanced animations
5. **More Context** - Add user context, language context, etc.

---

## 🐛 Troubleshooting

### **Theme not changing?**

- Make sure `ThemeProvider` wraps your entire app in `main.tsx`
- Check that you're using `useTheme()` hook correctly

### **Styles not applying?**

- Verify Tailwind CSS is installed: `npm install -D tailwindcss @tailwindcss/postcss`
- Check `index.css` has `@import 'tailwindcss';`

### **TypeScript errors?**

- Run `npm run build` to check for type errors
- Ensure all interfaces are properly defined

---

## 📝 License

This project is part of the reactLearning repository.

---

## 👨‍💻 Author

**Nitin Pradhan**

---

## 🎉 Acknowledgments

- React team for Context API
- Tailwind CSS for amazing utility classes
- Vite for blazing fast development

---

**Happy Coding! 🚀**

_Built with ❤️ using React, TypeScript, and Tailwind CSS_
