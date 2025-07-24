// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="bg-text-dark text-background relative overflow-hidden">
            <div className="relative">
                {/* Main Footer Content */}
                <div className="container-custom pt-16 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Brand Section */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <Image 
                                        src="/logo.png" 
                                        alt="We Social Workers UK Logo" 
                                        width={50} 
                                        height={50}
                                        className="rounded-lg"
                                    />
                </div>
                <div>
                                    <h3 className="text-xl font-semibold text-background">WSW UK</h3>
                                    <p className="text-sm text-primary">Social Workers Community</p>
                                </div>
                            </div>
                            <p className="text-primary leading-relaxed text-sm">
                                Empowering social workers across the UK with professional resources, job opportunities, and a supportive community.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h4 className="text-background font-medium">Quick Links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/" className="text-primary hover:text-background transition-colors text-sm">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blogs" className="text-primary hover:text-background transition-colors text-sm">
                                        Blog & Articles
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/jobs" className="text-primary hover:text-background transition-colors text-sm">
                                        Job Opportunities
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/toolkit" className="text-primary hover:text-background transition-colors text-sm">
                                        Professional Toolkit
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="space-y-6">
                            <h4 className="text-background font-medium">Stay Updated</h4>
                            <p className="text-primary text-sm">
                                Get the latest social work news, job opportunities, and professional insights delivered to your inbox.
                            </p>
                            <form className="space-y-3">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-2 bg-background border border-primary rounded text-text-dark placeholder-text-muted text-sm focus:outline-none focus:border-text-dark transition-all"
                                />
                                <button 
                                    type="submit"
                                    className="w-full bg-primary text-text-dark font-medium py-2 px-4 rounded hover:bg-primary-light transition-all duration-200 text-sm"
                                >
                                    Subscribe
                                </button>
                    </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary">
                    <div className="container-custom py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-primary text-sm">
                                © 2024 We Social Workers UK. All rights reserved.
                            </p>
                            <div className="flex space-x-6 text-sm">
                                <a href="#" className="text-primary hover:text-background transition-colors">Privacy Policy</a>
                                <a href="#" className="text-primary hover:text-background transition-colors">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
