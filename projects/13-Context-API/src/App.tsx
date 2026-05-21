import Navbar from './Components/Navbar'
import { useTheme } from './Context/ThemeContext'

const App = () => {
  const { theme } = useTheme()

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-black'
          : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }`}
    >
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1
            className={`text-6xl md:text-7xl font-black mb-6 transition-colors duration-500 ${
              theme === 'dark'
                ? 'text-white'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600'
            }`}
          >
            Context API
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl mb-12 transition-colors duration-500 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}
          >
            State Management Made Simple & Beautiful
          </p>

          {/* Theme Badge */}
          <div className="flex justify-center mb-12">
            <div
              className={`px-8 py-4 rounded-full backdrop-blur-lg border-2 transition-all duration-500 ${
                theme === 'dark'
                  ? 'bg-gray-800/80 border-gray-700 text-white'
                  : 'bg-white/60 border-purple-600/30 text-gray-900'
              }`}
            >
              <span className="text-lg font-semibold">
                Current Theme:{' '}
                <span
                  className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-purple-600'
                  }`}
                >
                  {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
                </span>
              </span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {/* Card 1 */}
            <div
              className={`p-6 rounded-2xl backdrop-blur-lg border transition-all duration-500 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                  : 'bg-white/70 border-purple-300/50 hover:bg-white/90'
              }`}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Fast & Efficient
              </h3>
              <p
                className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Lightning-fast state updates across your entire app
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={`p-6 rounded-2xl backdrop-blur-lg border transition-all duration-500 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                  : 'bg-white/70 border-pink-300/50 hover:bg-white/90'
              }`}
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Beautiful UI
              </h3>
              <p
                className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Smooth transitions and modern design patterns
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={`p-6 rounded-2xl backdrop-blur-lg border transition-all duration-500 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                  : 'bg-white/70 border-blue-300/50 hover:bg-white/90'
              }`}
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                No Prop Drilling
              </h3>
              <p
                className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Access state from any component instantly
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <p
              className={`text-lg ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
              }`}
            >
              Click the theme button in the navbar to see the magic! ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
