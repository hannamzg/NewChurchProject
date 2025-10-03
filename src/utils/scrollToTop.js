/**
 * Utility function to scroll to the top of the page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

/**
 * Hook to scroll to top when component mounts
 */
export const useScrollToTop = () => {
  React.useEffect(() => {
    scrollToTop();
  }, []);
};
