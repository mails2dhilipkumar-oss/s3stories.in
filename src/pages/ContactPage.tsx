import Contact from '../components/Contact';
import Instagram from '../components/Instagram';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-padding">
      <Contact />
      <Instagram />
    </div>
  );
}
