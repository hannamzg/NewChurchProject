import React, { useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * Modal component with backdrop and focus management
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Modal open state
 * @param {Function} props.onClose - Close handler
 * @param {React.ReactNode} props.children - Modal content
 * @param {string} props.size - Modal size (sm, md, lg, xl, full)
 * @param {boolean} props.closeOnBackdrop - Close on backdrop click
 * @param {boolean} props.closeOnEscape - Close on escape key
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.rest - Additional props
 */
const Modal = ({
  isOpen,
  onClose,
  children,
  size = 'md',
  closeOnBackdrop = true,
  closeOnEscape = true,
  className = '',
  ...rest
}) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      modalRef.current?.focus();
    } else {
      previousActiveElement.current?.focus();
    }
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleEscape = event => {
      if (closeOnEscape && event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeOnEscape, onClose]);

  // Backdrop click handler
  const handleBackdropClick = event => {
    if (closeOnBackdrop && event.target === event.currentTarget) {
      onClose();
    }
  };

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
  };

  if (!isOpen) return null;

  return (
    <div
      className='modal-backdrop'
      onClick={handleBackdropClick}
      role='dialog'
      aria-modal='true'
      {...rest}
    >
      <div
        ref={modalRef}
        className={cn(
          'relative bg-white dark:bg-neutral-800 rounded-xl shadow-xl mx-auto my-8',
          sizeClasses[size],
          className
        )}
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * Modal Header component
 */
const ModalHeader = ({ children, className = '', ...rest }) => (
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
 * Modal Body component
 */
const ModalBody = ({ children, className = '', ...rest }) => (
  <div className={cn('px-6 py-4', className)} {...rest}>
    {children}
  </div>
);

/**
 * Modal Footer component
 */
const ModalFooter = ({ children, className = '', ...rest }) => (
  <div
    className={cn(
      'px-6 py-4 border-t border-neutral-200 dark:border-neutral-700 flex justify-end space-x-3',
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

/**
 * Modal Title component
 */
const ModalTitle = ({ children, className = '', ...rest }) => (
  <h2
    className={cn(
      'text-lg font-semibold text-neutral-900 dark:text-neutral-100',
      className
    )}
    {...rest}
  >
    {children}
  </h2>
);

/**
 * Modal Close Button component
 */
const ModalCloseButton = ({ onClose, className = '', ...rest }) => (
  <button
    type='button'
    onClick={onClose}
    className={cn(
      'absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors',
      className
    )}
    aria-label='Close modal'
    {...rest}
  >
    <svg
      className='w-5 h-5'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  </button>
);

// Export all components
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;

export default Modal;
