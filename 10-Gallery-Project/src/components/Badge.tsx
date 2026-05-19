interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'gray'
  size?: 'sm' | 'md' | 'lg'
  dot?: boolean
}

export const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
}: BadgeProps) => {
  const variants = {
    primary: 'bg-purple-50 text-purple-700 ring-purple-600/20',
    success: 'bg-green-50 text-green-700 ring-green-600/20',
    warning: 'bg-yellow-50 text-yellow-700 ring-yellow-600/20',
    error: 'bg-red-50 text-red-700 ring-red-600/20',
    gray: 'bg-gray-50 text-gray-700 ring-gray-600/20',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  }

  const dotColors = {
    primary: 'bg-purple-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    gray: 'bg-gray-500',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium ring-1 ring-inset ${variants[variant]} ${sizes[size]}`}
    >
      {dot && (
        <span className={`h-1.5 w-1.5 rounded-full ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  )
}
