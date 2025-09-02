import { useState } from 'react';
import Image from 'next/image';

const WriteForUsPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        topic: '',
        authorName: '',
        authorEmail: '',
        authorBio: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const [wordCount, setWordCount] = useState(0);

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    const WORD_LIMIT = 1200;

    const countWords = (text: string) => {
        const trimmed = text.trim();
        if (!trimmed) return 0;
        return trimmed.split(/\s+/).length;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        if (name === 'content') {
            const words = countWords(value);
            if (words <= WORD_LIMIT) {
                setFormData(prev => ({ ...prev, [name]: value }));
                setWordCount(words);
            } else {
                const truncated = value.trim().split(/\s+/).slice(0, WORD_LIMIT).join(' ');
                setFormData(prev => ({ ...prev, [name]: truncated }));
                setWordCount(WORD_LIMIT);
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            alert('Please select a valid image file (JPEG, PNG, GIF, or WebP)');
            return;
        }

        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            alert('File size must be less than 5MB');
            return;
        }

        setSelectedFile(file);

        const reader = new FileReader();
        reader.onload = (event) => setImagePreview(event.target?.result as string);
        reader.readAsDataURL(file);
    };

    const handleImageUpload = async () => {
        if (!selectedFile) return;
        setUploading(true);
        try {
            const form = new FormData();
            form.append('image', selectedFile);
            const res = await fetch(`${API_BASE_URL}/api/upload/public-image`, {
                method: 'POST',
                body: form
            });
            if (res.ok) {
                const data = await res.json();
                setImageUrl(data.imageUrl);
                setSelectedFile(null);
                const input = document.getElementById('submission-image-upload') as HTMLInputElement | null;
                if (input) input.value = '';
            } else {
                const text = await res.text();
                alert(`Failed to upload image. ${text}`);
            }
        } catch {
            alert('Network error while uploading image. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        // Validation
        if (!formData.title.trim() || !formData.content.trim() || !formData.topic || 
            !formData.authorName.trim() || !formData.authorEmail.trim()) {
            setSubmitMessage({ type: 'error', text: 'Please fill in all required fields.' });
            setIsSubmitting(false);
            return;
        }

        if (countWords(formData.content) > WORD_LIMIT) {
            setSubmitMessage({ type: 'error', text: `Article content must not exceed ${WORD_LIMIT} words.` });
            setIsSubmitting(false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.authorEmail)) {
            setSubmitMessage({ type: 'error', text: 'Please enter a valid email address.' });
            setIsSubmitting(false);
            return;
        }

        // Prevent submitting if a file is selected but not uploaded
        if (selectedFile && !imageUrl) {
            setSubmitMessage({ type: 'error', text: 'You selected an image but did not upload it. Please click "Upload Image" first.' });
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/blog-submissions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, imageUrl }),
            });

            if (response.ok) {
                setSubmitMessage({ 
                    type: 'success', 
                    text: 'Thank you for your submission! Your article has been sent for review and you will be notified once it\'s approved.' 
                });
                setFormData({
                    title: '',
                    content: '',
                    topic: '',
                    authorName: '',
                    authorEmail: '',
                    authorBio: ''
                });
                setWordCount(0);
                setSelectedFile(null);
                setImagePreview('');
                setImageUrl('');
            } else {
                const errorData = await response.json();
                setSubmitMessage({ 
                    type: 'error', 
                    text: errorData.error || 'Failed to submit article. Please try again.' 
                });
            }
        } catch {
            setSubmitMessage({ 
                type: 'error', 
                text: 'Network error. Please check your connection and try again.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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

    return (
        <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: '100px' }}>
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 emilys-candy-regular">
                            Write for Us
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-6">
                            Share your knowledge and insights with the social work community
                        </p>
                        <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                            <h2 className="text-lg font-semibold text-blue-800 mb-3">Submission Guidelines</h2>
                            <ul className="text-blue-700 text-left space-y-2">
                                <li>• Articles should be original and relevant to social work practice</li>
                                <li>• Maximum {WORD_LIMIT} words for article content</li>
                                <li>• Include your professional bio and contact information</li>
                                <li>• Articles will be reviewed by our editorial team</li>
                                <li>• We reserve the right to edit for clarity and length</li>
                            </ul>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-8">
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <div>
                                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
                                <p className="text-yellow-700">
                                    Articles published on this platform represent the views and opinions of the individual authors 
                                    and do not necessarily reflect the official position or policies of We Social Workers UK. 
                                    Authors are responsible for the accuracy and content of their submissions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Submission Form */}
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
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
                                    placeholder="Enter your article title"
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
                                    <option value="">Select a topic category</option>
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
                                        rows={10}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                                        placeholder="Write your article content here..."
                                    />
                                    <div className={`absolute bottom-3 right-3 text-sm ${
                                        wordCount > WORD_LIMIT * 0.9 ? 'text-red-500' : 'text-gray-500'
                                    }`}>
                                        {wordCount}/{WORD_LIMIT} words
                                    </div>
                                </div>
                                {wordCount > WORD_LIMIT * 0.9 && (
                                    <p className="text-sm text-red-500 mt-1">
                                        You are approaching the word limit.
                                    </p>
                                )}
                            </div>

                            {/* Author Information */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="authorName"
                                        name="authorName"
                                        value={formData.authorName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="authorEmail" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="authorEmail"
                                        name="authorEmail"
                                        value={formData.authorEmail}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>

                            {/* Image Upload (Optional) - Similar UX to Admin */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Featured Image <span className="text-gray-500">(Optional)</span>
                                </label>
                                {/* Preview */}
                                {imagePreview && (
                                    <div className="relative w-full h-56 border border-gray-200 rounded-lg overflow-hidden mb-4">
                                        <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                                    </div>
                                )}
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
                                                id="submission-image-upload"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileSelect}
                                                className="hidden"
                                            />
                                            <label htmlFor="submission-image-upload" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                                                Choose File
                                            </label>
                                            {selectedFile && (
                                                <button type="button" onClick={handleImageUpload} disabled={uploading} className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                                                    {uploading ? 'Uploading...' : 'Upload Image'}
                                                </button>
                                            )}
                                        </div>
                                        {selectedFile && !imageUrl && (
                                            <p className="text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg p-2">File selected but not uploaded yet. Click &quot;Upload Image&quot;.</p>
                                        )}
                                        {imageUrl && (
                                            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-2">Image uploaded successfully!</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Author Bio */}
                            <div>
                                <label htmlFor="authorBio" className="block text-sm font-medium text-gray-700 mb-2">
                                    Author Bio <span className="text-gray-500">(Optional)</span>
                                </label>
                                <textarea
                                    id="authorBio"
                                    name="authorBio"
                                    value={formData.authorBio}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                                    placeholder="Tell us about yourself and your professional background..."
                                />
                            </div>

                            {/* Submit Message */}
                            {submitMessage && (
                                <div className={`p-4 rounded-lg ${
                                    submitMessage.type === 'success' 
                                        ? 'bg-green-50 border border-green-200 text-green-700' 
                                        : 'bg-red-50 border border-red-200 text-red-700'
                                }`}>
                                    <div className="flex items-center">
                                        <svg className={`w-5 h-5 mr-2 ${
                                            submitMessage.type === 'success' ? 'text-green-500' : 'text-red-500'
                                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {submitMessage.type === 'success' ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            )}
                                        </svg>
                                        {submitMessage.text}
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                                        isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </div>
                                    ) : (
                                        'Submit Article'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default WriteForUsPage;
