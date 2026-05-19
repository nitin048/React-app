interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Input = ({
  label,
  hint,
  error,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {leftIcon}
          </div>
        )}
        <input
          className={`
            block w-full rounded-lg border-0 py-2.5 px-3.5
            text-gray-900 shadow-sm ring-1 ring-inset
            ${error ? 'ring-red-300 focus:ring-red-500' : 'ring-gray-300 focus:ring-purple-600'}
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset
            sm:text-sm sm:leading-6 transition-all duration-200
            ${leftIcon ? 'pl-10' : ''}
            ${rightIcon ? 'pr-10' : ''}
            ${className}
          `}
          {...props}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
      {hint && !error && <p className="mt-1.5 text-sm text-gray-500">{hint}</p>}
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  )
}
