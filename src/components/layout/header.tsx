// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Header Component
 * Responsive navigation header with mobile menu support and scroll effects
 */
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`transition-all duration-300 fixed w-full top-0 z-50 ${
        scrolled 
          ? 'bg-dark/95 backdrop-blur shadow-lg py-3' 
          : 'bg-dark py-4'
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <h1 className="font-heading text-2xl font-bold tracking-wide text-white">
            Wax <span className="text-accent transition-colors duration-300 group-hover:text-white">Eloquent</span>
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link 
                to="/" 
                className="text-white opacity-90 hover:opacity-100 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="text-white opacity-90 hover:opacity-100 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                className="text-white opacity-90 hover:opacity-100 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-white opacity-90 hover:opacity-100 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className="text-white opacity-90 hover:opacity-100 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="ml-4 bg-primary hover:bg-accent text-white font-semibold py-2 px-6 rounded transition-all duration-300 hover:shadow-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none p-1 rounded hover:bg-primary/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur py-4 px-5 shadow-lg animate-fade-in border-t border-primary/20">
          <ul className="flex flex-col gap-4">
            <li><Link to="/" className="block py-2 text-white hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/services" className="block py-2 text-white hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="block py-2 text-white hover:text-accent transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="block py-2 text-white hover:text-accent transition-colors">About</Link></li>
            <li><Link to="/blog" className="block py-2 text-white hover:text-accent transition-colors">Blog</Link></li>
            <li>
              <Link 
                to="/contact" 
                className="block bg-primary text-white font-semibold py-2 px-4 rounded text-center mt-2 hover:bg-accent transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;