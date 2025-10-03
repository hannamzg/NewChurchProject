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
        'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-lg border-b border-neutral-200/50 dark:border-neutral-700/50 sticky top-0 z-50',
        className
      )}
      role='navigation'
      aria-label='Main navigation'
      {...rest}
    >
      <div className='container-app'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link
            to='/'
            className='flex items-center space-x-4 rtl:space-x-reverse group'
            onClick={closeMobileMenu}
          >
            <div className='w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105'>
              <img
                src='/images/orthodox-cross.png'
                alt='Orthodox Cross'
                className='w-7 h-7 object-contain drop-shadow-sm'
              />
            </div>
            <div className='hidden sm:block'>
              <h1 className='text-xl font-bold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors'>
                كنيسة القديس جاورجيوس
              </h1>
              <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                للروم الأرثوذكس - أبو سنان
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-2 rtl:space-x-reverse'>
            {items.map(item => (
              <Link
                key={item.key}
                to={item.path}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105',
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
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
            className='lg:hidden p-3 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-105'
            aria-expanded={isMobileMenuOpen}
            aria-controls='mobile-menu'
            aria-label='Toggle mobile menu'
          >
            <svg
              className='w-6 h-6 transition-transform duration-300'
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
            className='lg:hidden border-t border-neutral-200/50 dark:border-neutral-700/50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md'
          >
            <div className='px-4 pt-4 pb-6 space-y-2'>
              {items.map(item => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:scale-105',
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
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
