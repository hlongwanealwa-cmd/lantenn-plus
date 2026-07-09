import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Lock, Landmark, Eye, ShieldCheck } from 'lucide-react';

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

export function Security() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 max-w-5xl mx-auto min-h-screen"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mb-16 md:mb-24"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight text-lantenn-blue">
          Platform Security
        </motion.h1>
        <motion.p variants={itemVariants} className="font-sans text-xl md:text-2xl font-light text-charcoal/70 leading-relaxed max-w-2xl">
          Confident, secure, and fully encrypted.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 md:space-y-16 font-sans text-lg md:text-xl font-light text-charcoal/80 leading-relaxed"
      >
        <motion.div variants={itemVariants} className="bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-charcoal/5 shadow-sm max-w-3xl">
          <p>
            We treat security not as an after-thought, but as our absolute core foundation. Here is exactly how we keep your portfolio, tenant records, and cash flow protected.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.section variants={itemVariants} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-500 border border-charcoal/5 group">
            <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Lock className="w-5 h-5 text-lantenn-orange" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-2xl mb-4 text-charcoal">End-to-End Encryption</h2>
            <p className="text-base md:text-lg text-charcoal/70">
              All traffic between your browser or phone and our servers is encrypted using standard Transport Layer Security (TLS) with robust AES-256 standards. Your tenant lease contracts, move-in checklists, and private data are fully secure.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-500 border border-charcoal/5 group">
            <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Landmark className="w-5 h-5 text-lantenn-orange" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-2xl mb-4 text-charcoal">Direct Bank Routing</h2>
            <p className="text-base md:text-lg text-charcoal/70">
              Lantenn is NOT a bank and we never store your capital in a middleman account. All rent transactions are processed via PayShap, routing money directly into your bank account.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-500 border border-charcoal/5 group">
            <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Eye className="w-5 h-5 text-lantenn-orange" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-2xl mb-4 text-charcoal">Privacy & Access Controls</h2>
            <p className="text-base md:text-lg text-charcoal/70">
              Each landlord receives unique credentials. We employ strict role-based access controls to guarantee that tenants only see invoices or log maintenance pertaining to their active leases.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="bg-charcoal text-cream p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500 border border-charcoal/5 group relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-lantenn-orange/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-5 h-5 text-lantenn-orange" strokeWidth={1.5} />
              </div>
              <h2 className="font-serif text-2xl mb-4 text-white">SA Standard Codes</h2>
              <p className="text-base md:text-lg text-cream/80 mb-8">
                We align with PASA clearing rules, and strictly adhere to POPIA policies to safeguard user confidentiality.
              </p>
              <a href="mailto:info@lantenn.co.za" className="inline-flex items-center gap-2 text-lantenn-orange uppercase tracking-widest font-bold text-sm hover:text-white transition-colors">
                <span>Contact Us</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </motion.main>
  );
}
