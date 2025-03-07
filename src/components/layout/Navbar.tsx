
import React, { useState, useEffect } from 'react';
import MaxScaleButton from '../ui/MaxScaleButton';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why AI', href: '#why-ai' },
    { name: 'Clients', href: '#clients' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-maxscale-darker/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="maxscale-container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">MaxScale</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-gray-300 hover:text-maxscale-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-maxscale-accent after:transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <MaxScaleButton>Get Started</MaxScaleButton>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          'fixed inset-x-0 top-[73px] bg-maxscale-darker/95 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden overflow-hidden',
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="maxscale-container py-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-maxscale-muted/30 pb-2">
                <a 
                  href={link.href} 
                  className="text-gray-300 hover:text-maxscale-accent transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <MaxScaleButton className="w-full">Get Started</MaxScaleButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
