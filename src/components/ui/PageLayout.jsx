import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Page Layout component with header, content, and footer
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {React.ReactNode} props.header - Header content
 * @param {React.ReactNode} props.footer - Footer content
 * @param {boolean} props.fullHeight - Full height layout
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.rest - Additional props
 */
const PageLayout = ({
  children,
  header,
  footer,
  fullHeight = false,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col',
        fullHeight && 'h-screen',
        className
      )}
      {...rest}
    >
      {header && <header className='flex-shrink-0'>{header}</header>}

      <main className='flex-1'>{children}</main>

      {footer && <footer className='flex-shrink-0'>{footer}</footer>}
    </div>
  );
};

/**
 * Page Header component
 */
const PageHeader = ({
  title,
  subtitle,
  breadcrumbs,
  actions,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700',
        className
      )}
      {...rest}
    >
      <div className='container-app'>
        <div className='py-8'>
          {breadcrumbs && (
            <nav className='mb-4' aria-label='Breadcrumb'>
              {breadcrumbs}
            </nav>
          )}

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
            <div>
              {title && (
                <h1 className='text-3xl font-bold text-neutral-900 dark:text-neutral-100'>
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className='mt-2 text-lg text-neutral-600 dark:text-neutral-400'>
                  {subtitle}
                </p>
              )}
            </div>

            {actions && (
              <div className='mt-4 sm:mt-0 flex space-x-3 rtl:space-x-reverse'>
                {actions}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Page Content component
 */
const PageContent = ({ children, className = '', ...rest }) => {
  return (
    <div className={cn('container-app py-8', className)} {...rest}>
      {children}
    </div>
  );
};

/**
 * Section component
 */
const Section = ({ children, title, subtitle, className = '', ...rest }) => {
  return (
    <section className={cn('py-12 lg:py-16', className)} {...rest}>
      <div className='container-app'>
        {(title || subtitle) && (
          <div className='text-center mb-12'>
            {title && (
              <h2 className='text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4'>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className='text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto'>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

/**
 * Container component
 */
const Container = ({ children, size = 'default', className = '', ...rest }) => {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
    default: 'max-w-4xl',
  };

  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// Export all components
PageLayout.Header = PageHeader;
PageLayout.Content = PageContent;
PageLayout.Section = Section;
PageLayout.Container = Container;

export default PageLayout;
