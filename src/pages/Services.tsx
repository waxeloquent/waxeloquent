// src/pages/Services.tsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'editing',
      category: 'editing',
      title: 'Substantive Editing',
      description: 'Transform rough drafts into polished prose with comprehensive structural and content editing.',
      details: 'Our substantive editing goes beyond grammar and spelling to enhance the overall clarity, flow, and impact of your content. We'll reorganize sections, suggest content additions or cuts, refine your tone and style, and ensure your message resonates with your target audience.',
      deliverables: ['Comprehensive content evaluation', 'Structural reorganization', 'Clarity and flow improvements', 'Tone and style refinement', 'Audience-focused recommendations'],
      icon: 'edit',
      popular: false
    },
    {
      id: 'ghostwriting',
      category: 'writing',
      title: 'Ghostwriting',
      description: 'Articulate your ideas in your voice without the time investment of drafting content yourself.',
      details: 'Our ghostwriting service captures your expertise, insights, and unique voice while saving you the time of writing. We conduct thorough research and interviews to understand your perspective, then craft compelling content that sounds authentically like you.',
      deliverables: ['Comprehensive content brief', 'In-depth topic research', 'Custom content creation', 'Two rounds of revisions', 'Final polished deliverable'],
      icon: 'ghost',
      popular: true
    },
    {
      id: 'marketing',
      category: 'writing',
      title: 'Marketing Content',
      description: 'Compelling copy that resonates with your target audience and drives conversions.',
      details: 'From website copy to sales materials, our marketing content is strategically crafted to engage your audience, communicate your value proposition, and drive desired actions. We combine persuasive writing techniques with SEO best practices for maximum impact.',
      deliverables: ['Keyword research', 'Competitor analysis', 'Strategic messaging framework', 'Persuasive copy creation', 'SEO optimization'],
      icon: 'bullhorn',
      popular: false
    },
    {
      id: 'ebooks',
      category: 'premium',
      title: 'E-Books & Presentations',
      description: 'Establish thought leadership with professionally crafted long-form content and presentations.',
      details: 'Our premium e-books and presentations position you as an industry authority while generating leads and building credibility. We handle the entire process from concept development to final design collaboration, delivering comprehensive, valuable content that showcases your expertise.',
      deliverables: ['Topic and outline development', 'Comprehensive research', 'Complete content creation', 'Visual framework suggestions', 'Design-ready deliverable'],
      icon: 'book',
      popular: false
    },
    {
      id: 'blogs',
      category: 'writing',
      title: 'Blogs & Emails',
      description: 'Engage your audience regularly with content that informs, entertains, and converts.',
      details: 'Consistent, high-quality blog posts and email campaigns keep your audience engaged and nurture leads through the sales funnel. Our content is researched, SEO-optimized, and strategically aligned with your business objectives.',
      deliverables: ['Content calendar planning', 'Keyword-optimized writing', 'Engagement-focused formatting', 'Call-to-action strategy', 'Analytics recommendations'],
      icon: 'blog',
      popular: false
    },
    {
      id: 'exec-comms',
      category: 'premium',
      title: 'Executive Communications',
      description: 'Speeches, presentations, and communications that reflect your leadership and vision.',
      details: 'Our executive communications services help leaders articulate their vision, build credibility, and inspire action. We craft speeches, presentations, internal communications, and thought leadership pieces that reflect your authentic voice while delivering maximum impact.',
      deliverables: ['Message strategy development', 'Speech or presentation writing', 'Talking points creation', 'Q&A preparation', 'Delivery coaching recommendations'],
      icon: 'microphone-alt',
      popular: true
    },
    {
      id: 'video-scripts',
      category: 'multimedia',
      title: 'Video Scripts',
      description: 'Engaging scripts for product demos, explainer videos, thought leadership, and marketing content.',
      details: 'Our video scripting services transform complex concepts into compelling visual narratives. Whether you need explainer videos, product demonstrations, or thought leadership content, we craft scripts that engage viewers and drive your message home effectively.',
      deliverables: ['Concept development', 'Full script creation', 'Visual direction notes', 'Timing and pacing guidance', 'Two rounds of revisions'],
      icon: 'video',
      popular: false
    },
    {
      id: 'seo-research',
      category: 'strategy',
      title: 'SEO Research & Optimization',
      description: 'Comprehensive keyword research and content optimization to improve visibility and traffic.',
      details: 'Our SEO services ensure your content reaches your target audience. We conduct in-depth keyword research, competitor analysis, and content optimization to improve your search rankings and drive organic traffic to your website.',
      deliverables: ['Comprehensive keyword research', 'Competitor content analysis', 'SEO content strategy', 'On-page optimization recommendations', 'Content implementation plan'],
      icon: 'search',
      popular: false
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-20 bg-gradient-to-r from-dark to-primary">
        <div className="container mx-auto px-5">
          <h1 className="font-heading text-4xl mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Professional editorial and writing services for tech and agile organizations
          </p>
        </div>
      </section>

      {/* Services Filter */}
      <section className="py-10 bg-light">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveTab('all')}
              className={`py-2 px-6 rounded-full ${activeTab === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              All Services
            </button>
            <button 
              onClick={() => setActiveTab('editing')}
              className={`py-2 px-6 rounded-full ${activeTab === 'editing' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Editing
            </button>
            <button 
              onClick={() => setActiveTab('writing')}
              className={`py-2 px-6 rounded-full ${activeTab === 'writing' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Writing
            </button>
            <button 
              onClick={() => setActiveTab('premium')}
              className={`py-2 px-6 rounded-full ${activeTab === 'premium' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Premium Content
            </button>
            <button 
              onClick={() => setActiveTab('multimedia')}
              className={`py-2 px-6 rounded-full ${activeTab === 'multimedia' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Multimedia
            </button>
            <button 
              onClick={() => setActiveTab('strategy')}
              className={`py-2 px-6 rounded-full ${activeTab === 'strategy' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Strategy
            </button>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                id={service.id}
                className={`bg-white p-8 rounded-lg shadow-md border ${service.popular ? 'border-primary' : 'border-transparent'} relative`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mb-6">
                  <i className={`fas fa-${service.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="font-heading text-xl mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <p className="text-gray-700 mb-6">{service.details}</p>
                
                <h4 className="font-semibold text-lg mb-4">What's Included:</h4>
                <ul className="space-y-2 mb-8">
                  {service.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Link 
                    to="/contact"
                    className="block text-center bg-primary text-white font-semibold py-3 px-6 rounded hover:bg-secondary transition-all"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl text-center mb-12">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg relative">
              <div className="w-12 h-12 absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="font-heading text-xl mb-4 mt-4 text-center">Discovery</h3>
              <p className="text-gray-700 text-center">
                We start with a thorough consultation to understand your goals, audience, brand voice, and specific requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg relative">
              <div className="w-12 h-12 absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="font-heading text-xl mb-4 mt-4 text-center">Creation</h3>
              <p className="text-gray-700 text-center">
                Our team researches, drafts, and refines your content to meet the highest standards of quality and effectiveness.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg relative">
              <div className="w-12 h-12 absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="font-heading text-xl mb-4 mt-4 text-center">Refinement</h3>
              <p className="text-gray-700 text-center">
                We collaborate with you through revision rounds to ensure the final deliverable perfectly matches your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl text-center mb-4">Flexible Pricing Options</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            We offer customized pricing based on your specific needs, with options for one-time projects or ongoing retainer relationships.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col">
              <h3 className="font-heading text-xl mb-2 text-center">Project-Based</h3>
              <p className="text-center text-gray-700 mb-6">Perfect for one-time content needs</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>Custom quote based on project scope</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>Defined deliverables and timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>Two rounds of revisions included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>50% deposit to commence work</span>
                </li>
              </ul>
              <div className="mt-auto text-center">
                <Link 
                  to="/contact?pricing=project"
                  className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all"
                >
                  Request Quote
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-primary flex flex-col transform md:-translate-y-4 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="font-heading text-xl mb-2 text-center">Retainer</h3>
              <p className="text-center text-gray-700 mb-6">Ideal for ongoing content needs</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>Monthly package with set deliverables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>Priority scheduling and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>Unlimited minor revisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>Discounted hourly rate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>Monthly strategy consultation</span>
                </li>
              </ul>
              <div className="mt-auto text-center">
                <Link 
                  to="/contact?pricing=retainer"
                  className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all"
                >
                  Get Started
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col">
              <h3 className="font-heading text-xl mb-2 text-center">Hourly Consultation</h3>
              <p className="text-center text-gray-700 mb-6">For strategic advice and guidance</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>Content strategy consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>Editorial calendar planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>Content review and feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check"></i></span>
                  <span>Flexible scheduling</span>
                </li>
              </ul>
              <div className="mt-auto text-center">
                <Link 
                  to="/contact?pricing=hourly"
                  className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all"
                >
                  Book Consultation
                </Link>
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
              <h3 className="font-heading text-xl mb-3">How quickly can you deliver content?</h3>
              <p className="text-gray-700">
                Turnaround times vary based on project scope and complexity. For standard blog posts, we typically deliver within 3-5 business days. Larger projects like e-books or comprehensive website copy may take 2-3 weeks. Rush services are available for an additional fee.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-heading text-xl mb-3">How does your revision process work?</h3>
              <p className="text-gray-700">
                Most services include two rounds of revisions. After delivering the initial draft, we welcome your feedback and will make adjustments accordingly. For retainer clients, we offer more flexible revision terms based on your needs.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-heading text-xl mb-3">Do you provide content strategy services?</h3>
              <p className="text-gray-700">
                Yes! We offer comprehensive content strategy services, including audience analysis, competitive research, content planning, and editorial calendar development. These can be booked as standalone consulting services or bundled with content creation.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-heading text-xl mb-3">How do you handle technical accuracy?</h3>
              <p className="text-gray-700">
                We take technical accuracy seriously. For highly specialized content, we conduct thorough research and may request input from your subject matter experts to ensure all information is correct. We can also arrange for technical review before finalizing content.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-heading text-xl mb-3">What types of businesses do you work with?</h3>
              <p className="text-gray-700">
                We specialize in working with technology companies, software developers, SaaS businesses, and organizations using agile methodologies. Our expertise is particularly valuable for B2B tech companies and tech-enabled services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white text-center py-16">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl mb-4">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8">Contact us today to discuss your editorial and writing needs.</p>
          <Link
            to="/contact"
            className="bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}