import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      const pos = `${x}px ${y}px`
      const maskStyle = `radial-gradient(circle 120px at ${pos}, transparent 0%, black 150px)`

      overlay.style.maskImage = maskStyle
      overlay.style.webkitMaskImage = maskStyle
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative w-screen h-screen bg-gray-900 text-white overflow-hidden">
      {/* Main content - revealed by spotlight */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="text-center space-y-6 px-4">
          {/* Error Message */}
          <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse ">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link
              to="/"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-gray-700"
            >
              Go Back
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-sm text-gray-500">
            <p>Move your mouse to reveal the content</p>
          </div>
        </div>
      </div>

      {/* Dark overlay with spotlight mask */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black z-20 pointer-events-none"
        style={{
          maskImage:
            'radial-gradient(circle 120px at 50% 50%, transparent 0%, black 150px)',
          WebkitMaskImage:
            'radial-gradient(circle 120px at 50% 50%, transparent 0%, black 150px)',
        }}
      />
    </div>
  )
}

export default NotFound
