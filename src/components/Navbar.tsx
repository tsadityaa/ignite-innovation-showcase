
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8",
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
            alt="IoT Project Logo" 
            className="h-10 w-10 rounded-full"
          />
          <span className={cn(
            "font-display font-bold text-xl transition-colors duration-300",
            isScrolled ? "text-brand-800" : "text-white"
          )}>
            IGNITE IoT
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {['About', 'Features', 'Team', 'Achievements', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={cn(
                "font-medium transition-colors duration-300",
                isScrolled ? "text-gray-700 hover:text-brand-700" : "text-white/90 hover:text-white"
              )}
            >
              {item}
            </a>
          ))}
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={cn(
              "h-6 w-6 transition-colors duration-300",
              isScrolled ? "text-gray-700" : "text-white"
            )} />
          ) : (
            <Menu className={cn(
              "h-6 w-6 transition-colors duration-300",
              isScrolled ? "text-gray-700" : "text-white"
            )} />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md py-4 px-4 sm:px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {['About', 'Features', 'Team', 'Achievements', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-medium text-gray-700 hover:text-brand-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
