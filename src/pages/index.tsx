// pages/index.tsx
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Hero } from '../../components/Hero';
import { BlogScroller } from '../../components/BlogScroller';

type Blog = { id: string; title: string; };
type HomeProps = { blogs: Blog[]; };

export default function Home({ blogs }: HomeProps) {
    return (
        <div>
            <Hero />
            
            {/* Professional Resources Section */}
            <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
                {/* Caring Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-caring-pattern opacity-40"></div>
                    <div className="absolute top-32 right-32 w-80 h-80 bg-gradient-peaceful rounded-full opacity-8 animate-caring-float blur-3xl"></div>
                    <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-warm rounded-full opacity-6 animate-caring-float blur-3xl" style={{ animationDelay: '3s' }}></div>
                </div>
                
                <div className="container-custom relative z-10 text-center">
                    <div className="text-center mb-20 animate-gentle-slide-up">
                        {/* Section Badge */}
                        <div className="inline-flex items-center gap-4 px-8 py-4 glass-trust rounded-full border border-tertiary/20 mb-8 shadow-peaceful">
                            <div className="w-3 h-3 bg-gradient-peaceful rounded-full animate-peaceful-glow"></div>
                            <span className="font-semibold text-primary text-lg font-body">Professional Growth & Learning</span>
                        </div>
                        
                        <h2 className="heading-2 text-primary mb-8 font-display">
                            <span className="emilys-candy-regular" style={{ color: '#1e3a8a' }}>Expert Knowledge for</span>
                            <span className="block text-gradient emilys-candy-regular">Compassionate Care</span>
                        </h2>
                        
                        <p className="body-large text-text-secondary max-w-4xl mx-auto leading-relaxed font-body">
                            
                        </p>
                    </div>
                    
                    <div className="overflow-hidden animate-soft-scale">
                        <BlogScroller blogs={blogs} />
                    </div>
                </div>
            </section>

            {/* Community Values Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-surface-warm">
                {/* Peaceful Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-community-dots opacity-20"></div>
                    <div className="absolute top-40 left-10 w-64 h-64 bg-gradient-secondary rounded-full opacity-8 animate-peaceful-glow blur-3xl"></div>
                    <div className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-accent rounded-full opacity-6 animate-peaceful-glow blur-3xl" style={{ animationDelay: '4s' }}></div>
                </div>
                
                <div className="container-custom relative z-10 text-center">
                    <div className="mb-20 animate-gentle-slide-up">
                        <h2 className="heading-2 mb-8 font-display">
                            <span className="emilys-candy-regular" style={{ color: '#dc2626' }}>Why Choose </span>
                            <span className="emilys-candy-regular" style={{ color: '#059669' }}>Our </span>
                            <span className="emilys-candy-regular" style={{ color: '#7C3AED' }}>Community</span>
                            <span className="emilys-candy-regular" style={{ color: '#7C3AED' }}>?</span>
                        </h2>
                        <p className="body-large text-text-secondary max-w-3xl mx-auto font-body">
                           
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
                        {[
                            {
                                icon: (
                                    <svg className="w-16 h-16 transition-all duration-300" fill="#dc2626" stroke="#dc2626" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                ),
                                title: "Compassionate Expertise",
                                description: "Learn from seasoned professionals who understand the heart of social work and the challenges you face every day.",
                                gradient: "bg-gradient-warm",
                                delay: "0s"
                            },
                            {
                                icon: (
                                    <svg className="w-16 h-16 transition-all duration-300" fill="#059669" viewBox="0 0 24 24">
                                        <path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 15H4V8h16v11z"/>
                                        <path d="M9 10h6v2H9z"/>
                                    </svg>
                                ),
                                title: "Meaningful Opportunities",
                                description: "Find roles that align with your values and passion for making a difference in people's lives.",
                                gradient: "bg-gradient-secondary",
                                delay: "0.2s"
                            },
                            {
                                icon: (
                                    <svg className="w-16 h-16 transition-all duration-300" fill="#7c3aed" stroke="#7c3aed" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                                title: "Supportive Network",
                                description: "Connect with caring professionals who share your commitment to healing and community building.",
                                gradient: "bg-gradient-peaceful",
                                delay: "0.4s"
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="card-modern hover-caring hover-peaceful group animate-gentle-slide-up"
                                style={{ animationDelay: feature.delay }}
                            >
                                <div className={`w-20 h-20 ${feature.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-warm mx-auto`}>
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="heading-3 text-primary mb-4 font-display text-center">{feature.title}</h3>
                                <p className="text-text-secondary leading-relaxed font-body text-center">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Our Mission Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-hero animate-warm-pulse relative overflow-hidden">
                {/* Community Background */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-caring-pattern"></div>
                </div>
                
                {/* Floating Care Elements */}
                <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-4 h-4 bg-gradient-peaceful rounded-full animate-caring-float"
                            style={{
                                left: `${15 + i * 15}%`,
                                top: `${25 + (i % 3) * 25}%`,
                                animationDelay: `${i * 1.2}s`
                            }}
                        ></div>
                    ))}
                </div>
                
                {/* Gentle Geometric Elements */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-peaceful rounded-full opacity-15 animate-peaceful-glow blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-warm rounded-full opacity-12 animate-peaceful-glow blur-3xl" style={{ animationDelay: '2s' }}></div>
                
                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="heading-2 text-white mb-8 animate-gentle-slide-up font-display">
                            Ready to Make a Greater 
                            <span className="block text-gradient-warm emilys-candy-regular">Impact Together?</span>
                        </h2>
                        
                        <p className="body-xl text-white/90 mb-12 animate-gentle-slide-up leading-relaxed font-body" style={{ animationDelay: '0.2s' }}>
                            Join a community of dedicated professionals committed to positive change, 
                            personal growth, and building stronger, healthier communities.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16 animate-gentle-slide-up" style={{ animationDelay: '0.4s' }}>
                            <Link href="/blogs" className="btn-2025 btn-warm-2025 hover-caring hover-peaceful group">
                                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Explore Resources
                            </Link>
                            
                            <Link href="/jobs" className="btn-2025 btn-peaceful-2025 hover-caring group">
                                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                </svg>
                                Find Opportunities
                            </Link>
                        </div>

                        {/* Community Newsletter */}
                        <div className="glass-trust rounded-3xl p-10 border border-white/30 shadow-peaceful animate-gentle-slide-up hover-caring" style={{ animationDelay: '0.6s' }}>
                            <div className="max-w-2xl mx-auto">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-warm rounded-3xl flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="heading-3 text-primary font-display">Stay Connected</h3>
                                </div>
                                <p className="text-text-secondary mb-8 leading-relaxed font-body">Join our caring community newsletter for inspiring stories, professional insights, and opportunities to make a difference.</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="form-modern flex-1"
                                    />
                                    <button className="btn-2025 btn-primary-2025 hover-caring hover-peaceful">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        Join Community
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    // Mock blog data for demonstration
    const mockBlogs = [
        {
            id: '1',
            title: 'Building Resilient Communities: A Social Worker\'s Guide to Lasting Change'
        },
        {
            id: '2',
            title: 'Compassionate Care Practices: Supporting Vulnerable Families with Dignity'
        },
        {
            id: '3',
            title: 'Professional Self-Care: Maintaining Your Well-being While Helping Others'
        },
        {
            id: '4',
            title: 'Community Partnerships: Collaborating for Greater Social Impact'
        },
        {
            id: '5',
            title: 'Trauma-Informed Approaches: Creating Safe Spaces for Healing'
        },
        {
            id: '6',
            title: 'Advocacy in Action: Empowering Clients and Communities'
        },
        {
            id: '7',
            title: 'Cultural Competency: Embracing Diversity in Social Work Practice'
        },
        {
            id: '8',
            title: 'Innovation in Social Services: Technology for Human Connection'
        }
    ];

    return {
        props: {
            blogs: mockBlogs,
        },
        revalidate: 60,
    };
};
