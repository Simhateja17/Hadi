// components/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    
    // ===== HERO HEADING POSITION CONTROLS =====
    // Adjust these values to move ONLY the main heading (h1)
    // Positive X moves right, negative X moves left; positive Y moves down, negative Y moves up
    const HEADING_OFFSET_MOBILE = { x: 0, y: 0 };
    const HEADING_OFFSET_DESKTOP = { x: 0, y: 14 };
    // ==========================================

    // ===== HERO IMAGE POSITION & SIZE CONTROLS =====
    // Adjust these to move/resize the right-side image card
    // Position offsets (px): positive X moves right, positive Y moves down
    const IMAGE_OFFSET_MOBILE = { x: 0, y: 0 };
    const IMAGE_OFFSET_DESKTOP = { x: 0, y: 30};
    // Scale factors: 1 = 100% size, 1.1 = 110%, etc.
    const IMAGE_SCALE_MOBILE = 1;
    const IMAGE_SCALE_DESKTOP = 0.8;
    // Width controls: accept any CSS length (e.g., '100%', '90%', '560px')
    const IMAGE_WIDTH_MOBILE = '100%';
    const IMAGE_WIDTH_DESKTOP = '100%';
    // =================================================

    return (
        <section className="min-h-[80vh] flex items-center relative overflow-hidden pt-40 md:pt-44">
            {/* Subtle theme overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-british-blue/10 via-white to-british-red/10" />
            
            {/* Dynamic heading offset (mobile + desktop) */}
            <style jsx global>{`
                .hero-heading-offset {
                    transform: translate(${HEADING_OFFSET_MOBILE.x}px, ${HEADING_OFFSET_MOBILE.y}px);
                }
                @media (min-width: 768px) {
                    .hero-heading-offset {
                        transform: translate(${HEADING_OFFSET_DESKTOP.x}px, ${HEADING_OFFSET_DESKTOP.y}px) !important;
                    }
                }

                /* Image position and size controls */
                .hero-image-control {
                    width: ${IMAGE_WIDTH_MOBILE};
                    transform: translate(${IMAGE_OFFSET_MOBILE.x}px, ${IMAGE_OFFSET_MOBILE.y}px) scale(${IMAGE_SCALE_MOBILE});
                    margin-left: auto;
                    margin-right: auto;
                }
                @media (min-width: 768px) {
                    .hero-image-control {
                        width: ${IMAGE_WIDTH_DESKTOP};
                        transform: translate(${IMAGE_OFFSET_DESKTOP.x}px, ${IMAGE_OFFSET_DESKTOP.y}px) scale(${IMAGE_SCALE_DESKTOP});
                    }
                }
            `}</style>

            <div className="container-custom relative z-10 py-10">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    {/* Left: Content */}
                    <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[var(--border)] shadow-smooth text-british-blue body-small font-semibold">
                                Supporting International Social Workers
                            </span>
                        </div>

                        <h1 className="heading-xl mb-6 leading-tight hero-heading-offset text-center">
                            <span className="text-british-blue">Your Gateway to</span>
                            <span className="block text-gradient mt-2">UK Social Work</span>
                        </h1>

                        <p className="body-xl text-gray-700 mb-10 max-w-2xl mx-auto text-center">
                            Navigate Social Work England registration, find opportunities, and build
                            your career in the UK. We provide guidance, resources, and community
                            support for international social workers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-large">
                                Get Started Today
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link href="/toolkits" className="btn btn-outline btn-large">
                                Download Free Toolkit
                            </Link>
                        </div>
                    </div>

                    {/* Right: Visual - hidden on mobile, shown on md+ */}
                    <div className={`${isVisible ? 'animate-scale-in' : 'opacity-0'} hidden md:block`}>
                        <div className="hero-image-control relative rounded-xl overflow-hidden shadow-smooth-lg border border-[var(--border-light)] bg-white">
                            <Image
                                src="/Corporate Meeting Illustration.png"
                                alt="Community of social workers in a meeting"
                                width={1000}
                                height={700}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
