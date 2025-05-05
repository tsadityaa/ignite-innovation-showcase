
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
            src="https://static.videezy.com/system/resources/previews/000/021/804/original/DISPLAY_CLEAN_ABSTRACT_BACKGROUND.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-slide-down">
            Revolutionizing <span className="text-brand-400">IoT</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 animate-slide-down animation-delay-300">
            Award-winning, patent-pending smart infrastructure technology
            created by computer science engineers
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-down animation-delay-600">
            <Button 
              className="btn-primary text-lg" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
            <Button 
              className="btn-secondary text-lg" 
              size="lg"
              variant="outline"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a 
          href="#about" 
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          aria-label="Scroll down to explore"
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
