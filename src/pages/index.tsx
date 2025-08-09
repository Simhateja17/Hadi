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
        learnMoreButton: { x: 165, y: 0 },
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
        aboutUsBubble: { x: 150, y: 0 },
        learnMoreButton: { x: 120, y: 0 },
        image: { 
            size: { width: 400, height: 400 },
            position: { x: 20, y: 0 }
        },
        ctaSection: {
            position: { x: 0, y: 0 },
            size: { width: 100, height: 100 } // percentage
        },
        servicesSection: {
            headingToBoxesGap: 16 // Gap between heading and service boxes in rem units (same as desktop by default)
        }
    };

    // Icon Controls (affects all icon boxes in the features section)
    const ICON_CONFIG = {
        size: { width: 16, height: 16 },
        position: { x: 30, y: 0 }
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

    // ===== END OF DESIGN CONTROLS =====

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-red-50">
            <style jsx global>{`
                .services-icon-desktop {
                    transform: translate(${SERVICES_ICON_CONFIG.mobile.position.x}px, ${SERVICES_ICON_CONFIG.mobile.position.y}px);
                }
                .about-us-bubble {
                    padding-left: ${BUBBLE_SIZE.horizontal * 0.25}rem;
                    padding-right: ${BUBBLE_SIZE.horizontal * 0.25}rem;
                    padding-top: ${BUBBLE_SIZE.vertical * 0.25}rem;
                    padding-bottom: ${BUBBLE_SIZE.vertical * 0.25}rem;
                    transform: translate(${MOBILE_CONFIG.aboutUsBubble.x}px, ${MOBILE_CONFIG.aboutUsBubble.y}px);
                }
                .learn-more-button {
                    transform: translate(${MOBILE_CONFIG.learnMoreButton.x}px, ${MOBILE_CONFIG.learnMoreButton.y}px);
                }
                .services-grid {
                    margin-top: ${MOBILE_CONFIG.servicesSection.headingToBoxesGap * 0.25}rem;
                }
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
            `}</style>
            <Hero />
            
            {/* About Section */}
            <section className="section-padding-lg bg-white/80 backdrop-blur-sm">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="animate-fade-in-up">
                            <div className="mb-6">
                                {/* Single About Us Bubble with Responsive Positioning */}
                                <span 
                                    className="inline-block bg-british-red text-white rounded-full body-medium font-bold shadow-smooth transition-transform duration-300 about-us-bubble"
                                >
                                    About Us
                                </span>
                            </div>
                            
                            <h2 className="heading-2 mb-6 text-british-blue text-center font-bold">
                                Empowering Social Workers to 
                                <span className="text-gradient block">Thrive in the UK</span>
                            </h2>
                            
                            <p className="body-large mb-8 text-gray-700 leading-relaxed">
                                We Social Workers UK is run by a group of experienced social 
                                workers with strong roots in both India and the UK. With years of 
                                frontline and management experience, we guide international 
                                social workers through every step of building a career in the UK.
                            </p>
                            
                            <p className="body-large mb-8 text-gray-700 leading-relaxed">
                                From degree recognition, registration, and visa requirements to 
                                job readiness, training, CV and interview prep, we offer expert 
                                support tailored to your journey. Our mission is simple: to help 
                                you succeed as a confident, competent social worker in the UK.
                            </p>
                            
                            <div className="grid grid-cols-3 gap-8 mb-8">
                                <div className="text-center">
                                    <div 
                                        className="w-16 h-16 bg-british-blue rounded-lg flex items-center justify-center mx-auto mb-3 transition-transform duration-300"
                                        style={{
                                            transform: `translate(${ICON_CONFIG.position.x}px, ${ICON_CONFIG.position.y}px)`
                                        }}
                                    >
                                        <svg 
                                            className="text-white" 
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                            style={{
                                                width: `${ICON_CONFIG.size.width * 0.25}rem`,
                                                height: `${ICON_CONFIG.size.height * 0.25}rem`
                                            }}
                                        >
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="heading-5 mb-2 text-british-blue">Global Experience</h3>
                                    <p className="body-small text-gray-600">International perspective</p>
                                </div>
                                
                                <div className="text-center">
                                    <div 
                                        className="w-16 h-16 bg-british-red rounded-lg flex items-center justify-center mx-auto mb-3 transition-transform duration-300"
                                        style={{
                                            transform: `translate(${ICON_CONFIG.position.x}px, ${ICON_CONFIG.position.y}px)`
                                        }}
                                    >
                                        <svg 
                                            className="text-white" 
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                            style={{
                                                width: `${ICON_CONFIG.size.width * 0.25}rem`,
                                                height: `${ICON_CONFIG.size.height * 0.25}rem`
                                            }}
                                        >
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                        </svg>
                                    </div>
                                    <h3 className="heading-5 mb-2 text-british-red">Expert Team</h3>
                                    <p className="body-small text-gray-600">Experienced professionals</p>
                                </div>
                                
                                <div className="text-center">
                                    <div 
                                        className="w-16 h-16 bg-white border-2 border-british-blue rounded-lg flex items-center justify-center mx-auto mb-3 transition-transform duration-300"
                                        style={{
                                            transform: `translate(${ICON_CONFIG.position.x}px, ${ICON_CONFIG.position.y}px)`
                                        }}
                                    >
                                        <svg 
                                            className="text-british-blue" 
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                            style={{
                                                width: `${ICON_CONFIG.size.width * 0.25}rem`,
                                                height: `${ICON_CONFIG.size.height * 0.25}rem`
                                            }}
                                        >
                                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="heading-5 mb-2 text-british-blue">Comprehensive Support</h3>
                                    <p className="body-small text-gray-600">End-to-end guidance</p>
                                </div>
                            </div>
                            
                            {/* Single Learn More Button with Responsive Positioning */}
                            <Link 
                                href="/about" 
                                className="btn btn-primary transition-transform duration-300 learn-more-button"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                        
                        {/* Replace Union Jack Design with Logo */}
                        <div className="animate-scale-in">
                            <div className="relative">
                                <div className="w-full max-w-md mx-auto aspect-square">
                                    {/* Image container without boundary - responsive positioning and sizing */}
                                    <div 
                                        className="relative w-full h-full flex items-center justify-center transition-transform duration-300"
                                        style={{
                                            transform: `translate(${DESKTOP_CONFIG.image.position.x}px, ${DESKTOP_CONFIG.image.position.y}px)`
                                        }}
                                    >
                                        {/* Desktop Image - hidden on mobile */}
                                        <Image 
                                            src="/gemini-generated-image.png" 
                                            alt="We Social Workers UK" 
                                            width={DESKTOP_CONFIG.image.size.width} 
                                            height={DESKTOP_CONFIG.image.size.height}
                                            className="rounded-xl object-contain hidden md:block"
                                        />
                                        
                                        {/* Mobile Image - hidden on desktop */}
                                        <div 
                                            className="block md:hidden transition-transform duration-300"
                                            style={{
                                                transform: `translate(${MOBILE_CONFIG.image.position.x}px, ${MOBILE_CONFIG.image.position.y}px)`
                                            }}
                                        >
                                            <Image 
                                                src="/gemini-generated-image.png" 
                                                alt="We Social Workers UK" 
                                                width={MOBILE_CONFIG.image.size.width} 
                                                height={MOBILE_CONFIG.image.size.height}
                                                className="rounded-xl object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding-lg bg-white/70 backdrop-blur-sm">
                <div className="container-custom">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span 
                            className="inline-block bg-british-blue text-white rounded-full body-medium font-bold mb-6 shadow-smooth"
                            style={{ 
                                paddingLeft: `${BUBBLE_SIZE.horizontal * 0.25}rem`, 
                                paddingRight: `${BUBBLE_SIZE.horizontal * 0.25}rem`,
                                paddingTop: `${BUBBLE_SIZE.vertical * 0.25}rem`,
                                paddingBottom: `${BUBBLE_SIZE.vertical * 0.25}rem`
                            }}
                        >
                            Our Services Include
                        </span>
                        <h2 className="heading-2 mb-6 text-british-blue font-bold">
                            Comprehensive Support for Your 
                            <span className="text-british-red block">Professional Journey</span>
                        </h2>
                        <p className="body-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
                            
                        </p>
                    </div>
                    
                    <div 
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid"
                    >
                        {[
                            {
                                title: "Degree Recognition & Validation",
                                description: "Expert guidance through UK qualification recognition processes",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                                    </svg>
                                ),
                                color: "blue"
                            },

                            {
                                title: "Professional CV & Interview Coaching",
                                description: "Stand out with professionally crafted applications",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                ),
                                color: "white"
                            },
                            {
                                title: "Social Work England Registration",
                                description: "Seamless registration with regulatory bodies",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                ),
                                color: "blue"
                            },
                            {
                                title: "Job Readiness Training",
                                description: "Comprehensive preparation for UK workplace culture",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                    </svg>
                                ),
                                color: "red"
                            },
                            {
                                title: "Ongoing Mentorship & Support",
                                description: "Continuous guidance throughout your career journey",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                    </svg>
                                ),
                                color: "white"
                            },
                            {
                                title: "UK Workplace Culture Training",
                                description: "Learn UK professional practices and workplace expectations",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                                    </svg>
                                ),
                                color: "blue"
                            }
                        ].map((service, index) => {
                            const colorClasses: Record<string, string> = {
                                blue: "bg-british-blue text-white",
                                red: "bg-british-red text-white",
                                white: "bg-white text-british-blue border-2 border-british-blue"
                            };
                            
                            return (
                                <div key={index} className="card card-elevated hover-lift animate-fade-in-up bg-white/90 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="p-8 text-center">
                                        <div 
                                            className={`w-16 h-16 ${colorClasses[service.color]} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-smooth transition-transform duration-300 services-icon-desktop`}
                                        >
                                            {service.icon}
                                        </div>
                                        <h3 className="heading-5 mb-4 text-british-blue">{service.title}</h3>
                                        <p className="body-medium text-gray-700 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
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
                            <Link href="/contact" className="btn btn-primary btn-large">
                                Get Started Today
                            </Link>
                            <Link href="/toolkit" className="btn btn-outline border-2 border-british-blue text-british-blue hover:bg-british-blue hover:text-white btn-large">
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
                            <Link href="/contact" className="btn btn-primary btn-large">
                                Get Started Today
                            </Link>
                            <Link href="/toolkit" className="btn btn-outline border-2 border-british-blue text-british-blue hover:bg-british-blue hover:text-white btn-large">
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
