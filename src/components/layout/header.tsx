import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Dropdown Menu Component
const DropdownMenu = ({ isOpen, items, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef}
      className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 text-sm"
    >
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors"
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

// Main Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  
  // Close mobile menu when a route is selected
  const closeMobileMenu = () => setMobileMenuOpen(false);
  
  // Services dropdown menu items
  const servicesItems = [
    { label: 'Substantive Editing', path: '/services#editing' },
    { label: 'Ghostwriting', path: '/services#ghostwriting' },
    { label: 'Marketing Content', path: '/services#marketing' },
    { label: 'Executive Communications', path: '/services#exec-comms' },
    { label: 'All Services', path: '/services' },
  ];
  
  // Portfolio dropdown menu items
  const portfolioItems = [
    { label: 'Technical Writing', path: '/portfolio#technical' },
    { label: 'Marketing Content', path: '/portfolio#marketing' },
    { label: 'Executive Communications', path: '/portfolio#executive' },
    { label: 'All Projects', path: '/portfolio' },
  ];
  
  return (
    <header className="bg-dark bg-opacity-95 backdrop-blur-sm text-white py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <h1 className="font-heading text-2xl font-bold tracking-wide group-hover:text-accent transition-colors">
            Wax <span className="text-accent group-hover:text-white transition-colors">Eloquent</span>
          </h1>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center">
            <li>
              <Link to="/" className="text-white hover:text-accent transition-colors py-2">
                Home
              </Link>
            </li>
            
            <li className="relative">
              <button 
                className="text-white hover:text-accent transition-colors py-2 flex items-center gap-1"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <DropdownMenu 
                isOpen={servicesDropdownOpen} 
                items={servicesItems} 
                onClose={() => setServicesDropdownOpen(false)} 
              />
            </li>
            
            <li className="relative">
              <button 
                className="text-white hover:text-accent transition-colors py-2 flex items-center gap-1"
                onClick={() => setPortfolioDropdownOpen(!portfolioDropdownOpen)}
              >
                Portfolio
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 transition-transform duration-200 ${portfolioDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <DropdownMenu 
                isOpen={portfolioDropdownOpen} 
                items={portfolioItems} 
                onClose={() => setPortfolioDropdownOpen(false)} 
              />
            </li>
            
            <li>
              <Link to="/about" className="text-white hover:text-accent transition-colors py-2">
                About
              </Link>
            </li>
            
            <li>
              <Link to="/blog" className="text-white hover:text-accent transition-colors py-2">
                Blog
              </Link>
            </li>
            
            <li>
              <Link 
                to="/contact" 
                className="bg-primary bg-opacity-80 hover:bg-opacity-100 text-white font-semibold py-2 px-5 rounded hover:shadow-lg transition-all ml-2"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
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
        <div className="md:hidden bg-dark bg-opacity-95 py-4 px-5 shadow-lg animate-fade-in">
          <ul className="flex flex-col gap-4">
            <li><Link to="/" className="block py-2 text-white" onClick={closeMobileMenu}>Home</Link></li>
            
            <li>
              <div className="py-2">
                <div 
                  className="flex justify-between items-center"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  <span className="text-white">Services</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {servicesDropdownOpen && (
                  <div className="pl-4 mt-2 border-l border-accent space-y-2">
                    {servicesItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block py-1 text-gray-300 hover:text-white"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
            
            <li>
              <div className="py-2">
                <div 
                  className="flex justify-between items-center"
                  onClick={() => setPortfolioDropdownOpen(!portfolioDropdownOpen)}
                >
                  <span className="text-white">Portfolio</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 transition-transform duration-200 ${portfolioDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {portfolioDropdownOpen && (
                  <div className="pl-4 mt-2 border-l border-accent space-y-2">
                    {portfolioItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block py-1 text-gray-300 hover:text-white"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
            
            <li><Link to="/about" className="block py-2 text-white" onClick={closeMobileMenu}>About</Link></li>
            <li><Link to="/blog" className="block py-2 text-white" onClick={closeMobileMenu}>Blog</Link></li>
            <li>
              <Link 
                to="/contact" 
                className="block bg-primary text-white font-semibold py-2 px-4 rounded text-center mt-2"
                onClick={closeMobileMenu}
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