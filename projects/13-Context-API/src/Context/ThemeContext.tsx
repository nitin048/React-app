import { createContext, useState, useContext } from 'react'
import type { ReactNode } from 'react'

interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
