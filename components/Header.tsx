import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 w-full z-50 glass-effect shadow-smooth">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 hover-lift group">
            <div className="relative">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-smooth border-2 border-british-blue">
                <Image 
                  src="/final-logo.png" 
                  alt="We Social Workers UK Logo" 
                  width={48} 
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="heading-5 font-bold text-british-blue">
                We Social Workers UK
              </h1>
              <p className="body-small text-british-red font-medium">Professional Development & Support</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/blogs', label: 'Resources' },
              { href: '/jobs', label: 'Opportunities' },
              { href: '/toolkit', label: 'Toolkit' },
              { href: '/contact', label: 'Connect' },
              { href: '/contactus', label: 'Contact' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="body-medium font-medium text-british-blue hover:text-british-red transition-colors duration-200 px-3 py-2 rounded-md hover:bg-red-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contactus" className="btn btn-primary btn-small">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-blue-50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-british-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-british-blue py-4 animate-fade-in bg-white">
            <nav className="flex flex-col gap-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/blogs', label: 'Resources' },
                { href: '/jobs', label: 'Opportunities' },
                { href: '/toolkit', label: 'Toolkit' },
                { href: '/contact', label: 'Connect' },
                { href: '/contactus', label: 'Contact' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded-md hover:bg-red-50 transition-colors body-medium text-british-blue hover:text-british-red"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Link href="/contactus" className="btn btn-primary w-full">
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
