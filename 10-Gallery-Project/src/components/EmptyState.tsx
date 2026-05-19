interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
}

export const EmptyState = ({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) => {
  return (
    <div className="text-center py-12">
      {icon && (
        <div className="mx-auto h-12 w-12 text-gray-400 mb-4">{icon}</div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-500 max-w-sm mx-auto mb-6">
          {description}
        </p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
        >
          {action.label}
        </button>
      )}
    </div>
  )
}
