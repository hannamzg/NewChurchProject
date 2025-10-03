import React from 'react';
import { cn } from '../../utils/cn';

/**
 * FormField component for form inputs with labels and error states
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Field label
 * @param {string} props.error - Error message
 * @param {string} props.help - Help text
 * @param {boolean} props.required - Required field indicator
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Input element
 * @param {string} props.id - Field ID
 * @param {Object} props.rest - Additional props
 */
const FormField = ({
  label,
  error,
  help,
  required = false,
  className = '',
  children,
  id,
  ...rest
}) => {
  const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;

  return (
    <div className={cn('space-y-2', className)} {...rest}>
      {label && (
        <label
          htmlFor={fieldId}
          className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'
        >
          {label}
          {required && (
            <span className='text-error-500 ml-1' aria-label='required'>
              *
            </span>
          )}
        </label>
      )}

      <div className='relative'>{children}</div>

      {help && !error && (
        <p className='text-xs text-neutral-500 dark:text-neutral-400'>{help}</p>
      )}

      {error && (
        <p className='text-xs text-error-500 flex items-center' role='alert'>
          <svg
            className='w-3 h-3 mr-1 flex-shrink-0'
            fill='currentColor'
            viewBox='0 0 20 20'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
              clipRule='evenodd'
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

/**
 * Input component
 */
const Input = React.forwardRef(
  ({ className = '', type = 'text', ...props }, ref) => (
    <input
      type={type}
      className={cn('form-field-base', className)}
      ref={ref}
      {...props}
    />
  )
);

/**
 * Textarea component
 */
const Textarea = React.forwardRef(
  ({ className = '', rows = 3, ...props }, ref) => (
    <textarea
      className={cn('form-field-base resize-none', className)}
      rows={rows}
      ref={ref}
      {...props}
    />
  )
);

/**
 * Select component
 */
const Select = React.forwardRef(
  ({ className = '', children, ...props }, ref) => (
    <select
      className={cn('form-field-base pr-8', className)}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  )
);

// Export all components
FormField.Input = Input;
FormField.Textarea = Textarea;
FormField.Select = Select;

export default FormField;
