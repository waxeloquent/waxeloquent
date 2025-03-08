// src/pages/Contact.tsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const location = useLocation();
  
  useEffect(() => {
    // Check if there's a pricing query parameter and set the service accordingly
    const params = new URLSearchParams(location.search);
    const pricing = params.get('pricing');
    
    if (pricing === 'project') {
      setService('Project-Based Services');
    } else if (pricing === 'retainer') {
      setService('Retainer Services');
    } else if (pricing === 'hourly') {
      setService('Hourly Consultation');
    }
  }, [location]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // In a real implementation, you would send this data to your backend or email service
    // For demo purposes, we'll just simulate a successful submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setService('');
      setMessage('');
      
      // Reset the submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-20 bg-gradient-to-r from-dark to-primary">
        <div className="container mx-auto px-5">
          <h1 className="font-heading text-4xl mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Let's discuss how we can help elevate your communications
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl mb-6">Get in Touch</h2>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Thank you for your message! We'll be in touch soon.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service of Interest</label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="Substantive Editing">Substantive Editing</option>
                    <option value="Ghostwriting">Ghostwriting</option>
                    <option value="Marketing Content">Marketing Content</option>
                    <option value="E-Books & Presentations">E-Books & Presentations</option>
                    <option value="Blogs & Emails">Blogs & Emails</option>
                    <option value="Executive Communications">Executive Communications</option>
                    <option value="Video Scripts">Video Scripts</option>
                    <option value="SEO Research & Optimization">SEO Research & Optimization</option>
                    <option value="Project-Based Services">Project-Based Services</option>
                    <option value="Retainer Services">Retainer Services</option>
                    <option value="Hourly Consultation">Hourly Consultation</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all flex items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary mr-4">
                    <i className="fas fa-envelope text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Email</h3>
                    <p className="text-gray-700 mb-1">For general inquiries:</p>
                    <a href="mailto:rebecca@waxeloquent.com" className="text-primary hover:text-secondary">rebecca@waxeloquent.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary mr-4">
                    <i className="fas fa-phone-alt text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Phone</h3>
                    <p className="text-gray-700 mb-1">Monday - Friday, 9am - 5pm EST</p>
                    <a href="tel:+1234567890" className="text-primary hover:text-secondary">(123) 456-7890</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary mr-4">
                    <i className="fas fa-clock text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Office Hours</h3>
                    <p className="text-gray-700 mb-1">Monday - Friday</p>
                    <p className="text-gray-700">9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary mr-4">
                    <i className="fas fa-share-alt text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Connect</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all">
                        <i className="fab fa-medium-m"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="font-heading text-xl mb-3">What happens after I submit this form?</h3>
              <p className="text-gray-700">
                We'll review your inquiry and get back to you within 1-2 business days to schedule an initial consultation. This call will help us understand your needs better and determine how we can best support you.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-heading text-xl mb-3">Do you offer free consultations?</h3>
              <p className="text-gray-700">
                Yes! We offer a free 30-minute consultation to discuss your project needs and determine if we're a good fit for each other before any commitment is made.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-heading text-xl mb-3">What information should I prepare for our first call?</h3>
              <p className="text-gray-700">
                It's helpful to have some basic information ready: your project goals, target audience, timeline, and any specific requirements you may have. Don't worry if you don't have everything figured out—we're here to help with that too.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-heading text-xl mb-3">How do you handle client confidentiality?</h3>
              <p className="text-gray-700">
                We take confidentiality seriously. We're happy to sign an NDA before beginning any discussions about sensitive projects, and we never share client information or work without explicit permission.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}