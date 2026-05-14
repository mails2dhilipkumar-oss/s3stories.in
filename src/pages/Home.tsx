import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import FeaturedStories from '../components/FeaturedStories';
import VideoGallery from '../components/VideoGallery';
import InstagramSection from '../components/InstagramSection';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Intro Section */}
      <section className="section bg-light" style={{ paddingBottom: '2rem' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <SectionTitle 
            subtitle="Premium Storytellers" 
            title="Capturing the Soul of your Celebrations" 
          />
          <p className="lead" style={{ maxWidth: '800px', fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Based in Coimbatore, S3 Stories is a collective of visual artists dedicated to documenting love in its most raw and beautiful form.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/about" className="btn-outline">Our Signature Style</Link>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* Stories Teaser (Reusing component but with a link) */}
      <section className="home-stories section" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <SectionTitle 
              subtitle="The Gallery" 
              title="Recent Stories" 
              align="left"
              noMargin
            />
            <Link to="/stories" className="btn-text">View all stories ›</Link>
          </div>
          <FeaturedStories limit={3} hideTitle />
        </div>
      </section>

      <InstagramSection />

      <Contact isHomePage />
    </>
  );
}
