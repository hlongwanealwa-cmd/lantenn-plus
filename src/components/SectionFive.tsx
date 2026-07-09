import { motion } from 'motion/react';

export function SectionFive() {
  return (
    <section id="philosophy" className="pt-10 pb-20 md:pt-16 md:pb-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-lantenn-orange"></div>
            <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-charcoal">Our Philosophy</span>
            <div className="h-px w-12 bg-lantenn-orange"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-[1.1] mb-12">
            <span className="block font-light">Built for landlords.</span>
            <span className="block italic text-lantenn-orange">Designed for peace of mind.</span>
          </h2>
          <p className="text-lg md:text-xl font-sans text-charcoal/70 leading-relaxed font-light">
            Lantenn is about empowering landlords, not replacing them. We provide the infrastructure, the network, and the clarity you need to run your properties efficiently—without losing the personal touch that makes you independent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
