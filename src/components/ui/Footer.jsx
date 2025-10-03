import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

/**
 * Footer component with multiple sections
 *
 * @param {Object} props - Component props
 * @param {Array} props.sections - Footer sections
 * @param {Object} props.contact - Contact information
 * @param {Array} props.socialLinks - Social media links
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.rest - Additional props
 */
const Footer = ({
  sections = [],
  contact = {},
  socialLinks = [],
  className = '',
  ...rest
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn('bg-neutral-900 text-white', className)}
      role='contentinfo'
      {...rest}
    >
      {/* Main Footer Content */}
      <div className='container-app'>
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
                  <h3 className='text-lg font-bold'>
                    Abu Snan Orthodox Church
                  </h3>
                  <p className='text-sm text-neutral-300'>
                    كنيسة أبو سنان الأرثوذكسية
                  </p>
                </div>
              </div>
              <p className='text-sm text-neutral-300'>
                {contact.description ||
                  'Serving the Orthodox community in Abu Snan, Galilee, Israel.'}
              </p>
            </div>

            {/* Quick Links */}
            {sections.length > 0 && (
              <div>
                <h4 className='text-sm font-semibold text-white uppercase tracking-wider mb-4'>
                  Quick Links
                </h4>
                <ul className='space-y-2'>
                  {sections.map(section => (
                    <li key={section.key}>
                      <Link
                        to={section.path}
                        className='text-sm text-neutral-300 hover:text-white transition-colors'
                      >
                        {section.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Info */}
            {contact && (
              <div>
                <h4 className='text-sm font-semibold text-white uppercase tracking-wider mb-4'>
                  Contact
                </h4>
                <div className='space-y-2 text-sm text-neutral-300'>
                  {contact.address && (
                    <div className='flex items-start space-x-2 rtl:space-x-reverse'>
                      <svg
                        className='w-4 h-4 mt-0.5 flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>{contact.address}</span>
                    </div>
                  )}
                  {contact.phone && (
                    <div className='flex items-center space-x-2 rtl:space-x-reverse'>
                      <svg
                        className='w-4 h-4 flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                      </svg>
                      <a
                        href={`tel:${contact.phone}`}
                        className='hover:text-white transition-colors'
                      >
                        {contact.phone}
                      </a>
                    </div>
                  )}
                  {contact.email && (
                    <div className='flex items-center space-x-2 rtl:space-x-reverse'>
                      <svg
                        className='w-4 h-4 flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                      </svg>
                      <a
                        href={`mailto:${contact.email}`}
                        className='hover:text-white transition-colors'
                      >
                        {contact.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div>
                <h4 className='text-sm font-semibold text-white uppercase tracking-wider mb-4'>
                  Follow Us
                </h4>
                <div className='flex space-x-4 rtl:space-x-reverse'>
                  {socialLinks.map(link => (
                    <a
                      key={link.name}
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-8 h-8 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors'
                      aria-label={`Follow us on ${link.name}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-neutral-800 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-sm text-neutral-400'>
              © {currentYear} Abu Snan Orthodox Church. All rights reserved.
            </p>
            <div className='flex items-center space-x-6 rtl:space-x-reverse text-sm text-neutral-400'>
              <Link
                to='/privacy'
                className='hover:text-white transition-colors'
              >
                Privacy Policy
              </Link>
              <Link to='/terms' className='hover:text-white transition-colors'>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
