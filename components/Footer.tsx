// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="bg-british-blue text-white relative overflow-hidden">
            {/* Union Jack pattern background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="footer-union-jack" patternUnits="userSpaceOnUse" width="10" height="10">
                                <rect width="10" height="10" fill="#C8102E"/>
                                <path d="M0,0 L10,10 M0,10 L10,0" stroke="white" strokeWidth="1"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#footer-union-jack)"/>
                    </svg>
                </div>
            </div>
            
            <div className="container-custom relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 border-b border-british-red">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <Link href="/" className="flex items-center gap-3 mb-6 group">
                                <div className="relative">
                                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border-2 border-british-red">
                                        <Image 
                                            src="/FInal Logo of the We Social Workersz-Photoroom.png" 
                                            alt="We Social Workers UK Logo" 
                                            width={55} 
                                            height={55}
                                            className="rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="heading-4 text-white font-bold">We Social Workers UK</h3>
                                    <p className="body-small text-british-red font-medium">Professional Development & Support</p>
                                </div>
                            </Link>
                            
                            <p className="text-gray-100 mb-6 leading-relaxed max-w-md body-medium">
                                Empowering international social workers to build successful careers in the UK 
                                through expert guidance and comprehensive support.
                            </p>
                            
                            {/* Social Links */}
                            <div className="flex gap-4">
                                {[
                                    { 
                                        icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', 
                                        label: 'Twitter',
                                        href: '#'
                                    },
                                    { 
                                        icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', 
                                        label: 'Facebook',
                                        href: '#'
                                    },
                                    { 
                                        icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', 
                                        label: 'LinkedIn',
                                        href: '#'
                                    }
                                ].map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 bg-british-red hover:bg-white hover:text-british-blue rounded-lg flex items-center justify-center transition-all duration-200 hover-lift"
                                        aria-label={social.label}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={social.icon} />
                                        </svg>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="heading-5 text-white mb-6">Quick Links</h4>
                            <nav className="space-y-3">
                                {[
                                    { href: '/', label: 'About Us' },
                                    { href: '/blogs', label: 'Our Services' },
                                    { href: '/jobs', label: 'Our Team' },
                                    { href: '/contact', label: 'Contact Us' }
                                ].map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block text-gray-200 hover:text-british-red transition-colors duration-200 body-medium"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Get In Touch */}
                        <div>
                            <h4 className="heading-5 text-white mb-6">Get In Touch</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 text-british-red mt-0.5">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-200 body-small">info@wesocialworkersuk.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 text-british-red mt-0.5">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-200 body-small">London, United Kingdom 🇬🇧</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 text-british-red mt-0.5">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-200 body-small">+44 (0) 20 1234 5678</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 text-british-red mt-0.5">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-200 body-small">www.wesocialworkersuk.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-300 body-small text-center md:text-left">
                            © 2024 We Social Workers UK. All rights reserved. | Empowering social workers across cultures. 🇬🇧
                        </p>
                        
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-gray-300 hover:text-british-red transition-colors body-small">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-300 hover:text-british-red transition-colors body-small">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
