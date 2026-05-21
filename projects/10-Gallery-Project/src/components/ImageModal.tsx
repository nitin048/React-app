import type { PicsumImage, ImageInteraction } from '../types'
import { CommentSection } from './CommentSection'

interface ImageModalProps {
  image: PicsumImage
  interaction: ImageInteraction
  onClose: () => void
  onToggleLike: () => void
  onAddComment: (text: string) => void
  onDeleteComment: (commentId: string) => void
}

export const ImageModal = ({
  image,
  interaction,
  onClose,
  onToggleLike,
  onAddComment,
  onDeleteComment,
}: ImageModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[85vh] overflow-hidden animate-modalSlideIn flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Section */}
        <div className="md:w-[65%] bg-black flex items-center justify-center min-h-[400px] md:min-h-[85vh]">
          <img
            src={image.download_url}
            alt={`Photo by ${image.author}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="md:w-[35%] flex flex-col bg-white overflow-hidden max-h-[85vh]">
          <div className="p-6 flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                {image.author?.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg">
                  {image.author}
                </h3>
                <p className="text-sm text-gray-500">Photographer</p>
              </div>
            </div>

            {/* Like and Stats Section */}
            <div className="py-4 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center gap-4">
                <button
                  onClick={onToggleLike}
                  className="flex items-center gap-2 transition-all duration-300 hover:scale-110"
                >
                  {interaction.liked ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-red-500 fill-current"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-gray-600 hover:text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  )}
                </button>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                  <span className="text-sm font-semibold">
                    {interaction.comments.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="py-4 space-y-4 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center gap-3 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-xs text-gray-500 font-medium">
                    Dimensions
                  </p>
                  <p className="text-sm font-semibold">
                    {image.width} × {image.height}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Image ID</p>
                  <p className="text-sm font-semibold">#{image.id}</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Beautiful photography captured by {image.author}. High-quality
                  image perfect for your creative projects.
                </p>
              </div>
            </div>

            {/* Comments Section */}
            <CommentSection
              comments={interaction.comments}
              onAddComment={onAddComment}
              onDeleteComment={onDeleteComment}
            />

            {/* Actions */}
            <div className="pt-4 space-y-3 flex-shrink-0">
              <a
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Original
              </a>
              <a
                href={image.download_url}
                download
                className="block w-full bg-gray-800 text-white text-center py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300"
              >
                Download Image
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
