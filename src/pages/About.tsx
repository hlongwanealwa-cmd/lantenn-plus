import { motion } from 'motion/react';
import { SectionAbout } from '../components/SectionAbout';

export function About() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-cream min-h-screen pt-32"
    >
      <SectionAbout />
    </motion.main>
  );
}
