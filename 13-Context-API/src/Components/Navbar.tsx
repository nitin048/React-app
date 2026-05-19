import Nav2 from './Nav2'
import { useTheme } from '../Context/ThemeContext'

const Navbar = () => {
  const { theme } = useTheme()

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-black/80 border-gray-800'
          : 'bg-white/80 border-purple-200/50'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-500 ${
              theme === 'dark'
                ? 'bg-gray-800 text-white border border-gray-700'
                : 'bg-gradient-to-br from-purple-600 to-pink-600 text-white'
            }`}
          >
            C
          </div>
          <h1
            className={`text-2xl font-bold transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Context
            <span
              className={theme === 'dark' ? 'text-gray-400' : 'text-purple-500'}
            >
              API
            </span>
          </h1>
        </div>

        {/* Navigation */}
        <Nav2 />
      </div>
    </nav>
  )
}

export default Navbar
