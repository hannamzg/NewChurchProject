/**
 * Utility function to merge class names
 * Similar to clsx or classnames but simpler
 *
 * @param {...(string|Object|Array)} classes - Class names to merge
 * @returns {string} - Merged class names
 */
export function cn(...classes) {
  return classes
    .filter(Boolean)
    .map(cls => {
      if (typeof cls === 'string') return cls;
      if (typeof cls === 'object' && cls !== null) {
        return Object.entries(cls)
          .filter(([, value]) => value)
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ');
}
