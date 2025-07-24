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
            
            {/* Latest Blog Section - Full Screen */}
            <section className="min-h-screen flex items-center bg-card py-20">
                <div className="container-wide w-full">
                    <div className="text-center space-y-8 mb-20">
                        <div className="inline-flex items-center px-6 py-3 bg-primary-light rounded-full border border-border">
                            <svg className="w-5 h-5 text-text-dark mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12 2C13.1 2 14 2.9 14 4V5H16C17.1 5 18 5.9 18 7V19C18 20.1 17.1 21 16 21H4C2.9 21 2 20.1 2 19V7C2 5.9 2.9 5 4 5H6V4C6 2.9 6.9 2 8 2H12ZM8 4V5H12V4H8ZM4 7V19H16V7H4ZM8 9H12V11H8V9ZM8 13H16V15H8V13Z" clipRule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-text-dark">Latest Insights</span>
                        </div>
                        <h2 className="heading-primary text-4xl md:text-5xl lg:text-6xl text-text-dark">
                            From Our Expert Blog
                        </h2>
                        <p className="text-body text-text-medium max-w-3xl mx-auto">
                            Stay informed with the latest social work insights, professional guidance, and industry updates from our expert contributors.
                        </p>
                    </div>
                    <div className="overflow-hidden">
                        <BlogScroller blogs={blogs} />
                    </div>
                </div>
            </section>

            {/* Call to Action Section - Full Screen */}
            <section className="min-h-screen flex items-center bg-primary py-20">
                <div className="relative container-wide w-full text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="heading-primary text-4xl md:text-5xl lg:text-6xl text-text-dark">
                            Ready to Advance Your Social Work Career?
                        </h2>
                        <p className="text-body text-text-dark max-w-2xl mx-auto">
                            Join thousands of social workers who trust us for professional development, job opportunities, and expert resources.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
                            <Link href="/blogs" className="btn-secondary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Explore Articles
                            </Link>
                            <Link href="/jobs" className="bg-card text-text-dark border-2 border-text-dark px-8 py-4 rounded-lg font-medium hover:bg-text-dark hover:text-card transition-all duration-200 inline-flex items-center gap-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                </svg>
                                Browse Jobs
                            </Link>
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
            title: 'Social Work England Registration: Complete Guide for 2024'
        },
        {
            id: '2',
            title: 'Building Resilience in Social Work Practice'
        },
        {
            id: '3',
            title: 'International Social Workers: UK Pathway Guide'
        },
        {
            id: '4',
            title: 'Mental Health First Aid for Social Workers'
        },
        {
            id: '5',
            title: 'Safeguarding Best Practices in Children\'s Services'
        },
        {
            id: '6',
            title: 'Professional Development: CPD Requirements Explained'
        },
        {
            id: '7',
            title: 'Working with Vulnerable Adults: Key Considerations'
        },
        {
            id: '8',
            title: 'Social Work Leadership in Times of Change'
        }
    ];

    return {
        props: {
            blogs: mockBlogs,
        },
        revalidate: 60,
    };
};
