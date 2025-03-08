// src/pages/Portfolio.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 'api-docs',
      title: 'API Documentation Overhaul',
      category: 'technical',
      client: 'FinTech API Provider',
      description: 'Complete restructuring and rewriting of developer documentation for a financial services API, resulting in improved developer experience and reduced support tickets.',
      results: 'The documentation overhaul led to a 43% decrease in support tickets related to API implementation questions and a 27% increase in successful API integrations.',
      image: '/images/portfolio/api-docs.jpg',
      tags: ['Technical Writing', 'API Documentation', 'Developer Experience']
    },
    {
      id: 'saas-website',
      title: 'SaaS Website Copy',
      category: 'marketing',
      client: 'Project Management Software Startup',
      description: 'Strategic messaging and compelling copy for a complete website redesign, focusing on communicating complex features in accessible language while maintaining SEO performance.',
      results: 'The new website messaging contributed to a 32% increase in demo requests and improved average time on page by 45%.',
      image: '/images/portfolio/saas-website.jpg',
      tags: ['Website Copy', 'SaaS Marketing', 'SEO Content']
    },
    {
      id: 'thought-leadership',
      title: 'Executive Thought Leadership Program',
      category: 'executive',
      client: 'Enterprise Software Company',
      description: 'Ongoing ghostwriting of articles, presentations, and social media content for the C-suite, positioning executives as industry thought leaders in artificial intelligence and machine learning.',
      results: 'Secured speaking engagements at major industry conferences and increased LinkedIn engagement by 215% within six months.',
      image: '/images/portfolio/thought-leadership.jpg',
      tags: ['Thought Leadership', 'Executive Communications', 'Ghostwriting']
    },
    {
      id: 'product-launch',
      title: 'Product Launch Campaign',
      category: 'marketing',
      client: 'Cloud Security Platform',
      description: 'Comprehensive content strategy and creation for a major product launch, including press releases, blog posts, email sequences, and social media content.',
      results: 'The coordinated content campaign generated 2,500+ leads and contributed to exceeding first-quarter sales targets by 28%.',
      image: '/images/portfolio/product-launch.jpg',
      tags: ['Product Marketing', 'Content Strategy', 'Campaign Development']
    },
    {
      id: 'technical-ebook',
      title: 'Technical E-Book Series',
      category: 'technical',
      client: 'DevOps Tool Provider',
      description: 'Research, writing, and design collaboration for a series of three technical e-books explaining complex DevOps concepts and best practices for implementing the client's solutions.',
      results: 'The e-book series generated over 3,800 qualified leads and established the client as an authoritative voice in the DevOps space.',
      image: '/images/portfolio/technical-ebook.jpg',
      tags: ['E-Book Creation', 'Technical Content', 'Lead Generation']
    },
    {
      id: 'agile-training',
      title: 'Agile Training Materials',
      category: 'technical',
      client: 'Enterprise Technology Consultancy',
      description: 'Development of comprehensive training materials, presentations, and workshop exercises for an agile transformation program aimed at enterprise clients.',
      results: 'Training materials have been used to successfully onboard over 500 team members to agile methodologies across 12 enterprise clients.',
      image: '/images/portfolio/agile-training.jpg',
      tags: ['Training Materials', 'Instructional Design', 'Agile Methodology']
    },
    {
      id: 'executive-speeches',
      title: 'Executive Keynote Speeches',
      category: 'executive',
      client: 'Technology Industry Leader',
      description: 'Speechwriting for executive keynote presentations at major industry conferences, translating technical vision into compelling narratives.',
      results: 'Speeches consistently rated among top presentations at industry events, with one keynote video reaching 175,000+ views on YouTube.',
      image: '/images/portfolio/executive-speeches.jpg',
      tags: ['Speechwriting', 'Executive Communications', 'Storytelling']
    },
    {
      id: 'blog-program',
      title: 'Technical Blog Program',
      category: 'technical',
      client: 'Developer Tools Company',
      description: 'Strategic planning and ongoing creation of technical blog content targeting developers and engineering leaders, with SEO optimization and distribution strategy.',
      results: 'Blog traffic increased by 156% year-over-year, with the blog becoming the second-highest source of qualified leads for the sales team.',
      image: '/images/portfolio/blog-program.jpg',
      tags: ['Blog Strategy', 'Technical Writing', 'Content Marketing']
    },
    {
      id: 'video-scripts',
      title: 'Product Explainer Videos',
      category: 'marketing',
      client: 'HR Technology Platform',
      description: 'Scriptwriting for a series of product explainer videos showcasing different features and use cases of an HR technology platform.',
      results: 'Videos have been viewed over 50,000 times and are credited with shortening the average sales cycle by 18%.',
      image: '/images/portfolio/video-scripts.jpg',
      tags: ['Video Scripting', 'Product Marketing', 'Visual Storytelling']
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-20 bg-gradient-to-r from-dark to-primary">
        <div className="container mx-auto px-5">
          <h1 className="font-heading text-4xl mb-4">Our Portfolio</h1>
          <p className="text-lg max-w-2xl mx-auto">
            A selection of projects showcasing our expertise in editorial and writing services
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-10 bg-light">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`py-2 px-6 rounded-full ${activeFilter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveFilter('technical')}
              className={`py-2 px-6 rounded-full ${activeFilter === 'technical' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Technical Writing
            </button>
            <button 
              onClick={() => setActiveFilter('marketing')}
              className={`py-2 px-6 rounded-full ${activeFilter === 'marketing' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Marketing Content
            </button>
            <button 
              onClick={() => setActiveFilter('executive')}
              className={`py-2 px-6 rounded-full ${activeFilter === 'executive' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Executive Communications
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={project.image || '/api/placeholder/600/400'} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary bg-opacity-10 text-primary rounded-full mb-3">
                    {project.category === 'technical' ? 'Technical Writing' : 
                     project.category === 'marketing' ? 'Marketing Content' : 'Executive Communications'}
                  </span>
                  <h3 className="font-heading text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">Client: {project.client}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-semibold mb-2">Results:</h4>
                    <p className="text-gray-700">{project.results}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="text-primary text-5xl absolute -top-5 -left-2 opacity-20">"</div>
              <p className="italic mb-6 relative z-10">
                "Rebecca transformed our technical documentation into clear, engaging content that our clients actually read and understand. Her expertise in both technical writing and agile methodologies made her invaluable to our team."
              </p>
              <div className="client">
                <h4 className="font-heading text-lg mb-1">Sarah Johnson</h4>
                <p className="text-gray-600 text-sm">CTO, TechSolutions Inc.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="text-primary text-5xl absolute -top-5 -left-2 opacity-20">"</div>
              <p className="italic mb-6 relative z-10">
                "Working with Wax Eloquent on our executive presentations has elevated our communication strategy. Rebecca has a unique ability to maintain technical accuracy while creating compelling narratives."
              </p>
              <div className="client">
                <h4 className="font-heading text-lg mb-1">Michael Chen</h4>
                <p className="text-gray-600 text-sm">Product Director, Agile Innovations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl text-center mb-12">Our Project Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary bg-opacity-20"></div>
              
              {/* Step 1 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="font-heading text-xl mb-3">Discovery</h3>
                    <p className="text-gray-700">
                      We begin with a thorough consultation to understand your business goals, audience, brand voice, and specific project requirements.
                    </p>
                  </div>
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-10">1</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 hidden md:block"></div>
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-10">2</div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="font-heading text-xl mb-3">Strategy</h3>
                    <p className="text-gray-700">
                      We develop a tailored content strategy and project plan based on your objectives, with clear deliverables and timelines.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="font-heading text-xl mb-3">Research</h3>
                    <p className="text-gray-700">
                      We conduct thorough research to understand your industry, competition, audience needs, and relevant technical concepts.
                    </p>
                  </div>
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-10">3</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 hidden md:block"></div>
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-10">4</div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="font-heading text-xl mb-3">Creation</h3>
                    <p className="text-gray-700">
                      We craft high-quality content tailored to your audience and objectives, applying our expertise in both writing and technical knowledge.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="font-heading text-xl mb-3">Refinement</h3>
                    <p className="text-gray-700">
                      We collaborate with you through revision rounds to ensure the final content perfectly matches your vision and requirements.
                    </p>
                  </div>
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-10">5</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 hidden md:block"></div>
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-10">6</div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="font-heading text-xl mb-3">Delivery & Support</h3>
                    <p className="text-gray-700">
                      We deliver the finalized content and provide ongoing support to ensure successful implementation and performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white text-center py-16">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl mb-4">Ready to Start Your Project?</h2>
          <p className="max-w-2xl mx-auto mb-8">Contact us today to discuss how we can help elevate your communications.</p>
          <Link
            to="/contact"
            className="bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}