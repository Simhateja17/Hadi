// src/pages/admin/edit-blog/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import withAuth from '../../../components/auth/withAuth';

const BlogEditorPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('We Social Workers UK'); // Default author
    const [imageUrl, setImageUrl] = useState('');
    const [isPublished, setIsPublished] = useState(false);

    useEffect(() => {
        if (id && typeof id === 'string') {
            const fetchPost = async () => {
                const res = await fetch(`http://localhost:3001/api/blogs/${id}`);
                const post = await res.json();
                setTitle(post.title);
                setContent(post.content);
                setAuthor(post.author);
                setImageUrl(post.imageUrl || '');
                setIsPublished(post.published);
            };
            fetchPost();
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('admin_token');
        const blogData = { title, content, author, imageUrl, published: isPublished };
        const url = id ? `http://localhost:3001/api/blogs/${id}` : 'http://localhost:3001/api/blogs';
        const method = id ? 'PUT' : 'POST';

        await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(blogData)
        });
        router.push('/admin/manage-blogs');
    };

    return (
        <div className="py-12">
            <h1 className="text-4xl font-bold mb-8">{id ? 'Edit Post' : 'Create Post'}</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form inputs for title, content (textarea), author, imageUrl, and a checkbox for isPublished */}
                {/* Example for Title */}
                <div>
                    <label className="block font-bold">Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded"/>
                </div>
                {/* ... other form fields ... */}
                 <div>
                    <label className="block font-bold">Content</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} className="w-full p-2 border rounded" rows={15}></textarea>
                </div>
                 <div>
                    <label className="block font-bold">Published</label>
                    <input type="checkbox" checked={isPublished} onChange={e => setIsPublished(e.target.checked)} className="h-6 w-6"/>
                </div>
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-6 rounded">Save Post</button>
            </form>
        </div>
    );
};

export default withAuth(BlogEditorPage);
