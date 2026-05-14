import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000',
    badge: 'Cinematic Wedding Photography · Coimbatore',
    title: 'We don\'t just capture moments.',
    titleGold: 'We tell stories.',
    subtitle: 'Every frame holds a heartbeat. Every story deserves to be felt.'
  },
  {
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=2000',
    badge: 'Destination Weddings · Worldwide',
    title: 'Preserving legacies of',
    titleGold: 'Unforgettable Love.',
    subtitle: 'Crafting visual poetry from your most precious celebrations.'
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000',
    badge: 'Candid & Traditional · Expertise',
    title: 'Experience the art of',
    titleGold: 'Visual Storytelling.',
    subtitle: 'Where every ritual is a masterpiece and every smile a treasure.'
  },
  {
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=2000',
    badge: 'Engagement Sessions · Intimate',
    title: 'The beginning of your',
    titleGold: 'Forever Story.',
    subtitle: 'Capturing the chemistry and excitement of your new journey.'
  },
  {
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&q=80&w=2000',
    badge: 'Bridal Portraits · Elegance',
    title: 'Timeless grace in',
    titleGold: 'Every Detail.',
    subtitle: 'Honoring the beauty and traditions of your special day.'
  },
  {
    image: 'https://images.unsplash.com/photo-1519225495810-751783d78039?auto=format&fit=crop&q=80&w=2000',
    badge: 'Grand Celebrations · Joy',
    title: 'Vibrant energy and',
    titleGold: 'Pure Emotion.',
    subtitle: 'Documenting the laughter, dance, and soul of your wedding.'
  },
  {
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=2000',
    badge: 'Rituals & Traditions · Soul',
    title: 'Sacred moments of',
    titleGold: 'Deep Connection.',
    subtitle: 'Finding beauty in the smallest gestures and ancient customs.'
  },
  {
    image: 'https://images.unsplash.com/photo-1465495910483-0d67499d99c4?auto=format&fit=crop&q=80&w=2000',
    badge: 'Nature Shoots · Serenity',
    title: 'Love breathing in the',
    titleGold: 'Great Outdoors.',
    subtitle: 'Using nature as a canvas for your romantic narrative.'
  },
  {
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2000',
    badge: 'Creative Couples · Art',
    title: 'Bold, modern and',
    titleGold: 'Artistically Crafted.',
    subtitle: 'Pushing boundaries of wedding photography for the unique you.'
  },
  {
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2000',
    badge: 'Night Sessions · Drama',
    title: 'Dramatic light for',
    titleGold: 'Stunning Portraits.',
    subtitle: 'Creating magic when the sun goes down and the stars come out.'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // Slightly slower for more slides
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="hero">
      <div className="hero__slider">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            className="hero__slide"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div 
              className="hero__bg-image" 
              style={{ backgroundImage: `url(${slides[current].image})` }} 
            />
            <div className="hero__overlay" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero__nav-btns">
        <button className="hero__nav-btn hero__nav-btn--prev" onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft size={30} strokeWidth={1} />
        </button>
        <button className="hero__nav-btn hero__nav-btn--next" onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={30} strokeWidth={1} />
        </button>
      </div>

      <div className="hero__content container">
        <div className="hero__text-area">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero__badge">{slides[current].badge}</span>
              <h1 className="hero__title">
                {slides[current].title}
                <br />
                <span className="gold-text">{slides[current].titleGold}</span>
              </h1>
              <p className="hero__subtitle">{slides[current].subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a href="/#portfolio" className="btn-primary">
            View Stories
          </a>
          <a
            href="https://api.whatsapp.com/message/ESTIVO3PARGQO1?autoload=1&app_absent=0&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Book Now
          </a>
        </motion.div>
      </div>

      <div className="hero__indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__indicator ${current === i ? 'hero__indicator--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <motion.a
        href="/#stories"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        aria-label="Scroll down"
      >
        <span className="hero__scroll-text">Scroll</span>
        <ChevronDown size={20} strokeWidth={1.5} className="hero__scroll-icon" />
      </motion.a>
    </section>
  );
}
