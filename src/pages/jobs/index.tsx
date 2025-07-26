// src/pages/jobs/index.tsx
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
    applyUrl: string;
};
type JobsPageProps = { jobs: Job[] };

export default function JobsPage({ jobs }: JobsPageProps) {
    return (
        <div>
            {/* Header Section - Full Screen */}
            <section className="min-h-screen flex items-center py-20 bg-gradient-hero relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-caring-pattern opacity-40"></div>
                    <div className="absolute top-32 right-32 w-80 h-80 bg-gradient-peaceful rounded-full opacity-8 animate-caring-float blur-3xl"></div>
                    <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-warm rounded-full opacity-6 animate-caring-float blur-3xl" style={{ animationDelay: '3s' }}></div>
                </div>

                <div className="container-wide w-full relative z-10">
                    <div className="flex justify-center items-center">
                        {/* Content Section */}
                        <div className="text-center space-y-8 max-w-4xl">
                            {/* Badge */}
                            <div className="inline-flex items-center px-8 py-4 glass-trust rounded-full border border-white/30 mb-8 shadow-peaceful">
                                <svg className="w-6 h-6 text-primary mr-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                                <span className="text-lg font-semibold text-primary font-body">Career Opportunities</span>
                            </div>

                            <h1 className="heading-primary text-4xl md:text-5xl lg:text-6xl text-black font-display">
                                <span className="emilys-candy-regular">Find Your Perfect</span>
                                <span className="block text-gradient-warm emilys-candy-regular">Social Work Role</span>
                            </h1>
                            <p className="text-body text-black max-w-2xl mx-auto leading-relaxed font-body">
                                Discover exciting career opportunities in social work across the UK. Join leading organizations making a difference in communities while advancing your professional journey.
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
                                <div className="text-center glass-trust rounded-2xl p-6 border border-white/20">
                                    <div className="text-3xl font-bold text-black mb-2">500+</div>
                                    <div className="text-black/80 text-sm">Active Jobs</div>
                                </div>
                                <div className="text-center glass-trust rounded-2xl p-6 border border-white/20">
                                    <div className="text-3xl font-bold text-black mb-2">150+</div>
                                    <div className="text-black/80 text-sm">Employers</div>
                                </div>
                                <div className="text-center glass-trust rounded-2xl p-6 border border-white/20 md:col-span-1 col-span-2">
                                    <div className="text-3xl font-bold text-black mb-2">95%</div>
                                    <div className="text-black/80 text-sm">Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs List Section */}
            <section className="min-h-screen py-20 bg-background relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-community-dots opacity-10"></div>
                </div>

                <div className="container-wide relative z-10">
                    {/* Jobs List - Scrollable */}
                    <div className="max-w-4xl mx-auto">
                        {jobs.length > 0 ? (
                            <div className="space-y-6 scrollable-content max-h-[60vh]">
                                {jobs.map((job) => (
                                    <div key={job.id} className="bg-card p-8 rounded-lg card-shadow hover-lift border border-border">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h2 className="text-2xl font-bold text-text-dark mb-2 font-display">{job.title}</h2>
                                                <p className="text-text-muted font-semibold mb-4 font-body">{job.company} - {job.location}</p>
                                            </div>
                                            <div className="w-12 h-12 bg-primary-light rounded-2xl flex items-center justify-center ml-6">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-text-medium mb-6 leading-relaxed font-body">{job.description}</p>
                                        <a
                                            href={job.applyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary group"
                                        >
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                            Apply Now
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <div className="max-w-md mx-auto space-y-8">
                                    <h3 className="heading-secondary text-3xl text-text-dark font-display">New Opportunities Coming Soon</h3>
                                    <p className="text-body text-text-medium font-body">
                                        We&apos;re currently updating our job listings with exciting new opportunities. Please check back soon or subscribe to our newsletter for updates.
                                    </p>
                                    
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button className="btn-primary">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5m10 0v-5a5 5 0 00-10 0v5" />
                                            </svg>
                                            Get Job Alerts
                                        </button>
                                        <Link href="/" className="btn-secondary">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            Back to Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const res = await fetch('http://localhost:3001/api/jobs');
        const jobs: Job[] = await res.json();
        return { props: { jobs }, revalidate: 300 }; // Revalidate every 5 minutes
    } catch {
        return { props: { jobs: [] } };
    }
};
