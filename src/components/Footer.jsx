import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/demoData';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container-custom'>
        <div className='py-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Church Info */}
            <div className='space-y-4'>
              <div className='flex items-center space-x-3 rtl:space-x-reverse'>
                <div className='w-10 h-10 bg-gradient rounded-full flex items-center justify-center'>
                  <img
                    src='/images/orthodox-cross.png'
                    alt='Orthodox Cross'
                    className='w-6 h-6 object-contain'
                  />
                </div>
                <div>
                  <h3 className='text-lg font-bold'>{t('home.title')}</h3>
                  <p className='text-sm text-gray-300'>{t('home.subtitle')}</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className='text-lg font-semibold mb-4'>
                {t('home.quickLinks.title')}
              </h4>
              <ul className='space-y-2'>
                <li>
                  <Link
                    to='/youth'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {t('nav.youth')}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/sunday-school'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {t('nav.sundaySchool')}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/gallery'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {t('nav.gallery')}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className='text-lg font-semibold mb-4'>
                {t('contact.info.title')}
              </h4>
              <div className='space-y-2 text-gray-300'>
                <div className='flex items-start space-x-2 rtl:space-x-reverse'>
                  <span className='text-accent'>📍</span>
                  <span className='text-sm'>{t('footer.address')}</span>
                </div>
                <div className='flex items-center space-x-2 rtl:space-x-reverse'>
                  <span className='text-accent'>📞</span>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className='text-sm hover:text-white transition-colors'
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className='flex items-center space-x-2 rtl:space-x-reverse'>
                  <span className='text-accent'>✉️</span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className='text-sm hover:text-white transition-colors'
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div>
              <h4 className='text-lg font-semibold mb-4'>
                {t('contact.map.title')}
              </h4>
              <div className='w-full h-32 bg-gray-800 rounded-lg overflow-hidden'>
                <iframe
                  src={contactInfo.mapEmbed}
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title={t('contact.map.title')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm'>{t('footer.copyright')}</p>
            <div className='flex space-x-6 rtl:space-x-reverse'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='sr-only'>Facebook</span>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='sr-only'>Instagram</span>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
