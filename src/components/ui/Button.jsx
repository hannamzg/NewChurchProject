import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Button component with multiple variants and sizes
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - Button variant (primary, secondary, outline, ghost, danger)
 * @param {string} props.size - Button size (sm, md, lg, xl)
 * @param {boolean} props.disabled - Disabled state
 * @param {boolean} props.loading - Loading state
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 * @param {string} props.type - Button type (button, submit, reset)
 * @param {string|React.Component} props.as - Component to render as (default: button)
 * @param {Object} props.rest - Additional props
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  onClick,
  type = 'button',
  as: Component = 'button',
  ...rest
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 rounded-lg';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 focus:ring-primary-500 shadow-lg hover:shadow-xl border border-primary-200',
    secondary:
      'bg-gradient-to-r from-secondary-600 to-secondary-700 text-white hover:from-secondary-700 hover:to-secondary-800 focus:ring-secondary-500 shadow-lg hover:shadow-xl border border-secondary-200',
    accent:
      'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 focus:ring-accent-500 shadow-lg hover:shadow-xl border border-accent-200',
    outline:
      'border-2 border-primary-600 text-primary-700 dark:text-primary-300 hover:bg-primary-600 hover:text-white hover:border-primary-700 focus:ring-primary-500 bg-white dark:bg-neutral-800 backdrop-blur-sm',
    ghost:
      'text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-800 dark:hover:text-primary-200 focus:ring-primary-500 bg-transparent',
    danger:
      'bg-gradient-to-r from-error-500 to-error-600 text-white hover:from-error-600 hover:to-error-700 focus:ring-error-500 shadow-lg hover:shadow-xl border border-error-200',
    success:
      'bg-gradient-to-r from-success-500 to-success-600 text-white hover:from-success-600 hover:to-success-700 focus:ring-success-500 shadow-lg hover:shadow-xl border border-success-200',
  };

  const sizeClasses = {
    xs: 'px-2.5 py-1.5 text-xs rounded-md gap-1',
    sm: 'px-3 py-2 text-sm rounded-lg gap-1.5',
    md: 'px-4 py-2.5 text-base rounded-lg gap-2',
    lg: 'px-6 py-3 text-lg rounded-xl gap-2.5',
    xl: 'px-8 py-4 text-xl rounded-xl gap-3',
    '2xl': 'px-10 py-5 text-2xl rounded-2xl gap-4',
  };

  const disabledClasses =
    disabled || loading ? 'opacity-50 cursor-not-allowed' : '';

  const loadingClasses = loading ? 'cursor-wait' : '';

  return (
    <Component
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        loadingClasses,
        className
      )}
      aria-disabled={disabled || loading}
      {...rest}
    >
      {loading && <div className='spinner w-4 h-4 mr-2' aria-hidden='true' />}
      {children}
    </Component>
  );
};

export default Button;
