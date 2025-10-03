import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

/**
 * Secondary Navigation component (breadcrumbs, tabs, etc.)
 *
 * @param {Object} props - Component props
 * @param {Array} props.items - Navigation items
 * @param {string} props.variant - Navigation variant (breadcrumb, tabs, pills)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.rest - Additional props
 */
const SecondaryNav = ({
  items = [],
  variant = 'breadcrumb',
  className = '',
  ...rest
}) => {
  const location = useLocation();

  const getVariantClasses = () => {
    switch (variant) {
      case 'tabs':
        return 'border-b border-neutral-200 dark:border-neutral-700';
      case 'pills':
        return 'bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1';
      case 'breadcrumb':
      default:
        return 'bg-neutral-50 dark:bg-neutral-800/50 py-2';
    }
  };

  const getItemClasses = (item, isActive) => {
    const baseClasses =
      'inline-flex items-center px-3 py-2 text-sm font-medium transition-colors';

    switch (variant) {
      case 'tabs':
        return cn(
          baseClasses,
          'border-b-2 -mb-px',
          isActive
            ? 'border-primary-500 text-primary-600 dark:text-primary-400'
            : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600'
        );
      case 'pills':
        return cn(
          baseClasses,
          'rounded-md',
          isActive
            ? 'bg-white dark:bg-neutral-700 text-primary-600 dark:text-primary-400 shadow-sm'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
        );
      case 'breadcrumb':
      default:
        return cn(
          baseClasses,
          isActive
            ? 'text-neutral-900 dark:text-neutral-100'
            : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
        );
    }
  };

  if (items.length === 0) return null;

  return (
    <nav
      className={cn(getVariantClasses(), className)}
      role='navigation'
      aria-label={
        variant === 'breadcrumb' ? 'Breadcrumb' : 'Secondary navigation'
      }
      {...rest}
    >
      <div className='container-app'>
        <div className='flex items-center space-x-1 rtl:space-x-reverse'>
          {items.map((item, index) => {
            const isActive = location.pathname === item.path;
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={item.key}>
                {variant === 'breadcrumb' && index > 0 && (
                  <svg
                    className='w-4 h-4 text-neutral-400 dark:text-neutral-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}

                {item.path ? (
                  <Link
                    to={item.path}
                    className={getItemClasses(item, isActive)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.icon && (
                      <span
                        className='mr-2 rtl:ml-2 rtl:mr-0'
                        aria-hidden='true'
                      >
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={getItemClasses(item, isActive)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.icon && (
                      <span
                        className='mr-2 rtl:ml-2 rtl:mr-0'
                        aria-hidden='true'
                      >
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNav;
