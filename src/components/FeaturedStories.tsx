import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from './SectionTitle';
import './FeaturedStories.css';

const stories = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    couple: 'Arjun & Kavya',
    location: 'Mysore',
    type: 'Pre-Wedding'
  },
  {
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&q=80',
    couple: 'Siddharth & Ananya',
    location: 'Bangalore',
    type: 'Grand Reception'
  },
  {
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80',
    couple: 'Manoj & Riya',
    location: 'Coimbatore',
    type: 'Temple Wedding'
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
    couple: 'Hari & Shweta',
    location: 'Erode',
    type: 'Engagement'
  },
  {
    image: 'https://images.unsplash.com/photo-1519225495810-751783d78039?auto=format&fit=crop&q=80',
    couple: 'Vijay & Lakshmi',
    location: 'Salem',
    type: 'Sangeet Night'
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
    couple: 'Corporate Gala',
    location: 'Bangalore',
    type: 'Business Summit'
  },
  {
    image: 'https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80',
    couple: 'Enfield Classic',
    location: 'Coimbatore',
    type: 'Motography'
  },
  {
    image: 'https://images.unsplash.com/photo-1519225495810-751783d78039?auto=format&fit=crop&q=80',
    couple: 'Arun & Deepa',
    location: 'Pondicherry',
    type: 'Destination'
  },
  {
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80',
    couple: 'Gourmet Fusion',
    location: 'Chennai',
    type: 'Food Shoot'
  },
  {
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80',
    couple: 'Praveen & Divya',
    location: 'Erode',
    type: 'Pre-Wedding'
  },
  {
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80',
    couple: 'Floral Luxury',
    location: 'Tiruppur',
    type: 'Event Decor'
  },
  {
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80',
    couple: 'Manoj & Raksha',
    location: 'Salem',
    type: 'Wedding Film'
  },
  {
    image: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80',
    couple: 'Agency Summit',
    location: 'Coimbatore',
    type: 'Corporate'
  },
  {
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80',
    couple: 'Hyper-Car Studio',
    location: 'Chennai',
    type: 'Motography'
  }
];

export default function FeaturedStories({ limit, hideTitle }: { limit?: number; hideTitle?: boolean }) {
  const displayStories = limit ? stories.slice(0, limit) : stories;
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yGrid = useTransform(scrollYProgress, [0, 1], [0, -40]); // Subtle global shift

  return (
    <section id="stories" ref={containerRef} className={`featured-stories ${!hideTitle ? 'section' : ''}`}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="rounded-hex" clipPathUnits="objectBoundingBox">
            <path d="M 0.5 0.01 C 0.55 0.01, 0.62 0.05, 0.65 0.07 L 0.95 0.24 C 0.98 0.26, 1 0.32, 1 0.36 L 1 0.64 C 1 0.68, 0.98 0.74, 0.95 0.76 L 0.65 0.93 C 0.62 0.95, 0.55 0.99, 0.5 0.99 C 0.45 0.99, 0.38 0.95, 0.35 0.93 L 0.05 0.76 C 0.02 0.74, 0 0.68, 0 0.64 L 0 0.36 C 0 0.32, 0.02 0.26, 0.05 0.24 L 0.35 0.07 C 0.38 0.05, 0.45 0.01, 0.5 0.01 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="container">
        {!hideTitle && (
          <SectionTitle
            subtitle="Featured Work"
            title="Stories We've Told"
            description="Each love story is unique. Here are some of our most cherished narratives."
          />
        )}

        <motion.div
          className="stories-grid"
          style={{ y: yGrid }} // Apply global parallax here
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {displayStories.map((story) => {
            return (
              <motion.div
                key={story.couple}
                className="story-card"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 30 },
                  show: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ scale: 1.08, zIndex: 100 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="story-card__image-wrap">
                  <img src={story.image} alt={story.couple} className="story-card__image" loading="lazy" />
                  <div className="story-card__overlay">
                    <span className="story-card__view">View Story</span>
                    <h3 className="story-card__couple">{story.couple}</h3>
                    <span className="story-card__meta">
                      {story.type} &bull; {story.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
