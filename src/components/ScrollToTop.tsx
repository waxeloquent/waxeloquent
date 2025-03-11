// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * 
 * This component scrolls the window back to the top whenever the route changes.
 * Place this component at the top level of your app structure, inside the Router
 * component but outside of the Routes component.
 * 
 * @returns null - This component doesn't render anything
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Add debugging to verify route changes are detected
    console.log('Route changed to:', pathname, hash);
    
    // Smoothly scroll to the top of the page when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname, hash]); // Also watch for hash changes since we're using HashRouter

  // This component doesn't render anything
  return null;
}

export default ScrollToTop;