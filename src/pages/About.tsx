// src/pages/About.tsx
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-20 bg-gradient-to-r from-dark to-primary">
        <div className="container mx-auto px-5">
          <h1 className="font-heading text-4xl mb-4">About Wax Eloquent</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Precision and clarity in every word
          </p>
        </div>
      </section>

      {/* About Content */}
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
                    <span className="text-primary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
                    <div>
                      <strong className="font-semibold">Technical Expertise:</strong>
                      <p className="text-gray-700">Deep understanding of agile methodologies, software development, and technical concepts.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
                    <div>
                      <strong className="font-semibold">Audience-Focused:</strong>
                      <p className="text-gray-700">Content tailored to resonate with your specific audience, from C-suite to developers.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
                    <div>
                      <strong className="font-semibold">SEO Optimized:</strong>
                      <p className="text-gray-700">Strategic keyword research and implementation for maximum visibility.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
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

      {/* Expertise */}
      <section className="bg-light py-16">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl text-center mb-12">Our Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary bg-opacity-10 rounded-full">
                <i className="fas fa-laptop-code text-2xl text-primary"></i>
              </div>
              <h3 className="font-heading text-xl mb-4">Technical Knowledge</h3>
              <p className="text-gray-700">
                From agile development to DevOps, cloud infrastructure to API documentation, we understand the technical landscape.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary bg-opacity-10 rounded-full">
                <i className="fas fa-pen-fancy text-2xl text-primary"></i>
              </div>
              <h3 className="font-heading text-xl mb-4">Content Strategy</h3>
              <p className="text-gray-700">
                Strategic approach to content that aligns with your business goals, audience needs, and marketing objectives.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary bg-opacity-10 rounded-full">
                <i className="fas fa-chart-line text-2xl text-primary"></i>
              </div>
              <h3 className="font-heading text-xl mb-4">SEO & Research</h3>
              <p className="text-gray-700">
                In-depth keyword research and SEO optimization for maximum visibility and audience engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-3xl mb-6">Ready to elevate your communications?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve clarity, precision, and impact in your content.
          </p>
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