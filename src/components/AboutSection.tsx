
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="bg-light py-20 md:py-32">
      <div className="container-section">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">About Us</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              "Did you know? In India alone,18 million people are blind"
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            "Strideo Assist "which is majorly a IOT product which addresses the blind people and their market. problems like obstacle detection, topographical analysis, health monitoring and emergency sos messaging are solved by this smart wearable product
            </p>
            <a 
              href="#features"
              className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 transition-colors"
            >
              Explore our solution <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className={cn(
            "rounded-xl overflow-hidden shadow-xl transition-all duration-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <img 
              src="src\components\logo.jpg" 
              alt="Smart IoT Infrastructure Solution" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
