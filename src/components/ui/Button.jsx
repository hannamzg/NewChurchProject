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
  const baseClasses = 'btn-base';

  const variantClasses = {
    primary:
      'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 shadow-sm',
    secondary:
      'bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500 shadow-sm',
    outline:
      'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
    ghost:
      'text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500',
    danger:
      'bg-error-500 hover:bg-error-600 text-white focus:ring-error-500 shadow-sm',
    success:
      'bg-success-500 hover:bg-success-600 text-white focus:ring-success-500 shadow-sm',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
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
