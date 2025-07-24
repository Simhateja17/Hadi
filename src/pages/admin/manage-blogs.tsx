// src/pages/admin/manage-blogs.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import withAuth from '../../components/auth/withAuth';

type Blog = { id: string; title: string; published: boolean; };

const ManageBlogsPage = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    // NOTE: We need a dedicated API endpoint to get ALL blogs (including drafts)
    // For now, let's assume the public '/api/blogs' can be used with an auth header
    // to return all posts. A better approach is a dedicated '/api/admin/blogs' endpoint.
    useEffect(() => {
        const fetchBlogs = async () => {
            const token = localStorage.getItem('admin_token');
            const res = await fetch('http://localhost:3001/api/blogs', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setBlogs(data);
            }
        };
        fetchBlogs();
    }, []);

    const handleDelete = async (blogId: string) => {
        if (confirm('Are you sure you want to delete this post?')) {
            const token = localStorage.getItem('admin_token');
            await fetch(`http://localhost:3001/api/blogs/${blogId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setBlogs(blogs.filter(b => b.id !== blogId));
        }
    };

    return (
        <div className="py-12">
            <h1 className="text-4xl font-bold text-text-dark mb-8">Manage Blogs</h1>
            <Link href="/admin/edit-blog" className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded mb-8">
                + Create New Post
            </Link>
            <div className="bg-white p-4 rounded-lg shadow-md">
                {blogs.map(blog => (
                    <div key={blog.id} className="flex justify-between items-center p-2 border-b">
                        <span>{blog.title} - <span className={blog.published ? 'text-green-600' : 'text-yellow-600'}>{blog.published ? 'Published' : 'Draft'}</span></span>
                        <div>
                            <Link href={`/admin/edit-blog/${blog.id}`} className="text-blue-500 mr-4">Edit</Link>
                            <button onClick={() => handleDelete(blog.id)} className="text-red-500">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default withAuth(ManageBlogsPage);
