import { motion } from 'motion/react';

export function SectionThree() {
  return (
    <section id="lantenn-plus" className="relative pt-16 pb-8 md:pt-20 md:pb-12 bg-cream overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-lantenn-orange"></div>
            <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-charcoal">02. Ecosystem</span>
            <div className="h-px w-12 bg-lantenn-orange"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-[1.1] mb-8">
            <span className="block font-light">More than software.</span>
            <span className="block italic text-lantenn-orange">Welcome to Lantenn+.</span>
          </h2>
          <p className="text-lg md:text-xl font-sans text-charcoal/70 leading-relaxed font-light">
            Lantenn+ gives landlords exclusive access to a trusted ecosystem of vetted professionals, making property ownership simpler, more efficient and more rewarding.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
