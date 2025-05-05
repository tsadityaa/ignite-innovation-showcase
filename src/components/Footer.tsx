
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brand-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
              alt="IoT Project Logo" 
              className="h-10 w-10 rounded-full mr-3"
            />
            <span className="font-display font-bold text-xl">IGNITE IoT</span>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {['About', 'Features', 'Team', 'Achievements', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} IGNITE IoT. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center text-white/60 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
