import FeaturedStories from '../components/FeaturedStories';
import { useEffect } from 'react';

export default function StoriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-padding">
      <FeaturedStories />
    </div>
  );
}
