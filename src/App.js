import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Simple components
function Header() {
  return (
    <header className="bg-dark text-white py-6">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <div>
          <h1 className="font-heading text-2xl font-bold">Wax Eloquent</h1>
          <p className="text-sm opacity-80">Professional editorial and writing services</p>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li><a href="/" className="text-white hover:text-accent">Home</a></li>
            <li><a href="/services" className="text-white hover:text-accent">Services</a></li>
            <li><a href="/portfolio" className="text-white hover:text-accent">Portfolio</a></li>
            <li><a href="/about" className="text-white hover:text-accent">About</a></li>
            <li><a href="/blog" className="text-white hover:text-accent">Blog</a></li>
            <li>
              <a 
                href="/contact" 
                className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-secondary transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <>
      <section className="bg-dark text-white text-center py-24 md:py-32">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Craft Your Message with Precision</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Professional editorial and writing services for tech professionals and agile organizations
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="border-2 border-primary text-white font-semibold py-3 px-8 rounded hover:bg-primary transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section className="bg-light py-16 md:py-20">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl text-center mb-12">Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-primary mb-4">✍️</div>
              <h3 className="font-heading text-xl mb-3">Substantive Editing</h3>
              <p className="text-gray-700">Transform rough drafts into polished prose with comprehensive structural and content editing.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-primary mb-4">👻</div>
              <h3 className="font-heading text-xl mb-3">Ghostwriting</h3>
              <p className="text-gray-700">Articulate your ideas in your voice without the time investment of drafting content yourself.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-primary mb-4">📣</div>
              <h3 className="font-heading text-xl mb-3">Marketing Content</h3>
              <p className="text-gray-700">Compelling copy that resonates with your target audience and drives conversions.</p>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/services"
              className="bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-light py-8">
      <div className="container mx-auto px-5 text-center">
        <p>&copy; {new Date().getFullYear()} Wax Eloquent. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;