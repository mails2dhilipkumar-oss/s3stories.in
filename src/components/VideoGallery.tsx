import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import SectionTitle from './SectionTitle';
import './VideoGallery.css';

interface Video {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  driveId: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Tamil Brahmin Wedding',
    subtitle: 'FILM',
    thumbnail: '/images/story-1.png',
    driveId: '1-v_O8XF9S_f8t3z7X6X_6n7g8h9j0k1l',
  },
  {
    id: '2',
    title: 'A Blissful Haldi & Sangeet Celebration',
    subtitle: 'FILM',
    thumbnail: '/images/story-2.png',
    driveId: '2-v_O8XF9S_f8t3z7X6X_6n7g8h9j0k2l',
  },
  {
    id: '3',
    title: 'The Eternal Union of Two Souls',
    subtitle: 'FILM',
    thumbnail: '/images/story-3.png',
    driveId: '3-v_O8XF9S_f8t3z7X6X_6n7g8h9j0k3l',
  },
  {
    id: '4',
    title: 'Modern Love Story in London',
    subtitle: 'FILM',
    thumbnail: '/images/portfolio-5.png',
    driveId: '4-v_O8XF9S_f8t3z7X6X_6n7g8h9j0k4l',
  },
  {
    id: '5',
    title: 'Traditional Gounder Wedding',
    subtitle: 'FILM',
    thumbnail: '/images/portfolio-1.png',
    driveId: '5-v_O8XF9S_f8t3z7X6X_6n7g8h9j0k5l',
  },
  {
    id: '6',
    title: 'Destination Wedding in Maldives',
    subtitle: 'FILM',
    thumbnail: '/images/portfolio-2.png',
    driveId: '6-v_O8XF9S_f8t3z7X6X_6n7g8h9j0k6l',
  },
];

export default function VideoGallery() {
  const [selected, setSelected] = useState(videos[0]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSelected((prev) => {
        const currentIndex = videos.findIndex((v) => v.id === prev.id);
        const nextIndex = (currentIndex + 1) % videos.length;
        return videos[nextIndex];
      });
    }, 10000); // 10 seconds for Cinema mode
    return () => clearInterval(timer);
  }, []);

  const nextVideo = () => {
    const currentIndex = videos.findIndex((v) => v.id === selected.id);
    setSelected(videos[(currentIndex + 1) % videos.length]);
  };

  const prevVideo = () => {
    const currentIndex = videos.findIndex((v) => v.id === selected.id);
    setSelected(videos[(currentIndex - 1 + videos.length) % videos.length]);
  };

  const getEmbedUrl = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

  return (
    <section className="video-gallery section">
      <div className="container">
        <SectionTitle 
          subtitle="Cinema" 
          title="Moving Stories" 
          description="Cinematic films that capture the soul of your special day with industry-leading visual storytelling."
        />

        <div className="video-gallery__cinema-wrap">
          <div className="video-gallery__player-outer">
            <div className="video-gallery__player-wrap">
              {/* Shutter Animation Overlay */}
              <AnimatePresence>
                <motion.div 
                  key={`shutter-${selected.id}`}
                  className="video-gallery__shutter"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                />
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={selected.id}
                  className="video-gallery__player-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="video-gallery__iframe-aspect">
                    {selected.driveId.includes('v_O8XF9S') ? (
                      <div className="video-gallery__placeholder">
                        <img src={selected.thumbnail} alt={selected.title} className="video-gallery__placeholder-bg" />
                        <div className="video-gallery__placeholder-overlay">
                           {/* Left Side Title */}
                           <div className="video-gallery__placeholder-side-left">
                              <motion.div
                                key={`text-${selected.id}`}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="video-gallery__placeholder-text-wrap"
                              >
                                <h2 className="video-gallery__placeholder-main-title">{selected.title}</h2>
                              </motion.div>
                           </div>

                           {/* Center Play Button */}
                           <div className="video-gallery__placeholder-center-play">
                              <div className="video-gallery__play-circle-modern">
                                <Play size={40} fill="currentColor" />
                              </div>
                           </div>

                           {/* Hero-style Navigation Buttons */}
                           <div className="video-gallery__nav">
                             <button className="video-gallery__nav-btn" onClick={(e) => { e.stopPropagation(); prevVideo(); }}>
                                <ChevronLeft size={24} />
                             </button>
                             <button className="video-gallery__nav-btn" onClick={(e) => { e.stopPropagation(); nextVideo(); }}>
                                <ChevronRight size={24} />
                             </button>
                           </div>

                           {/* Side Click Zones for better UX */}
                           <div className="video-gallery__nav-zones">
                             <div className="video-gallery__nav-zone video-gallery__nav-zone--left" onClick={(e) => { e.stopPropagation(); prevVideo(); }}></div>
                             <div className="video-gallery__nav-zone video-gallery__nav-zone--right" onClick={(e) => { e.stopPropagation(); nextVideo(); }}></div>
                           </div>
                        </div>
                      </div>
                    ) : (
                      <iframe
                        src={getEmbedUrl(selected.driveId)}
                        width="100%"
                        height="100%"
                        allow="autoplay"
                        className="video-gallery__iframe"
                      ></iframe>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="video-gallery__thumbnails">
          <div className="video-gallery__thumbnails-scroll">
            {videos.map((video, idx) => (
              <button
                key={video.id}
                className={`video-gallery__thumb ${selected.id === video.id ? 'video-gallery__thumb--active' : ''}`}
                onClick={() => setSelected(video)}
              >
                <div className="video-gallery__thumb-inner">
                  <img src={video.thumbnail} alt={video.title} />
                  <span className="video-gallery__thumb-number">0{idx + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}






