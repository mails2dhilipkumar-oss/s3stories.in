import SectionTitle from './SectionTitle';
import './InstagramSection.css';

const InstagramIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function InstagramSection() {
  return (
    <section className="instagram-section section">
      <div className="container">
        <SectionTitle 
          subtitle="Join the Community" 
          title="Connect with Us" 
        />
        
        <div className="instagram-tile-wrap">
          <a 
            href="https://www.instagram.com/_s3stories_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="instagram-tile"
          >
            <div className="instagram-tile__header">
              <div className="instagram-tile__avatar">
                <InstagramIcon size={24} />
              </div>
              <div className="instagram-tile__info">
                <span className="instagram-tile__handle">_s3stories_</span>
                <span className="instagram-tile__meta">S3 STORIES • Coimbatore</span>
              </div>
              <div className="instagram-tile__btn">
                Follow
              </div>
            </div>
            
            <div className="instagram-tile__grid">
              <img src="/images/portfolio-1.png" alt="Insta 1" />
              <img src="/images/portfolio-2.png" alt="Insta 2" />
              <img src="/images/portfolio-3.png" alt="Insta 3" />
            </div>

            <div className="instagram-tile__footer">
              View Profile on Instagram
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}


