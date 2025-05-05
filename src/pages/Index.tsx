
import { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import AchievementsSection from '@/components/AchievementsSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  useEffect(() => {
    // Update the document title
    document.title = "IGNITE IoT - Smart Infrastructure Solutions";
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-background"
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <AchievementsSection />
          <TeamSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </motion.div>
    </AnimatePresence>
  );
}
