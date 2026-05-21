import { useTheme } from '../Context/ThemeContext'

const Nav2 = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="flex items-center gap-8">
      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6">
        <a
          href="#"
          className={`font-medium transition-all duration-300 hover:scale-110 ${
            theme === 'dark'
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-700 hover:text-purple-600'
          }`}
        >
          Home
        </a>
        <a
          href="#"
          className={`font-medium transition-all duration-300 hover:scale-110 ${
            theme === 'dark'
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-700 hover:text-purple-600'
          }`}
        >
          About
        </a>
        <a
          href="#"
          className={`font-medium transition-all duration-300 hover:scale-110 ${
            theme === 'dark'
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-700 hover:text-purple-600'
          }`}
        >
          Contact
        </a>
      </nav>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`relative px-6 py-3 rounded-xl font-bold text-sm transition-all duration-500 transform hover:scale-110 active:scale-95 shadow-lg ${
          theme === 'dark'
            ? 'bg-white text-black hover:bg-gray-100 shadow-white/20'
            : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 shadow-purple-500/50'
        }`}
      >
        <span className="flex items-center gap-2">
          {theme === 'dark' ? (
            <>
              <span className="text-xl">☀️</span>
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <span className="text-xl">🌙</span>
              <span>Dark Mode</span>
            </>
          )}
        </span>
      </button>
    </div>
  )
}

export default Nav2
