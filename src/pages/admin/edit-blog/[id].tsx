// src/pages/admin/edit-blog/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import withAuth from '../../../components/auth/withAuth';
import Image from 'next/image';

const BlogEditorPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('We Social Workers UK'); // Default author
    const [imageUrl, setImageUrl] = useState('');
    const [isPublished, setIsPublished] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [imagePreview, setImagePreview] = useState<string>('');
    
    // Image positioning states
    const [imagePosition, setImagePosition] = useState<'center' | 'top' | 'bottom' | 'left' | 'right'>('center');
    const [imageFit, setImageFit] = useState<'cover' | 'contain' | 'fill'>('cover');

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

    useEffect(() => {
        if (id && typeof id === 'string') {
            const fetchPost = async () => {
                const token = localStorage.getItem('admin_token');
                const res = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const post = await res.json();
                    setTitle(post.title);
                    setContent(post.content);
                    setAuthor(post.author);
                    setImageUrl(post.imageUrl || '');
                    // Handle both relative and absolute URLs for preview
                    if (post.imageUrl) {
                        if (post.imageUrl.startsWith('http')) {
                            setImagePreview(post.imageUrl);
                        } else {
                            setImagePreview(`${API_BASE_URL}${post.imageUrl}`);
                        }
                    }
                    setIsPublished(post.published);
                }
            };
            fetchPost();
        }
    }, [id, API_BASE_URL]);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUpload = async () => {
        if (!selectedFile) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const token = localStorage.getItem('admin_token');
            const response = await fetch(`${API_BASE_URL}/api/upload/image`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (response.ok) {
                const result = await response.json();
                // Store relative URL in database, not absolute
                setImageUrl(result.imageUrl);
                setImagePreview(`${API_BASE_URL}${result.imageUrl}`);
                setSelectedFile(null);
                // Clear the file input
                const fileInput = document.getElementById('image-upload') as HTMLInputElement;
                if (fileInput) fileInput.value = '';
            } else {
                alert('Failed to upload image. Please try again.');
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Failed to upload image. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    const clearImage = () => {
        setImageUrl('');
        setImagePreview('');
        setSelectedFile(null);
        const fileInput = document.getElementById('image-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
    };

    const getObjectPosition = () => {
        switch (imagePosition) {
            case 'top': return 'center top';
            case 'bottom': return 'center bottom';
            case 'left': return 'left center';
            case 'right': return 'right center';
            default: return 'center center';
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('admin_token');
        const blogData = { title, content, author, imageUrl, published: isPublished };
        const url = id ? `${API_BASE_URL}/api/blogs/${id}` : `${API_BASE_URL}/api/blogs`;
        const method = id ? 'PUT' : 'POST';

        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(blogData)
        });

        if (response.ok) {
            router.push('/admin/manage-blogs');
        } else {
            alert('Error saving blog post. Please try again.');
        }
    };

    return (
        <div className="py-12 max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-8 text-text-dark">
                {id ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-md">
                {/* Basic Information */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-text-dark border-b pb-2">Post Information</h2>
                    
                    <div>
                        <label className="block font-bold text-text-dark mb-2">Title *</label>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                            placeholder="Enter a compelling blog post title..."
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-bold text-text-dark mb-2">Author</label>
                            <input 
                                type="text" 
                                value={author} 
                                onChange={e => setAuthor(e.target.value)} 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Author name..."
                            />
                        </div>
                    </div>

                    {/* Featured Image Section */}
                    <div className="space-y-4">
                        <label className="block font-bold text-text-dark mb-2">Featured Image</label>
                        
                        {/* Image Preview */}
                        {imagePreview && (
                            <div className="space-y-4">
                                <div className="relative">
                                    <div className="relative w-full h-64 border border-gray-300 rounded-lg overflow-hidden">
                                        <Image 
                                            src={imagePreview} 
                                            alt="Featured image preview" 
                                            fill
                                            className={`object-${imageFit}`}
                                            style={{ objectPosition: getObjectPosition() }}
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={clearImage}
                                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Image Positioning Controls */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <label className="block font-medium text-text-dark mb-2">Image Position</label>
                                        <select 
                                            value={imagePosition} 
                                            onChange={e => setImagePosition(e.target.value as 'center' | 'top' | 'bottom' | 'left' | 'right')}
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        >
                                            <option value="center">Center</option>
                                            <option value="top">Top</option>
                                            <option value="bottom">Bottom</option>
                                            <option value="left">Left</option>
                                            <option value="right">Right</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block font-medium text-text-dark mb-2">Image Fit</label>
                                        <select 
                                            value={imageFit} 
                                            onChange={e => setImageFit(e.target.value as 'cover' | 'contain' | 'fill')}
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        >
                                            <option value="cover">Cover (Fill container)</option>
                                            <option value="contain">Contain (Fit within container)</option>
                                            <option value="fill">Fill (Stretch to fit)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Upload Options */}
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                            <div className="text-center space-y-4">
                                <div className="flex justify-center">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg font-medium text-text-dark">Upload from your computer</p>
                                    <p className="text-sm text-gray-500">PNG, JPG, GIF, WEBP up to 5MB</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                                    <input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileSelect}
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="image-upload"
                                        className="cursor-pointer bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Choose File
                                    </label>
                                    {selectedFile && (
                                        <button
                                            type="button"
                                            onClick={handleImageUpload}
                                            disabled={uploading}
                                            className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                        >
                                            {uploading ? 'Uploading...' : 'Upload Image'}
                                        </button>
                                    )}
                                </div>
                                {selectedFile && (
                                    <p className="text-sm text-gray-600">
                                        Selected: {selectedFile.name}
                                    </p>
                                )}
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-center text-gray-500 mb-3">or use an image URL</p>
                                <input 
                                    type="url" 
                                    value={imageUrl} 
                                    onChange={e => {
                                        setImageUrl(e.target.value);
                                        setImagePreview(e.target.value);
                                    }} 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-text-dark border-b pb-2">Content</h2>
                    
                    <div>
                        <label className="block font-bold text-text-dark mb-2">Blog Content *</label>
                        <textarea 
                            value={content} 
                            onChange={e => setContent(e.target.value)} 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm" 
                            rows={20}
                            placeholder="Write your blog post content here. You can use markdown formatting if needed..."
                            required
                        />
                        <p className="text-sm text-gray-500 mt-2">
                            Tip: Write engaging, informative content that provides value to social workers and related professionals.
                        </p>
                    </div>
                </div>

                {/* Publishing Options */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-text-dark border-b pb-2">Publishing Options</h2>
                    
                    <div className="flex items-center gap-3">
                        <input 
                            type="checkbox" 
                            checked={isPublished} 
                            onChange={e => setIsPublished(e.target.checked)} 
                            className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label className="font-bold text-text-dark">Publish immediately (visible to public)</label>
                    </div>
                    
                    {!isPublished && (
                        <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                            This post will be saved as a draft and won&apos;t be visible to the public until you check the &quot;Publish&quot; option.
                        </p>
                    )}
                </div>

                {/* Form Actions */}
                <div className="flex gap-4 pt-6 border-t">
                    <button 
                        type="submit" 
                        className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                        {id ? 'Update Blog Post' : 'Create Blog Post'}
                    </button>
                    
                    <button 
                        type="button" 
                        onClick={() => router.push('/admin/manage-blogs')}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                </div>

                {/* Preview Section */}
                {title && (
                    <div className="pt-6 border-t">
                        <h2 className="text-xl font-semibold text-text-dark mb-4">Preview</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
                            <p className="text-sm text-gray-600 mb-4">By {author}</p>
                            {imagePreview && (
                                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                    <Image 
                                        src={imagePreview} 
                                        alt="Preview" 
                                        fill
                                        className={`object-${imageFit}`}
                                        style={{ objectPosition: getObjectPosition() }}
                                    />
                                </div>
                            )}
                            {content && (
                                <p className="text-gray-700 line-clamp-3">
                                    {content.substring(0, 200)}...
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default withAuth(BlogEditorPage);
