// components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center">
            <div className="relative container-wide py-20">
                <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
                    {/* Content Side */}
                    <div className="space-y-12">
                        {/* Badge */}
                        <div className="inline-flex items-center px-6 py-3 bg-primary-light rounded-full border border-border">
                            <svg className="w-5 h-5 text-text-dark mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-text-dark">Trusted by 10,000+ Social Workers</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-8">
                            <h1 className="heading-primary text-5xl md:text-6xl lg:text-7xl text-text-dark">
                                WE SOCIAL 
                                <span className="block">WORKERS UK</span>
                            </h1>
                            <p className="text-body text-text-medium max-w-2xl leading-relaxed">
                                Your comprehensive community for professional growth, career opportunities, and essential resources in UK social work.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 pt-8">
                            <Link href="/blogs" className="btn-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Explore Blog
                            </Link>
                            <Link href="/jobs" className="btn-outline">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                </svg>
                                Find Jobs
                            </Link>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Main Logo */}
                        <div className="relative">
                            <div className="relative bg-card p-12 rounded-2xl card-shadow-lg border border-border">
                                <Image 
                                    src="/logo.png" 
                                    alt="We Social Workers UK Logo" 
                                    width={400} 
                                    height={400}
                                    className="w-full h-auto max-w-lg"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 pt-12 border-t border-border">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-2">
                            <div className="text-5xl font-semibold text-text-dark">500+</div>
                            <div className="text-lg text-text-muted font-medium">Active Members</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-semibold text-text-dark">150+</div>
                            <div className="text-lg text-text-muted font-medium">Job Opportunities</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-semibold text-text-dark">50+</div>
                            <div className="text-lg text-text-muted font-medium">Expert Articles</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
