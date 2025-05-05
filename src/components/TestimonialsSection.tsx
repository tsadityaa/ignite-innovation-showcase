
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "This team has developed one of the most innovative IoT solutions I've seen in years. Their technical implementation is both elegant and robust.",
    author: "Dr. Sarah Johnson",
    title: "Professor of Computer Science, Technical University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"
  },
  {
    quote: "The market potential for this technology is immense. Their solution addresses a critical gap in urban infrastructure management that has global applications.",
    author: "Mark Thompson",
    title: "Managing Partner, Tech Ventures Capital",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"
  },
  {
    quote: "What impressed our judging panel most was the team's deep understanding of both the technical challenges and the business model. A well-deserved first place.",
    author: "Dr. Lisa Chen",
    title: "Lead Judge, National Innovation Challenge",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="bg-gradient-to-br from-brand-800 to-brand-900 py-20 md:py-32 text-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">What People Say</h2>
          <p className="text-lg text-white/80">
            Feedback from mentors, investors, and competition judges
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-brand-300/20">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative overflow-hidden min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl font-medium text-white/90 mb-8 relative z-10">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    className="w-16 h-16 rounded-full border-2 border-brand-300 mb-4 object-cover"
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-lg text-white">
                      {testimonials[current].author}
                    </h4>
                    <p className="text-brand-300">
                      {testimonials[current].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    current === index
                      ? "bg-white w-8"
                      : "bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
