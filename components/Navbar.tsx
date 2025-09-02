// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Header Wrapper with Main Nav */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                {/* Main Nav */}
                <nav>
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
                                href="/toolkits" 
                                className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 emilys-candy-regular text-lg"
                            >
                                Toolkit
                            </Link>
                            <Link 
                                href="/contactus" 
                                className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 emilys-candy-regular text-lg"
                            >
                                Connect
                            </Link>
                            <Link 
                                href="/gallery" 
                                className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 emilys-candy-regular text-lg"
                            >
                                Gallery
                            </Link>
                            <Link
                                href="/write-for-us"
                                className="inline-flex items-center pl-2 pr-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-[var(--british-blue)] via-[var(--british-blue)] to-[var(--british-red)]"
                            >
                                <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/90 bg-white/10 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                                        <path d="M16.862 3.487a1.75 1.75 0 0 1 2.475 2.475l-9.193 9.193a6 6 0 0 1-2.53 1.51l-2.16.62a.75.75 0 0 1-.927-.927l.62-2.16a6 6 0 0 1 1.51-2.53l9.205-9.205z"/>
                                        <path d="M5.25 19.5h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1 0-1.5z"/>
                                    </svg>
                                </span>
                                <span className="text-[0.95rem]">Write for Us</span>
                            </Link>
                        </div>                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-british-blue"
                            aria-label="Toggle menu"
                        >
                            <svg 
                                className={`w-6 h-6 text-gray-700 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    </div>
                </nav>
            </header>

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
                                href="/toolkits" 
                                className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 emilys-candy-regular text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Toolkit
                            </Link>
                            <Link 
                                href="/contactus" 
                                className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 emilys-candy-regular text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Connect
                            </Link>
                            <Link 
                                href="/gallery" 
                                className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 emilys-candy-regular text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Gallery
                            </Link>
                            <Link 
                                href="/write-for-us" 
                                className="mt-2 flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[var(--british-blue)] via-[var(--british-blue)] to-[var(--british-red)] shadow-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M16.862 3.487a1.75 1.75 0 0 1 2.475 2.475l-9.193 9.193a6 6 0 0 1-2.53 1.51l-2.16.62a.75.75 0 0 1-.927-.927l.62-2.16a6 6 0 0 1 1.51-2.53l9.205-9.205z"/>
                                    <path d="M5.25 19.5h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1 0-1.5z"/>
                                </svg>
                                <span>Write for Us</span>
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
