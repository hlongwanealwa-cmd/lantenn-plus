import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_luxury_dusk_1783535536926.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden flex flex-col justify-center pt-32 pb-12">
      {/* Background Image Layer with Gradient Fade */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0"
      >
        <img 
          src={heroImg} 
          alt="Luxury residential property at dusk" 
          className="w-full h-full object-cover opacity-90"
        />
        {/* Gradients to blend image into the dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent lg:via-[#0a0a0a]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col">
        
        <div className="max-w-3xl pt-12 md:pt-24 lg:pt-32">
          {/* Typography Layer */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-[90px] xl:text-[110px] leading-[0.9] font-serif text-white tracking-tight mb-8"
          >
            PROPERTY.<br />
            DONE.<br />
            RIGHT.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-cream/70 leading-[1.6] mb-12 font-sans font-light max-w-xl"
          >
            One platform. Complete control. Everything your property needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 max-w-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] flex-1 bg-white/10"></div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-cream/40 uppercase">Trusted By</span>
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>
            
            <div className="flex w-full overflow-hidden whitespace-nowrap opacity-60 mask-image-fade">
              <div className="flex items-center space-x-12 animate-marquee">
                <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Sinawe Infrastructure 23</span>
                <span className="text-lg font-serif italic text-white">Phuthuma Corporate</span>
                <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Malandane (Pty) Ltd</span>
                <span className="text-lg font-serif italic text-white">Triple A (Pty) Ltd</span>
                <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Upeteni & Associates</span>
                <span className="text-lg font-serif italic text-white">The Other Side Holdings</span>
                <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Sinawe Infrastructure 23</span>
                <span className="text-lg font-serif italic text-white">Phuthuma Corporate</span>
                <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Malandane (Pty) Ltd</span>
                <span className="text-lg font-serif italic text-white">Triple A (Pty) Ltd</span>
                <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Upeteni & Associates</span>
                <span className="text-lg font-serif italic text-white">The Other Side Holdings</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a 
              href="#contact"
              onClick={(e) => {
                const el = document.getElementById('contact');
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-lantenn-orange text-white rounded-[4px] text-[13px] font-bold tracking-[0.1em] uppercase hover:bg-orange-600 transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
