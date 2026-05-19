# React & TypeScript Naming Conventions Guide

Quick reference for maintaining consistent naming conventions in the reactLearning repository.

---

## 📋 Quick Reference

| Type                     | Convention             | Example                                   |
| ------------------------ | ---------------------- | ----------------------------------------- |
| **Components**           | PascalCase             | `UserProfile`, `NavBar`, `HomePage`       |
| **Files (Components)**   | PascalCase.tsx         | `UserProfile.tsx`, `NavBar.tsx`           |
| **Variables**            | camelCase              | `userData`, `isLoading`, `userName`       |
| **Functions**            | camelCase              | `handleClick`, `fetchData`, `getUserInfo` |
| **State Setters**        | set + PascalCase       | `setUserData`, `setIsLoading`, `setTheme` |
| **Constants**            | UPPER_SNAKE_CASE       | `API_URL`, `MAX_ITEMS`, `DEFAULT_THEME`   |
| **Interfaces/Types**     | PascalCase             | `UserProps`, `ThemeConfig`, `ApiResponse` |
| **Hooks**                | camelCase (use prefix) | `useAuth`, `useTheme`, `useFetch`         |
| **Folders (Components)** | PascalCase             | `Components/`, `Pages/`, `Context/`       |
| **Folders (Utils)**      | lowercase              | `utils/`, `hooks/`, `helpers/`            |

---

## ✅ Good Examples

### **Components**

```tsx
// ✅ Component file: UserProfile.tsx
interface UserProfileProps {
  name: string
  age: number
}

const UserProfile = ({ name, age }: UserProfileProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  )
}

export default UserProfile
```

### **State Management**

```tsx
// ✅ Proper state naming
const [userData, setUserData] = useState<User[]>([])
const [isLoading, setIsLoading] = useState(false)
const [theme, setTheme] = useState('light')
const [count, setCount] = useState(0)
```

### **Event Handlers**

```tsx
// ✅ Proper function naming
const handleClick = () => { ... }
const handleSubmit = (e: FormEvent) => { ... }
const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => { ... }
const fetchUserData = async () => { ... }
```

### **Props with TypeScript**

```tsx
// ✅ Proper interface naming
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>
}
```

### **Custom Hooks**

```tsx
// ✅ Hook file: useAuth.ts
interface UseAuthReturn {
  user: User | null
  login: (credentials: Credentials) => Promise<void>
  logout: () => void
}

const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (credentials: Credentials) => { ... }
  const logout = () => { ... }

  return { user, login, logout }
}

export default useAuth
```

### **Constants**

```tsx
// ✅ Constants file: constants.ts
export const API_BASE_URL = 'https://api.example.com'
export const MAX_RETRY_ATTEMPTS = 3
export const DEFAULT_PAGE_SIZE = 10
export const THEME_COLORS = {
  primary: '#007bff',
  secondary: '#6c757d',
} as const
```

---

## ❌ Bad Examples (Avoid These)

### **Components**

```tsx
// ❌ Wrong: lowercase component name
const userProfile = () => { ... }

// ❌ Wrong: no type safety
const UserProfile = (props) => {
  return <div>{props.name}</div>
}

// ❌ Wrong: unused React import (React 17+)
import React from 'react'
import { useState } from 'react'
```

### **State Management**

```tsx
// ❌ Wrong: incorrect setter naming
const [userData, setuserData] = useState([])
const [isLoading, setisLoading] = useState(false)
const [theme, settheme] = useState('light')

// ❌ Wrong: inconsistent naming
const [user_data, setUserData] = useState([])
const [IsLoading, SetIsLoading] = useState(false)
```

### **Event Handlers**

```tsx
// ❌ Wrong: unclear naming
const click = () => { ... }
const submit = () => { ... }
const change = () => { ... }

// ❌ Wrong: PascalCase for functions
const HandleClick = () => { ... }
const FetchData = () => { ... }
```

### **File Names**

```tsx
// ❌ Wrong: lowercase component files
userProfile.tsx
navBar.tsx
homePage.tsx

// ❌ Wrong: inconsistent naming
user - profile.tsx
nav_bar.tsx
```

---

## 🎯 Common Patterns

### **Form Handling**

```tsx
const [formData, setFormData] = useState({
  email: '',
  password: '',
})

const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormData((prev) => ({ ...prev, [name]: value }))
}

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  // Submit logic
}
```

### **API Calls**

```tsx
const [data, setData] = useState<ApiResponse[]>([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState<string | null>(null)

const fetchData = async () => {
  setIsLoading(true)
  setError(null)

  try {
    const response = await axios.get<ApiResponse[]>(API_URL)
    setData(response.data)
  } catch (err) {
    setError('Failed to fetch data')
  } finally {
    setIsLoading(false)
  }
}
```

### **Context API**

```tsx
// ThemeContext.tsx
interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

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

---

## 📁 Folder Structure

```
src/
├── Components/          # ✅ PascalCase for component folders
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Button.tsx
├── Pages/              # ✅ PascalCase for page folders
│   ├── Home.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── Context/            # ✅ PascalCase for context folders
│   └── ThemeContext.tsx
├── hooks/              # ✅ lowercase for utility folders
│   ├── useAuth.ts
│   └── useFetch.ts
├── utils/              # ✅ lowercase for utility folders
│   ├── helpers.ts
│   └── constants.ts
├── types/              # ✅ lowercase for type folders
│   └── index.ts
└── App.tsx
```

---

## 🔍 Checklist

Before committing code, verify:

- [ ] Component names are PascalCase
- [ ] Component files are PascalCase.tsx
- [ ] Variables are camelCase
- [ ] State setters follow `set` + PascalCase pattern
- [ ] Props have TypeScript interfaces
- [ ] No unused React imports
- [ ] No `any` types
- [ ] Event handlers start with `handle`
- [ ] Custom hooks start with `use`
- [ ] Constants are UPPER_SNAKE_CASE
- [ ] Folder names follow conventions

---

## 🛠️ Tools to Help

### **ESLint Rules**

```json
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "variable",
      "format": ["camelCase", "UPPER_CASE"]
    },
    {
      "selector": "function",
      "format": ["camelCase", "PascalCase"]
    },
    {
      "selector": "typeLike",
      "format": ["PascalCase"]
    }
  ]
}
```

### **VS Code Snippets**

- `rafce` - React Arrow Function Component Export
- `rafc` - React Arrow Function Component
- `rfc` - React Function Component
- `rfce` - React Function Component Export

---

## 📚 Resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Naming Conventions](https://typescript-eslint.io/rules/naming-convention/)
- [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)

---

**Keep this guide handy for consistent code quality! 📖**
