import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6 opacity-80">
              <Logo className="h-8 w-[120px]" light={true} />
            </div>
            
            <p className="font-sans text-sm font-light">
              South Africa's property management platform for independent landlords.
            </p>
          </div>
          
          <div>
            <h4 className="text-lantenn-orange font-sans text-[11px] font-bold tracking-[0.2em] uppercase mb-6">Platform</h4>
            <ul className="space-y-4 font-sans text-sm font-light">
              <li><Link to="/" className="hover:text-cream transition-colors">Software</Link></li>
              <li><Link to="/" className="hover:text-cream transition-colors">Lantenn+</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lantenn-orange font-sans text-[11px] font-bold tracking-[0.2em] uppercase mb-6">Company</h4>
            <ul className="space-y-4 font-sans text-sm font-light">
              <li><Link to="/about" className="hover:text-cream transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-cream transition-colors">Philosophy</a></li>
              <li><a href="#contact" className="hover:text-cream transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lantenn-orange font-sans text-[11px] font-bold tracking-[0.2em] uppercase mb-6">Legal</h4>
            <ul className="space-y-4 font-sans text-sm font-light">
              <li><Link to="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link></li>
              <li><Link to="/security" className="hover:text-cream transition-colors">Platform Security & Encryption</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream/10 font-sans text-[11px] font-semibold tracking-widest uppercase text-cream/40">
          <p>&copy; {new Date().getFullYear()} Lantenn. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-right">Empowering owners to maintain control<br/>with institutional-grade tools.</p>
        </div>
      </div>
    </footer>
  );
}
