import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';
import './Services.css';

const services = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    desc: 'We capture real emotions, rituals, and traditions with a cinematic approach. Our candid wedding photography focuses on storytelling rather than posed moments.',
    image: '/images/service-wedding.png',
    featured: true,
  },
  {
    id: 'prewedding',
    title: 'Pre-Wedding & Engagement',
    desc: 'Creative pre-wedding photography with unique concepts, outdoor locations, and cinematic direction.',
    image: '/images/service-prewedding.png',
    featured: false,
  },
  {
    id: 'baby',
    title: 'Baby Photography',
    desc: 'Soft, emotional, and safe baby shoots designed to preserve precious early memories.',
    image: '/images/service-baby.png',
    featured: false,
  },
  {
    id: 'maternity',
    title: 'Maternity Sessions',
    desc: 'Elegant maternity sessions that celebrate the beauty of motherhood with warmth and grace.',
    image: '/images/service-maternity.png',
    featured: false,
  },
  {
    id: 'product',
    title: 'Product Photography',
    desc: 'Professional product photography for brands, businesses, and e-commerce with dramatic lighting.',
    image: '/images/service-product.png',
    featured: false,
  },
  {
    id: 'car',
    title: 'Car Photography',
    desc: 'High-end automotive photography with dramatic lighting and cinematic composition.',
    image: '/images/service-car.png',
    featured: false,
  },
];

export default function Services({ limit, hideTitle }: { limit?: number; hideTitle?: boolean }) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className={`services ${!hideTitle ? 'section' : ''}`}>
      <div className="container">
        {!hideTitle && (
          <SectionTitle
            subtitle="What We Create"
            title="Our Services"
            description="From grand weddings to intimate portraits — every story deserves a cinematic touch."
          />
        )}

        <div className="services-grid">
          {displayServices.map((service, i) => (
            <ScrollReveal
              key={service.id}
              delay={i * 0.1}
              className={`service-card ${service.featured ? 'service-card--featured' : ''}`}
            >
              <div className="service-card__inner">
                <img
                  src={service.image}
                  alt={`${service.title} in Coimbatore by S3 Stories`}
                  className="service-card__image"
                  loading="lazy"
                />
                <div className="service-card__overlay" />
                <div className="service-card__content">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.desc}</p>
                  <span className="service-card__link">
                    Learn More →
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
