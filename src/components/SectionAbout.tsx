import { motion } from 'motion/react';

export function SectionAbout() {
  return (
    <section id="about" className="py-8 md:py-12 bg-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-lantenn-orange"></div>
            <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-charcoal">About Lantenn</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal leading-[1.1]">
            Built from a <span className="italic text-lantenn-orange">real problem.</span>
          </h2>
        </motion.div>

        <div className="space-y-8 text-lg md:text-xl font-sans text-charcoal/80 leading-relaxed font-light">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-4xl font-serif text-charcoal leading-tight mb-12 font-medium"
          >
            Lantenn started with a simple, frustrating observation: <span className="italic text-lantenn-orange">independent landlords are wasting too much time.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl font-sans text-charcoal/80 leading-relaxed font-light mb-8"
          >
            As two university students watching our family navigate the rental industry, we saw the chaos first-hand. Chasing down late rent payments. Drowning in endless WhatsApp threads about a leaking pipe. Filing away paper lease agreements in dusty folders. <strong className="font-semibold text-charcoal">It was a nightmare of manual admin, and it didn't have to be.</strong>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl font-sans text-charcoal/80 leading-relaxed font-light mb-8"
          >
            When we looked for a solution, we found legacy property management software that was clunky, overly complex, and priced for massive agencies. For independent landlords, the only alternative was spreadsheets, stress, and more paperwork.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-charcoal text-white p-8 md:p-12 rounded-lg shadow-xl my-16 border-l-4 border-lantenn-orange"
          >
            <p className="font-serif text-4xl md:text-5xl italic mb-6">
              So we built the tool they actually needed.
            </p>
            <p className="text-cream/80 font-sans font-light text-lg md:text-xl leading-relaxed">
              Lantenn is the antidote to rental chaos. A beautifully designed, mobile-first platform that handles rent collection, digital leases, inspections, and maintenance tracking—all in one place. No bloat. No confusing menus. Just total control.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-serif text-charcoal text-center mb-16 font-medium"
          >
            Our mission is clear: give independent landlords their <span className="italic text-lantenn-orange">time back.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="pt-12 border-t border-charcoal/10 text-center"
          >
            <p className="font-bold text-charcoal uppercase tracking-[0.2em] text-sm mb-4">We're not building software for everyone.</p>
            <p className="font-serif italic text-3xl md:text-4xl mt-2 text-lantenn-orange">
              We're building the platform we wished independent landlords had all along.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
