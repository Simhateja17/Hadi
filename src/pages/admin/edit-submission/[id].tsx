// src/pages/admin/edit-submission/[id].tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import withAuth from '../../../components/auth/withAuth';

type BlogSubmission = {
    id: string;
    title: string;
    content: string;
    topic: string;
    authorName: string;
    authorEmail: string;
    authorBio?: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    adminNotes?: string;
    createdAt: string;
    updatedAt: string;
};

const EditSubmissionPage = () => {
    const router = useRouter();
    const { id, action } = router.query;
    const [submission, setSubmission] = useState<BlogSubmission | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        topic: '',
        authorName: '',
        authorEmail: '',
        authorBio: '',
        adminNotes: ''
    });
    const [characterCount, setCharacterCount] = useState(0);
    const [saveMessage, setSaveMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [showApprovalSection, setShowApprovalSection] = useState(false);

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    const CHARACTER_LIMIT = 600;

    const topicOptions = [
        'Social Work Practice',
        'Mental Health',
        'Child Protection',
        'Community Development',
        'Healthcare Social Work',
        'Education Social Work',
        'Policy and Advocacy',
        'Professional Development',
        'Research and Evidence',
        'Other'
    ];

    useEffect(() => {
        if (id) {
            fetchSubmission();
        }
        // Check if we came here for approval
        if (action === 'approve') {
            setShowApprovalSection(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, action]);

    const fetchSubmission = async () => {
        try {
            const token = localStorage.getItem('admin_token');
            const response = await fetch(`${API_BASE_URL}/api/blog-submissions/admin/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                const data = await response.json();
                setSubmission(data);
                setFormData({
                    title: data.title,
                    content: data.content,
                    topic: data.topic,
                    authorName: data.authorName,
                    authorEmail: data.authorEmail,
                    authorBio: data.authorBio || '',
                    adminNotes: data.adminNotes || ''
                });
                setCharacterCount(data.content.length);

                // If adminNotes carries a submitted image URL, set preview for convenience
                if (data.adminNotes && typeof data.adminNotes === 'string' && data.adminNotes.startsWith('IMAGE_URL: ')) {
                    const url = data.adminNotes.replace('IMAGE_URL: ', '');
                    setImagePreview(url);
                    setImageUrl(url);
                }
            } else {
                console.error('Failed to fetch submission');
                router.push('/admin/manage-submissions');
            }
        } catch (error) {
            console.error('Error fetching submission:', error);
            router.push('/admin/manage-submissions');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        if (name === 'content') {
            if (value.length <= CHARACTER_LIMIT) {
                setFormData(prev => ({ ...prev, [name]: value }));
                setCharacterCount(value.length);
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setSaveMessage(null);

        // Validation
        if (!formData.title.trim() || !formData.content.trim() || !formData.topic || 
            !formData.authorName.trim() || !formData.authorEmail.trim()) {
            setSaveMessage({ type: 'error', text: 'Please fill in all required fields.' });
            setSaving(false);
            return;
        }

        if (formData.content.length > CHARACTER_LIMIT) {
            setSaveMessage({ type: 'error', text: `Content must not exceed ${CHARACTER_LIMIT} characters.` });
            setSaving(false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.authorEmail)) {
            setSaveMessage({ type: 'error', text: 'Please enter a valid email address.' });
            setSaving(false);
            return;
        }

        try {
            const token = localStorage.getItem('admin_token');
            const response = await fetch(`${API_BASE_URL}/api/blog-submissions/admin/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSaveMessage({ type: 'success', text: 'Submission updated successfully!' });
                // Refresh the submission data
                fetchSubmission();
            } else {
                const errorData = await response.json();
                setSaveMessage({ type: 'error', text: errorData.error || 'Failed to update submission.' });
            }
        } catch (error) {
            setSaveMessage({ type: 'error', text: 'Network error. Please try again.' });
        } finally {
            setSaving(false);
        }
    };

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUpload = async (): Promise<string | null> => {
        if (!selectedImage) return null;

        setUploading(true);
        try {
            const token = localStorage.getItem('admin_token');
            const formData = new FormData();
            formData.append('file', selectedImage);

            const response = await fetch(`${API_BASE_URL}/api/upload`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                return data.url;
            } else {
                console.error('Failed to upload image');
                return null;
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        } finally {
            setUploading(false);
        }
    };

    const handleApprove = async () => {
        if (!confirm('Are you sure you want to approve this submission? It will be published as a blog post.')) {
            return;
        }

        setSaving(true);
        let finalImageUrl = imageUrl;

        // Upload image if one is selected
        if (selectedImage) {
            finalImageUrl = await handleImageUpload();
            if (!finalImageUrl) {
                alert('Failed to upload image. Please try again.');
                setSaving(false);
                return;
            }
        }

        try {
            const token = localStorage.getItem('admin_token');
            const response = await fetch(`${API_BASE_URL}/api/blog-submissions/admin/${id}/approve`, {
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ imageUrl: finalImageUrl })
            });

            if (response.ok) {
                alert('Submission approved and published successfully!');
                router.push('/admin/manage-submissions');
            } else {
                const errorData = await response.json();
                alert(`Failed to approve submission: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error approving submission:', error);
            alert('An error occurred while approving the submission.');
        } finally {
            setSaving(false);
        }
    };

    const handleReject = async () => {
        const adminNotes = prompt('Please provide a reason for rejection (optional):');
        if (adminNotes === null) return; // User cancelled

        try {
            const token = localStorage.getItem('admin_token');
            const response = await fetch(`${API_BASE_URL}/api/blog-submissions/admin/${id}/reject`, {
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ adminNotes })
            });

            if (response.ok) {
                alert('Submission rejected successfully.');
                router.push('/admin/manage-submissions');
            } else {
                const errorData = await response.json();
                alert(`Failed to reject submission: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error rejecting submission:', error);
            alert('An error occurred while rejecting the submission.');
        }
    };

    if (loading) {
        return (
            <div className="py-12 flex justify-center items-center min-h-[400px]">
                <div className="text-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="text-text-muted">Loading submission...</p>
                </div>
            </div>
        );
    }

    if (!submission) {
        return (
            <div className="py-12 text-center">
                <h1 className="text-2xl font-bold text-text-dark mb-4">Submission Not Found</h1>
                <Link 
                    href="/admin/manage-submissions"
                    className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    Back to Submissions
                </Link>
            </div>
        );
    }

    return (
        <div className="py-12 max-w-4xl mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-text-dark mb-2">Edit Submission</h1>
                    <p className="text-text-muted">Review and edit the submitted article</p>
                </div>
                <div className="flex gap-3">
                    <Link 
                        href="/admin/manage-submissions"
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Submissions
                    </Link>
                </div>
            </div>

            {/* Status and Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">Submission Info</h3>
                        <div className="space-y-2 text-sm">
                            <div><span className="font-medium">Status:</span> 
                                <span className={`ml-2 px-2 py-1 rounded text-xs font-semibold ${
                                    submission.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                                    submission.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                                    'bg-red-100 text-red-800'
                                }`}>
                                    {submission.status}
                                </span>
                            </div>
                            <div><span className="font-medium">Submitted:</span> {new Date(submission.createdAt).toLocaleDateString('en-UK', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}</div>
                            <div><span className="font-medium">Last Updated:</span> {new Date(submission.updatedAt).toLocaleDateString('en-UK', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}</div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">Actions</h3>
                        <div className="flex flex-wrap gap-2">
                            {submission.status === 'PENDING' && (
                                <>
                                    <button
                                        onClick={() => setShowApprovalSection(!showApprovalSection)}
                                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-1"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {showApprovalSection ? 'Cancel Approval' : 'Approve & Publish'}
                                    </button>
                                    <button
                                        onClick={handleReject}
                                        className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-1"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        Reject
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Upload Section for Approval */}
            {showApprovalSection && submission?.status === 'PENDING' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Approve Submission
                    </h3>
                    <p className="text-green-700 mb-4">
                        You can optionally upload an image for this blog post before publishing it.
                    </p>
                    
                    <div className="space-y-4">
                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium text-green-700 mb-2">
                                Blog Image (Optional)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageSelect}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
                            />
                        </div>

                        {/* Image Preview */}
                        {imagePreview && (
                            <div className="mt-4">
                                <p className="text-sm font-medium text-green-700 mb-2">Image Preview:</p>
                                <div className="relative w-64 h-40 border border-green-300 rounded-lg overflow-hidden">
                                    <Image
                                        src={imagePreview}
                                        alt="Preview"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Approval Actions */}
                        <div className="flex gap-3 pt-4">
                            <button
                                onClick={handleApprove}
                                disabled={saving || uploading}
                                className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                                    saving || uploading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-green-600 hover:bg-green-700 hover:shadow-lg'
                                }`}
                            >
                                {saving ? (
                                    <div className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {selectedImage ? 'Uploading & Approving...' : 'Approving...'}
                                    </div>
                                ) : (
                                    <>
                                        <svg className="inline w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Approve & Publish
                                    </>
                                )}
                            </button>
                            <button
                                onClick={() => setShowApprovalSection(false)}
                                className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
                <form onSubmit={handleSave} className="space-y-6">
                    {/* Article Title */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                            Article Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                    </div>

                    {/* Topic Selection */}
                    <div>
                        <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                            Topic Category <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="topic"
                            name="topic"
                            value={formData.topic}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        >
                            {topicOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Article Content */}
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                            Article Content <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <textarea
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={handleInputChange}
                                required
                                rows={12}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                            />
                            <div className={`absolute bottom-3 right-3 text-sm ${
                                characterCount > CHARACTER_LIMIT * 0.9 ? 'text-red-500' : 'text-gray-500'
                            }`}>
                                {characterCount}/{CHARACTER_LIMIT} characters
                            </div>
                        </div>
                    </div>

                    {/* Author Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-2">
                                Author Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="authorName"
                                name="authorName"
                                value={formData.authorName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="authorEmail" className="block text-sm font-medium text-gray-700 mb-2">
                                Author Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="authorEmail"
                                name="authorEmail"
                                value={formData.authorEmail}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div>
                        <label htmlFor="authorBio" className="block text-sm font-medium text-gray-700 mb-2">
                            Author Bio
                        </label>
                        <textarea
                            id="authorBio"
                            name="authorBio"
                            value={formData.authorBio}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                        />
                    </div>

                    {/* Admin Notes */}
                    <div>
                        <label htmlFor="adminNotes" className="block text-sm font-medium text-gray-700 mb-2">
                            Admin Notes
                        </label>
                        <textarea
                            id="adminNotes"
                            name="adminNotes"
                            value={formData.adminNotes}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                            placeholder="Internal notes for this submission..."
                        />
                    </div>

                    {/* Save Message */}
                    {saveMessage && (
                        <div className={`p-4 rounded-lg ${
                            saveMessage.type === 'success' 
                                ? 'bg-green-50 border border-green-200 text-green-700' 
                                : 'bg-red-50 border border-red-200 text-red-700'
                        }`}>
                            <div className="flex items-center">
                                <svg className={`w-5 h-5 mr-2 ${
                                    saveMessage.type === 'success' ? 'text-green-500' : 'text-red-500'
                                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {saveMessage.type === 'success' ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    )}
                                </svg>
                                {saveMessage.text}
                            </div>
                        </div>
                    )}

                    {/* Save Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={saving}
                            className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                                saving
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-primary hover:bg-primary-light hover:shadow-lg'
                            }`}
                        >
                            {saving ? (
                                <div className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Saving...
                                </div>
                            ) : (
                                'Save Changes'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withAuth(EditSubmissionPage);
