// pages/index.tsx
import { GetStaticProps } from 'next';
import { getApiUrl } from '../utils/api';
import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '../../components/Hero';
import { BlogScroller } from '../../components/BlogScroller';

type Blog = {
    id: string;
    title: string;
    author: string;
    content: string;
    imageUrl?: string;
    createdAt: string;
};
type HomeProps = { blogs: Blog[]; };

export default function Home({ blogs }: HomeProps) {
    // ===== DESIGN CONTROLS - Modify these values to adjust positioning and sizing =====
    
    // Button and Bubble Styling
    const BUBBLE_SIZE = { 
        horizontal: 8, 
        vertical: 4 
    };

    // Desktop Controls
    const DESKTOP_CONFIG = {
        aboutUsBubble: { x: 180, y: 0 },
        learnMoreButton: { x: 158, y: 0 },
        image: { 
            size: { width: 1000, height: 1000 },
            position: { x: 100, y: 0 }
        },
        ctaSection: {
            position: { x: 120, y: 0 },
            size: { width: 100, height: 100 } // percentage
        },
        servicesSection: {
            headingToBoxesGap: 7 // Gap between heading and service boxes in rem units (16 = 4rem = 64px by default)
        }
    };

    // Mobile Controls
    const MOBILE_CONFIG = {
        aboutUsBubble: { x: 0, y: 0 },
        learnMoreButton: { x: 125, y: 0 },
        image: { 
            size: { width: 300, height: 300 },
            position: { x: 0, y: 0 }
        },
        ctaSection: {
            position: { x: 0, y: 0 },
            size: { width: 100, height: 100 } // percentage
        },
        servicesSection: {
            headingToBoxesGap: 16 // Gap between heading and service boxes in rem units (same as desktop by default)
        }
    };

    // Services Icons Controls (affects service icons positioning)
    const SERVICES_ICON_CONFIG = {
        desktop: {
            position: { x: 0, y: 0 } // Position offset in pixels
        },
        mobile: {
            position: { x: 0, y: 0 } // Position offset in pixels  
        }
    };

    // Spacing controls for What We Do / Don't Do lists
    const LIST_SPACING_CONFIG = {
        desktop: {
            headingGap: 48, // px gap between heading row and first point
            itemGap: 28     // px gap between each point
        },
        mobile: {
            headingGap: 32, // px
            itemGap: 20
        }
    } as const;

    // Choose Your Path icon offsets (x/y in pixels)
    const PATH_ICON_OFFSETS = {
        desktop: {
            exploring: { x: 80, y: 0 },
            registering: { x: 80, y: 0 },
            jobHunting: { x: 80, y: 0 },
            relocating: { x: 80, y: 0 },
        },
        mobile: {
            exploring: { x: 0, y: 0 },
            registering: { x: 0, y: 0 },
            jobHunting: { x: 0, y: 0 },
            relocating: { x: 0, y: 0 },
        }
    } as const;

    // Our Values icon position controls (x/y in pixels)
    const VALUES_ICON_OFFSETS = {
        desktop: {
            compassionate: { x: 80, y: 0 },
            guidance: { x: 80, y: 0 },
            community: { x: 80, y: 0 },
            perspective: { x: 80, y: 0 },
        },
        mobile: {
            compassionate: { x: 150, y: 0 },
            guidance: { x: 150, y: 0 },
            community: { x: 150, y: 0 },
            perspective: { x: 150, y: 0 },
        }
    } as const;

    // Our Services header description position controls
    const OUR_SERVICES_DESCRIPTION_OFFSET = {
        desktop: { x: 115, y: 0 },
        mobile: { x: -10, y: 0 },
    } as const;

    // Our Story Section Controls
    const OUR_STORY_CONFIG = {
        sectionGap: {
            desktop: 80, // gap between description and founder boxes in pixels
            mobile: 60   // gap between description and founder boxes in pixels
        },
        description: {
            desktop: {
                position: { x: 120, y: 0 }, // Position offset in pixels
                maxWidth: 4, // max-width in xl units (4 = max-w-4xl)
                spacing: 6 // space-y in units (6 = space-y-6)
            },
            mobile: {
                position: { x: 0, y: 0 }, // Position offset in pixels
                maxWidth: 4, // max-width in xl units
                spacing: 6 // space-y in units
            }
        },
        founderBoxes: {
            desktop: {
                position: { x: 80, y: 0 }, // Position offset in pixels
                gap: 12, // gap between boxes in units (12 = gap-12)
                maxWidth: 5 // max-width in xl units (5 = max-w-5xl)
            },
            mobile: {
                position: { x: 0, y: 0 }, // Position offset in pixels
                gap: 8, // gap between boxes in units (8 = gap-8)
                maxWidth: 5 // max-width in xl units
            }
        }
    };

    // Founder image position controls (offsets in pixels)
    const FOUNDER_IMAGE_OFFSETS = {
        desktop: {
            mayel: { x: 180, y: 0 },
            ali: { x: 180, y: 0 },
        },
        mobile: {
            mayel: { x: 0, y: 0 },
            ali: { x: 0, y: 0 },
        },
    } as const;

    // ===== END OF DESIGN CONTROLS =====

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-red-50 overflow-x-hidden">
            <style jsx global>{`
                html, body {
                    overflow-x: hidden;
                    max-width: 100%;
                }
                
                /* Services Icon Positioning */
                .services-icon-desktop {
                    transform: translate(${SERVICES_ICON_CONFIG.mobile.position.x}px, ${SERVICES_ICON_CONFIG.mobile.position.y}px);
                }
                
                /* About Us Bubble Styling */
                .about-us-bubble {
                    padding-left: ${BUBBLE_SIZE.horizontal * 0.25}rem;
                    padding-right: ${BUBBLE_SIZE.horizontal * 0.25}rem;
                    padding-top: ${BUBBLE_SIZE.vertical * 0.25}rem;
                    padding-bottom: ${BUBBLE_SIZE.vertical * 0.25}rem;
                    transform: translate(${MOBILE_CONFIG.aboutUsBubble.x}px, ${MOBILE_CONFIG.aboutUsBubble.y}px);
                }
                
                /* Learn More Button Positioning */
                .learn-more-button {
                    transform: translate(${MOBILE_CONFIG.learnMoreButton.x}px, ${MOBILE_CONFIG.learnMoreButton.y}px);
                }
                
                /* Services Grid Spacing */
                .services-grid {
                    margin-top: ${MOBILE_CONFIG.servicesSection.headingToBoxesGap * 0.25}rem;
                }
                
                /* Values Icon Positioning - Mobile */
                .values-icon-compassionate { transform: translate(${VALUES_ICON_OFFSETS.mobile.compassionate.x}px, ${VALUES_ICON_OFFSETS.mobile.compassionate.y}px); }
                .values-icon-guidance { transform: translate(${VALUES_ICON_OFFSETS.mobile.guidance.x}px, ${VALUES_ICON_OFFSETS.mobile.guidance.y}px); }
                .values-icon-community { transform: translate(${VALUES_ICON_OFFSETS.mobile.community.x}px, ${VALUES_ICON_OFFSETS.mobile.community.y}px); }
                .values-icon-perspective { transform: translate(${VALUES_ICON_OFFSETS.mobile.perspective.x}px, ${VALUES_ICON_OFFSETS.mobile.perspective.y}px); }
                
                /* Services Description Positioning - Mobile */
                .services-description {
                    transform: translate(${OUR_SERVICES_DESCRIPTION_OFFSET.mobile.x}px, ${OUR_SERVICES_DESCRIPTION_OFFSET.mobile.y}px);
                }
                
                /* Path Icon Positioning - Mobile */
                .path-icon-exploring { transform: translate(${PATH_ICON_OFFSETS.mobile.exploring.x}px, ${PATH_ICON_OFFSETS.mobile.exploring.y}px); }
                .path-icon-registering { transform: translate(${PATH_ICON_OFFSETS.mobile.registering.x}px, ${PATH_ICON_OFFSETS.mobile.registering.y}px); }
                .path-icon-jobHunting { transform: translate(${PATH_ICON_OFFSETS.mobile.jobHunting.x}px, ${PATH_ICON_OFFSETS.mobile.jobHunting.y}px); }
                .path-icon-relocating { transform: translate(${PATH_ICON_OFFSETS.mobile.relocating.x}px, ${PATH_ICON_OFFSETS.mobile.relocating.y}px); }
                
                /* List Spacing - Mobile */
                .list-heading { margin-bottom: ${LIST_SPACING_CONFIG.mobile.headingGap}px; }
                .list-items { row-gap: ${LIST_SPACING_CONFIG.mobile.itemGap}px; }
                
                /* Our Story Section Positioning - Mobile */
                .story-description {
                    transform: translate(${OUR_STORY_CONFIG.description.mobile.position.x}px, ${OUR_STORY_CONFIG.description.mobile.position.y}px);
                }
                .story-founder-boxes {
                    transform: translate(${OUR_STORY_CONFIG.founderBoxes.mobile.position.x}px, ${OUR_STORY_CONFIG.founderBoxes.mobile.position.y}px);
                }
                .story-header {
                    margin-bottom: ${OUR_STORY_CONFIG.sectionGap.mobile}px;
                }

                /* Founder images position - Mobile */
                .founder-image-mayel { transform: translate(${FOUNDER_IMAGE_OFFSETS.mobile.mayel.x}px, ${FOUNDER_IMAGE_OFFSETS.mobile.mayel.y}px); }
                .founder-image-ali { transform: translate(${FOUNDER_IMAGE_OFFSETS.mobile.ali.x}px, ${FOUNDER_IMAGE_OFFSETS.mobile.ali.y}px); }
                
                @media (min-width: 768px) {
                    .services-icon-desktop {
                        transform: translate(${SERVICES_ICON_CONFIG.desktop.position.x}px, ${SERVICES_ICON_CONFIG.desktop.position.y}px) !important;
                    }
                    .about-us-bubble {
                        transform: translate(${DESKTOP_CONFIG.aboutUsBubble.x}px, ${DESKTOP_CONFIG.aboutUsBubble.y}px) !important;
                    }
                    .learn-more-button {
                        transform: translate(${DESKTOP_CONFIG.learnMoreButton.x}px, ${DESKTOP_CONFIG.learnMoreButton.y}px) !important;
                    }
                    .services-grid {
                        margin-top: ${DESKTOP_CONFIG.servicesSection.headingToBoxesGap * 0.25}rem !important;
                    }
                }
                
                @media (min-width: 1024px) {
                    /* Values Icon Positioning - Desktop */
                    .values-icon-compassionate { transform: translate(${VALUES_ICON_OFFSETS.desktop.compassionate.x}px, ${VALUES_ICON_OFFSETS.desktop.compassionate.y}px) !important; }
                    .values-icon-guidance { transform: translate(${VALUES_ICON_OFFSETS.desktop.guidance.x}px, ${VALUES_ICON_OFFSETS.desktop.guidance.y}px) !important; }
                    .values-icon-community { transform: translate(${VALUES_ICON_OFFSETS.desktop.community.x}px, ${VALUES_ICON_OFFSETS.desktop.community.y}px) !important; }
                    .values-icon-perspective { transform: translate(${VALUES_ICON_OFFSETS.desktop.perspective.x}px, ${VALUES_ICON_OFFSETS.desktop.perspective.y}px) !important; }
                    
                    /* Services Description Positioning - Desktop */
                    .services-description {
                        transform: translate(${OUR_SERVICES_DESCRIPTION_OFFSET.desktop.x}px, ${OUR_SERVICES_DESCRIPTION_OFFSET.desktop.y}px) !important;
                    }
                    
                    /* Path Icon Positioning - Desktop */
                    .path-icon-exploring { transform: translate(${PATH_ICON_OFFSETS.desktop.exploring.x}px, ${PATH_ICON_OFFSETS.desktop.exploring.y}px) !important; }
                    .path-icon-registering { transform: translate(${PATH_ICON_OFFSETS.desktop.registering.x}px, ${PATH_ICON_OFFSETS.desktop.registering.y}px) !important; }
                    .path-icon-jobHunting { transform: translate(${PATH_ICON_OFFSETS.desktop.jobHunting.x}px, ${PATH_ICON_OFFSETS.desktop.jobHunting.y}px) !important; }
                    .path-icon-relocating { transform: translate(${PATH_ICON_OFFSETS.desktop.relocating.x}px, ${PATH_ICON_OFFSETS.desktop.relocating.y}px) !important; }
                    
                    /* List Spacing - Desktop */
                    .list-heading { margin-bottom: ${LIST_SPACING_CONFIG.desktop.headingGap}px !important; }
                    .list-items { row-gap: ${LIST_SPACING_CONFIG.desktop.itemGap}px !important; }
                }
                
                @media (min-width: 1280px) {
                    /* Our Story Section Positioning - Desktop */
                    .story-description {
                        transform: translate(${OUR_STORY_CONFIG.description.desktop.position.x}px, ${OUR_STORY_CONFIG.description.desktop.position.y}px) !important;
                    }
                    .story-founder-boxes {
                        transform: translate(${OUR_STORY_CONFIG.founderBoxes.desktop.position.x}px, ${OUR_STORY_CONFIG.founderBoxes.desktop.position.y}px) !important;
                    }
                    .story-header {
                        margin-bottom: ${OUR_STORY_CONFIG.sectionGap.desktop}px !important;
                    }
                }

                @media (min-width: 768px) {
                    /* Founder images position - Desktop */
                    .founder-image-mayel { transform: translate(${FOUNDER_IMAGE_OFFSETS.desktop.mayel.x}px, ${FOUNDER_IMAGE_OFFSETS.desktop.mayel.y}px) !important; }
                    .founder-image-ali { transform: translate(${FOUNDER_IMAGE_OFFSETS.desktop.ali.x}px, ${FOUNDER_IMAGE_OFFSETS.desktop.ali.y}px) !important; }
                }
                
                @media (max-width: 767px) {
                    .container-custom {
                        max-width: 100%;
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                    .grid {
                        gap: 1rem;
                    }
                    .lg\\:grid-cols-2 {
                        grid-template-columns: 1fr;
                    }
                    .md\\:grid-cols-2 {
                        grid-template-columns: 1fr;
                    }
                    .lg\\:grid-cols-3 {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
            <Hero />
            
            {/* Our Story Section */}
            <section className="section-padding-lg bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    {/* Story Header */}
                    <div className="text-center story-header">
                        <h2 className="heading-1 mb-8 text-gradient font-bold">Our Story</h2>
                        <div className={`max-w-4xl mx-auto space-y-6 story-description`}>
                            <p className="body-large text-gray-700 leading-relaxed">
                                We Social Workers UK is a free, volunteer-led platform created by experienced UK-registered 
                                social workers to support international professionals aspiring to build a career in the UK social work sector.
                            </p>
                            <p className="body-large text-gray-700 leading-relaxed">
                                Founded by Ali and Mayel, who moved from India to the UK in 2023, our mission is to make your 
                                transition smoother—whether you&apos;re just starting out or navigating your way into UK practice. 
                                We&apos;ve been where you are, and we&apos;re here to help.
                            </p>
                        </div>
                    </div>

                    {/* Founders Section */}
                    <div className={`grid md:grid-cols-2 gap-12 max-w-5xl mx-auto story-founder-boxes`}>
                        {/* Mayel Hadi */}
                        <div className="bg-white rounded-2xl shadow-smooth p-8 hover-lift border border-gray-100">
                            <div className="text-center">
                                <div className="relative w-32 h-32 mx-auto mb-6 founder-image-mayel">
                                    <Image
                                        src="/mayel-hadi-profile.jpg"
                                        alt="Mayel Hadi - Co-Founder"
                                        fill
                                        className="rounded-full object-cover border-4 border-british-blue"
                                    />
                                </div>
                                <h3 className="heading-4 text-british-blue mb-2">Mayel Hadi</h3>
                                <p className="text-british-red font-semibold mb-4">Co-Founder & Senior Social Worker</p>
                                <p className="body-medium text-gray-600 leading-relaxed">
                                    Mayel brings extensive experience in UK social work practice, having successfully transitioned 
                                    from India to become a registered social worker in the UK. With a passion for mentoring and 
                                    supporting international professionals, Mayel provides invaluable guidance on registration 
                                    processes, professional development, and career progression in the UK social work sector.
                                </p>
                            </div>
                        </div>

                        {/* Ali Azam */}
                        <div className="bg-white rounded-2xl shadow-smooth p-8 hover-lift border border-gray-100">
                            <div className="text-center">
                                <div className="relative w-32 h-32 mx-auto mb-6 founder-image-ali">
                                    <Image
                                        src="/ali-azam-profile-new.jpg"
                                        alt="Ali Azam - Co-Founder"
                                        fill
                                        className="rounded-full object-cover border-4 border-british-red"
                                    />
                                </div>
                                <h3 className="heading-4 text-british-red mb-2">Ali Azam</h3>
                                <p className="text-british-blue font-semibold mb-4">Co-Founder & Senior Social Worker</p>
                                <p className="body-medium text-gray-600 leading-relaxed">
                                    Ali is a dedicated social work professional who has navigated the journey from India to the UK, 
                                    gaining valuable insights into the challenges and opportunities that international social workers face. 
                                    Ali specializes in helping professionals understand UK practice standards, cultural adaptation, 
                                    and building confidence in the UK social work environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Our Values Section */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    {/* Values Header */}
                    <div className="text-center mb-16">
                        <h2 className="heading-1 mb-4 text-gray-800 font-bold">Our Values</h2>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-16 max-w-7xl mx-auto">
                        {/* Compassionate Support */}
                        <div className="bg-white rounded-3xl shadow-lg p-12 text-center hover-lift border border-gray-100 transition-all duration-300 min-h-[320px] flex flex-col">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-rose-100 ring-1 ring-blue-200 flex items-center justify-center mx-auto mb-8 values-icon-compassionate">
                                <svg className="w-9 h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <div className="flex-grow flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Compassionate Support</h3>
                                <p className="body-medium text-gray-600 leading-relaxed">
                                    We understand the challenges of relocating and starting fresh in a new country.
                                </p>
                            </div>
                        </div>

                        {/* Clear Guidance */}
                        <div className="bg-white rounded-3xl shadow-lg p-12 text-center hover-lift border border-gray-100 transition-all duration-300 min-h-[320px] flex flex-col">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-rose-100 ring-1 ring-blue-200 flex items-center justify-center mx-auto mb-8 values-icon-guidance">
                                <svg className="w-9 h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex-grow flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Clear Guidance</h3>
                                <p className="body-medium text-gray-600 leading-relaxed">
                                    Step-by-step processes that eliminate confusion and uncertainty.
                                </p>
                            </div>
                        </div>

                        {/* Community Focus */}
                        <div className="bg-white rounded-3xl shadow-lg p-12 text-center hover-lift border border-gray-100 transition-all duration-300 min-h-[320px] flex flex-col">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-rose-100 ring-1 ring-blue-200 flex items-center justify-center mx-auto mb-8 values-icon-community">
                                <svg className="w-9 h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="flex-grow flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community Focus</h3>
                                <p className="body-medium text-gray-600 leading-relaxed">
                                    Building connections between international social workers worldwide.
                                </p>
                            </div>
                        </div>

                        {/* Global Perspective */}
                        <div className="bg-white rounded-3xl shadow-lg p-12 text-center hover-lift border border-gray-100 transition-all duration-300 min-h-[320px] flex flex-col">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-rose-100 ring-1 ring-blue-200 flex items-center justify-center mx-auto mb-8 values-icon-perspective">
                                <svg className="w-9 h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex-grow flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Global Perspective</h3>
                                <p className="body-medium text-gray-600 leading-relaxed">
                                    Celebrating diversity and bringing international expertise to the UK.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* What We Do / Don't Do Section */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-14 xl:gap-16 max-w-7xl mx-auto">
                        {/* What We Do */}
                        <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-none p-8 lg:p-10 shadow-xl border border-green-200/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                            <div className="flex items-center gap-4 list-heading">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 tracking-tight">What We Do</h3>
                            </div>
                            
                            <div className="flex flex-col list-items">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 leading-relaxed">SWE Registration Guidance</p>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 leading-relaxed">English Language Test Preparation</p>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 leading-relaxed">Job Search Support</p>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 leading-relaxed">Pre-employment Checks Guidance (DBS, references & compliance)</p>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 leading-relaxed">Professional Development</p>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 leading-relaxed">Networking Opportunities</p>
                                </div>
                            </div>
                        </div>

                        {/* What We Don't Do */}
                        <div className="bg-gradient-to-br from-red-50 via-rose-50 to-red-100 rounded-none p-8 lg:p-10 shadow-xl border border-red-200/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                            <div className="flex items-center gap-4 list-heading">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 tracking-tight">What We Don&apos;t Do</h3>
                            </div>
                            
                            <div className="flex flex-col list-items">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 leading-relaxed">Provide legal immigration advice</p>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 leading-relaxed">Guarantee job placements</p>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 leading-relaxed">Offer official visa services</p>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 leading-relaxed">Replace professional qualifications</p>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 leading-relaxed">Provide financial assistance</p>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 leading-relaxed">Act as recruitment agencies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Resources Section */}
            <section className="section-padding-lg bg-white/60 backdrop-blur-sm">
                <div className="container-custom">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span 
                            className="inline-block bg-british-red text-white rounded-full body-medium font-bold mb-6 shadow-smooth"
                            style={{ 
                                paddingLeft: `${BUBBLE_SIZE.horizontal * 0.25}rem`, 
                                paddingRight: `${BUBBLE_SIZE.horizontal * 0.25}rem`,
                                paddingTop: `${BUBBLE_SIZE.vertical * 0.25}rem`,
                                paddingBottom: `${BUBBLE_SIZE.vertical * 0.25}rem`
                            }}
                        >
                            Professional Growth & Learning
                        </span>
                        <h2 className="heading-2 mb-6 text-british-blue font-bold">
                            Expert Knowledge for
                            <span className="text-british-red block">Compassionate Care</span>
                        </h2>
                        <p className="body-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
                            Access our curated resources and insights to stay ahead in your professional development.
                        </p>
                    </div>
                    
                    <div className="overflow-hidden">
                        <BlogScroller blogs={blogs} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding-lg bg-white/50 backdrop-blur-sm">
                <div className="container-custom text-center">
                    {/* Desktop CTA Section */}
                    <div 
                        className="max-w-4xl mx-auto animate-fade-in-up transition-transform duration-300 hidden md:block"
                        style={{
                            transform: `translate(${DESKTOP_CONFIG.ctaSection.position.x}px, ${DESKTOP_CONFIG.ctaSection.position.y}px) scale(${DESKTOP_CONFIG.ctaSection.size.width / 100}, ${DESKTOP_CONFIG.ctaSection.size.height / 100})`
                        }}
                    >
                        <h2 className="heading-2 mb-6 text-british-blue font-bold">
                            Ready to Start Your UK Journey?
                        </h2>
                        <p className="body-xl mb-8 text-gray-700 leading-relaxed">
                            Join hundreds of successful social workers who have transformed their careers with our guidance. 
                            Let&apos;s build your path to success in the United Kingdom together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contactus" className="btn btn-primary btn-large">
                                Get Started Today
                            </Link>
                            <Link href="/toolkits" className="btn btn-outline border-2 border-british-blue text-british-blue hover:bg-british-blue hover:text-white btn-large">
                                Explore Toolkit
                            </Link>
                        </div>
                    </div>

                    {/* Mobile CTA Section */}
                    <div 
                        className="max-w-4xl mx-auto animate-fade-in-up transition-transform duration-300 block md:hidden"
                        style={{
                            transform: `translate(${MOBILE_CONFIG.ctaSection.position.x}px, ${MOBILE_CONFIG.ctaSection.position.y}px) scale(${MOBILE_CONFIG.ctaSection.size.width / 100}, ${MOBILE_CONFIG.ctaSection.size.height / 100})`
                        }}
                    >
                        <h2 className="heading-2 mb-6 text-british-blue font-bold">
                            Ready to Start Your UK Journey?
                        </h2>
                        <p className="body-xl mb-8 text-gray-700 leading-relaxed">
                            Join hundreds of successful social workers who have transformed their careers with our guidance. 
                            Let&apos;s build your path to success in the United Kingdom together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contactus" className="btn btn-primary btn-large">
                                Get Started Today
                            </Link>
                            <Link href="/toolkits" className="btn btn-outline border-2 border-british-blue text-british-blue hover:bg-british-blue hover:text-white btn-large">
                                Explore Toolkit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const apiUrl = getApiUrl('api/blogs');
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch blogs: ${response.status}`);
        }
        
        const blogs: Blog[] = await response.json();
        
        return {
            props: {
                blogs: blogs || [],
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return {
            props: {
                blogs: [],
            },
            revalidate: 60,
        };
    }
};
