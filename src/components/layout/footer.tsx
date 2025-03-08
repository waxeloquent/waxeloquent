// src/components/layout/Footer.tsx - Place this file in the src/components/layout folder

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="font-heading text-2xl text-white mb-4">Wax Eloquent</h2>
            <p className="opacity-80">Precision and clarity in every word.</p>
          </div>
          
          <div>
            <h3 className="text-xl text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="opacity-80 hover:opacity-100 hover:text-accent">Home</Link></li>
              <li><Link to="/services" className="opacity-80 hover:opacity-100 hover:text-accent">Services</Link></li>
              <li><Link to="/portfolio" className="opacity-80 hover:opacity-100 hover:text-accent">Portfolio</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-accent">About</Link></li>
              <li><Link to="/blog" className="opacity-80 hover:opacity-100 hover:text-accent">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services#editing" className="opacity-80 hover:opacity-100 hover:text-accent">Editing</Link></li>
              <li><Link to="/services#ghostwriting" className="opacity-80 hover:opacity-100 hover:text-accent">Ghostwriting</Link></li>
              <li><Link to="/services#marketing" className="opacity-80 hover:opacity-100 hover:text-accent">Marketing Content</Link></li>
              <li><Link to="/services#exec-comms" className="opacity-80 hover:opacity-100 hover:text-accent">Executive Comms</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl text-white mb-6">Contact</h3>
            <p className="mb-4">Email: <a href="mailto:rebecca@waxeloquent.com" className="opacity-80 hover:opacity-100 hover:text-accent">rebecca@waxeloquent.com</a></p>
            <div className="flex gap-4 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl opacity-80 hover:opacity-100 hover:text-accent">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl opacity-80 hover:opacity-100 hover:text-accent">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-xl opacity-80 hover:opacity-100 hover:text-accent">
                <i className="fab fa-medium"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} Wax Eloquent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}