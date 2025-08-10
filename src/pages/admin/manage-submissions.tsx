// src/pages/admin/manage-submissions.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import withAuth from '../../components/auth/withAuth';

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
    approvedAt?: string;
    approvedBy?: string;
};

type PaginationInfo = {
    current: number;
    total: number;
    hasNext: boolean;
    hasPrev: boolean;
};

const ManageSubmissionsPage = () => {
    const [submissions, setSubmissions] = useState<BlogSubmission[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedStatus, setSelectedStatus] = useState('ALL');
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState<PaginationInfo>({
        current: 1,
        total: 1,
        hasNext: false,
        hasPrev: false
    });
    const [processingIds, setProcessingIds] = useState<Set<string>>(new Set());

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

    const fetchSubmissions = async (status = selectedStatus, page = currentPage) => {
        try {
            setLoading(true);
            const token = localStorage.getItem('admin_token');
            const queryParams = new URLSearchParams({
                page: page.toString(),
                limit: '10'
            });
            
            if (status !== 'ALL') {
                queryParams.append('status', status);
            }
            
            const res = await fetch(`${API_BASE_URL}/api/blog-submissions/admin?${queryParams}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (res.ok) {
                const data = await res.json();
                setSubmissions(data.submissions);
                setPagination(data.pagination);
            }
        } catch (error) {
            console.error('Error fetching submissions:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSubmissions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedStatus, currentPage]);

    const handleStatusFilter = (status: string) => {
        setSelectedStatus(status);
        setCurrentPage(1);
    };

    const handleApprove = async (submissionId: string) => {
        // Show custom modal for image upload
        const shouldProceed = confirm('Do you want to approve this submission? You can optionally add an image in the next step.');
        if (!shouldProceed) return;

        // Redirect to the edit page for approval with image upload
        window.location.href = `/admin/edit-submission/${submissionId}?action=approve`;
    };

    const handleReject = async (submissionId: string) => {
        const adminNotes = prompt('Please provide a reason for rejection (optional):');
        if (adminNotes === null) return; // User cancelled

        setProcessingIds(prev => new Set(prev).add(submissionId));

        try {
            const token = localStorage.getItem('admin_token');
            const response = await fetch(`${API_BASE_URL}/api/blog-submissions/admin/${submissionId}/reject`, {
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ adminNotes })
            });

            if (response.ok) {
                alert('Submission rejected successfully.');
                fetchSubmissions(); // Refresh the list
            } else {
                const errorData = await response.json();
                alert(`Failed to reject submission: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error rejecting submission:', error);
            alert('An error occurred while rejecting the submission.');
        } finally {
            setProcessingIds(prev => {
                const newSet = new Set(prev);
                newSet.delete(submissionId);
                return newSet;
            });
        }
    };

    const handleDelete = async (submissionId: string, title: string) => {
        if (!confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
            return;
        }

        try {
            const token = localStorage.getItem('admin_token');
            const response = await fetch(`${API_BASE_URL}/api/blog-submissions/admin/${submissionId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                setSubmissions(submissions.filter(s => s.id !== submissionId));
                alert('Submission deleted successfully!');
            } else {
                alert('Failed to delete submission. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting submission:', error);
            alert('An error occurred while deleting the submission.');
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-UK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'PENDING':
                return 'bg-yellow-100 text-yellow-800';
            case 'APPROVED':
                return 'bg-green-100 text-green-800';
            case 'REJECTED':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getSnippet = (content: string, maxLength = 120) => {
        return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
    };

    if (loading) {
        return (
            <div className="py-12 flex justify-center items-center min-h-[400px]">
                <div className="text-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="text-text-muted">Loading submissions...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12 max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-text-dark mb-2">Manage Blog Submissions</h1>
                    <p className="text-text-muted">Review and manage submitted articles from contributors</p>
                </div>
                <Link 
                    href="/admin/dashboard" 
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Dashboard
                </Link>
            </div>

            {/* Status Filter */}
            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    {['ALL', 'PENDING', 'APPROVED', 'REJECTED'].map((status) => (
                        <button
                            key={status}
                            onClick={() => handleStatusFilter(status)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                selectedStatus === status
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {status === 'ALL' ? 'All Submissions' : status}
                        </button>
                    ))}
                </div>
            </div>

            {submissions.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-lg shadow-md">
                    <div className="w-24 h-24 mx-auto bg-primary-light rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-text-dark mb-2">
                        {selectedStatus === 'ALL' ? 'No Submissions Yet' : `No ${selectedStatus} Submissions`}
                    </h3>
                    <p className="text-text-muted">
                        {selectedStatus === 'ALL' 
                            ? 'No blog submissions have been received yet.' 
                            : `No submissions with ${selectedStatus.toLowerCase()} status.`
                        }
                    </p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 gap-6">
                        {submissions.map(submission => (
                            <div key={submission.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-200">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-text-dark">{submission.title}</h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(submission.status)}`}>
                                                {submission.status}
                                            </span>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4 text-sm text-text-muted mb-3">
                                            <div>
                                                <span className="font-medium">Author:</span> {submission.authorName}
                                            </div>
                                            <div>
                                                <span className="font-medium">Email:</span> {submission.authorEmail}
                                            </div>
                                            <div>
                                                <span className="font-medium">Topic:</span> {submission.topic}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h4 className="font-medium text-gray-700 mb-2">Content:</h4>
                                    <p className="text-gray-600 bg-gray-50 p-3 rounded text-sm leading-relaxed">
                                        {getSnippet(submission.content, 200)}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {submission.content.length} characters
                                    </p>
                                </div>

                                {/* If adminNotes contains an image URL, show a small thumbnail */}
                                {submission.adminNotes && submission.adminNotes.startsWith('IMAGE_URL: ') && (
                                    <div className="mb-4">
                                        <h4 className="font-medium text-gray-700 mb-2">Submitted Image:</h4>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={submission.adminNotes.replace('IMAGE_URL: ', '')}
                                            alt="Submitted"
                                            className="w-48 h-32 object-cover rounded border"
                                        />
                                    </div>
                                )}

                                {submission.authorBio && (
                                    <div className="mb-4">
                                        <h4 className="font-medium text-gray-700 mb-2">Author Bio:</h4>
                                        <p className="text-gray-600 text-sm italic">
                                            {submission.authorBio}
                                        </p>
                                    </div>
                                )}

                                {submission.adminNotes && (
                                    <div className="mb-4 bg-yellow-50 border border-yellow-200 rounded p-3">
                                        <h4 className="font-medium text-yellow-800 mb-2">Admin Notes:</h4>
                                        <p className="text-yellow-700 text-sm">
                                            {submission.adminNotes}
                                        </p>
                                    </div>
                                )}

                                <div className="flex justify-between items-center pt-4 border-t">
                                    <div className="text-sm text-text-muted">
                                        <span>Submitted: {formatDate(submission.createdAt)}</span>
                                        {submission.approvedAt && (
                                            <span className="ml-4">Approved: {formatDate(submission.approvedAt)}</span>
                                        )}
                                    </div>

                                    <div className="flex gap-2">
                                        <Link
                                            href={`/admin/edit-submission/${submission.id}`}
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-1"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            Edit
                                        </Link>

                                        {submission.status === 'PENDING' && (
                                            <>
                                                <button
                                                    onClick={() => handleApprove(submission.id)}
                                                    disabled={processingIds.has(submission.id)}
                                                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-1"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {processingIds.has(submission.id) ? 'Processing...' : 'Approve'}
                                                </button>

                                                <button
                                                    onClick={() => handleReject(submission.id)}
                                                    disabled={processingIds.has(submission.id)}
                                                    className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-1"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    {processingIds.has(submission.id) ? 'Processing...' : 'Reject'}
                                                </button>
                                            </>
                                        )}

                                        <button
                                            onClick={() => handleDelete(submission.id, submission.title)}
                                            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-1"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {pagination.total > 1 && (
                        <div className="mt-8 flex justify-center items-center gap-4">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={!pagination.hasPrev}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Previous
                            </button>
                            <span className="text-gray-600">
                                Page {pagination.current} of {pagination.total}
                            </span>
                            <button
                                onClick={() => setCurrentPage(prev => prev + 1)}
                                disabled={!pagination.hasNext}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default withAuth(ManageSubmissionsPage);
