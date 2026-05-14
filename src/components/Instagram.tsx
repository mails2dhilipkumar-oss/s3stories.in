import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';
import './Instagram.css';

const images = [
  '/images/story-1.png',
  '/images/service-wedding.png',
  '/images/portfolio-1.png',
  '/images/story-3.png',
  '/images/service-maternity.png',
  '/images/portfolio-2.png',
];

function InstaIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Instagram() {
  return (
    <section className="instagram section">
      <div className="container">
        <SectionTitle
          subtitle="Stay Connected"
          title="Follow Our Journey"
          description="Get a daily dose of cinematic inspiration on our Instagram."
        />

        <ScrollReveal>
          <div className="instagram__grid">
            {images.map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/_s3stories_/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram__item"
              >
                <img
                  src={src}
                  alt={`S3 Stories Instagram post ${i + 1}`}
                  className="instagram__image"
                  loading="lazy"
                />
                <div className="instagram__overlay">
                  <InstaIcon size={28} />
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="instagram__cta">
            <a
              href="https://www.instagram.com/_s3stories_/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <InstaIcon size={18} />
              Follow @_s3stories_
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
