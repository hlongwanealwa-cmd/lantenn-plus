import { motion } from 'motion/react';
import { User, FileText, Wallet, Wrench, PieChart, Users, BarChart3, MessageSquare } from 'lucide-react';

const features = [
  {
    title: 'Tenant Onboarding',
    description: 'Seamless digital applications and document collection.',
    icon: User
  },
  {
    title: 'Lease Management',
    description: 'Create, sign and securely store all lease agreements.',
    icon: FileText
  },
  {
    title: 'Rent Collection',
    description: 'Track payments, monitor arrears and gain visibility.',
    icon: Wallet
  },
  {
    title: 'Maintenance',
    description: 'Receive, assign and manage issues effortlessly.',
    icon: Wrench
  },
  {
    title: 'Reporting',
    description: 'View portfolio performance in clear financial reports.',
    icon: PieChart
  },
  {
    title: 'Tenant Portal',
    description: 'Easy access to payments, documents and requests.',
    icon: Users
  },
  {
    title: 'Property Insights',
    description: 'Understand your portfolio with real-time analytics.',
    icon: BarChart3
  },
  {
    title: 'Communication',
    description: 'Keep all tenant and supplier messages in one place.',
    icon: MessageSquare
  }
];

export function SectionTwo() {
  return (
    <section id="vision" className="relative pt-20 md:pt-32 pb-16 bg-cream overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="max-w-4xl"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="mb-6 flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 bg-lantenn-orange"></div>
            <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-charcoal">01. Purpose</span>
            <div className="h-px w-12 bg-lantenn-orange"></div>
          </motion.div>
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-[1.1] mb-8"
          >
            <span className="block font-light">Property Management.</span>
            <span className="block italic text-lantenn-orange">Reimagined.</span>
          </motion.h2>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-lg md:text-xl font-sans text-charcoal/70 leading-relaxed font-light"
          >
            Lantenn exists for landlords who want to remain in control while managing their properties professionally. We replace fragmented systems with a single, elegant platform designed specifically for the modern residential portfolio.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mt-24 mb-12 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 w-full max-w-sm">
            <div className="h-[1px] flex-1 bg-charcoal/10"></div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-charcoal/40 uppercase">Features</span>
            <div className="h-[1px] flex-1 bg-charcoal/10"></div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
          }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-left"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover="hover"
              className="bg-[#0a0a0a] p-6 rounded-2xl flex flex-col items-start gap-5 shadow-[0_0_20px_rgba(242,125,38,0.15)] ring-1 ring-lantenn-orange/30 hover:shadow-[0_0_30px_rgba(242,125,38,0.3)] hover:ring-lantenn-orange/50 transition-all duration-300 group cursor-pointer"
            >
              <motion.div 
                variants={{
                  hover: { 
                    scale: 1.15,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.4 }
                  }
                }}
                className="w-10 h-10 rounded-xl bg-lantenn-orange/20 flex items-center justify-center text-lantenn-orange shadow-[0_0_15px_rgba(242,125,38,0.2)]"
              >
                <feature.icon className="w-5 h-5" />
              </motion.div>
              <div>
                <h3 className="text-white font-bold text-[15px] mb-2 group-hover:text-lantenn-orange transition-colors duration-300">{feature.title}</h3>
                <p className="text-white/60 text-[13px] font-light leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
