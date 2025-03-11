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

// Import Blog Components
import BlogList from './blog/BlogList';
import WelcomePost from './blog/posts/WelcomePost';
import TechnicalJargonPost from './blog/posts/TechnicalJargonPost';

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
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Blog Routes */}
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/welcome-to-our-blog" element={<WelcomePost />} />
            <Route path="blog/technical-jargon-vs-clarity" element={<TechnicalJargonPost />} />
            
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