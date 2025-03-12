import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost'; // Import the BlogPost component

function App() {
  return (
    <HashRouter>
      <HelmetProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          {/* Fixed header with proper z-index and styling */}
          <Header />
          
          {/* Main content area with top padding to account for fixed header */}
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<BlogPost />} /> {/* Dynamic route for blog posts */}
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route redirects to home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </HelmetProvider>
    </HashRouter>
  );
}

export default App;