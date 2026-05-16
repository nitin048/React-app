interface PaginationProps {
  currentPage: number
  onPrevious: () => void
  onNext: () => void
}

export const Pagination = ({
  currentPage,
  onPrevious,
  onNext,
}: PaginationProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-purple-900/20 to-transparent p-4 backdrop-blur-md z-20">
      <div className="flex justify-center gap-6 items-center">
        <button
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-semibold cursor-pointer rounded-lg px-6 py-3 active:scale-95 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform"
          onClick={onPrevious}
        >
          ← Prev
        </button>
        <span className="text-white font-bold text-lg bg-purple-900/50 px-6 py-2 rounded-lg animate-fadeIn backdrop-blur-sm">
          Page {currentPage}
        </span>
        <button
          className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xl font-semibold cursor-pointer rounded-lg px-6 py-3 active:scale-95 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform"
          onClick={onNext}
        >
          Next →
        </button>
      </div>
    </div>
  )
}
