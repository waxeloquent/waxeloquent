import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-24 md:py-32 bg-gradient-to-r from-dark to-primary">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Craft Your Message with Precision</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Professional editorial and writing services for tech professionals and agile organizations
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary text-white font-semibold py-3 px-8 rounded hover:bg-primary transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light py-16 md:py-20">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl text-center mb-12">Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <i className="fas fa-edit text-4xl text-primary mb-4"></i>
              <h3 className="font-heading text-xl mb-3">Substantive Editing</h3>
              <p className="text-gray-700">Transform rough drafts into polished prose with comprehensive structural and content editing.</p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <i className="fas fa-ghost text-4xl text-primary mb-4"></i>
              <h3 className="font-heading text-xl mb-3">Ghostwriting</h3>
              <p className="text-gray-700">Articulate your ideas in your voice without the time investment of drafting content yourself.</p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <i className="fas fa-bullhorn text-4xl text-primary mb-4"></i>
              <h3 className="font-heading text-xl mb-3">Marketing Content</h3>
              <p className="text-gray-700">Compelling copy that resonates with your target audience and drives conversions.</p>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <i className="fas fa-book text-4xl text-primary mb-4"></i>
              <h3 className="font-heading text-xl mb-3">E-Books & Presentations</h3>
              <p className="text-gray-700">Establish thought leadership with professionally crafted long-form content and presentations.</p>
            </div>
            
            {/* Service 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <i className="fas fa-blog text-4xl text-primary mb-4"></i>
              <h3 className="font-heading text-xl mb-3">Blogs & Emails</h3>
              <p className="text-gray-700">Engage your audience regularly with content that informs, entertains, and converts.</p>
            </div>
            
            {/* Service 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <i className="fas fa-microphone-alt text-4xl text-primary mb-4"></i>
              <h3 className="font-heading text-xl mb-3">Executive Communications</h3>
              <p className="text-gray-700">Speeches, presentations, and communications that reflect your leadership and vision.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/services"
              className="bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl text-center mb-12">Client Testimonials</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testimonial 1 */}
            <div className="bg-light p-8 rounded-lg max-w-lg relative">
              <p className="italic mb-6">
                "Rebecca transformed our technical documentation into clear, engaging content that our clients actually read and understand. Her expertise in both technical writing and agile methodologies made her invaluable to our team."
              </p>
              <div className="client">
                <h4 className="font-heading text-lg mb-1">Sarah Johnson</h4>
                <p className="text-gray-600 text-sm">CTO, TechSolutions Inc.</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-light p-8 rounded-lg max-w-lg relative">
              <p className="italic mb-6">
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

      {/* CTA Section */}
      <section className="bg-dark text-white text-center py-16">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl mb-4">Ready to Elevate Your Communication?</h2>
          <p className="max-w-2xl mx-auto mb-8">Schedule a consultation to discuss your editorial and writing needs.</p>
          <Link
            to="/contact"
            className="bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}