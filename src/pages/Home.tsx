import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { SectionTwo } from '../components/SectionTwo';
import { SectionThree } from '../components/SectionThree';
import { SectionFour } from '../components/SectionFour';
import { SectionFive } from '../components/SectionFive';
import { SectionSix } from '../components/SectionSix';

export function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-cream min-h-screen"
    >
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </motion.main>
  );
}
