// File: src/components/layout/ScrollToTop.tsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * 
 * This component scrolls the window back to the top whenever the route changes.
 * Place this component at the top level inside the Router.
 */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname, hash]); // Watch for changes in pathname and hash

  // This component doesn't render anything
  return null;
};

export default ScrollToTop;