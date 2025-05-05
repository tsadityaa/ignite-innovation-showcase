
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "This team has developed one of the most innovative IoT solutions I've seen in years. Their technical implementation is both elegant and robust.",
    author: "Dr. Sarah Johnson",
    title: "Professor of Computer Science, Technical University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
    rating: 5
  },
  {
    quote: "The market potential for this technology is immense. Their solution addresses a critical gap in urban infrastructure management that has global applications.",
    author: "Mark Thompson",
    title: "Managing Partner, Tech Ventures Capital",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
    rating: 5
  },
  {
    quote: "What impressed our judging panel most was the team's deep understanding of both the technical challenges and the business model. A well-deserved first place.",
    author: "Dr. Lisa Chen",
    title: "Lead Judge, National Innovation Challenge",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
    rating: 5
  }
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1 text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-5 w-5",
            i < rating ? "fill-yellow-400" : "fill-gray-200"
          )}
        />
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
          className="max-w-6xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
                    <CardContent className="flex flex-col p-6">
                      <div className="absolute -top-4 left-6 text-brand-300">
                        <Quote className="w-8 h-8" />
                      </div>
                      <div className="pt-4">
                        <StarRating rating={testimonial.rating} />
                        <p className="text-white/90 mb-6 text-sm md:text-base">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center mt-auto pt-4 border-t border-white/10">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-12 h-12 rounded-full border-2 border-brand-300 mr-4 object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-white">
                              {testimonial.author}
                            </h4>
                            <p className="text-brand-300 text-sm">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static md:absolute left-0 bg-brand-500 hover:bg-brand-600 text-white border-none" />
              <CarouselNext className="relative static md:absolute right-0 bg-brand-500 hover:bg-brand-600 text-white border-none" />
            </div>
          </Carousel>

          {/* Mobile indicators */}
          <div className="md:hidden flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === 0 ? "bg-white w-4" : "bg-white/30"
                )}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
