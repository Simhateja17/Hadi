// src/pages/blogs/index.tsx
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { BlogCard } from '../../components/BlogCard';

type Blog = {
    id: string;
    title: string;
    author: string;
    content: string;
    imageUrl?: string;
    createdAt: string;
};

type BlogListPageProps = {
    blogs: Blog[];
};

export default function BlogListPage({ blogs }: BlogListPageProps) {
    // Ensure blogs is always an array
    const safeBlogs = Array.isArray(blogs) ? blogs : [];
    
    return (
        <div>
            {/* Header Section - Full Screen */}
            <section className="min-h-screen flex items-center bg-gradient-hero py-20 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-caring-pattern opacity-40"></div>
                    <div className="absolute top-32 right-32 w-80 h-80 bg-gradient-peaceful rounded-full opacity-8 animate-caring-float blur-3xl"></div>
                    <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-warm rounded-full opacity-6 animate-caring-float blur-3xl" style={{ animationDelay: '3s' }}></div>
                </div>

                <div className="relative container-wide w-full z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content Section */}
                        <div className="text-center lg:text-left space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center px-8 py-4 glass-trust rounded-full border border-white/30 shadow-peaceful">
                                <svg className="w-6 h-6 text-primary mr-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12 2C13.1 2 14 2.9 14 4V5H16C17.1 5 18 5.9 18 7V19C18 20.1 17.1 21 16 21H4C2.9 21 2 20.1 2 19V7C2 5.9 2.9 5 4 5H6V4C6 2.9 6.9 2 8 2H12ZM8 4V5H12V4H8ZM4 7V19H16V7H4ZM8 9H12V11H8V9ZM8 13H16V15H8V13Z" clipRule="evenodd" />
                                </svg>
                                <span className="text-lg font-semibold text-primary font-body lexend-semibold">Professional Insights</span>
                            </div>

                            <h1 className="heading-primary text-4xl md:text-5xl lg:text-6xl text-black font-display">
                                <span className="autour-one-regular">Expert Knowledge for</span>
                                <span className="block text-gradient-warm autour-one-regular">Modern Practice</span>
                            </h1>
                            <p className="text-body text-black/90 max-w-2xl lg:mx-0 mx-auto leading-relaxed font-body lexend-regular">
                                Expert articles, professional guidance, and insights from the UK social work community. Stay informed with the latest trends, best practices, and technology-enhanced approaches to social work.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                                <div className="text-center glass-trust rounded-2xl p-6 border border-white/20">
                                    <div className="text-3xl font-semibold text-black mb-2 autour-one-regular">{safeBlogs.length}+</div>
                                    <div className="text-black/80 lexend-regular">Expert Articles</div>
                                </div>
                                <div className="text-center glass-trust rounded-2xl p-6 border border-white/20">
                                    <div className="text-3xl font-semibold text-black mb-2 autour-one-regular">25+</div>
                                    <div className="text-black/80 lexend-regular">Professional Authors</div>
                                </div>
                                <div className="text-center glass-trust rounded-2xl p-6 border border-white/20">
                                    <div className="text-3xl font-semibold text-black mb-2 autour-one-regular">5k+</div>
                                    <div className="text-black/80 lexend-regular">Monthly Readers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid Section - Scrollable Full Screen */}
            <section className="min-h-screen py-20">
                <div className="container-wide h-full">
                    {safeBlogs.length > 0 ? (
                        <div className="grid grid-cols-3 gap-8 h-full overflow-y-auto">
                            {safeBlogs.map((blog) => (
                                <div key={blog.id}>
                                    <BlogCard blog={blog} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 flex items-center justify-center h-full">
                            <div className="max-w-md mx-auto space-y-8">
                                <div className="w-24 h-24 mx-auto bg-primary-light rounded-2xl flex items-center justify-center">
                                    <svg className="w-12 h-12 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="heading-secondary text-3xl text-text-dark autour-one-regular">No Blog Posts Yet</h3>
                                <p className="text-body text-text-medium lexend-regular">
                                    We&apos;re working hard to bring you valuable content. Check back soon for expert insights and professional guidance.
                                </p>
                                <Link href="/" className="btn-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section-spacing bg-primary-light">
                <div className="container-wide">
                    <div className="max-w-5xl mx-auto bg-card rounded-3xl p-12 md:p-16 card-shadow-lg border border-border">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="heading-secondary text-3xl md:text-4xl text-text-dark autour-one-regular">
                                    Never Miss an Update
                                </h3>
                                <p className="text-body text-text-medium lexend-regular">
                                    Subscribe to our newsletter for the latest social work insights, job opportunities, and professional development resources.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <form className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="form-input"
                                    />
                                    <button type="submit" className="btn-primary w-full justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Subscribe Now
                                    </button>
                                </form>
                                <p className="text-sm text-text-muted">
                                    By subscribing, you agree to our privacy policy and terms of service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    // Mock blog data with thumbnails
    const mockBlogs: Blog[] = [
        {
            id: '1',
            title: 'Social Work England Registration: Complete Guide for 2024',
            author: 'Dr. Sarah Johnson',
            content: 'Navigating the Social Work England registration process can be complex for both domestic and international social workers. This comprehensive guide covers everything you need to know about the registration requirements, documentation needed, and step-by-step process to ensure your application is successful. We explore the new updates for 2024, including changes to CPD requirements and the assessment process for international applicants.',
            imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            createdAt: '2024-01-15T10:00:00Z'
        },
        {
            id: '2',
            title: 'Building Resilience in Social Work Practice',
            author: 'Mark Thompson',
            content: 'Social work can be emotionally demanding, making resilience a crucial skill for practitioners. This article explores evidence-based strategies for building personal and professional resilience, including mindfulness techniques, peer support systems, and organizational approaches to prevent burnout. Learn how to maintain your well-being while providing effective support to vulnerable populations.',
            imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            createdAt: '2024-01-12T14:30:00Z'
        },
        {
            id: '3',
            title: 'International Social Workers: UK Pathway Guide',
            author: 'Dr. Priya Patel',
            content: 'Are you an international social worker looking to practice in the UK? This detailed guide outlines the pathways available for qualified social workers from overseas, including the assessment process, required documentation, and tips for successful integration into the UK social work system. We also cover the latest policy changes and support available for international practitioners.',
            imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            createdAt: '2024-01-10T09:15:00Z'
        },
        {
            id: '4',
            title: 'Mental Health First Aid for Social Workers',
            author: 'Lisa Chen',
            content: 'Mental health challenges are prevalent among the populations social workers serve. This article provides essential guidance on mental health first aid, recognizing signs of mental health crises, and appropriate intervention strategies. Learn about the latest approaches to supporting individuals experiencing mental health difficulties and when to refer to specialist services.',
            imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            createdAt: '2024-01-08T11:45:00Z'
        },
        {
            id: '5',
            title: 'Safeguarding Best Practices in Children\'s Services',
            author: 'James Wilson',
            content: 'Effective safeguarding is at the heart of children\'s social work. This comprehensive article reviews current best practices in safeguarding, including risk assessment tools, multi-agency working, and the latest research on child protection. We examine case studies and provide practical guidance for social workers at all levels of experience.',
            imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            createdAt: '2024-01-05T16:20:00Z'
        },
        {
            id: '6',
            title: 'Professional Development: CPD Requirements Explained',
            author: 'Dr. Emma Roberts',
            content: 'Continuing Professional Development (CPD) is essential for maintaining your social work registration. This article breaks down the CPD requirements, provides examples of qualifying activities, and offers strategies for planning your professional development. Discover how to make the most of your CPD opportunities and advance your career.',
            imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            createdAt: '2024-01-03T13:10:00Z'
        },
        {
            id: '7',
            title: 'Working with Vulnerable Adults: Key Considerations',
            author: 'Michael Brown',
            content: 'Adult social work presents unique challenges and rewards. This article explores best practices for working with vulnerable adults, including person-centered approaches, capacity assessments, and safeguarding procedures. Learn about the legal framework, ethical considerations, and effective intervention strategies for supporting adults at risk.',
            imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            createdAt: '2024-01-01T08:30:00Z'
        },
        {
            id: '8',
            title: 'Social Work Leadership in Times of Change',
            author: 'Dr. Rachel Green',
            content: 'Leadership in social work requires adaptability and vision, especially during periods of change and uncertainty. This article examines the qualities of effective social work leaders, strategies for leading teams through transitions, and the importance of advocacy in leadership roles. Explore how to develop your leadership skills and make a positive impact on your organization and the people you serve.',
            imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            createdAt: '2023-12-28T12:00:00Z'
        }
    ];

    return {
        props: {
            blogs: mockBlogs,
        },
        revalidate: 60,
    };
};
