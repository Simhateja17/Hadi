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
        salary: '',
        type: 'Full-time' as 'Full-time' | 'Part-time' | 'Contract' | 'Remote',
        experience: '',
        skills: [] as string[],
        applyUrl: '',
        isActive: true,
    });
    const [skillInput, setSkillInput] = useState('');

    useEffect(() => {
        if (id && typeof id === 'string') {
            const fetchJob = async () => {
                const token = localStorage.getItem('admin_token');
                const res = await fetch(`http://localhost:3001/api/jobs/${id}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const job = await res.json();
                    setFormData({
                        title: job.title || '',
                        company: job.company || '',
                        location: job.location || '',
                        description: job.description || '',
                        salary: job.salary || '',
                        type: job.type || 'Full-time',
                        experience: job.experience || '',
                        skills: job.skills || [],
                        applyUrl: job.applyUrl || '',
                        isActive: job.isActive ?? true,
                    });
                }
            };
            fetchJob();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({ 
            ...prev, 
            [name]: type === 'checkbox' ? checked : value 
        }));
    };

    const addSkill = () => {
        if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
            setFormData(prev => ({
                ...prev,
                skills: [...prev.skills, skillInput.trim()]
            }));
            setSkillInput('');
        }
    };

    const removeSkill = (skillToRemove: string) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill !== skillToRemove)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('admin_token');
        const url = id ? `http://localhost:3001/api/jobs/${id}` : 'http://localhost:3001/api/jobs';
        const method = id ? 'PUT' : 'POST';

        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            router.push('/admin/manage-jobs');
        } else {
            alert('Error saving job. Please try again.');
        }
    };

    return (
        <div className="py-12 max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-8 text-text-dark">
                {id ? 'Edit Job Listing' : 'Create New Job Listing'}
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-md">
                {/* Basic Information */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-text-dark border-b pb-2">Basic Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-bold text-text-dark mb-2">Job Title *</label>
                            <input 
                                type="text" 
                                name="title" 
                                value={formData.title} 
                                onChange={handleChange} 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block font-bold text-text-dark mb-2">Company *</label>
                            <input 
                                type="text" 
                                name="company" 
                                value={formData.company} 
                                onChange={handleChange} 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block font-bold text-text-dark mb-2">Location *</label>
                            <input 
                                type="text" 
                                name="location" 
                                value={formData.location} 
                                onChange={handleChange} 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block font-bold text-text-dark mb-2">Job Type</label>
                            <select 
                                name="type" 
                                value={formData.type} 
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            >
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Remote">Remote</option>
                            </select>
                        </div>
                        
                        <div>
                            <label className="block font-bold text-text-dark mb-2">Salary Range</label>
                            <input 
                                type="text" 
                                name="salary" 
                                value={formData.salary} 
                                onChange={handleChange} 
                                placeholder="e.g., £30,000 - £40,000"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-bold text-text-dark mb-2">Experience Required</label>
                        <input 
                            type="text" 
                            name="experience" 
                            value={formData.experience} 
                            onChange={handleChange} 
                            placeholder="e.g., 2-5 years"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Job Description */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-text-dark border-b pb-2">Job Description</h2>
                    
                    <div>
                        <label className="block font-bold text-text-dark mb-2">Description *</label>
                        <textarea 
                            name="description" 
                            value={formData.description} 
                            onChange={handleChange} 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                            rows={8}
                            placeholder="Provide a detailed description of the role, responsibilities, and requirements..."
                            required
                        />
                    </div>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-text-dark border-b pb-2">Required Skills</h2>
                    
                    <div>
                        <div className="flex gap-2 mb-4">
                            <input 
                                type="text" 
                                value={skillInput}
                                onChange={(e) => setSkillInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                                placeholder="Add a skill..."
                                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            <button 
                                type="button" 
                                onClick={addSkill}
                                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                            >
                                Add
                            </button>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {formData.skills.map((skill, index) => (
                                <span 
                                    key={index}
                                    className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                >
                                    {skill}
                                    <button 
                                        type="button"
                                        onClick={() => removeSkill(skill)}
                                        className="text-primary hover:text-red-500 ml-1"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Application Details */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-text-dark border-b pb-2">Application Details</h2>
                    
                    <div>
                        <label className="block font-bold text-text-dark mb-2">Application URL *</label>
                        <input 
                            type="url" 
                            name="applyUrl" 
                            value={formData.applyUrl} 
                            onChange={handleChange} 
                            placeholder="https://..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                        />
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <input 
                            type="checkbox" 
                            name="isActive" 
                            checked={formData.isActive} 
                            onChange={handleChange} 
                            className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label className="font-bold text-text-dark">Active (visible to public)</label>
                    </div>
                </div>

                {/* Form Actions */}
                <div className="flex gap-4 pt-6 border-t">
                    <button 
                        type="submit" 
                        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                        {id ? 'Update Job Listing' : 'Create Job Listing'}
                    </button>
                    
                    <button 
                        type="button" 
                        onClick={() => router.push('/admin/manage-jobs')}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default withAuth(JobEditorPage);
