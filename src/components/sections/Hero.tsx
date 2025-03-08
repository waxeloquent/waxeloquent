// src/components/sections/Hero.tsx
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-dark text-white text-center py-24 md:py-32">
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
  );
}