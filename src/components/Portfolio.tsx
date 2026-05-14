import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';
import './Portfolio.css';

type Category = 
  | 'all' | 'tamil' | 'kerala' | 'north-indian' | 'destination' | 'maternity' 
  | 'baby-shoot' | 'couple-shoot' | 'corporate' | 'motography' | 'product';

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  category: Category;
  tall?: boolean;
}

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'tamil', label: 'Tamil Weddings' },
  { key: 'kerala', label: 'Kerala Weddings' },
  { key: 'north-indian', label: 'North Indian' },
  { key: 'destination', label: 'Destinations' },
  { key: 'maternity', label: 'Maternity' },
  { key: 'baby-shoot', label: 'Baby Shoot' },
  { key: 'couple-shoot', label: 'Couple Shoot' },
  { key: 'corporate', label: 'Corporate Events' },
  { key: 'motography', label: 'Motography' },
  { key: 'product', label: 'Product & Food' },
];

const items: PortfolioItem[] = [
  { id: 1, src: '/images/portfolio-1.png', alt: 'Tamil wedding photography', category: 'tamil', tall: true },
  { id: 2, src: '/images/portfolio-2.png', alt: 'Kerala wedding celebration', category: 'kerala' },
  { id: 3, src: '/images/portfolio-3.png', alt: 'Destination wedding shoot', category: 'destination' },
  { id: 4, src: '/images/portfolio-4.png', alt: 'Maternity photography session', category: 'maternity', tall: true },
  { id: 5, src: '/images/portfolio-5.png', alt: 'Destination wedding photography', category: 'destination' },
  { id: 6, src: '/images/portfolio-6.png', alt: 'North Indian wedding ritual', category: 'north-indian' },
  { id: 7, src: '/images/story-1.png', alt: 'South Indian couple shoot', category: 'couple-shoot' },
  { id: 8, src: '/images/story-2.png', alt: 'Destination wedding in Sri Lanka', category: 'destination', tall: true },
  { id: 9, src: '/images/service-wedding.png', alt: 'Tamil wedding photography', category: 'tamil' },
  { id: 10, src: '/images/service-baby.png', alt: 'Professional baby shoot', category: 'baby-shoot' },
  { id: 11, src: '/images/service-car.png', alt: 'Premium automotive photography', category: 'motography' },
  { id: 12, src: '/images/service-product.png', alt: 'Commercial product photography', category: 'product' },
  { id: 13, src: '/images/story-3.png', alt: 'Corporate event coverage', category: 'corporate', tall: true },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>('all');

  const filtered = active === 'all' ? items : items.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <SectionTitle
          subtitle="Our Work"
          title="Portfolio"
          description="A curated collection of stories, emotions, and cinematic moments."
        />

        <ScrollReveal>
          <div className="portfolio__filters">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`portfolio__filter ${active === cat.key ? 'portfolio__filter--active' : ''}`}
                onClick={() => setActive(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div className="portfolio__masonry" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                className={`portfolio__item ${item.tall ? 'portfolio__item--tall' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="portfolio__image"
                  loading="lazy"
                />
                <div className="portfolio__overlay">
                  <span className="portfolio__view">View</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
