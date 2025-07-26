// pages/index.tsx
import { GetStaticProps } from 'next';
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
    return (
        <div>
            <Hero />
            
            {/* Spacer */}
            <div className="h-40 bg-background"></div>
            
            {/* Professional Resources Section */}
            <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-caring-pattern opacity-40"></div>
                </div>
                
                <div className="container-custom relative z-10">
                    <div className="text-center animate-gentle-slide-up">
                        {/* Section Badge */}
                        <div className="inline-flex items-center gap-4 px-8 py-4 glass-trust rounded-full border border-tertiary/20 mb-8 shadow-peaceful">
                            <div className="w-3 h-3 bg-gradient-peaceful rounded-full"></div>
                            <span className="font-semibold text-primary text-lg font-body">Professional Growth & Learning</span>
                        </div>
                        
                        <h2 className="heading-2 text-primary mb-8 font-display">
                            <span className="emilys-candy-regular" style={{ color: '#1e3a8a' }}>Expert Knowledge for</span>
                            <span className="block text-gradient emilys-candy-regular">Compassionate Care</span>
                        </h2>
                        
                        <p className="body-large text-text-secondary max-w-2xl mx-auto leading-relaxed font-body mb-8">
                            
                        </p>
                    </div>
                    
                    <div className="mt-16 overflow-hidden">
                        <BlogScroller blogs={blogs} />
                    </div>
                </div>
            </section>

            {/* Spacer */}
            <div className="h-0 bg-surface-warm"></div>

            {/* Community Values Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-surface-warm">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-community-dots opacity-20"></div>
                </div>
                
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Community Illustration */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative mx-auto max-w-md lg:max-w-full">
                                {/* Main illustration */}
                                <div className="relative">
                                    <Image
                                        src="/Group Discussion Circle-Photoroom.png"
                                        alt="Group discussion representing collaboration and community support"
                                        width={400}
                                        height={350}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="text-center lg:text-left order-1 lg:order-2">
                            <div className="mb-12">
                                <h2 className="heading-2 mb-8 font-display">
                                    <span className="emilys-candy-regular" style={{ color: '#dc2626' }}>Why Choose </span>
                                    <span className="emilys-candy-regular" style={{ color: '#059669' }}>Our </span>
                                    <span className="emilys-candy-regular" style={{ color: '#7C3AED' }}>Community</span>
                                    <span className="emilys-candy-regular" style={{ color: '#7C3AED' }}>?</span>
                                </h2>
                                <p className="body-large text-text-secondary max-w-2xl lg:mx-0 mx-auto font-body">
                                    Join a vibrant community of dedicated professionals who share your passion for creating positive change and supporting those in need.
                                </p>
                            </div>
                            
                            <div className="grid gap-8 max-w-2xl lg:mx-0 mx-auto">
                                {[
                                    {
                                        icon: (
                                            <svg className="w-8 h-8 transition-all duration-300" fill="#dc2626" stroke="#dc2626" viewBox="0 0 24 24">
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
                                            <svg className="w-8 h-8 transition-all duration-300" fill="#059669" viewBox="0 0 24 24">
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
                                            <svg className="w-8 h-8 transition-all duration-300" fill="#7c3aed" stroke="#7c3aed" viewBox="0 0 24 24">
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
                                        className="flex items-start gap-6 p-6 glass-trust rounded-2xl border border-white/30 shadow-peaceful hover-caring hover-peaceful group animate-gentle-slide-up"
                                        style={{ animationDelay: feature.delay }}
                                    >
                                        <div className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-warm flex-shrink-0`}>
                                            <div className="text-white">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <h3 className="heading-4 text-primary mb-2 font-display">{feature.title}</h3>
                                            <p className="text-text-secondary leading-relaxed font-body text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Our Mission Section */}
            <section className="flex items-center justify-center bg-gradient-hero relative overflow-hidden -mt-300 py-70">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-caring-pattern"></div>
                </div>
                
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Content Section */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="max-w-2xl lg:mx-0 mx-auto">
                                <h2 className="heading-2 text-white mb-8 animate-gentle-slide-up font-display">
                                    <span className="emilys-candy-regular" style={{ color: '#059669' }}>Ready</span>{' '}
                                    <span className="emilys-candy-regular" style={{ color: '#000000' }}>to Make a</span>{' '}
                                    <span className="emilys-candy-regular" style={{ color: '#dc2626' }}>Greater</span>{' '}
                                    <span className="block emilys-candy-regular" style={{ color: '#1e3a8a' }}>Impact Together?</span>
                                </h2>
                                
                                <p className="body-xl text-white/90 mb-12 animate-gentle-slide-up leading-relaxed font-body" style={{ animationDelay: '0.2s' }}>
                                    Join a community of dedicated professionals committed to positive change, 
                                    personal growth, and building stronger, healthier communities.
                                </p>
                                
                                {/* Community Newsletter */}
                                <div className="glass-trust rounded-3xl p-10 border border-white/30 shadow-peaceful hover-caring">
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
                                            <button className="btn-2025 btn-primary-2025 hover-caring hover-peaceful px-8 py-4">
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

                        {/* Professional Progress Illustration */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative mx-auto max-w-md lg:max-w-full">
                                {/* Main illustration */}
                                <div className="relative">
                                    <Image
                                        src="/Stylish Woman Walking Illustration-Photoroom.png"
                                        alt="Stylish professional woman walking forward representing career progress and advancement"
                                        width={300}
                                        height={400}
                                        className="w-full h-auto object-contain"
                                    />
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
    // Mock blog data with detailed information - same as blogs page
    const mockBlogs: Blog[] = [
        {
            id: '1',
            title: 'Social Work England Registration: Complete Guide for 2024',
            author: 'Dr. Sarah Johnson',
            content: 'Navigating the Social Work England registration process can be complex for both domestic and international social workers. This comprehensive guide covers everything you need to know about the registration requirements, documentation needed, and step-by-step process to ensure your application is successful. We explore the new updates for 2024, including changes to CPD requirements and the assessment process for international applicants.',
            imageUrl: '/Business Meeting Illustration.png',
            createdAt: '2024-01-15T10:00:00Z'
        },
        {
            id: '2',
            title: 'Building Resilience in Social Work Practice',
            author: 'Mark Thompson',
            content: 'Social work can be emotionally demanding, making resilience a crucial skill for practitioners. This article explores evidence-based strategies for building personal and professional resilience, including mindfulness techniques, peer support systems, and organizational approaches to prevent burnout. Learn how to maintain your well-being while providing effective support to vulnerable populations.',
            imageUrl: '/Fashionable Young Woman Illustration.png',
            createdAt: '2024-01-12T14:30:00Z'
        },
        {
            id: '3',
            title: 'International Social Workers: UK Pathway Guide',
            author: 'Dr. Priya Patel',
            content: 'Are you an international social worker looking to practice in the UK? This detailed guide outlines the pathways available for qualified social workers from overseas, including the assessment process, required documentation, and tips for successful integration into the UK social work system. We also cover the latest policy changes and support available for international practitioners.',
            imageUrl: '/Unity in Activism.png',
            createdAt: '2024-01-10T09:15:00Z'
        },
        {
            id: '4',
            title: 'Mental Health First Aid for Social Workers',
            author: 'Lisa Chen',
            content: 'Mental health challenges are prevalent among the populations social workers serve. This article provides essential guidance on mental health first aid, recognizing signs of mental health crises, and appropriate intervention strategies. Learn about the latest approaches to supporting individuals experiencing mental health difficulties and when to refer to specialist services.',
            imageUrl: '/Meditative Pose by the Sea.png',
            createdAt: '2024-01-08T11:45:00Z'
        },
        {
            id: '5',
            title: 'Safeguarding Best Practices in Children\'s Services',
            author: 'James Wilson',
            content: 'Effective safeguarding is at the heart of children\'s social work. This comprehensive article reviews current best practices in safeguarding, including risk assessment tools, multi-agency working, and the latest research on child protection. We examine case studies and provide practical guidance for social workers at all levels of experience.',
            imageUrl: '/Joyful Family Outdoors Illustration.png',
            createdAt: '2024-01-05T16:20:00Z'
        },
        {
            id: '6',
            title: 'Professional Development: CPD Requirements Explained',
            author: 'Dr. Emma Roberts',
            content: 'Continuing Professional Development (CPD) is essential for maintaining your social work registration. This article breaks down the CPD requirements, provides examples of qualifying activities, and offers strategies for planning your professional development. Discover how to make the most of your CPD opportunities and advance your career.',
            imageUrl: '/Corporate Meeting Illustration.png',
            createdAt: '2024-01-03T13:10:00Z'
        }
    ];

    return {
        props: {
            blogs: mockBlogs,
        },
        revalidate: 60,
    };
};
