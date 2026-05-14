import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Stories', href: '/stories' },
  { label: 'Portfolio', href: '/portfolio', isMega: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const portfolioCategories = [
  {
    title: 'Weddings & Lifestyle',
    items: [
      { label: 'Tamil Weddings', trending: true },
      { label: 'Kerala Weddings', trending: false },
      { label: 'North Indian', trending: false },
      { label: 'Destinations', trending: true },
      { label: 'Creative Couple', trending: true },
    ]
  },
  {
    title: 'Commercial Studio',
    items: [
      { label: 'Corporate Events', trending: true },
      { label: 'Motography', trending: true },
      { label: 'Product & Food', trending: true },
      { label: 'Maternity & Baby', trending: false },
      { label: 'Fashion & Editorial', trending: true },
    ]
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => {
      setMegaOpen(false);
    }, 100);
  };

  const closeMega = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (megaTimeout.current) clearTimeout(megaTimeout.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled || megaOpen || location.pathname !== '/' ? 'navbar--scrolled' : ''}`}>
        <div className="container nav__container">
          <Link to="/" className="nav__logo">
            <img src="/images/logo.jpg" alt="S3 Stories Logo" className="nav__logo-img" />
          </Link>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li 
                key={link.href} 
                className={link.isMega ? 'nav__item--mega' : ''}
                onMouseEnter={() => link.isMega && handleMegaEnter()}
                onMouseLeave={() => link.isMega && handleMegaLeave()}
              >
                <Link to={link.href} className="navbar__link" onClick={() => link.isMega && closeMega()}>
                  {link.label}
                  {link.isMega && <ChevronDown size={14} className="nav__chevron" />}
                </Link>

                {link.isMega && (
                  <div className={`mega-menu ${megaOpen ? 'mega-menu--open' : ''}`}>
                    <div className="container mega-menu__container">
                      <div className="mega-menu__sidebar">
                        <div className="mega-menu__promo">
                          <img src="/images/portfolio-1.png" alt="Featured Story" className="mega-menu__promo-img" />
                          <div className="mega-menu__promo-content">
                             <h3>Create your own story from us!</h3>
                            <p>Made with love in S3 Stories Studio.</p>
                            <a href="/#contact" className="mega-menu__promo-link" onClick={closeMega}>Enquire now ›</a>
                          </div>
                        </div>
                      </div>

                      <div className="mega-menu__content">
                        {portfolioCategories.map((cat, idx) => (
                          <div key={idx} className="mega-menu__column">
                            <h4 className="mega-menu__title">{cat.title}</h4>
                            <ul className="mega-menu__list">
                              {cat.items.map((item, i) => (
                                <li key={i} className="mega-menu__item">
                                  <Link 
                                    to="/portfolio" 
                                    className="mega-menu__link"
                                    onClick={closeMega}
                                  >
                                    {item.label}
                                    {item.trending && <span className="trending-badge">Trending</span>}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <a
            href="https://api.whatsapp.com/message/ESTIVO3PARGQO1?autoload=1&app_absent=0&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta btn-primary"
          >
            Book Now
          </a>

          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button
              className="mobile-menu__close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            <div className="mobile-menu__content">
              <a href="/" className="mobile-menu__logo" onClick={() => setMobileOpen(false)}>
                <img src="/images/logo.jpg" alt="S3 Stories Logo" className="nav__logo-img" style={{ height: '40px' }} />
              </a>

              <ul className="mobile-menu__links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      to={link.href}
                      className="mobile-menu__link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <a
                href="https://api.whatsapp.com/message/ESTIVO3PARGQO1?autoload=1&app_absent=0&utm_source=ig"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginTop: '2rem' }}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
