import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

/**
 * Primary Navigation component
 *
 * @param {Object} props - Component props
 * @param {Array} props.items - Navigation items
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.rest - Additional props
 */
const PrimaryNav = ({ items = [], className = '', ...rest }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'bg-white dark:bg-neutral-900 shadow-sm border-b border-neutral-200 dark:border-neutral-700',
        className
      )}
      role='navigation'
      aria-label='Main navigation'
      {...rest}
    >
      <div className='container-app'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
            onClick={closeMobileMenu}
          >
            <div className='w-10 h-10 bg-gradient rounded-full flex items-center justify-center shadow-md'>
              <img
                src='/images/orthodox-cross.png'
                alt='Orthodox Cross'
                className='w-6 h-6 object-contain'
              />
            </div>
            <div className='hidden sm:block'>
              <h1 className='text-lg font-bold text-primary-600 dark:text-primary-400'>
                Abu Snan Orthodox Church
              </h1>
              <p className='text-xs text-neutral-600 dark:text-neutral-400'>
                كنيسة أبو سنان الأرثوذكسية
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8 rtl:space-x-reverse'>
            {items.map(item => (
              <Link
                key={item.key}
                to={item.path}
                className={cn(
                  'nav-link',
                  location.pathname === item.path && 'nav-link-active'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type='button'
            onClick={toggleMobileMenu}
            className='lg:hidden p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors'
            aria-expanded={isMobileMenuOpen}
            aria-controls='mobile-menu'
            aria-label='Toggle mobile menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id='mobile-menu'
            className='lg:hidden border-t border-neutral-200 dark:border-neutral-700'
          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {items.map(item => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={cn(
                    'block px-3 py-2 rounded-lg text-base font-medium transition-colors',
                    location.pathname === item.path
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  )}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PrimaryNav;
