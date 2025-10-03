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
  const baseClasses = 'card-base';

  const variantClasses = {
    default: '',
    elevated: 'card-elevated',
    interactive: 'card-interactive',
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
      'px-6 py-4 border-b border-neutral-200 dark:border-neutral-700',
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
  <div className={cn('px-6 py-4', className)} {...rest}>
    {children}
  </div>
);

/**
 * Card Footer component
 */
const CardFooter = ({ children, className = '', ...rest }) => (
  <div
    className={cn(
      'px-6 py-4 border-t border-neutral-200 dark:border-neutral-700',
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
      'text-lg font-semibold text-neutral-900 dark:text-neutral-100',
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
    className={cn('text-sm text-neutral-600 dark:text-neutral-400', className)}
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
