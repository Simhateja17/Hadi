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
        <div className="py-12">
            <h1 className="text-4xl font-extrabold text-center text-text-dark mb-12">
                Job Opportunities
            </h1>
            <div className="space-y-6 max-w-4xl mx-auto">
                {jobs.length > 0 ? jobs.map((job) => (
                    <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-text-dark">{job.title}</h2>
                        <p className="text-text-light font-semibold">{job.company} - {job.location}</p>
                        <p className="my-4 text-text-dark">{job.description}</p>
                        <a
                            href={job.applyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-accent text-text-dark font-bold py-2 px-4 rounded hover:bg-opacity-80"
                        >
                            Apply Now
                        </a>
                    </div>
                )) : (
                    <p className="text-center text-text-light">No open positions at this time. Please check back later.</p>
                )}
            </div>
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
