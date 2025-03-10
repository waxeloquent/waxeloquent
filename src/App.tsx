import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';

// Import Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import BlogList from './pages/Blog/BlogList';
import BlogPost from './pages/Blog/BlogPost';
// Import static blog post fallbacks as a backup
import WelcomeBlogPost from './pages/Blog/WelcomeBlogPost';
import TechnicalJargonBlogPost from './pages/Blog/TechnicalJargonBlogPost';

function App() {
  return (
    <HelmetProvider>
      {/* ScrollToTop component handles scrolling to top on route change */}
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
            <Route path="/blog" element={<BlogList />} />
            
            {/* Dynamic blog post route - this will attempt to load from markdown */}
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* Static fallback routes in case dynamic loading fails */}
            <Route path="/blog/welcome-to-our-blog" element={<WelcomeBlogPost />} />
            <Route path="/blog/technical-jargon-vs-clarity" element={<TechnicalJargonBlogPost />} />
            
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route redirects to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;