
import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-dark">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 min-h-full min-w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-2919-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-dark/40" />
      </div>
    </section>
  );
}
