import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 w-full z-50 glass-trust backdrop-blur-md shadow-xl">
      <div className="container-custom">
                    <div className="flex items-center justify-between py-8">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 hover-gentle group">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-peaceful rounded-2xl flex items-center justify-center group-hover:animate-peaceful-glow transition-all shadow-lg">
                <Image 
                  src="/Screenshot_2025-07-22_163224-removebg-preview.png" 
                  alt="WSW Logo" 
                  width={75} 
                  height={75}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="hidden sm:block">
                              <h1 className="text-3xl font-bold tracking-tight">
                                  <span className="emilys-candy-regular" style={{ color: '#9E9E9E' }}>WE SOCIAL WORKERS</span>
              </h1>
              <p className="body-small text-text-secondary -mt-1 font-medium"></p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {[
              { href: '/', label: 'Home' },
              { href: '/blogs', label: 'Resources' },
              { href: '/jobs', label: 'Opportunities' },
              { href: '/toolkit', label: 'Toolkit' },
              { href: '/contact', label: 'Connect' }
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-10 py-5 text-xl text-text-primary rounded-2xl hover:bg-tertiary/10 transition-all duration-300 animate-gentle-slide-up backdrop-blur-sm emilys-candy-regular"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>



          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 rounded-2xl hover:bg-tertiary/10 transition-colors backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-full h-0.5 bg-text-primary rounded-sm transition-all duration-300 ${
                menuOpen ? 'top-3 rotate-45' : 'top-1'
              }`}></span>
              <span className={`absolute block w-full h-0.5 bg-text-primary rounded-sm transition-all duration-300 top-3 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block w-full h-0.5 bg-text-primary rounded-sm transition-all duration-300 ${
                menuOpen ? 'top-3 -rotate-45' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="glass-warm backdrop-blur-md border-t border-accent/20 mx-4 mb-4 rounded-b-3xl shadow-2xl">
          <nav className="p-8 space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/blogs', label: 'Resources' },
              { href: '/jobs', label: 'Opportunities' },
              { href: '/toolkit', label: 'Toolkit' },
              { href: '/contact', label: 'Connect' }
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-4 text-text-primary font-medium rounded-2xl hover:bg-accent/10 transition-all duration-300 animate-community-gather backdrop-blur-sm font-body"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
