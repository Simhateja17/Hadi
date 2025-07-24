// src/pages/admin/edit-job/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import withAuth from '../../../components/auth/withAuth';

const JobEditorPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        description: '',
        applyUrl: '',
        isActive: true,
    });

    useEffect(() => {
        if (id && typeof id === 'string') {
            const fetchJob = async () => {
                const res = await fetch(`http://localhost:3001/api/jobs/${id}`); // Public endpoint is fine for fetching
                const job = await res.json();
                setFormData(job);
            };
            fetchJob();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('admin_token');
        const url = id ? `http://localhost:3001/api/jobs/${id}` : 'http://localhost:3001/api/jobs';
        const method = id ? 'PUT' : 'POST';

        await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(formData)
        });
        router.push('/admin/manage-jobs');
    };

    return (
        <div className="py-12">
            <h1 className="text-4xl font-bold mb-8">{id ? 'Edit Job' : 'Create Job'}</h1>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
                {/* Add form fields for title, company, location, description, applyUrl, and a checkbox for isActive */}
                <div><label className="block font-bold">Job Title</label><input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded"/></div>
                <div><label className="block font-bold">Company</label><input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full p-2 border rounded"/></div>
                <div><label className="block font-bold">Location</label><input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded"/></div>
                <div><label className="block font-bold">Description</label><textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" rows={5}></textarea></div>
                <div><label className="block font-bold">Apply URL</label><input type="text" name="applyUrl" value={formData.applyUrl} onChange={handleChange} className="w-full p-2 border rounded"/></div>
                <div className="flex items-center"><input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} className="h-5 w-5 mr-2"/><label className="font-bold">Active</label></div>
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-600">Save Job</button>
            </form>
        </div>
    );
};

export default withAuth(JobEditorPage);
