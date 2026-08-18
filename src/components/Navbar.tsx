import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed w-full z-40 transition-colors ${scrolled? 'bg-forest text-cream backdrop-blur-sm shadow-sm' : 'bg-transparent text-cream'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-semibold text-xl">COLORLINE</span>
          <span className="text-sm -mt-1">PHOTOGRAPHY MW</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="font-semibold">Home</Link>
          <Link href="/about" className="font-semibold">About</Link>
          <Link href="/portfolio" className="font-semibold">Portfolio</Link>
          <Link href="/rate-card" className="font-semibold">Rate Card</Link>
          <Link href="/contact" className="font-semibold">Contact</Link>
          <a href="https://wa.me/265991459233" className="ml-4 inline-flex items-center px-4 py-2 border border-cream text-cream rounded-sm">Book Your Session</a>
        </nav>
        <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-forest text-cream">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
            <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
            <Link href="/portfolio" onClick={()=>setOpen(false)}>Portfolio</Link>
            <Link href="/rate-card" onClick={()=>setOpen(false)}>Rate Card</Link>
            <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
