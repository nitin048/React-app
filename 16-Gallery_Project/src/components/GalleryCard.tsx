import type { PicsumImage, ImageInteraction } from '../types'

interface GalleryCardProps {
  image: PicsumImage
  index: number
  interaction: ImageInteraction
  onClick: () => void
}

export const GalleryCard = ({
  image,
  index,
  interaction,
  onClick,
}: GalleryCardProps) => {
  return (
    <div
      className="group animate-scaleIn relative"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      <div className="cursor-pointer">
        <div className="h-48 w-48 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 relative">
          <img
            className="h-full w-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
            src={image.download_url}
            alt={`Photo by ${image.author}`}
          />
          {/* Like indicator */}
          {interaction.liked && (
            <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-500 fill-current"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          )}
          {/* Comment count indicator */}
          {interaction.comments.length > 0 && (
            <div className="absolute top-2 left-2 bg-white/90 rounded-full px-2 py-1 shadow-lg flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="text-xs font-bold text-gray-700">
                {interaction.comments.length}
              </span>
            </div>
          )}
        </div>
      </div>
      <h2 className="font-bold text-lg mt-2 text-center group-hover:text-purple-300 transition-colors duration-300 text-gray-200">
        {image.author}
      </h2>
    </div>
  )
}
