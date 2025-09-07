// src/pages/blogs/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PAGE_PADDING_TOP } from '../../config/pagePadding';
import { useState } from 'react';
import CommentSection from '../../../components/CommentSection';

type Blog = {
    id: string;
    title: string;
    author: string;
    content: string;
    imageUrl?: string;
    createdAt: string;
};

type BlogPostPageProps = { 
    post: Blog 
};

export default function BlogPostPage({ post }: BlogPostPageProps) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isSharing, setIsSharing] = useState(false);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const postDate = new Date(post.createdAt).toLocaleDateString('en-UK', {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    });

    // Calculate estimated reading time
    const getReadingTime = (content: string) => {
        const wordsPerMinute = 200;
        const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
        const minutes = Math.ceil(wordCount / wordsPerMinute);
        return minutes;
    };

    // Get content snippet for meta description
    const getContentSnippet = (content: string, maxLength: number = 160) => {
        const plainText = content.replace(/<[^>]*>/g, '');
        return plainText.length > maxLength 
            ? plainText.substring(0, maxLength) + '...'
            : plainText;
    };

    const handleShare = async () => {
        setIsSharing(true);
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: getContentSnippet(post.content),
                    url: window.location.href,
                });
            } catch {
                console.log('Share cancelled');
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
        setIsSharing(false);
    };

    const readingTime = getReadingTime(post.content);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center" style={{ paddingTop: PAGE_PADDING_TOP.blogs }}>
            {/* Navigation Breadcrumb */}
            <div className="bg-white border-b border-gray-200 w-full">
                <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center justify-center flex-wrap gap-2 text-sm text-gray-500 text-center">
                        <Link href="/" className="hover:text-gray-700 transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <Link href="/blogs" className="hover:text-gray-700 transition-colors">
                            Blogs
                        </Link>
                        <span>/</span>
                        <span className="text-gray-900 truncate">{post.title}</span>
                    </nav>
                </div>
            </div>

            {/* Main Article */}
            <article className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12 text-center">
                {/* Article Header */}
                <header className="mb-12">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8 max-w-4xl mx-auto text-center">
                            {post.title}
                        </h1>
                        
                        {/* Article Meta */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 mb-8 max-w-2xl mx-auto">
                            <div className="flex items-center gap-4 justify-center">
                                {/* Author Avatar */}
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xl">
                                    {post.author.charAt(0).toUpperCase()}
                                </div>
                                
                                <div className="flex flex-col text-center sm:text-left">
                                    <span className="font-semibold text-gray-900 text-lg">{post.author}</span>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 justify-center sm:justify-start">
                                        <time dateTime={post.createdAt}>{postDate}</time>
                                        <span>•</span>
                                        <span>{readingTime} min read</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex items-center gap-3 justify-center">
                                <button
                                    onClick={handleShare}
                                    disabled={isSharing}
                                    className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                    </svg>
                                    <span>Share</span>
                                </button>
                                
                                <button
                                    onClick={() => setIsBookmarked(!isBookmarked)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors border ${
                                        isBookmarked 
                                            ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 border-blue-300' 
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-gray-300'
                                    }`}
                                >
                                    <svg className="w-5 h-5" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                    <span>Save</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {post.imageUrl && (
                        <div className="mb-12">
                            <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                                <Image
                                    src={post.imageUrl.startsWith('http') ? post.imageUrl : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}${post.imageUrl}`}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                />
                            </div>
                        </div>
                    )}
                </header>

                {/* Article Content */}
                <div className="prose prose-lg prose-gray max-w-4xl mx-auto text-left">
                    <div 
                        className="article-content"
                        dangerouslySetInnerHTML={{ __html: post.content }} 
                    />
                </div>

                {/* Article Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-200 max-w-4xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xl">
                                {post.author.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 text-lg">{post.author}</h3>
                                <p className="text-gray-600">Social Work Professional</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600">Share this article:</span>
                            <div className="flex items-center gap-2">
                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </button>
                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </footer>
            </article>

            {/* Comments Section */}
            <div className="bg-white w-full">
                <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-4xl mx-auto">
                        <CommentSection blogId={post.id} />
                    </div>
                </div>
            </div>

            {/* Custom Styles for Article Content */}
            <style jsx global>{`
                .article-content {
                    font-family: 'Georgia', 'Times New Roman', serif;
                    line-height: 1.8;
                    color: #374151;
                    max-width: 100%;
                    margin: 0 auto;
                }
                
                .article-content h1,
                .article-content h2,
                .article-content h3,
                .article-content h4,
                .article-content h5,
                .article-content h6 {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    font-weight: 700;
                    color: #111827;
                    margin-top: 2.5rem;
                    margin-bottom: 1.5rem;
                    text-align: left;
                }
                
                .article-content h1 { font-size: 2.5rem; }
                .article-content h2 { font-size: 2rem; }
                .article-content h3 { font-size: 1.75rem; }
                .article-content h4 { font-size: 1.5rem; }
                
                .article-content p {
                    margin-bottom: 1.75rem;
                    font-size: 1.125rem;
                    text-align: left;
                }
                
                .article-content blockquote {
                    border-left: 4px solid #3B82F6;
                    padding-left: 2rem;
                    margin: 2.5rem 0;
                    font-style: italic;
                    color: #6B7280;
                    background-color: #F9FAFB;
                    padding: 2rem;
                    border-radius: 0.75rem;
                    text-align: left;
                }
                
                .article-content ul,
                .article-content ol {
                    margin: 2rem 0;
                    padding-left: 2rem;
                    text-align: left;
                }
                
                .article-content li {
                    margin-bottom: 0.75rem;
                    font-size: 1.125rem;
                    text-align: left;
                }
                
                .article-content a {
                    color: #3B82F6;
                    text-decoration: underline;
                    text-decoration-color: #93C5FD;
                    text-underline-offset: 2px;
                }
                
                .article-content a:hover {
                    color: #1D4ED8;
                    text-decoration-color: #3B82F6;
                }
                
                .article-content code {
                    background-color: #F3F4F6;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.25rem;
                    font-size: 0.875rem;
                    font-family: 'Monaco', 'Menlo', monospace;
                }
                
                .article-content pre {
                    background-color: #1F2937;
                    color: #F9FAFB;
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    overflow-x: auto;
                    margin: 2rem 0;
                }
                
                .article-content img {
                    border-radius: 0.5rem;
                    margin: 2rem auto;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                
                @media (max-width: 768px) {
                    .article-content h1 { font-size: 2rem; }
                    .article-content h2 { font-size: 1.75rem; }
                    .article-content h3 { font-size: 1.5rem; }
                    .article-content h4 { font-size: 1.25rem; }
                    .article-content p { font-size: 1rem; }
                    .article-content li { font-size: 1rem; }
                    .article-content blockquote { padding: 1.5rem; }
                }
                
                @media (max-width: 640px) {
                    .article-content h1 { font-size: 1.875rem; }
                    .article-content h2 { font-size: 1.5rem; }
                    .article-content h3 { font-size: 1.25rem; }
                    .article-content h4 { font-size: 1.125rem; }
                    .article-content p { font-size: 1rem; }
                    .article-content li { font-size: 1rem; }
                    .article-content blockquote { padding: 1.25rem; }
                }
            `}</style>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
        const res = await fetch(`${baseUrl}/api/blogs`);
        if (!res.ok) {
            console.error('Failed to fetch blogs:', res.status, res.statusText);
            return { paths: [], fallback: 'blocking' };
        }
        
        const data = await res.json();
        console.log('API Response:', data); // Debug log
        
        // Check if data is an array
        const blogs: Blog[] = Array.isArray(data) ? data : [];
        
        if (blogs.length === 0) {
            console.warn('No blogs found or blogs is not an array');
            return { paths: [], fallback: 'blocking' };
        }
        
        const paths = blogs.map((blog) => ({ params: { id: blog.id.toString() } }));
        return { paths, fallback: 'blocking' }; // `fallback: 'blocking'` allows for newly created blogs
    } catch (error) {
        console.error('Error in getStaticPaths:', error);
        // During build time, if backend is not available, return empty paths with fallback
        return { paths: [], fallback: 'blocking' };
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        if (!params?.id) {
            return { notFound: true };
        }
        
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
        const res = await fetch(`${baseUrl}/api/blogs/${params.id}`);
        if (!res.ok) {
            console.error(`Failed to fetch blog ${params.id}:`, res.status, res.statusText);
            return { notFound: true };
        }
        
        const post: Blog = await res.json();
        return { props: { post }, revalidate: 60 };
    } catch (error) {
        console.error('Error in getStaticProps:', error);
        return { notFound: true };
    }
};
