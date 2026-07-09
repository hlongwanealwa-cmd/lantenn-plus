import { motion } from 'motion/react';
import legalImg from '../assets/images/service_legal_1783532784748.jpg';
import maintenanceImg from '../assets/images/service_maintenance_1783532797661.jpg';
import cleaningImg from '../assets/images/service_cleaning_1783532809048.jpg';
import electricalImg from '../assets/images/service_electrical_1783532821426.jpg';
import plumbingImg from '../assets/images/service_plumbing_1783532833222.jpg';
import securityImg from '../assets/images/service_security_1783532844089.jpg';
import paintingImg from '../assets/images/service_painting_1783532854719.jpg';
import gardenImg from '../assets/images/service_garden_1783532879357.jpg';

const categories = [
  { name: 'Legal', image: legalImg },
  { name: 'Maintenance', image: maintenanceImg },
  { name: 'Cleaning', image: cleaningImg },
  { name: 'Electrical', image: electricalImg },
  { name: 'Plumbing', image: plumbingImg },
  { name: 'Security', image: securityImg },
  { name: 'Painting', image: paintingImg },
  { name: 'Garden Services', image: gardenImg },
];

export function SectionFour() {
  return (
    <section className="pt-8 pb-10 md:pt-12 md:pb-16 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer shadow-xl border border-charcoal/5"
            >
              <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/30 transition-colors duration-500 z-10" />
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 z-20 flex items-end p-8">
                <h3 className="text-white font-serif text-2xl md:text-3xl font-light tracking-wide">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
