import Services from '../components/Services';
import Workflow from '../components/Workflow';
import { useEffect } from 'react';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-padding">
      <Services />
      <Workflow />
    </div>
  );
}
