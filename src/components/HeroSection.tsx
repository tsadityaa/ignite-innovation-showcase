
import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Ensure iframe is properly sized on load and resize
    const handleResize = () => {
      if (iframeRef.current) {
        const width = iframeRef.current.parentElement?.offsetWidth || window.innerWidth;
        const height = window.innerHeight;
        iframeRef.current.style.width = `${width}px`;
        iframeRef.current.style.height = `${height}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    // Initial sizing
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-dark">
      {/* YouTube video background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            ref={iframeRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
            src="https://www.youtube.com/embed/2ONZxnKkPPE?autoplay=1&mute=1&controls=0&loop=1&playlist=2ONZxnKkPPE&showinfo=0&rel=0&modestbranding=1"
            title="Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-dark/40" />
      </div>
    </section>
  );
}
