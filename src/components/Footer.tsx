import { Link } from 'react-router-dom';
import WhatsAppIcon from './WhatsAppIcon';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col footer__col--brand">
          <Link to="/" className="footer__logo">
            <img src="/images/logo.jpg" alt="S3 Stories Logo" className="footer__logo-img" style={{ height: '70px' }} />
          </Link>
          <p className="footer__tagline">
            Cinematic wedding storytelling from the heart of Coimbatore. Preserving timeless memories across Tamil Nadu.
          </p>
          <div className="footer__socials">
            <a href="https://www.instagram.com/_s3stories_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link--instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://youtube.com/@s3stories" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer__social-link--youtube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>
            <a href="https://facebook.com/s3stories" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link--facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://api.whatsapp.com/message/ESTIVO3PARGQO1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer__social-link--whatsapp">
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Explore</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stories">Featured Stories</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about">Signature Style</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Portfolio</h4>
          <ul className="footer__links">
            <li><Link to="/portfolio">Wedding & Lifestyle</Link></li>
            <li><Link to="/portfolio">Corporate & Events</Link></li>
            <li><Link to="/portfolio">Motography (Automotive)</Link></li>
            <li><Link to="/portfolio">Product & Food Shoots</Link></li>
            <li><Link to="/portfolio">Fashion & Editorial</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Studio</h4>
          <p className="footer__text">
            S3 Stories,<br />
            21, Rajiv Gandhi St, Phase-ii,<br />
            Sowri Palayam, Coimbatore 641028
          </p>
          <p className="footer__text" style={{ marginTop: '0.5rem' }}>
            <strong style={{ color: 'var(--gold)' }}>Email:</strong> storiesfroms3@gmail.com
          </p>
          <p className="footer__text" style={{ marginTop: '0.2rem' }}>
            <strong style={{ color: 'var(--gold)' }}>Call:</strong> +91 72072 02302
          </p>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copyright">
          © {new Date().getFullYear()} S3 Stories. All rights reserved.
        </p>
        <p className="footer__credit">
          Designed with ❤️ for premium cinematic readability.
        </p>
      </div>
    </footer>
  );
}
