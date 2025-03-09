import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// ScrollToTop component inline
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

// Header Component inline
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`transition-all duration-300 fixed w-full top-0 z-50 ${scrolled ? 'bg-dark/95 backdrop-blur shadow-lg py-3' : 'bg-dark py-4'}`}>
      <div className="container mx-auto px-5 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <h1 className="font-heading text-2xl font-bold tracking-wide text-white">
            Wax <span className="text-accent transition-colors duration-300 group-hover:text-white">Eloquent</span>
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center">
          <ul className="flex">
            <li className="mr-6"><Link to="/" className="text-white opacity-90 hover:opacity-100 hover:text-accent transition-colors">Home</Link></li>
            <li className="mr-6"><Link to="/services" className="text-white opacity-90 hover:opacity-100 hover:text-accent transition-colors">Services</Link></li>
            <li className="mr-6"><Link to="/portfolio" className="text-white opacity-90 hover:opacity-100 hover:text-accent transition-colors">Portfolio</Link></li>
            <li className="mr-6"><Link to="/about" className="text-white opacity-90 hover:opacity-100 hover:text-accent transition-colors">About</Link></li>
            <li className="mr-6"><Link to="/blog" className="text-white opacity-90 hover:opacity-100 hover:text-accent transition-colors">Blog</Link></li>
          </ul>
          <Link 
            to="/contact" 
            className="bg-primary text-white font-semibold py-2 px-6 rounded hover:bg-accent transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
        
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
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur py-4 px-5 shadow-lg animate-fade-in border-t border-primary/20">
          <ul className="flex flex-col gap-4">
            <li><Link to="/" className="block py-2 text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" className="block py-2 text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
            <li><Link to="/portfolio" className="block py-2 text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link></li>
            <li><Link to="/about" className="block py-2 text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/blog" className="block py-2 text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
            <li>
              <Link 
                to="/contact" 
                className="block bg-primary text-white font-semibold py-2 px-4 rounded text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
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

// Footer Component inline
function Footer() {
  return (
    <footer className="bg-dark text-light py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h2 className="font-heading text-2xl text-white mb-6">Wax Eloquent</h2>
            <p className="opacity-80 mb-6">Precision and clarity in every word.</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-white hover:bg-primary/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-white hover:bg-primary/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-white hover:bg-primary/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.333 15.667c-1.473 0-2.667-1.194-2.667-2.667s1.194-2.667 2.667-2.667c1.473 0 2.667 1.194 2.667 2.667s-1.194 2.667-2.667 2.667zm6.667 0c-1.473 0-2.667-1.194-2.667-2.667s1.194-2.667 2.667-2.667c1.473 0 2.667 1.194 2.667 2.667s-1.194 2.667-2.667 2.667zm3.333-6.667h-13.333v-2.667h13.333v2.667z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center"><span className="mr-2">→</span> Home</Link></li>
              <li><Link to="/services" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center"><span className="mr-2">→</span> Services</Link></li>
              <li><Link to="/portfolio" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center"><span className="mr-2">→</span> Portfolio</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center"><span className="mr-2">→</span> About</Link></li>
              <li><Link to="/blog" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center"><span className="mr-2">→</span> Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services#editing" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center"><span className="mr-2">→</span> Editing</Link></li>
              <li><Link to="/services#ghostwriting" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center"><span className="mr-2">→</span> Ghostwriting</Link></li>
              <li><Link to="/services#marketing" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center"><span className="mr-2">→</span> Marketing Content</Link></li>
              <li><Link to="/services#exec-comms" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center"><span className="mr-2">→</span> Executive Comms</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl text-white mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center opacity-80 hover:opacity-100 transition-colors">
                <span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span>
                <a href="mailto:rebecca@waxeloquent.com" className="hover:text-accent">rebecca@waxeloquent.com</a>
              </li>
              <li className="flex items-center opacity-80 hover:opacity-100 transition-colors">
                <span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                <a href="tel:+1234567890" className="hover:text-accent">(123) 456-7890</a>
              </li>
              <li className="flex items-center opacity-80 hover:opacity-100 transition-colors">
                <span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
                <span>Mon-Fri, 9AM-5PM EST</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 pt-8 text-center">
          <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} Wax Eloquent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Home page component
function Home() {
  return (
    <>
      <Helmet>
        <title>Wax Eloquent | Professional Editorial & Writing Services</title>
        <meta name="description" content="Professional editorial and writing services for tech professionals and agile organizations. Specializing in substantive editing, ghostwriting, and marketing content." />
      </Helmet>
      
      <section className="relative bg-dark text-white text-center py-28 md:py-36 bg-gradient-to-br from-dark to-primary overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container relative mx-auto px-5 z-10">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
            Craft Your Message <span className="text-accent">with Precision</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-delay opacity-90">
            Professional editorial and writing services for tech professionals and agile organizations
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center animate-fade-in-delay-2">
            <Link
              to="/services"
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:shadow-glow transition-all duration-300"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary text-white font-semibold py-3 px-8 rounded-md hover:bg-primary/20 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-light py-20 md:py-24">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">Comprehensive writing and editing services tailored to tech professionals and agile organizations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center group hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300 text-primary">✍️</div>
              <h3 className="font-heading text-xl mb-3">Substantive Editing</h3>
              <p className="text-gray-700">Transform rough drafts into polished prose with comprehensive structural and content editing.</p>
              <Link to="/services#editing" className="inline-flex items-center mt-4 text-primary hover:text-secondary transition-colors">
                Learn more <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center group hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-xl relative">
              <div className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300 text-primary">👻</div>
              <h3 className="font-heading text-xl mb-3">Ghostwriting</h3>
              <p className="text-gray-700">Articulate your ideas in your voice without the time investment of drafting content yourself.</p>
              <Link to="/services#ghostwriting" className="inline-flex items-center mt-4 text-primary hover:text-secondary transition-colors">
                Learn more <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center group hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300 text-primary">📣</div>
              <h3 className="font-heading text-xl mb-3">Marketing Content</h3>
              <p className="text-gray-700">Compelling copy that resonates with your target audience and drives conversions.</p>
              <Link to="/services#marketing" className="inline-flex items-center mt-4 text-primary hover:text-secondary transition-colors">
                Learn more <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/services"
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300 inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Why Choose Wax Eloquent</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">We combine technical expertise with exceptional writing to deliver content that makes an impact</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 group">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-all duration-300">
                <span className="text-2xl text-primary">🔍</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Technical Expertise</h3>
              <p className="text-gray-700">Deep understanding of technical concepts and agile methodologies</p>
            </div>
            
            <div className="text-center p-6 group">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-all duration-300">
                <span className="text-2xl text-primary">🎯</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Audience Focus</h3>
              <p className="text-gray-700">Content tailored to resonate with your specific audience</p>
            </div>
            
            <div className="text-center p-6 group">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-all duration-300">
                <span className="text-2xl text-primary">📈</span>
              </div>
              <h3 className="font-heading text-xl mb-2">SEO Optimized</h3>
              <p className="text-gray-700">Strategic keyword research and implementation for maximum visibility</p>
            </div>
            
            <div className="text-center p-6 group">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-all duration-300">
                <span className="text-2xl text-primary">💯</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Results-Driven</h3>
              <p className="text-gray-700">Content that achieves business objectives and drives action</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-dark text-white text-center py-16 bg-gradient-to-r from-dark to-primary">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl mb-6">Ready to elevate your communications?</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">Let's discuss how we can help you craft content that resonates with precision and impact.</p>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:shadow-glow transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

// Basic page components for other routes - simplified versions for now
function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Wax Eloquent</title>
        <meta name="description" content="Professional editorial and writing services for tech professionals and agile organizations." />
      </Helmet>
      
      <section className="bg-dark text-white text-center py-20 bg-gradient-to-r from-dark to-primary">
        <div className="container mx-auto px-5">
          <h1 className="font-heading text-4xl mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Professional editorial and writing services for tech and agile organizations
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 gap-8 mb-12">
            <div id="editing" className="bg-white p-8 rounded-lg shadow-md border border-transparent hover:border-primary transition-all">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                <span className="text-2xl text-primary">✍️</span>
              </div>
              <h3 className="font-heading text-xl mb-3">Substantive Editing</h3>
              <p className="text-gray-700 mb-4">Transform rough drafts into polished prose with comprehensive structural and content editing.</p>
            </div>
            
            <div id="ghostwriting" className="bg-white p-8 rounded-lg shadow-md border border-primary relative">
              <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </div>
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                <span className="text-2xl text-primary">👻</span>
              </div>
              <h3 className="font-heading text-xl mb-3">Ghostwriting</h3>
              <p className="text-gray-700 mb-4">Articulate your ideas in your voice without the time investment of drafting content yourself.</p>
            </div>
            
            <div id="marketing" className="bg-white p-8 rounded-lg shadow-md border border-transparent hover:border-primary transition-all">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                <span className="text-2xl text-primary">📣</span>
              </div>
              <h3 className="font-heading text-xl mb-3">Marketing Content</h3>
              <p className="text-gray-700 mb-4">Compelling copy that resonates with your target audience and drives conversions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Wax Eloquent</title>
        <meta name="description" content="View our portfolio of writing and editing projects for tech and agile organizations." />
      </Helmet>
      
      <section className="bg-dark text-white text-center py-20 bg-gradient-to-r from-dark to-primary">
        <div className="container mx-auto px-5">
          <h1 className="font-heading text-4xl mb-4">Our Portfolio</h1>
          <p className="text-lg max-w-2xl mx-auto">
            A selection of projects showcasing our expertise in editorial and writing services
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div id="technical" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-56 bg-primary/10 overflow-hidden flex items-center justify-center">
                <span className="text-5xl text-primary">📄</span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">
                  Technical Writing
                </span>
                <h3 className="font-heading text-xl mb-2">API Documentation Overhaul</h3>
                <p className="text-gray-600 text-sm mb-3">Client: FinTech API Provider</p>
                <p className="text-gray-700 mb-4">Complete restructuring and rewriting of developer documentation for a financial services API.</p>
              </div>
            </div>
            
            <div id="marketing" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-56 bg-secondary/10 overflow-hidden flex items-center justify-center">
                <span className="text-5xl text-secondary">🖥️</span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">
                  Marketing Content
                </span>
                <h3 className="font-heading text-xl mb-2">SaaS Website Copy</h3>
                <p className="text-gray-600 text-sm mb-3">Client: Project Management Software Startup</p>
                <p className="text-gray-700 mb-4">Strategic messaging and compelling copy for a complete website redesign.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <Helmet>
        <title>About | Wax Eloquent</title>
        <meta name="description" content="Learn about Wax Eloquent and our mission to help technical professionals communicate with clarity and impact." />
      </Helmet>
      
      <section className="bg-dark text-white text-center py-20 bg-gradient-to-r from-dark to-primary">
        <div className="container mx-auto px-5">
          <h1 className="font-heading text-4xl mb-4">About Wax Eloquent</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Precision and clarity in every word
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Wax Eloquent was founded with a simple mission: to help technical professionals and agile organizations communicate with clarity, precision, and impact.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                After spending over a decade in technical communications and content strategy roles within agile environments, our founder recognized a common challenge: brilliant technical minds often struggled to translate their expertise into accessible, engaging content that resonated with diverse audiences.
              </p>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-light p-8 rounded-lg">
                <h3 className="font-heading text-2xl mb-6">Why Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <div>
                      <strong className="font-semibold">Technical Expertise</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <div>
                      <strong className="font-semibold">Audience-Focused</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Wax Eloquent</title>
        <meta name="description" content="Insights on effective communication in technical and agile environments." />
      </Helmet>
      
      <section className="bg-dark text-white text-center py-16">
        <div className="container mx-auto px-5">
          <h1 className="font-heading text-4xl mb-3">Writing Insights</h1>
          <p className="text-lg">Thoughts on effective communication in technical and agile environments</p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <div className="h-48 bg-primary/10 overflow-hidden flex items-center justify-center">
                <span className="text-5xl text-primary">📝</span>
              </div>
              <div className="p-6">
                <div className="flex gap-4 text-sm text-gray-600 mb-3">
                  <span>March 1, 2025</span>
                  <span>Content Strategy</span>
                </div>
                
                <h2 className="font-heading text-xl mb-3">
                  <Link to="/blog/welcome-to-our-blog" className="text-dark hover:text-primary transition-colors">
                    Welcome to Our Blog
                  </Link>
                </h2>
                
                <p className="text-gray-700 mb-4">Introducing Wax Eloquent's blog, where we'll share insights on effective writing, editing, and communication.</p>
                
                <Link
                  to="/blog/welcome-to-our-blog"
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </article>
            
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <div className="h-48 bg-secondary/10 overflow-hidden flex items-center justify-center">
                <span className="text-5xl text-secondary">🔍</span>
              </div>
              <div className="p-6">
                <div className="flex gap-4 text-sm text-gray-600 mb-3">
                  <span>February 15, 2025</span>
                  <span>Technical Writing</span>
                </div>
                
                <h2 className="font-heading text-xl mb-3">
                  <Link to="/blog/technical-jargon-vs-clarity" className="text-dark hover:text-primary transition-colors">
                    Technical Jargon vs. Clarity: Finding the Right Balance
                  </Link>
                </h2>
                
                <p className="text-gray-700 mb-4">How to communicate complex technical concepts without losing your audience in unnecessary jargon.</p>
                
                <Link
                  to="/blog/technical-jargon-vs-clarity"
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Wax Eloquent</title>
        <meta name="description" content="Get in touch with Wax Eloquent to discuss your editorial and writing needs." />
      </Helmet>
      
      <section className="bg-dark text-white text-center py-20 bg-gradient-to-r from-dark to-primary">
        <div className="container mx-auto px-5">
          <h1 className="font-heading text-4xl mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Let's discuss how we can help elevate your communications
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl mb-6">Get in Touch</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Your Message *</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center"
                >
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="font-heading text-3xl mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Email</h3>
                    <p className="text-gray-700 mb-1">For general inquiries:</p>
                    <a href="mailto:rebecca@waxeloquent.com" className="text-primary hover:text-secondary transition-colors">rebecca@waxeloquent.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Phone</h3>
                    <p className="text-gray-700 mb-1">Monday - Friday, 9am - 5pm EST</p>
                    <a href="tel:+1234567890" className="text-primary hover:text-secondary transition-colors">(123) 456-7890</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Office Hours</h3>
                    <p className="text-gray-700 mb-1">Monday - Friday</p>
                    <p className="text-gray-700">9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Connect</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Main App component with routing
function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;