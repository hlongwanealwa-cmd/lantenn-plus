import { motion, AnimatePresence } from 'motion/react';
import { Menu, User, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
      >
        <div className="flex-1 flex items-center justify-start">
          <Link to="/" className="flex items-center">
            <Logo className="h-8 md:h-10 w-[120px] md:w-[150px]" light={true} />
          </Link>
        </div>
        
        <div className="hidden md:flex flex-1 items-center justify-center gap-10 font-sans text-[13px] uppercase tracking-[0.1em] font-medium text-white/70">
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {isHome && <div className="w-8 h-px bg-lantenn-orange"></div>}
          </div>
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            {!isHome && location.pathname === '/about' && <div className="w-8 h-px bg-lantenn-orange"></div>}
          </div>
          <a href={isHome ? "#contact" : "/#contact"} className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <div className="hidden md:flex flex-1 items-center justify-end gap-6">
          <button className="flex items-center gap-2 text-white hover:text-lantenn-orange transition-colors text-[14px] font-medium">
            <User className="w-4 h-4" />
            <span>Login</span>
          </button>
        </div>
        
        <div className="md:hidden flex items-center gap-6 ml-auto">
          <button className="flex items-center gap-2 text-white hover:text-lantenn-orange transition-colors text-[14px] font-medium">
            <User className="w-4 h-4" />
            <span>Login</span>
          </button>
          <button className="text-white hover:text-lantenn-orange transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8 font-sans text-lg uppercase tracking-[0.2em] font-medium text-white">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`hover:text-lantenn-orange transition-colors ${isHome ? 'text-lantenn-orange' : ''}`}>Home</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`hover:text-lantenn-orange transition-colors ${!isHome && location.pathname === '/about' ? 'text-lantenn-orange' : ''}`}>About</Link>
              <a href={isHome ? "#contact" : "/#contact"} onClick={() => setMobileMenuOpen(false)} className="hover:text-lantenn-orange transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
