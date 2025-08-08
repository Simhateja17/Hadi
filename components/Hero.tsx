// components/Hero.tsx
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent pt-20">
            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-british-blue/20 via-purple-500/10 to-british-red/20"></div>
            
            <div className="container-custom relative z-10 py-20">
                {/* Full width content - centered text layout */}
                <div className="max-w-6xl mx-auto text-center">
                    <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="mb-12">
                            <span className="inline-block px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-white text-british-blue rounded-full body-large font-bold mb-8 shadow-smooth">
                               
                            </span>
                        </div>
                        
                        <h1 className="heading-xl mb-12 text-british-blue leading-tight">
                            Your Gateway to
                            <span className="text-british-red block mt-4">Social Work Success</span>
                            <span className="block mt-4">in the UK</span>
                        </h1>
                        
                        <p className="body-xl mb-16 max-w-4xl mx-auto text-gray-700 leading-relaxed">
                            Expert guidance from experienced social workers to help international 
                            professionals build successful careers in the UK social work sector.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                            <Link href="/contact" className="btn btn-primary btn-large">
                                Start Your Journey
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link href="/about" className="btn btn-secondary btn-large">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
