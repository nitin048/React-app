import { useState } from 'react'
import type { Comment } from '../types'

interface CommentSectionProps {
  comments: Comment[]
  onAddComment: (text: string) => void
  onDeleteComment: (commentId: string) => void
}

export const CommentSection = ({
  comments,
  onAddComment,
  onDeleteComment,
}: CommentSectionProps) => {
  const [commentText, setCommentText] = useState('')

  const handleSubmit = () => {
    if (!commentText.trim()) return
    onAddComment(commentText)
    setCommentText('')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="flex-1 py-4 overflow-y-auto min-h-0 flex flex-col">
      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
        Comments ({comments.length})
      </h4>

      {/* Comments List */}
      <div className="space-y-3 mb-4 flex-1 overflow-y-auto">
        {comments.length === 0 ? (
          <p className="text-gray-400 text-sm italic text-center py-4">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments
            .slice()
            .reverse()
            .map((comment) => (
              <div
                key={comment.id}
                className="bg-gray-50 rounded-lg p-3 relative group"
              >
                <p className="text-gray-800 text-sm pr-6">{comment.text}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(comment.timestamp).toLocaleString()}
                </p>
                <button
                  onClick={() => onDeleteComment(comment.id)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))
        )}
      </div>

      {/* Add Comment Input */}
      <div className="flex gap-2 flex-shrink-0 pt-2">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a comment..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        />
        <button
          onClick={handleSubmit}
          disabled={!commentText.trim()}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
