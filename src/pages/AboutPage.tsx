import About from '../components/About';
import Testimonials from '../components/Testimonials';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-padding">
      <About />
      <Testimonials />
    </div>
  );
}
