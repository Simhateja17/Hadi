// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Glassmorphism Navbar */}
            <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                        <div className="relative">
                            <Image 
                                src="/logo.png" 
                                alt="We Social Workers UK Logo" 
                                width={40} 
                                height={40}
                                className="rounded-lg"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link 
                            href="/" 
                            className="px-4 py-2 text-text-dark font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
                        >
                            Home
                        </Link>
                        <Link 
                            href="/blogs" 
                            className="px-4 py-2 text-text-dark font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
                        >
                            Blog
                        </Link>
                        <Link 
                            href="/jobs" 
                            className="px-4 py-2 text-text-dark font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
                        >
                            Jobs
                        </Link>
                        <Link 
                            href="/toolkit" 
                            className="px-4 py-2 text-text-dark font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
                        >
                            Toolkit
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg 
                            className={`w-6 h-6 text-text-dark transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-6xl md:hidden">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-4">
                        <div className="space-y-2">
                            <Link 
                                href="/" 
                                className="block px-4 py-3 text-text-dark font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/blogs" 
                                className="block px-4 py-3 text-text-dark font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link 
                                href="/jobs" 
                                className="block px-4 py-3 text-text-dark font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Jobs
                            </Link>
                            <Link 
                                href="/toolkit" 
                                className="block px-4 py-3 text-text-dark font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Toolkit
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
