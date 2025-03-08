import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';

// Import layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Simple page components
function Home() {
  return (
    <>
      <section className="bg-dark text-white text-center py-24 md:py-32 bg-gradient-to-br from-dark to-primary">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-4xl md:text-5xl mb-6 animate-fade-in">Craft Your Message with Precision</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-delay">
            Professional editorial and writing services for tech professionals and agile organizations
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-delay-2">
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
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl text-primary mb-4">✍️</div>
              <h3 className="font-heading text-xl mb-3">Substantive Editing</h3>
              <p className="text-gray-700">Transform rough drafts into polished prose with comprehensive structural and content editing.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl text-primary mb-4">👻</div>
              <h3 className="font-heading text-xl mb-3">Ghostwriting</h3>
              <p className="text-gray-700">Articulate your ideas in your voice without the time investment of drafting content yourself.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300">
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl text-center mb-12">Why Choose Wax Eloquent</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary">🔍</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Technical Expertise</h3>
              <p className="text-gray-700">Deep understanding of technical concepts and agile methodologies</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary">🎯</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Audience Focus</h3>
              <p className="text-gray-700">Content tailored to resonate with your specific audience</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary">📈</span>
              </div>
              <h3 className="font-heading text-xl mb-2">SEO Optimized</h3>
              <p className="text-gray-700">Strategic keyword research and implementation for maximum visibility</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary">💯</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Results-Driven</h3>
              <p className="text-gray-700">Content that achieves business objectives and drives action</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Services() {
  return (
    <>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div id="editing" className="bg-white p-8 rounded-lg shadow-md border border-transparent hover:border-primary transition-all">
              <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mb-6">
                <span className="text-2xl text-primary">✍️</span>
              </div>
              <h3 className="font-heading text-xl mb-3">Substantive Editing</h3>
              <p className="text-gray-700 mb-6">Transform rough drafts into polished prose with comprehensive structural and content editing.</p>
              <p className="text-gray-700 mb-6">Our substantive editing enhances the overall clarity, flow, and impact of your content. We'll reorganize sections, suggest content additions or cuts, refine your tone and style, and ensure your message resonates with your target audience.</p>
              
              <h4 className="font-semibold text-lg mb-4">What's Included:</h4>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Comprehensive content evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Structural reorganization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Clarity and flow improvements</span>
                </li>
              </ul>
            </div>
            
            <div id="ghostwriting" className="bg-white p-8 rounded-lg shadow-md border border-primary relative">
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </div>
              <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mb-6">
                <span className="text-2xl text-primary">👻</span>
              </div>
              <h3 className="font-heading text-xl mb-3">Ghostwriting</h3>
              <p className="text-gray-700 mb-6">Articulate your ideas in your voice without the time investment of drafting content yourself.</p>
              <p className="text-gray-700 mb-6">Our ghostwriting service captures your expertise, insights, and unique voice while saving you the time of writing. We conduct thorough research and interviews to understand your perspective, then craft compelling content that sounds authentically like you.</p>
              
              <h4 className="font-semibold text-lg mb-4">What's Included:</h4>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Comprehensive content brief</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>In-depth topic research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Custom content creation</span>
                </li>
              </ul>
            </div>
            
            <div id="marketing" className="bg-white p-8 rounded-lg shadow-md border border-transparent hover:border-primary transition-all">
              <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mb-6">
                <span className="text-2xl text-primary">📣</span>
              </div>
              <h3 className="font-heading text-xl mb-3">Marketing Content</h3>
              <p className="text-gray-700 mb-6">Compelling copy that resonates with your target audience and drives conversions.</p>
              <p className="text-gray-700 mb-6">From website copy to sales materials, our marketing content is strategically crafted to engage your audience, communicate your value proposition, and drive desired actions. We combine persuasive writing techniques with SEO best practices for maximum impact.</p>
              
              <h4 className="font-semibold text-lg mb-4">What's Included:</h4>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Keyword research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Competitor analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Strategic messaging framework</span>
                </li>
              </ul>
            </div>
            
            <div id="exec-comms" className="bg-white p-8 rounded-lg shadow-md border border-transparent hover:border-primary transition-all">
              <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mb-6">
                <span className="text-2xl text-primary">🎤</span>
              </div>
              <h3 className="font-heading text-xl mb-3">Executive Communications</h3>
              <p className="text-gray-700 mb-6">Speeches, presentations, and communications that reflect your leadership and vision.</p>
              <p className="text-gray-700 mb-6">Our executive communications services help leaders articulate their vision, build credibility, and inspire action. We craft speeches, presentations, internal communications, and thought leadership pieces that reflect your authentic voice while delivering maximum impact.</p>
              
              <h4 className="font-semibold text-lg mb-4">What's Included:</h4>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Message strategy development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Speech or presentation writing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Talking points creation</span>
                </li>
              </ul>
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
              <div className="h-56 bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-primary bg-opacity-20 flex items-center justify-center">
                  <span className="text-5xl">📄</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary bg-opacity-10 text-primary rounded-full mb-3">
                  Technical Writing
                </span>
                <h3 className="font-heading text-xl mb-2">API Documentation Overhaul</h3>
                <p className="text-gray-600 text-sm mb-3">Client: FinTech API Provider</p>
                <p className="text-gray-700 mb-4">Complete restructuring and rewriting of developer documentation for a financial services API, resulting in improved developer experience and reduced support tickets.</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <p className="text-gray-700">The documentation overhaul led to a 43% decrease in support tickets related to API implementation questions and a 27% increase in successful API integrations.</p>
                </div>
              </div>
            </div>
            
            <div id="marketing" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-secondary bg-opacity-20 flex items-center justify-center">
                  <span className="text-5xl">🖥️</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary bg-opacity-10 text-primary rounded-full mb-3">
                  Marketing Content
                </span>
                <h3 className="font-heading text-xl mb-2">SaaS Website Copy</h3>
                <p className="text-gray-600 text-sm mb-3">Client: Project Management Software Startup</p>
                <p className="text-gray-700 mb-4">Strategic messaging and compelling copy for a complete website redesign, focusing on communicating complex features in accessible language while maintaining SEO performance.</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <p className="text-gray-700">The new website messaging contributed to a 32% increase in demo requests and improved average time on page by 45%.</p>
                </div>
              </div>
            </div>
            
            <div id="executive" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-accent bg-opacity-20 flex items-center justify-center">
                  <span className="text-5xl">🎤</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary bg-opacity-10 text-primary rounded-full mb-3">
                  Executive Communications
                </span>
                <h3 className="font-heading text-xl mb-2">Executive Thought Leadership Program</h3>
                <p className="text-gray-600 text-sm mb-3">Client: Enterprise Software Company</p>
                <p className="text-gray-700 mb-4">Ongoing ghostwriting of articles, presentations, and social media content for the C-suite, positioning executives as industry thought leaders in artificial intelligence and machine learning.</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <p className="text-gray-700">Secured speaking engagements at major industry conferences and increased LinkedIn engagement by 215% within six months.</p>
                </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-3xl mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Wax Eloquent was founded by Rebecca Traeger with a simple mission: to help technical professionals and agile organizations communicate with clarity, precision, and impact.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                After spending over a decade in technical communications and content strategy roles within agile environments, Rebecca recognized a common challenge: brilliant technical minds often struggled to translate their expertise into accessible, engaging content that resonated with diverse audiences.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Today, Wax Eloquent serves as a trusted partner to technology leaders, product teams, and agile organizations who understand that effective communication is as crucial to success as technical excellence.
              </p>
              <div className="bg-light p-6 rounded-lg border-l-4 border-primary my-8">
                <p className="italic text-gray-700">
                  "My goal is to help technical experts find their voice and amplify their impact. Great ideas deserve to be communicated clearly and compellingly."
                </p>
                <p className="mt-4 font-semibold">— Rebecca Traeger, Founder</p>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-light p-8 rounded-lg">
                <h3 className="font-heading text-2xl mb-6">Why Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <div>
                      <strong className="font-semibold">Technical Expertise:</strong>
                      <p className="text-gray-700">Deep understanding of agile methodologies, software development, and technical concepts.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <div>
                      <strong className="font-semibold">Audience-Focused:</strong>
                      <p className="text-gray-700">Content tailored to resonate with your specific audience, from C-suite to developers.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <div>
                      <strong className="font-semibold">SEO Optimized:</strong>
                      <p className="text-gray-700">Strategic keyword research and implementation for maximum visibility.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <div>
                      <strong className="font-semibold">Results-Driven:</strong>
                      <p className="text-gray-700">Content that achieves business objectives, from lead generation to thought leadership.</p>
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
              <div className="h-48 bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-primary bg-opacity-20 flex items-center justify-center">
                  <span className="text-5xl">📝</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-4 text-sm text-gray-600 mb-3">
                  <span>March 1, 2025</span>
                  <span>Content Strategy</span>
                </div>
                
                <h2 className="font-heading text-xl mb-3">
                  <a href="/blog/welcome-to-our-blog" className="text-dark hover:text-primary">
                    Welcome to Our Blog
                  </a>
                </h2>
                
                <p className="text-gray-700 mb-4">Introducing Wax Eloquent's blog, where we'll share insights on effective writing, editing, and communication for technical professionals and agile organizations.</p>
                
                <a 
                  href="/blog/welcome-to-our-blog"
                  className="inline-block font-semibold text-primary hover:text-secondary relative pr-6"
                >
                  Read More
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
            
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-secondary bg-opacity-20 flex items-center justify-center">
                  <span className="text-5xl">🔍</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-4 text-sm text-gray-600 mb-3">
                  <span>February 15, 2025</span>
                  <span>Technical Writing</span>
                </div>
                
                <h2 className="font-heading text-xl mb-3">
                  <a href="/blog/technical-jargon-vs-clarity" className="text-dark hover:text-primary">
                    Technical Jargon vs. Clarity: Finding the Right Balance
                  </a>
                </h2>
                
                <p className="text-gray-700 mb-4">How to communicate complex technical concepts without losing your audience in unnecessary jargon and terminology.</p>
                
                <a 
                  href="/blog/technical-jargon-vs-clarity"
                  className="inline-block font-semibold text-primary hover:text-secondary relative pr-6"
                >
                  Read More
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform group-hover:translate-x-1">→</span>
                </a>
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
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
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
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service of Interest</label>
                  <select
                    id="service"
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
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all flex items-center"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="font-heading text-3xl mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary mr-4">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Email</h3>
                    <p className="text-gray-700 mb-1">For general inquiries:</p>
                    <a href="mailto:rebecca@waxeloquent.com" className="text-primary hover:text-secondary">rebecca@waxeloquent.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary mr-4">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Phone</h3>
                    <p className="text-gray-700 mb-1">Monday - Friday, 9am - 5pm EST</p>
                    <a href="tel:+1234567890" className="text-primary hover:text-secondary">(123) 456-7890</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary mr-4">
                    <span className="text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Office Hours</h3>
                    <p className="text-gray-700 mb-1">Monday - Friday</p>
                    <p className="text-gray-700">9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary mr-4">
                    <span className="text-xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Connect</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all">
                        <span>in</span>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all">
                        <span>𝕏</span>
                      </a>
                      <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all">
                        <span>M</span>
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

// Footer Component
function Footer() {
  return (
    <footer className="bg-dark text-light py-12">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h2 className="font-heading text-2xl text-white mb-4">Wax Eloquent</h2>
            <p className="opacity-80">Precision and clarity in every word.</p>
          </div>
          
          <div>
            <h3 className="text-xl text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Home</a></li>
              <li><a href="/services" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Services</a></li>
              <li><a href="/portfolio" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">About</a></li>
              <li><a href="/blog" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services#editing" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Editing</a></li>
              <li><a href="/services#ghostwriting" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Ghostwriting</a></li>
              <li><a href="/services#marketing" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Marketing Content</a></li>
              <li><a href="/services#exec-comms" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Executive Comms</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl text-white mb-4">Contact</h3>
            <p className="mb-2">Email: <a href="mailto:rebecca@waxeloquent.com" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">rebecca@waxeloquent.com</a></p>
            <p className="mb-4">Phone: <a href="tel:+1234567890" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">(123) 456-7890</a></p>
            <div className="flex gap-4 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                <span>in</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                <span>𝕏</span>
              </a>
              <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-xl opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                <span>M</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} Wax Eloquent. All rights reserved.</p>
        </div>
      </div>
    </footer>
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