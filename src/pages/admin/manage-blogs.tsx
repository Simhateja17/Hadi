// src/pages/admin/manage-blogs.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import withAuth from '../../components/auth/withAuth';

type Blog = { 
    id: string; 
    title: string; 
    author: string;
    content: string;
    imageUrl?: string;
    published: boolean; 
    createdAt: string;
    updatedAt: string;
};

const ManageBlogsPage = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const token = localStorage.getItem('admin_token');
                const res = await fetch(`${API_BASE_URL}/api/blogs/admin`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    setBlogs(data);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, [API_BASE_URL]);

    const handleDelete = async (blogId: string, blogTitle: string) => {
        if (confirm(`Are you sure you want to delete "${blogTitle}"? This action cannot be undone and will remove the blog from both admin and user sides.`)) {
            try {
                const token = localStorage.getItem('admin_token');
                const response = await fetch(`${API_BASE_URL}/api/blogs/${blogId}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                
                if (response.ok) {
                    setBlogs(blogs.filter(b => b.id !== blogId));
                    alert('Blog post deleted successfully!');
                } else {
                    alert('Failed to delete blog post. Please try again.');
                }
            } catch (error) {
                console.error('Error deleting blog:', error);
                alert('An error occurred while deleting the blog post.');
            }
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

    const getSnippet = (content: string) => {
        // Remove any HTML tags and get clean text
        const plainText = content.replace(/<[^>]*>/g, '');
        return plainText.substring(0, 120) + '...';
    };

    if (loading) {
        return (
            <div className="py-12 flex justify-center items-center min-h-[400px]">
                <div className="text-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="text-text-muted">Loading blogs...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12 max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-text-dark mb-2">Manage Blog Posts</h1>
                    <p className="text-text-muted">Create, edit, and manage all your blog content</p>
                </div>
                <Link 
                    href="/admin/edit-blog" 
                    className="bg-secondary hover:bg-secondary-light text-black font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create New Post
                </Link>
            </div>

            {blogs.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-lg shadow-md">
                    <div className="w-24 h-24 mx-auto bg-primary-light rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-text-dark mb-2">No Blog Posts Yet</h3>
                    <p className="text-text-muted mb-6">Start creating engaging content for your audience</p>
                    <Link 
                        href="/admin/edit-blog" 
                        className="bg-primary hover:bg-primary-light text-black font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                        Create Your First Post
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map(blog => (
                        <div key={blog.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                            {/* Blog Image */}
                            <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10">
                                {blog.imageUrl ? (
                                    <Image 
                                        src={blog.imageUrl.startsWith('http') ? blog.imageUrl : `${API_BASE_URL}${blog.imageUrl}`} 
                                        alt={blog.title} 
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <svg className="w-16 h-16 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                                {/* Status Badge */}
                                <div className="absolute top-3 right-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        blog.published 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {blog.published ? 'Published' : 'Draft'}
                                    </span>
                                </div>
                            </div>

                            {/* Blog Content */}
                            <div className="p-6 space-y-4">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-text-dark line-clamp-2 leading-tight">
                                    {blog.title}
                                </h3>

                                {/* Author and Date */}
                                <div className="flex items-center justify-between text-sm text-text-muted">
                                    <span className="font-medium">By {blog.author}</span>
                                    <span>{formatDate(blog.createdAt)}</span>
                                </div>

                                {/* Content Snippet */}
                                <p className="text-text-secondary line-clamp-3 text-sm leading-relaxed">
                                    {getSnippet(blog.content)}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4 border-t">
                                    <Link 
                                        href={`/admin/edit-blog/${blog.id}`}
                                        className="flex-1 bg-primary hover:bg-primary-light text-white font-medium py-2 px-4 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Edit
                                    </Link>
                                    <button 
                                        onClick={() => handleDelete(blog.id, blog.title)}
                                        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
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
            )}
        </div>
    );
};

export default withAuth(ManageBlogsPage);
