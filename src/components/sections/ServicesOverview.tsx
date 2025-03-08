// src/components/sections/ServicesOverview.tsx
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'editing',
    title: 'Substantive Editing',
    description: 'Transform rough drafts into polished prose with comprehensive structural and content editing.',
    icon: 'edit'
  },
  {
    id: 'ghostwriting',
    title: 'Ghostwriting',
    description: 'Articulate your ideas in your voice without the time investment of drafting content yourself.',
    icon: 'ghost'
  },
  {
    id: 'marketing',
    title: 'Marketing Content',
    description: 'Compelling copy that resonates with your target audience and drives conversions.',
    icon: 'bullhorn'
  },
  {
    id: 'ebooks',
    title: 'E-Books & Presentations',
    description: 'Establish thought leadership with professionally crafted long-form content and presentations.',
    icon: 'book'
  },
  {
    id: 'blogs',
    title: 'Blogs & Emails',
    description: 'Engage your audience regularly with content that informs, entertains, and converts.',
    icon: 'blog'
  },
  {
    id: 'executive',
    title: 'Executive Communications',
    description: 'Speeches, presentations, and communications that reflect your leadership and vision.',
    icon: 'microphone-alt'
  }
];

export default function ServicesOverview() {
  return (
    <section className="bg-light py-16 md:py-20">
      <div className="container mx-auto px-5">
        <h2 className="font-heading text-3xl text-center mb-12">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
            >
              <i className={`fas fa-${service.icon} text-4xl text-primary mb-4`}></i>
              <h3 className="font-heading text-xl mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
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
  );
}