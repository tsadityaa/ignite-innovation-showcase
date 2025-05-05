
import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const achievements = [
  {
    image: "https://images.unsplash.com/photo-1605499596043-20fc8dfe54c7?auto=format&fit=crop&w=1200&q=80",
    title: "1st Prize at National Hackathon",
    description: "Our team won the national IoT hackathon, competing against 200+ teams from across the country.",
    year: "2023"
  },
  {
    image: "https://images.unsplash.com/photo-1574607383476-1b1ec3296cf4?auto=format&fit=crop&w=1200&q=80",
    title: "Patent Publication",
    description: "Our solution's unique architecture and algorithms have been filed for patent (Publication No. 2023/xxxxxx).",
    year: "2023"
  },
  {
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1200&q=80",
    title: "Incubation at Tech Foundation",
    description: "Selected among top 5 startups for incubation program with funding and mentorship.",
    year: "2022"
  },
  {
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1200&q=80",
    title: "Business Plan Competition Winner",
    description: "Awarded best business model at the University Entrepreneurship Summit.",
    year: "2022"
  }
];

export default function AchievementsSection() {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="achievements" className="bg-brand-50 py-20 md:py-32 overflow-hidden">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">Our Achievements</h2>
          <p className="text-lg text-gray-700">
            Recognition and milestones that validate our technology and business model
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative aspect-[16/9] bg-gray-900">
                  <img
                    src={achievements[current].image}
                    alt={achievements[current].title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-left">
                    <div className="inline-block px-3 py-1 bg-brand-600 text-white text-sm font-medium rounded-full mb-4">
                      {achievements[current].year}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {achievements[current].title}
                    </h3>
                    <p className="text-white/80 text-lg max-w-3xl">
                      {achievements[current].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 text-white transition-colors z-10"
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 text-white transition-colors z-10"
              aria-label="Next slide"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  current === index
                    ? "bg-brand-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
