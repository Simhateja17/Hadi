// components/CommentSection.tsx
import React, { useState, useEffect } from 'react';

interface Comment {
    id: string;
    name: string;
    content: string;
    createdAt: string;
}

interface CommentSectionProps {
    blogId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ blogId }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        content: ''
    });
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
                const response = await fetch(`${baseUrl}/api/comments/${blogId}`);
                if (response.ok) {
                    const commentsData = await response.json();
                    setComments(commentsData);
                }
            } catch (error) {
                console.error('Error fetching comments:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [blogId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setMessage(null);

        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
            const response = await fetch(`${baseUrl}/api/comments/${blogId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'Anonymous',
                    email: 'anonymous@example.com',
                    content: formData.content
                }),
            });

            if (response.ok) {
                const newComment = await response.json();
                setComments(prev => [newComment, ...prev]);
                setFormData({ content: '' });
                setShowForm(false);
                setMessage({ type: 'success', text: 'Comment posted successfully!' });
            } else {
                const errorData = await response.json();
                setMessage({ type: 'error', text: errorData.error || 'Failed to post comment' });
            }
        } catch (error: unknown) {
            setMessage({ type: 'error', text: 'An error occurred while posting your comment' });
            console.error('Error posting comment:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="bg-white border-t border-gray-200 pt-8 mt-8 w-full">
            <div className="max-w-4xl mx-auto px-4">
                {/* Comments Header */}
                <div className="flex flex-col items-center gap-4 mb-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900">
                        Comments ({comments.length})
                    </h3>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-british-blue text-white px-6 py-2 rounded-lg hover:bg-british-blue/90 transition-colors font-semibold"
                    >
                        {showForm ? 'Cancel' : 'Add Comment'}
                    </button>
                </div>

                {/* Success/Error Message */}
                {message && (
                    <div className={`mb-6 p-4 rounded-lg ${
                        message.type === 'success' 
                            ? 'bg-green-50 text-green-800 border border-green-200' 
                            : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                        {message.text}
                    </div>
                )}

                {/* Comment Form */}
                {showForm && (
                    <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                                    Comment *
                                </label>
                                <textarea
                                    id="content"
                                    rows={4}
                                    value={formData.content}
                                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-british-blue focus:border-transparent"
                                    placeholder="Share your thoughts..."
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="bg-british-red text-white px-6 py-2 rounded-lg hover:bg-british-red/90 transition-colors font-semibold disabled:opacity-50"
                                >
                                    {submitting ? 'Posting...' : 'Post Comment'}
                                </button>
                                <p className="text-sm text-gray-500">
                                    Your comment will be posted anonymously
                                </p>
                            </div>
                        </form>
                    </div>
                )}

                {/* Comments List */}
                {loading ? (
                    <div className="text-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-british-blue mx-auto"></div>
                        <p className="text-gray-500 mt-2">Loading comments...</p>
                    </div>
                ) : comments.length === 0 ? (
                    <div className="py-12 bg-gray-50 rounded-lg flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">No comments yet</h4>
                        <p className="text-gray-500">Be the first to share your thoughts!</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {comments.map((comment) => (
                            <div key={comment.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-british-blue to-british-red rounded-full flex items-center justify-center text-white font-semibold">
                                            {comment.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                                            <p className="text-sm text-gray-500">{formatDate(comment.createdAt)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-13">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{comment.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentSection;
