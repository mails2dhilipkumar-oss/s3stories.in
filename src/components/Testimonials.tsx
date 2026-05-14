import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "S3 Stories didn't just capture our wedding — they made it feel like a movie. Every frame, every moment, every tear of joy was preserved with such care and artistry. We are endlessly grateful.",
    name: 'Arun & Priya',
    event: 'Wedding · Coimbatore',
  },
  {
    id: 2,
    text: "We were blown away by the quality and emotion in every photo. The team was incredibly professional, making us feel comfortable and natural throughout the day. Our wedding album is a treasure.",
    name: 'Karthik & Meera',
    event: 'Destination Wedding · Ooty',
  },
  {
    id: 3,
    text: "From the first call to the final delivery, S3 Stories was exceptional. The cinematic approach to our wedding film brought tears to our eyes. They truly understand how to tell a love story.",
    name: 'Vikram & Divya',
    event: 'Wedding · Chennai',
  },
  {
    id: 4,
    text: "The maternity shoot was so beautifully done — soft, elegant, and deeply personal. S3 Stories has an incredible eye for light and emotion. These photos will be cherished forever.",
    name: 'Sneha Rajendran',
    event: 'Maternity Session · Coimbatore',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <SectionTitle
          subtitle="Client Love"
          title="Words From Our Couples"
          description="The greatest compliment is the trust our couples place in us."
        />

        <ScrollReveal>
          <div className="testimonials__carousel">
            <button className="testimonials__arrow testimonials__arrow--left" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>

            <div className="testimonials__content">
              <Quote size={40} strokeWidth={1.2} className="testimonials__quote-icon" />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  className="testimonials__slide"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <p className="testimonials__text">{testimonials[current].text}</p>
                  <div className="testimonials__author">
                    <span className="testimonials__name">{testimonials[current].name}</span>
                    <span className="testimonials__event">{testimonials[current].event}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="testimonials__arrow testimonials__arrow--right" onClick={next} aria-label="Next testimonial">
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>

          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
