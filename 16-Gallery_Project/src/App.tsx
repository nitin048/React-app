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

  const { toggleLike, addComment, deleteComment, getImageInteraction } =
    useImageInteractions()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<PicsumImage[]>(
          `https://picsum.photos/v2/list?page=${index}&limit=10`
        )
        setuserData(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    getData()
  }, [index])

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
    }
  }

  const handleNext = () => {
    setindex(index + 1)
    setuserData([])
  }

  return (
    <>
      <div
        className={`animated-gradient-bg min-h-screen overflow-auto pb-24 relative ${selectedImage ? 'blur-background' : ''}`}
      >
        <BackgroundEffects />

        {/* Content */}
        <div className="relative z-10 p-6 text-white">
          <h1 className="text-5xl font-bold mb-6 text-center animate-fadeIn bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            ✨ Photo Gallery ✨
          </h1>

          {userData.length === 0 ? (
            <div className="flex items-center justify-center h-[70vh]">
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

        <Pagination
          currentPage={index}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
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
