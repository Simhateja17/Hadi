// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Traditional Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo Section */}
                        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                            <div className="relative flex items-center gap-3">
                                <Image 
                                    src="/final-logo.png" 
                                    alt="We Social Workers UK Logo" 
                                    width={56} 
                                    height={56}
                                    className="rounded-lg object-contain"
                                />
                                <span className="text-xl font-bold text-gray-800 emilys-candy-regular">WE SOCIAL WORKERS</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-12">
                            <Link 
                                href="/" 
                                className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 emilys-candy-regular text-lg"
                            >
                                Home
                            </Link>
                            <Link 
                                href="/blogs" 
                                className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 emilys-candy-regular text-lg"
                            >
                                Blogs
                            </Link>
                            <Link 
                                href="/opportunities" 
                                className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 emilys-candy-regular text-lg"
                            >
                                Opportunities
                            </Link>
                            <Link 
                                href="/toolkit" 
                                className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 emilys-candy-regular text-lg"
                            >
                                Toolkit
                            </Link>
                            <Link 
                                href="/contact" 
                                className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 emilys-candy-regular text-lg"
                            >
                                Connect
                            </Link>
                            <Link 
                                href="/contactus" 
                                className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 emilys-candy-regular text-lg"
                            >
                                Contact
                            </Link>
                        </div>                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg 
                                className={`w-6 h-6 text-gray-700 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
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
                </div>
            </nav>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="fixed top-16 left-0 right-0 z-40 md:hidden bg-white shadow-lg border-t">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="space-y-2">
                            <Link 
                                href="/" 
                                className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 emilys-candy-regular text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/blogs" 
                                className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 emilys-candy-regular text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blogs
                            </Link>
                            <Link 
                                href="/opportunities" 
                                className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 emilys-candy-regular text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Opportunities
                            </Link>
                            <Link 
                                href="/toolkit" 
                                className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 emilys-candy-regular text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Toolkit
                            </Link>
                            <Link 
                                href="/contact" 
                                className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 emilys-candy-regular text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Connect
                            </Link>
                            <Link 
                                href="/contactus" 
                                className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 emilys-candy-regular text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
