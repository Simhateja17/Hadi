// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Header Wrapper with Top Info Bar + Main Nav */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                {/* Top Info Bar (Desktop) */}
                <div className="hidden md:block border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between py-2 text-sm text-gray-600">
                            <div className="flex items-center gap-6">
                                {/* Email */}
                                <a href="mailto:team@wesocialworkers.co.uk" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-british-red">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    <span>team@wesocialworkers.co.uk</span>
                                </a>
                                {/* Phone */}
                                <a href="tel:+442012345678" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-british-red">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <span>+44 20 1234 5678</span>
                                </a>
                                {/* Location */}
                                <div className="hidden lg:flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-british-red">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <span>London, UK</span>
                                </div>
                            </div>
                            <Link
                                href="/schedule-call"
                                aria-label="Schedule a Call"
                                className="inline-flex items-center pl-2 pr-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-[var(--british-blue)] via-[var(--british-blue)] to-[var(--british-red)]"
                            >
                                <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/90 bg-white/10 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <span className="text-[0.95rem]">Schedule a Call</span>
                            </Link>
                        </div>
                    </div>
                </div>

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
                                href="/opportunities" 
                                className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 emilys-candy-regular text-lg"
                            >
                                Opportunities
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
                                href="/contactus" 
                                className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 emilys-candy-regular text-lg"
                            >
                                Contact
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
                                href="/opportunities" 
                                className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 emilys-candy-regular text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Opportunities
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
                                href="/contactus" 
                                className="block px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 emilys-candy-regular text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
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
                            <Link 
                                href="/schedule-call"
                                aria-label="Schedule a Call"
                                className="mt-2 flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[var(--british-blue)] via-[var(--british-blue)] to-[var(--british-red)] shadow-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>Schedule a Call</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
