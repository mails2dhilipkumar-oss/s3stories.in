import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import { Check, Info, ShieldCheck, CreditCard, MessageSquare } from 'lucide-react';
import './Pricing.css';

const packages = [
  {
    name: 'Essence',
    subtitle: 'Intimate Celebrations',
    price: 'Available on Request',
    description: 'Perfect for small gatherings and elegant traditions.',
    deliverables: [
      '1 Day Coverage (up to 8 hours)',
      '1 Lead Photographer (Candid)',
      '1 Traditional Photographer',
      '1 Traditional Videographer',
      'High-res Digital Gallery (300+ Edited)',
      '1 Premium Hardbound Album (40 Pages)',
    ],
    highlight: false,
  },
  {
    name: 'Legacy',
    subtitle: 'The Complete Experience',
    price: 'Available on Request',
    description: 'Our most loved package for a comprehensive cinematic story.',
    deliverables: [
      '2 Days Coverage',
      '2 Lead Photographers (Candid)',
      '1 Traditional Photographer',
      'Cinematic Film (4-6 mins)',
      'Wedding Teaser (60 secs)',
      '2 Premium Albums',
      'Full Documentary Edit (Long Version)',
    ],
    highlight: true,
  },
  {
    name: 'Cinema',
    subtitle: 'Grand Cinematic Affair',
    price: 'Available on Request',
    description: 'The ultimate coverage with 4K production and grand teams.',
    deliverables: [
      'Multiple Day Coverage',
      'Elite Team of 6 Professionals',
      '4K Cinematic Production',
      'FPV & Traditional Drone Shots',
      'Luxury Handcrafted Albums',
      'Raw Footage Drive',
      'Same Day Edit Teaser',
    ],
    highlight: false,
  },
];

const policies = [
  {
    icon: ShieldCheck,
    title: 'Copyright Policy',
    desc: 'The photographer retains the copyright. Clients get full usage rights for personal sharing and printing.'
  },
  {
    icon: Info,
    title: 'Bespoke Pricing',
    desc: 'Every story is unique. We offer customized pricing tailored to the scale, location, and specific artistic requirements of your celebration.'
  },
  {
    icon: CreditCard,
    title: 'Payment Terms',
    desc: '50% to book your dates, 40% on the event day, and 10% upon final delivery of processed content.'
  }
];

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pricing-page">
      <section className="pricing-hero section">
        <div className="container">
          <SectionTitle
            subtitle="Pricing & Packages"
            title="Invest in Memories"
            description="Premium cinematic photography and films crafted with love. We don't just capture moments; we preserve legacies."
          />

          <div className="pricing__grid">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1}>
                <div className={`pricing__card ${pkg.highlight ? 'pricing__card--featured' : ''}`}>
                  {pkg.highlight && <span className="pricing__badge">Recommended</span>}
                  <div className="pricing__card-header">
                    <span className="pricing__pkg-subtitle">{pkg.subtitle}</span>
                    <h3 className="pricing__pkg-name">{pkg.name}</h3>
                    <p className="pricing__pkg-desc">{pkg.description}</p>
                    <div className="pricing__pkg-price">{pkg.price}</div>
                  </div>

                  <ul className="pricing__deliverables">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx}>
                        <Check size={16} className="pricing__check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="/#contact" className={`btn ${pkg.highlight ? 'btn-primary' : 'btn-outline'} pricing__cta`}>
                    Get Enquiry Now
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-policies section bg-light">
        <div className="container">
          <div className="policies__grid">
            {policies.map((policy, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="policy__item">
                  <div className="policy__icon-wrap">
                    <policy.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="policy__title">{policy.title}</h4>
                  <p className="policy__desc">{policy.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-faq section">
        <div className="container">
          <SectionTitle
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about our booking process and delivery."
          />

          <div className="faq__grid">
            <div className="faq__item">
              <h4>Do you travel for weddings?</h4>
              <p>Yes, we love traveling! While we are based in Coimbatore, we cover weddings across Tamil Nadu, India, and internationally. Travel and stay are usually covered by the client.</p>
            </div>
            <div className="faq__item">
              <h4>When will we receive our photos?</h4>
              <p>Teasers are delivered within 7 days. The full set of edited digital photos is delivered within 4-6 weeks, and albums follow shortly after.</p>
            </div>
            <div className="faq__item">
              <h4>Can we customize a package?</h4>
              <p>Absolutely. Every wedding is unique. We can tailor our packages to fit your specific needs, duration, and team size.</p>
            </div>
          </div>

          <div className="pricing__final-cta">
            <p>Have more questions or a unique requirement?</p>
            <a href="https://api.whatsapp.com/message/ESTIVO3PARGQO1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageSquare size={18} />
              Chat with us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
