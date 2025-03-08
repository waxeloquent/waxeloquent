import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-5 py-4">
        <div className="logo">
          <Link to="/" className="font-heading text-2xl font-bold">
            Wax Eloquent
          </Link>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li><Link to="/" className="font-semibold hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="font-semibold hover:text-primary">Services</Link></li>
            <li><Link to="/portfolio" className="font-semibold hover:text-primary">Portfolio</Link></li>
            <li><Link to="/about" className="font-semibold hover:text-primary">About</Link></li>
            <li><Link to="/blog" className="font-semibold hover:text-primary">Blog</Link></li>
            <li>
              <Link 
                to="/contact" 
                className="bg-primary text-white font-semibold py-2 px-6 rounded hover:bg-secondary transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5"
          >
            <span className="block w-6 h-0.5 bg-dark"></span>
            <span className="block w-6 h-0.5 bg-dark"></span>
            <span className="block w-6 h-0.5 bg-dark"></span>
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <ul className="flex flex-col gap-4">
            <li><Link to="/" className="block py-2 font-semibold" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" className="block py-2 font-semibold" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
            <li><Link to="/portfolio" className="block py-2 font-semibold" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link></li>
            <li><Link to="/about" className="block py-2 font-semibold" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/blog" className="block py-2 font-semibold" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
            <li>
              <Link 
                to="/contact" 
                className="block bg-primary text-white font-semibold py-2 px-6 rounded text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}