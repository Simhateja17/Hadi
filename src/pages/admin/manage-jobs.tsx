// src/pages/admin/manage-jobs.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import withAuth from '../../components/auth/withAuth';

type Job = {
    id: string;
    title: string;
    company: string;
    isActive: boolean;
};

const ManageJobsPage = () => {
    const [jobs, setJobs] = useState<Job[]>([]);

    // Backend Note: This assumes you have an endpoint that returns ALL jobs
    // (active and inactive) for an authenticated admin.
    useEffect(() => {
        const fetchJobs = async () => {
            const token = localStorage.getItem('admin_token');
            const res = await fetch('http://localhost:3001/api/jobs', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setJobs(data);
            }
        };
        fetchJobs();
    }, []);

    const handleDelete = async (jobId: string) => {
        if (confirm('Are you sure you want to delete this job listing?')) {
            const token = localStorage.getItem('admin_token');
            await fetch(`http://localhost:3001/api/jobs/${jobId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setJobs(jobs.filter(j => j.id !== jobId));
        }
    };

    return (
        <div className="py-12">
            <h1 className="text-4xl font-bold text-text-dark mb-8">Manage Job Listings</h1>
            <Link href="/admin/edit-job" className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded mb-8">
                + Create New Job
            </Link>
            <div className="bg-white p-4 rounded-lg shadow-md">
                {jobs.map(job => (
                    <div key={job.id} className="flex justify-between items-center p-2 border-b">
                        <div>
                            <span className="font-bold">{job.title}</span> at {job.company} - <span className={job.isActive ? 'text-green-600' : 'text-yellow-600'}>{job.isActive ? 'Active' : 'Inactive'}</span>
                        </div>
                        <div>
                            <Link href={`/admin/edit-job/${job.id}`} className="text-blue-500 mr-4">Edit</Link>
                            <button onClick={() => handleDelete(job.id)} className="text-red-500">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default withAuth(ManageJobsPage);
