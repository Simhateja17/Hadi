// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 gap-4 h-full">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-white/20"></div>
                    ))}
                </div>
            </div>
            
            <div className="container-custom relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 border-b border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <Link href="/" className="flex items-center gap-3 mb-6 group">
                                <div className="relative">
                                    <Image 
                                        src="/logo.png" 
                                        alt="WSW Logo" 
                                        width={50} 
                                        height={50}
                                        className="rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="heading-4 text-black font-bold">WE SOCIAL WORKERS</h3>
                                    <p className="text-gray-300">UK</p>
                                </div>
                            </Link>
                            
                            <p className="text-black mb-6 leading-relaxed max-w-md">
                                Empowering social workers across the UK with professional resources, 
                                career opportunities, and a supportive community for growth and excellence.
                            </p>
                            
                            {/* Social Links */}
                            <div className="flex gap-4">
                                {[
                                    { icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', label: 'Twitter', color: '#1da1f2' },
                                    { icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', label: 'Facebook', color: '#4267B2' },
                                    { icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', label: 'LinkedIn', color: '#0077b5' }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm border border-white/20"
                                        aria-label={social.label}
                                    >
                                        <svg className="w-6 h-6 transition-all duration-300" fill={social.color} viewBox="0 0 24 24">
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        {/* Quick Links */}
                        <div>
                            <h4 className="heading-4 text-black mb-6">Quick Links</h4>
                            <ul className="space-y-4">
                                {[
                                    { href: '/', label: 'Home' },
                                    { href: '/blogs', label: 'Blog' },
                                    { href: '/jobs', label: 'Jobs' },
                                    { href: '/toolkit', label: 'Toolkit' }
                                ].map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            href={link.href}
                                            className="text-black hover:text-secondary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Resources */}
                        <div>
                            <h4 className="heading-4 text-black mb-6">Resources</h4>
                            <ul className="space-y-4">
                                {[
                                    { href: '/contact', label: 'Contact Us' },
                                    { href: '/privacy', label: 'Privacy Policy' },
                                    { href: '/terms', label: 'Terms of Service' },
                                    { href: '/support', label: 'Support' }
                                ].map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            href={link.href}
                                            className="text-black hover:text-secondary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-black text-center md:text-left">
                            <p>&copy; {new Date().getFullYear()} We Social Workers UK. All rights reserved.</p>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            <span className="text-black text-sm">Made with</span>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                <span className="text-black text-sm">for social workers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
