import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import WhatsAppIcon from './WhatsAppIcon';
import { Camera, Film, Heart, Palette } from 'lucide-react';
import './About.css';

const highlights = [
  { icon: Film, text: 'Cinematic storytelling approach' },
  { icon: Heart, text: 'Natural candid moments — no forced posing' },
  { icon: Camera, text: 'Deep experience in Tamil wedding traditions' },
  { icon: Palette, text: 'High-end editing & premium color grading' },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          <ScrollReveal direction="left" className="about__image-col">
            <motion.div
              className="about__image-wrap"
              whileInView={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              viewport={{ once: false }}
            >
              <img
                src="/images/swaju.jpg"
                alt="S3 Stories - Swaju at work"
                className="about__image"
                loading="lazy"
              />
              <div className="about__image-border" />
            </motion.div>
          </ScrollReveal>

          <div className="about__text-col">
            <ScrollReveal>
              <span className="about__subtitle">Our Signature Style</span>
              <h2 className="about__title">
                The <span className="gold-text">S3 Stories</span> Difference
              </h2>
              <div className="gold-line" style={{ marginLeft: 0, marginBottom: '2rem' }} />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="about__desc">
                We are more than photographers — we are storytellers. At S3 Stories, every wedding is a film waiting to unfold. Based in the heart of Coimbatore, we bring a cinematic vision to every frame, capturing the raw emotions, sacred rituals, and unscripted joy that make your celebration truly yours.
              </p>
              <p className="about__desc" style={{ marginTop: '1rem' }}>
                Our approach is simple: observe, feel, and create. No forced poses, no artificial moments — just authentic stories told through light, composition, and heart.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="about__highlights">
                {highlights.map((item) => (
                  <div key={item.text} className="about__highlight">
                    <item.icon size={20} className="about__highlight-icon" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <a 
                href="https://api.whatsapp.com/send?phone=917207202302&text=Hello%20S3%20Stories!%20I'd%20like%20to%20enquire%20about%20your%20photography%20services." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline" 
                style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <WhatsAppIcon size={18} />
                Enquire on WhatsApp
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
