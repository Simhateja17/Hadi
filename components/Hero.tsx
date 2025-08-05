// components/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';
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
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <div className={`text-center lg:text-left ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="mb-6">
                            <span className="inline-block px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-white text-british-blue rounded-full body-medium font-bold mb-6 shadow-smooth">
                               
                            </span>
                        </div>
                        
                        <h1 className="heading-xl mb-6 text-british-blue">
                            Your Gateway to
                            <span className="text-british-red block">Social Work Success</span>
                            in the UK
                        </h1>
                        
                        <p className="body-xl mb-8 max-w-2xl lg:mx-0 mx-auto text-gray-700 leading-relaxed">
                            Expert guidance from experienced social workers to help international 
                            professionals build successful careers in the UK social work sector.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
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
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t-2 border-british-blue">
                            <div className="text-center">
                                <div className="heading-3 text-british-red mb-2 font-bold">500+</div>
                                <p className="body-small text-gray-600">Social Workers Supported</p>
                            </div>
                            <div className="text-center">
                                <div className="heading-3 text-british-blue mb-2 font-bold">15+</div>
                                <p className="body-small text-gray-600">Countries Represented</p>
                            </div>
                            <div className="text-center">
                                <div className="heading-3 text-british-red mb-2 font-bold">95%</div>
                                <p className="body-small text-gray-600">Success Rate</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Visual Side - Logo */}
                    <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
                        <div className="relative mx-auto max-w-lg">
                            {/* Logo container */}
                            <div className="relative">
                                {/* Main container - Simple logo display */}
                                <div className="relative w-96 h-96 mx-auto flex items-center justify-center">
                                    {/* Logo without background circle */}
                                    <div className="w-full h-full relative flex items-center justify-center">
                                        <Image 
                                            src="/FInal Logo of the We Social Workersz-Photoroom.png" 
                                            alt="We Social Workers UK Logo" 
                                            width={320} 
                                            height={320}
                                            className="object-contain drop-shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
