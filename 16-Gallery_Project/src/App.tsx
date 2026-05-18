import axios from 'axios'
import { useEffect, useState } from 'react'
import type { PicsumImage } from './types'
import { BackgroundEffects } from './components/BackgroundEffects'
import { GalleryCard } from './components/GalleryCard'
import { ImageModal } from './components/ImageModal'
import { Pagination } from './components/Pagination'
import { useImageInteractions } from './hooks/useImageInteractions'

const App = () => {
  const [userData, setuserData] = useState<PicsumImage[]>([])
  const [index, setindex] = useState(1)
  const [selectedImage, setSelectedImage] = useState<PicsumImage | null>(null)
  const [showGallery, setShowGallery] = useState(false)

  const { toggleLike, addComment, deleteComment, getImageInteraction } =
    useImageInteractions()

  useEffect(() => {
    if (showGallery) {
      const getData = async () => {
        try {
          const response = await axios.get<PicsumImage[]>(
            `https://picsum.photos/v2/list?page=${index}&limit=10`
          )
          setuserData(response.data)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }

      getData()
    }
  }, [index, showGallery])

  const openImageModal = (image: PicsumImage) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const handlePrevious = () => {
    if (index !== 1) {
      setindex(index - 1)
      setuserData([])
      // Scroll to gallery section to prevent jumping
      setTimeout(() => {
        document.getElementById('gallery-section')?.scrollIntoView({
          behavior: 'auto',
          block: 'start',
        })
      }, 0)
    }
  }

  const handleNext = () => {
    setindex(index + 1)
    setuserData([])
    // Scroll to gallery section to prevent jumping
    setTimeout(() => {
      document.getElementById('gallery-section')?.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      })
    }, 0)
  }

  const scrollToGallery = () => {
    setShowGallery(true)
    setTimeout(() => {
      const gallerySection = document.getElementById('gallery-section')
      if (gallerySection) {
        gallerySection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }

  const handleHome = () => {
    setShowGallery(false)
    setindex(1)
    setuserData([])
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div
        className={`animated-gradient-bg min-h-screen overflow-auto ${showGallery ? 'pb-24' : ''} relative ${selectedImage ? 'blur-background' : ''}`}
      >
        <BackgroundEffects />

        {/* Landing Page Section */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-white">
          {/* Stunning Header Section */}
          <div className="text-center mb-12 animate-fadeIn">
            {/* Main Title with Advanced Effects */}
            <div className="relative inline-block">
              {/* Glow effect behind text */}
              <div className="absolute inset-0 blur-3xl opacity-50 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 animate-pulse"></div>

              <h1 className="relative text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
                <span className="inline-block animate-float bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                  Lumina
                </span>
                <br />
                <span
                  className="inline-block animate-float bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ animationDelay: '0.2s' }}
                >
                  Gallery
                </span>
              </h1>
            </div>

            {/* Subtitle with Glass Effect */}
            <div className="flex flex-col items-center gap-4 mt-8">
              <div className="glass-dark px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-xl max-w-2xl">
                <p className="text-lg md:text-xl text-gray-200 font-light tracking-wide leading-relaxed">
                  Discover breathtaking photography from{' '}
                  <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
                    around the world
                  </span>
                </p>
              </div>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                <div className="glass px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-300">
                    High Quality
                  </span>
                </div>

                <div className="glass px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-300">
                    Curated Collection
                  </span>
                </div>

                <div className="glass px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-300">
                    Free Download
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToGallery}
                className="mt-12 group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 animate-float"
                style={{ animationDelay: '0.4s' }}
              >
                <span>Explore Gallery</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              {/* Decorative Line */}
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full mt-8"></div>
            </div>
          </div>

          {/* Scroll Indicator */}
          {!showGallery && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Gallery Section */}
        {showGallery && (
          <div
            id="gallery-section"
            className="relative z-10 p-6 text-white min-h-screen"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Photo Collection
              </h2>
              <p className="text-gray-300 text-lg">
                Browse through our curated selection of stunning images
              </p>
            </div>

            {userData.length === 0 ? (
              <div className="flex items-center justify-center h-[60vh]">
                <div className="text-center">
                  <div className="loading-shimmer w-64 h-8 rounded-lg mb-4 mx-auto"></div>
                  <p className="text-gray-300 text-2xl animate-pulse-slow">
                    Loading images...
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-6 justify-center">
                {userData.map((elem, idx) => (
                  <GalleryCard
                    key={idx}
                    image={elem}
                    index={idx}
                    interaction={getImageInteraction(elem.id!)}
                    onClick={() => openImageModal(elem)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {showGallery && (
          <Pagination
            currentPage={index}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onHome={handleHome}
          />
        )}
      </div>

      {/* Instagram-style Modal - Outside the blurred container */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          interaction={getImageInteraction(selectedImage.id!)}
          onClose={closeImageModal}
          onToggleLike={() => toggleLike(selectedImage.id!)}
          onAddComment={(text) => addComment(selectedImage.id!, text)}
          onDeleteComment={(commentId) =>
            deleteComment(selectedImage.id!, commentId)
          }
        />
      )}
    </>
  )
}

export default App
