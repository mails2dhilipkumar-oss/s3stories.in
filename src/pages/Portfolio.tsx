import Portfolio from '../components/Portfolio';
import { useEffect } from 'react';

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-padding">
      <Portfolio />
    </div>
  );
}
