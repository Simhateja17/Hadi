// src/pages/jobs/index.tsx
import { GetStaticProps } from 'next';

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
            <section className="min-h-screen flex items-center py-20">
                <div className="container-wide w-full">
                    <div className="text-center space-y-8 mb-16">
                        <h1 className="heading-primary text-4xl md:text-5xl lg:text-6xl text-text-dark">
                            Job Opportunities
                        </h1>
                        <p className="text-body text-text-medium max-w-3xl mx-auto">
                            Discover exciting career opportunities in social work across the UK. Join leading organizations making a difference in communities.
                        </p>
                    </div>
                    
                    {/* Jobs List - Scrollable */}
                    <div className="max-w-4xl mx-auto">
                        {jobs.length > 0 ? (
                            <div className="space-y-6 scrollable-content max-h-[60vh]">
                                {jobs.map((job) => (
                                    <div key={job.id} className="bg-card p-8 rounded-lg card-shadow hover-lift">
                                        <h2 className="text-2xl font-bold text-text-dark mb-2">{job.title}</h2>
                                        <p className="text-text-muted font-semibold mb-4">{job.company} - {job.location}</p>
                                        <p className="text-text-medium mb-6 leading-relaxed">{job.description}</p>
                                        <a
                                            href={job.applyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            Apply Now
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <div className="max-w-md mx-auto space-y-8">
                                    <div className="w-24 h-24 mx-auto bg-primary-light rounded-2xl flex items-center justify-center">
                                        <svg className="w-12 h-12 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                        </svg>
                                    </div>
                                    <h3 className="heading-secondary text-3xl text-text-dark">No Open Positions</h3>
                                    <p className="text-body text-text-medium">
                                        No open positions at this time. Please check back later for new opportunities.
                                    </p>
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
    } catch (error) {
        return { props: { jobs: [] } };
    }
};
