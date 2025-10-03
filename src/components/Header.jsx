import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, t, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { path: '/', key: 'home' },
    { path: '/youth', key: 'youth' },
    { path: '/sunday-school', key: 'sundaySchool' },
    { path: '/gallery', key: 'gallery' },
    { path: '/contact', key: 'contact' },
  ];

  return (
    <header className='bg-white shadow-lg sticky top-0 z-50'>
      <div className='container-custom'>
        <div className='flex items-center justify-between py-4'>
          {/* Logo */}
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <div className='w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-md'>
              <img
                src='/images/orthodox-cross.png'
                alt='Orthodox Cross'
                className='w-6 h-6 object-contain h-[50px] w-[50px]'
              />
            </div>
            <div className='hidden sm:block'>
              <h1 className='text-lg font-bold text-primary'>
                {t('home.title')}
              </h1>
              <p className='text-xs text-gray-600'>{t('home.subtitle')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8 rtl:space-x-reverse'>
            {navigation.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu Button */}
          <div className='flex items-center space-x-4 rtl:space-x-reverse'>
            <button
              onClick={toggleLanguage}
              className='px-4 py-2 text-sm font-semibold bg-gradient text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105'
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='lg:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden border-t border-gray-200 py-4'>
            <nav className='flex flex-col space-y-2'>
              {navigation.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
