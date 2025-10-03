import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Card component with multiple variants
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.variant - Card variant (default, elevated, interactive)
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler for interactive cards
 * @param {Object} props.rest - Additional props
 */
const Card = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  ...rest
}) => {
  const baseClasses = 'bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out';

  const variantClasses = {
    default: 'shadow-sm hover:shadow-md',
    elevated: 'shadow-lg hover:shadow-xl border-neutral-300 dark:border-neutral-600',
    interactive: 'shadow-md hover:shadow-xl hover:scale-105 cursor-pointer border-primary-200 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-700',
  };

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Component>
  );
};

/**
 * Card Header component
 */
const CardHeader = ({ children, className = '', ...rest }) => (
  <div
    className={cn(
      'px-6 py-5 border-b border-neutral-200 dark:border-neutral-700 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-t-xl',
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

/**
 * Card Body component
 */
const CardBody = ({ children, className = '', ...rest }) => (
  <div className={cn('px-6 py-5', className)} {...rest}>
    {children}
  </div>
);

/**
 * Card Footer component
 */
const CardFooter = ({ children, className = '', ...rest }) => (
  <div
    className={cn(
      'px-6 py-4 border-t border-neutral-200 dark:border-neutral-700 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-b-xl',
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

/**
 * Card Title component
 */
const CardTitle = ({ children, className = '', ...rest }) => (
  <h3
    className={cn(
      'text-xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight',
      className
    )}
    {...rest}
  >
    {children}
  </h3>
);

/**
 * Card Description component
 */
const CardDescription = ({ children, className = '', ...rest }) => (
  <p
    className={cn('text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed', className)}
    {...rest}
  >
    {children}
  </p>
);

// Export all components
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;
