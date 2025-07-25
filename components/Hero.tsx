// components/Hero.tsx
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero animate-warm-pulse">
            {/* Peaceful Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Caring Pattern Background */}
                <div className="absolute inset-0 bg-caring-pattern opacity-60"></div>
                
                {/* Floating Peaceful Elements */}
                <div className="absolute top-32 left-20 w-40 h-40 bg-gradient-peaceful rounded-full opacity-20 animate-caring-float blur-2xl"></div>
                <div className="absolute top-60 right-32 w-32 h-32 bg-gradient-warm rounded-full opacity-25 animate-caring-float blur-2xl" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-40 left-40 w-36 h-36 bg-gradient-secondary rounded-full opacity-20 animate-caring-float blur-2xl" style={{ animationDelay: '4s' }}></div>
                <div className="absolute bottom-32 right-24 w-28 h-28 bg-gradient-accent rounded-full opacity-30 animate-caring-float blur-xl" style={{ animationDelay: '1s' }}></div>

                {/* Community Dots Pattern */}
                <div className="absolute inset-0 bg-community-dots opacity-30"></div>

                {/* Gentle Glow Orbs */}
                <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-peaceful rounded-full opacity-15 animate-peaceful-glow blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-warm rounded-full opacity-12 animate-peaceful-glow blur-3xl" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className="relative z-10 container-custom py-20 text-center">
                <div className="max-w-6xl mx-auto">
                    {/* Trust Badge */}
                    <div className={`inline-flex items-center gap-4 px-8 py-4 glass-trust rounded-full border border-tertiary/30 mb-12 transition-all duration-1000 shadow-peaceful ${
                        isVisible ? 'animate-soft-scale opacity-100' : 'opacity-0'
                    }`}>
                        <div className="relative">
                            <div className="w-4 h-4 bg-gradient-peaceful rounded-full animate-peaceful-glow"></div>
                            <div className="absolute inset-0 w-4 h-4 bg-tertiary rounded-full animate-ping opacity-75"></div>
                        </div>
                        <span className="text-text-primary font-semibold text-lg font-body">Trusted by 10,000+ Social Work Professionals</span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-8 mb-16">
                        <h1 className={`font-display heading-xl text-primary text-balance transition-all duration-1000 delay-300 ${
                            isVisible ? 'animate-gentle-slide-up opacity-100' : 'opacity-0'
                        }`}>
                            <span className="block emilys-candy-regular" style={{ color: '#059669' }}>Building Stronger</span>
                            <span className="block emilys-candy-regular" style={{ color: '#f59e0b' }}>
                                Communities Together
                            </span>
                        </h1>
                        
                        <p className={`body-xl text-text-secondary max-w-4xl mx-auto text-balance leading-relaxed transition-all duration-1000 delay-500 font-body ${
                            isVisible ? 'animate-gentle-slide-up opacity-100' : 'opacity-0'
                        }`}>
                            
                        </p>
                    </div>




                </div>
            </div>

            {/* Smooth Bottom Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/30 to-transparent"></div>
        </section>
    );
};
