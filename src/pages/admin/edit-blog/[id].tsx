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
    
    // Scheduling states
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduledDate, setScheduledDate] = useState('');
    const [scheduledTime, setScheduledTime] = useState('');
    const [timezone, setTimezone] = useState('GMT');
    const [availableTimezones, setAvailableTimezones] = useState<string[]>([]);

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

    // Fetch available timezones
    useEffect(() => {
        const fetchTimezones = async () => {
            try {
                const token = localStorage.getItem('admin_token');
                const response = await fetch(`${API_BASE_URL}/api/blogs/admin/timezones`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const timezones = await response.json();
                    setAvailableTimezones(timezones);
                }
            } catch (error) {
                console.error('Failed to fetch timezones:', error);
            }
        };
        fetchTimezones();
    }, [API_BASE_URL]);

    useEffect(() => {
        if (id && typeof id === 'string') {
            const fetchPost = async () => {
                console.log('📖 FETCH POST: Loading blog post for editing, ID:', id);
                const token = localStorage.getItem('admin_token');
                const res = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                
                console.log('📡 FETCH POST: API response status:', res.status);
                
                if (res.ok) {
                    const post = await res.json();
                    console.log('📄 FETCH POST: Received post data:', post);
                    console.log('🖼️ FETCH POST: Post imageUrl:', post.imageUrl);
                    
                    setTitle(post.title);
                    setContent(post.content);
                    setAuthor(post.author);
                    setImageUrl(post.imageUrl || '');
                    
                    // Handle scheduling data
                    if (post.scheduledFor) {
                        setIsScheduled(true);
                        const scheduledDate = new Date(post.scheduledFor);
                        setScheduledDate(scheduledDate.toISOString().split('T')[0]);
                        setScheduledTime(scheduledDate.toTimeString().slice(0, 5));
                        setTimezone(post.timezone || 'GMT');
                    }
                    
                    // Handle both relative and absolute URLs for preview
                    if (post.imageUrl) {
                        if (post.imageUrl.startsWith('http')) {
                            console.log('🔗 FETCH POST: Using full URL for preview:', post.imageUrl);
                            setImagePreview(post.imageUrl);
                        } else {
                            const previewUrl = `${API_BASE_URL}${post.imageUrl}`;
                            console.log('🔗 FETCH POST: Converting relative to full URL for preview:', previewUrl);
                            setImagePreview(previewUrl);
                        }
                    } else {
                        console.log('⚠️ FETCH POST: No imageUrl found in post data');
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
            console.log('📁 FILE SELECT: User selected a file for upload');
            console.log('📊 FILE SELECT: File details:', {
                name: file.name,
                size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
                type: file.type,
                lastModified: new Date(file.lastModified).toISOString()
            });
            
            // Validate file type
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
            if (!allowedTypes.includes(file.type)) {
                console.error('❌ FILE SELECT: Invalid file type:', file.type);
                alert('Please select a valid image file (JPEG, PNG, GIF, or WebP)');
                return;
            }
            
            // Validate file size (5MB limit)
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (file.size > maxSize) {
                console.error('❌ FILE SELECT: File too large:', `${(file.size / 1024 / 1024).toFixed(2)} MB`);
                alert('File size must be less than 5MB');
                return;
            }
            
            console.log('✅ FILE SELECT: File validation passed');
            setSelectedFile(file);
            
            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => {
                console.log('🖼️ FILE SELECT: Generated preview for selected file');
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUpload = async () => {
        if (!selectedFile) {
            console.error('❌ IMAGE UPLOAD: No file selected for upload');
            return;
        }

        console.log('🎬 SUPABASE UPLOAD: Starting image upload to Supabase Storage');
        console.log('📁 SUPABASE UPLOAD: File details:', {
            name: selectedFile.name,
            size: `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`,
            type: selectedFile.type
        });

        setUploading(true);
        const formData = new FormData();
        formData.append('image', selectedFile);

        console.log('📦 SUPABASE UPLOAD: FormData prepared');
        console.log('🔗 SUPABASE UPLOAD: Making request to:', `${API_BASE_URL}/api/upload/image`);

        try {
            const token = localStorage.getItem('admin_token');
            console.log('🔐 SUPABASE UPLOAD: Auth token retrieved for request');
            
            const response = await fetch(`${API_BASE_URL}/api/upload/image`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            console.log('📡 SUPABASE UPLOAD: API response received with status:', response.status);

            if (response.ok) {
                const result = await response.json();
                console.log('✅ SUPABASE UPLOAD: Upload successful!');
                console.log('📋 SUPABASE UPLOAD: API response data:', result);
                console.log('🔗 SUPABASE UPLOAD: Generated Supabase URL:', result.imageUrl);
                
                // Verify it's a Supabase URL
                if (result.imageUrl && result.imageUrl.includes('supabase.co')) {
                    console.log('🎉 SUPABASE UPLOAD: Confirmed - Image successfully stored in Supabase Storage!');
                    console.log('🪣 SUPABASE UPLOAD: Image is now in the "images" bucket');
                } else {
                    console.warn('⚠️ SUPABASE UPLOAD: Warning - URL does not appear to be from Supabase');
                }
                
                // Store the full Supabase URL directly - no need to prefix with API_BASE_URL
                setImageUrl(result.imageUrl);
                console.log('💾 SUPABASE UPLOAD: Updated imageUrl state to:', result.imageUrl);
                
                // Use the full URL for preview as well
                setImagePreview(result.imageUrl);
                console.log('🖼️ SUPABASE UPLOAD: Updated preview with Supabase URL');
                
                setSelectedFile(null);
                // Clear the file input
                const fileInput = document.getElementById('image-upload') as HTMLInputElement;
                if (fileInput) fileInput.value = '';
                
                console.log('🧹 SUPABASE UPLOAD: Cleaned up file input and temporary states');
                console.log('🎉 SUPABASE UPLOAD COMPLETE: Image ready for blog publication');
            } else {
                console.error('❌ SUPABASE UPLOAD: Upload failed with status:', response.status);
                const errorText = await response.text();
                console.error('❌ SUPABASE UPLOAD: Error details:', errorText);
                alert('Failed to upload image to Supabase Storage. Please try again.');
            }
        } catch (error) {
            console.error('💥 SUPABASE UPLOAD: Network or request error:', error);
            alert('Failed to upload image. Please check your connection and try again.');
        } finally {
            setUploading(false);
            console.log('🏁 SUPABASE UPLOAD: Upload process completed');
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

    // Helper function to get current time in selected timezone
    const getCurrentTimeInTimezone = (tz: string) => {
        const now = new Date();
        let offsetHours = 0;
        
        if (tz !== 'GMT') {
            // Handle formats like GMT+5:30, GMT+5, GMT-3, etc.
            const match = tz.match(/GMT([+-])(\d+)(?::(\d+))?/);
            if (match) {
                const sign = match[1] === '+' ? 1 : -1;
                const hours = parseInt(match[2]);
                const minutes = match[3] ? parseInt(match[3]) : 0;
                offsetHours = sign * (hours + minutes / 60);
            }
        }
        
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const localTime = new Date(utc + (offsetHours * 3600000));
        
        return localTime.toLocaleString('en-IN', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('� BLOG SUBMIT: Form submission triggered');
        console.log('�💾 BLOG SUBMIT: Starting blog save process');
        console.log('📋 BLOG SUBMIT: Form values:', {
            hasTitle: !!title,
            hasContent: !!content,
            author,
            hasImageUrl: !!imageUrl,
            isPublished,
            isEdit: !!id,
            hasSelectedFile: !!selectedFile,
            isUploading: uploading
        });
        
        // Check if there's a selected file that hasn't been uploaded yet
        if (selectedFile && !imageUrl) {
            console.warn('⚠️ BLOG SUBMIT: File selected but not uploaded yet!');
            console.log('📁 BLOG SUBMIT: Selected file:', selectedFile.name);
            console.log('💡 BLOG SUBMIT: You need to click "Upload Image" first');
            alert('You have selected an image but haven\'t uploaded it yet. Please click "Upload Image" before publishing your blog.');
            return;
        }
        
        // Check if upload is still in progress
        if (uploading) {
            console.warn('⚠️ BLOG SUBMIT: Upload still in progress!');
            alert('Image upload is still in progress. Please wait for it to complete before publishing.');
            return;
        }
        
        // Validate required fields
        if (!title || !content) {
            console.error('❌ BLOG SUBMIT: Missing required fields');
            alert('Please fill in both title and content before publishing.');
            return;
        }
        
        // Log image upload status
        if (imageUrl) {
            const isSupabaseUrl = imageUrl.includes('supabase.co');
            console.log('🖼️ BLOG SUBMIT: Image analysis:', {
                hasImage: true,
                imageUrl: imageUrl,
                isSupabaseUrl: isSupabaseUrl,
                imageSource: isSupabaseUrl ? 'Supabase Storage' : 'External URL'
            });
            
            if (isSupabaseUrl) {
                console.log('✅ BLOG SUBMIT: Image is properly stored in Supabase Storage');
            } else {
                console.log('⚠️ BLOG SUBMIT: Image is from external source, not Supabase Storage');
            }
        } else {
            console.log('📷 BLOG SUBMIT: No image attached to this blog post');
        }
        
        const token = localStorage.getItem('admin_token');
        
        // Prepare blog data
        let scheduledFor = null;
        if (isScheduled && scheduledDate && scheduledTime) {
            scheduledFor = `${scheduledDate}T${scheduledTime}:00`;
        }
        
        const blogData = { 
            title, 
            content, 
            author, 
            imageUrl, 
            published: isScheduled ? false : isPublished, // If scheduled, don't publish immediately
            scheduledFor,
            timezone: isScheduled ? timezone : null
        };
        
        const url = id ? `${API_BASE_URL}/api/blogs/${id}` : `${API_BASE_URL}/api/blogs`;
        const method = id ? 'PUT' : 'POST';

        console.log('📝 BLOG SUBMIT: Blog data being sent to server:', {
            ...blogData,
            content: blogData.content.substring(0, 100) + '...' // Truncate content for cleaner logs
        });
        console.log('🖼️ BLOG SUBMIT: Full imageUrl being saved:', imageUrl);
        console.log('🔗 BLOG SUBMIT: API endpoint:', url);
        console.log('📡 BLOG SUBMIT: HTTP method:', method);
        console.log('📊 BLOG SUBMIT: Action type:', isPublished ? 'PUBLISH' : 'SAVE DRAFT');

        try {
            console.log('🌐 BLOG SUBMIT: Making API request...');
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(blogData)
            });

            console.log('📡 BLOG SUBMIT: API response received with status:', response.status);

            if (response.ok) {
                const result = await response.json();
                console.log('✅ BLOG SUBMIT: Blog operation successful!');
                console.log('📄 BLOG SUBMIT: Server response:', result);
                console.log('🎉 BLOG SUBMIT: Blog successfully ' + (isPublished ? 'PUBLISHED' : 'SAVED AS DRAFT'));
                
                if (result.imageUrl) {
                    console.log('🖼️ BLOG SUBMIT: Confirmed - Image URL saved to database:', result.imageUrl);
                } else {
                    console.log('📷 BLOG SUBMIT: No image URL in database record');
                }
                
                router.push('/admin/manage-blogs');
            } else {
                const errorText = await response.text();
                console.error('❌ BLOG SUBMIT: Server returned error status:', response.status);
                console.error('❌ BLOG SUBMIT: Error details:', errorText);
                alert('Error saving blog post. Please try again.');
            }
        } catch (error) {
            console.error('💥 BLOG SUBMIT: Network or request error:', error);
            alert('Network error occurred. Please check your connection and try again.');
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
                                    <div className="text-center space-y-2">
                                        <p className="text-sm text-gray-600">
                                            Selected: {selectedFile.name}
                                        </p>
                                        {!imageUrl && (
                                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                                                <p className="text-sm text-yellow-800 font-medium">
                                                    ⚠️ File selected but not uploaded yet!
                                                </p>
                                                <p className="text-xs text-yellow-700 mt-1">
                                                    Click &quot;Upload Image&quot; above to store it in Supabase before publishing.
                                                </p>
                                            </div>
                                        )}
                                        {imageUrl && imageUrl.includes('supabase.co') && (
                                            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                                <p className="text-sm text-green-800 font-medium">
                                                    ✅ Image uploaded successfully to Supabase Storage!
                                                </p>
                                            </div>
                                        )}
                                    </div>
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
                    
                    <div className="space-y-4">
                        {/* Immediate Publishing */}
                        <div className="flex items-center gap-3">
                            <input 
                                type="radio" 
                                id="publish-now"
                                name="publishing"
                                checked={!isScheduled}
                                onChange={() => setIsScheduled(false)}
                                className="h-5 w-5 text-primary focus:ring-primary border-gray-300"
                            />
                            <label htmlFor="publish-now" className="font-bold text-text-dark">Publish immediately</label>
                        </div>
                        
                        {!isScheduled && (
                            <div className="ml-8 space-y-3">
                                <div className="flex items-center gap-3">
                                    <input 
                                        type="checkbox" 
                                        checked={isPublished} 
                                        onChange={e => {
                                            const newPublishState = e.target.checked;
                                            console.log('📊 PUBLISH STATUS: Publication checkbox toggled');
                                            console.log('📊 PUBLISH STATUS: New state:', newPublishState ? 'WILL PUBLISH' : 'SAVE AS DRAFT');
                                            setIsPublished(newPublishState);
                                            
                                            if (newPublishState && imageUrl) {
                                                console.log('🖼️ PUBLISH STATUS: Image ready for publication:', imageUrl);
                                            } else if (newPublishState && !imageUrl) {
                                                console.log('📷 PUBLISH STATUS: Blog will be published without image');
                                            }
                                        }} 
                                        className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                                    />
                                    <label className="font-medium text-text-dark">Make visible to public</label>
                                </div>
                                
                                {!isPublished && (
                                    <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                                        This post will be saved as a draft and won&apos;t be visible to the public until you check the &quot;Make visible to public&quot; option.
                                    </p>
                                )}
                            </div>
                        )}
                        
                        {/* Scheduled Publishing */}
                        <div className="flex items-center gap-3">
                            <input 
                                type="radio" 
                                id="schedule"
                                name="publishing"
                                checked={isScheduled}
                                onChange={() => setIsScheduled(true)}
                                className="h-5 w-5 text-primary focus:ring-primary border-gray-300"
                            />
                            <label htmlFor="schedule" className="font-bold text-text-dark">Schedule for later</label>
                        </div>
                        
                        {isScheduled && (
                            <div className="ml-8 space-y-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <div className="bg-info-50 border border-info-200 rounded-lg p-3 mb-4">
                                    <p className="text-sm text-info-800 font-medium">
                                        🕐 Current time in {timezone}: {getCurrentTimeInTimezone(timezone)}
                                    </p>
                                    <p className="text-xs text-info-700 mt-1">
                                        📍 For India: Select <strong>GMT+5</strong> (close to IST) or <strong>GMT+6</strong> for more accuracy
                                    </p>
                                    <p className="text-xs text-info-700">
                                        Set your desired publish time in this timezone. The system will automatically convert it to UTC for scheduling.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block font-medium text-text-dark mb-2">Date</label>
                                        <input 
                                            type="date" 
                                            value={scheduledDate}
                                            onChange={e => setScheduledDate(e.target.value)}
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                            required={isScheduled}
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium text-text-dark mb-2">Time</label>
                                        <input 
                                            type="time" 
                                            value={scheduledTime}
                                            onChange={e => setScheduledTime(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                            required={isScheduled}
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium text-text-dark mb-2">Timezone</label>
                                        <select 
                                            value={timezone}
                                            onChange={e => setTimezone(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        >
                                            {availableTimezones.map(tz => (
                                                <option key={tz} value={tz}>{tz}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                
                                {scheduledDate && scheduledTime && (
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                        <p className="text-sm text-green-800 font-medium">
                                            ⏰ This blog will be automatically published on{' '}
                                            <span className="font-bold">
                                                {new Date(`${scheduledDate}T${scheduledTime}`).toLocaleDateString('en-US', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </span>{' '}
                                            ({timezone})
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    
                    {/* Warning for unuploaded image */}
                    {selectedFile && !imageUrl && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 19c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-red-800">
                                        Image Not Uploaded
                                    </h3>
                                    <div className="mt-2 text-sm text-red-700">
                                        <p>
                                            You have selected an image file ({selectedFile.name}) but it hasn&apos;t been uploaded to Supabase Storage yet. Please click the &quot;Upload Image&quot; button before publishing your blog post.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Form Actions */}
                <div className="flex gap-4 pt-6 border-t">
                    <button 
                        type="submit" 
                        onClick={() => {
                            console.log('🚀 BUTTON CLICK: User clicked the main action button');
                            console.log('📊 BUTTON CLICK: Current form state:', {
                                action: id ? 'UPDATE' : 'CREATE',
                                isScheduled,
                                willPublish: isScheduled ? false : isPublished,
                                scheduledDate,
                                scheduledTime,
                                timezone,
                                hasImage: !!imageUrl,
                                imageUrl: imageUrl || 'No image'
                            });
                            
                            if (isScheduled) {
                                console.log('⏰ BUTTON CLICK: User is SCHEDULING the blog post');
                                console.log(`📅 BUTTON CLICK: Will publish on ${scheduledDate} at ${scheduledTime} ${timezone}`);
                            } else if (isPublished) {
                                console.log('� BUTTON CLICK: User is PUBLISHING the blog post immediately');
                            } else {
                                console.log('💾 BUTTON CLICK: User is saving as DRAFT');
                            }
                        }}
                        className={`font-bold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg ${
                            selectedFile && !imageUrl 
                                ? 'bg-gray-400 cursor-not-allowed text-white' 
                                : 'bg-black hover:bg-gray-800 text-white'
                        }`}
                        disabled={!!(selectedFile && !imageUrl) || (isScheduled && (!scheduledDate || !scheduledTime))}
                        title={
                            selectedFile && !imageUrl 
                                ? 'Please upload your selected image first' 
                                : (isScheduled && (!scheduledDate || !scheduledTime))
                                ? 'Please select both date and time for scheduling'
                                : ''
                        }
                    >
                        {selectedFile && !imageUrl 
                            ? '⚠️ Upload Image First' 
                            : isScheduled
                            ? (id ? 'Update & Schedule Blog' : 'Create & Schedule Blog')
                            : (id ? 'Update Blog Post' : 'Create Blog Post')
                        }
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
