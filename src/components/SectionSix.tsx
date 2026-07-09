import { motion } from 'motion/react';
import duskBuildingImg from '../assets/images/dusk_building_1783531829996.jpg';

export function SectionSix() {
  return (
    <section id="contact" className="relative py-20 md:py-32 w-full flex items-center justify-center overflow-hidden bg-charcoal">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={duskBuildingImg} 
          alt="Modern residential development at dusk" 
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-charcoal/90 mix-blend-multiply" />
      </motion.div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-lantenn-orange"></div>
            <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-cream">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-cream leading-[1.1] mb-8">
            Ready to experience modern property management?
          </h2>
          <p className="text-lg font-sans text-cream/70 leading-relaxed font-light mb-12">
            Let's discuss how Lantenn can streamline your portfolio. Schedule a private consultation with our team.
          </p>
          <div className="space-y-6 text-cream/80 font-sans font-light">
            <p className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lantenn-orange mb-1">Email</span>
              <a href="mailto:info@lantenn.co.za" className="hover:text-white transition-colors">info@lantenn.co.za</a>
            </p>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-cream/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-cream/10"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-cream mb-2">Name</label>
              <input type="text" id="name" className="w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:outline-none focus:border-lantenn-orange transition-colors rounded-none" placeholder="Jane Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-cream mb-2">Email</label>
              <input type="email" id="email" className="w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:outline-none focus:border-lantenn-orange transition-colors rounded-none" placeholder="jane@example.com" />
            </div>
            <div>
              <label htmlFor="units" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-cream mb-2">Portfolio Size</label>
              <select id="units" className="w-full bg-transparent border-b border-cream/20 py-3 text-cream/70 focus:outline-none focus:border-lantenn-orange transition-colors rounded-none appearance-none">
                <option value="" className="text-charcoal">Select number of units</option>
                <option value="1-5" className="text-charcoal">1 - 5 units</option>
                <option value="6-20" className="text-charcoal">6 - 20 units</option>
                <option value="21+" className="text-charcoal">21+ units</option>
              </select>
            </div>
            <div className="pt-6">
              <button type="button" className="w-full px-10 py-5 bg-cream text-charcoal rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                Request Consultation
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
