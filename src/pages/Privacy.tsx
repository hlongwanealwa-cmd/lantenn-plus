import { motion } from 'motion/react';
import { useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 max-w-4xl mx-auto min-h-screen"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mb-16 md:mb-24"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight text-lantenn-blue">
          POPIA Compliance
        </motion.h1>
        <motion.p variants={itemVariants} className="font-sans text-xl md:text-2xl font-light text-charcoal/70 leading-relaxed max-w-2xl">
          Protection of Personal Information Act.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 md:space-y-16 font-sans text-lg md:text-xl font-light text-charcoal/80 leading-relaxed"
      >
        <motion.div variants={itemVariants} className="bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-charcoal/5 shadow-sm">
          <p className="mb-6">
            Lantenn is committed to protecting your personal information and complying with the Protection of Personal Information Act (POPIA) of South Africa.
          </p>
          <p>
            When you use our portal to list properties, manage leases, and collect rent from tenants, you can rest assured that we handle all customer and resident data with absolute confidentiality.
          </p>
        </motion.div>

        <motion.section variants={itemVariants} className="group border-t border-charcoal/10 pt-12">
          <h2 className="font-serif text-2xl md:text-3xl mb-6 text-charcoal flex items-center gap-4">
            <span className="text-lantenn-orange text-sm font-sans font-bold tracking-widest uppercase">01</span>
            How we protect your data
          </h2>
          <p className="group-hover:text-charcoal transition-colors duration-500 text-base md:text-xl">
            All stored files, digital leases, signed agreements, and tenant information are encrypted. We employ bank-grade security protocols, robust firewalls, and restricted administrative database access to prevent unauthorized access.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="group border-t border-charcoal/10 pt-12">
          <h2 className="font-serif text-2xl md:text-3xl mb-6 text-charcoal flex items-center gap-4">
            <span className="text-lantenn-orange text-sm font-sans font-bold tracking-widest uppercase">02</span>
            Tenant & Landlord Rights
          </h2>
          <p className="group-hover:text-charcoal transition-colors duration-500 text-base md:text-xl">
            Under POPIA regulations, both landlords and tenants retain the right to access their information, request correction of incomplete data, or request the absolute deletion of accounts and active portfolios.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="group border-t border-charcoal/10 pt-12">
          <h2 className="font-serif text-2xl md:text-3xl mb-6 text-charcoal flex items-center gap-4">
            <span className="text-lantenn-orange text-sm font-sans font-bold tracking-widest uppercase">03</span>
            Responsible Processing
          </h2>
          <p className="group-hover:text-charcoal transition-colors duration-500 text-base md:text-xl">
            We collect and process your contact details, financial numbers, and property directories solely to facilitate rent collection, tenant billing, and maintenance operations. We never lease, trade, or sell your private information to third-party advertisers.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="bg-charcoal text-cream p-8 md:p-12 rounded-2xl mt-24 shadow-lg overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-lantenn-orange/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Our Information Officer</h2>
            <p className="text-cream/80 text-base md:text-lg mb-8">
              If you have any questions about how your personal information is stored, processed, or verified, or if you would like to initiate a formal data deletion request, reach out to our team.
            </p>
            <a href="mailto:info@lantenn.co.za" className="inline-flex items-center gap-2 text-lantenn-orange hover:text-white transition-colors group">
              <span className="border-b border-lantenn-orange/30 group-hover:border-white pb-1 font-medium">info@lantenn.co.za</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.section>
      </motion.div>
    </motion.main>
  );
}
