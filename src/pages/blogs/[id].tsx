// src/pages/blogs/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import CommentSection from '../../../components/CommentSection';

type Blog = {
    id: string;
    title: string;
    author: string;
    content: string; // Assuming content is safe HTML from your admin editor
    imageUrl?: string;
    createdAt: string;
};
type BlogPostPageProps = { post: Blog };

type LayoutSettings = {
    thumbnail: {
        x: number; // X position as percentage
        y: number; // Y position as percentage
        size: number; // Size as percentage
        height: number; // Height in pixels
    };
    title: {
        x: number; // X position as percentage
        y: number; // Y position as percentage
        size: number; // Font size as percentage
        fontSize: number;
    };
    content: {
        x: number; // X position as percentage
        y: number; // Y position as percentage
        size: number; // Size as percentage
        fontSize: number;
        lineHeight: number;
    };
};

export default function BlogPostPage({ post }: BlogPostPageProps) {
    console.log('🎯 BLOG DISPLAY: Rendering blog post page');
    console.log('📰 Post data:', post);
    console.log('🖼️ Image URL from post:', post?.imageUrl);
    
    // Hardcoded layout settings - consistent across all blog pages
    const settings: LayoutSettings = {
        thumbnail: {
            x: 24, // X position as percentage
            y: 17, // Y position as percentage
            size: 51, // Size as percentage
            height: 500
        },
        title: {
            x: 39, // X position as percentage
            y: 10, // Y position as percentage
            size: 100, // Size as percentage
            fontSize: 48
        },
        content: {
            x: 15, // X position as percentage
            y: 59, // Y position as percentage (moved down for better spacing)
            size: 85, // Size as percentage
            fontSize: 18,
            lineHeight: 1.6
        }
    };

    if (!post) return <p>Loading...</p>;

    const postDate = new Date(post.createdAt).toLocaleDateString('en-UK', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    // Helper function to get content snippet for subtitle
    const getContentSnippet = (content: string, maxLength: number = 150) => {
        // Remove HTML tags and get plain text
        const plainText = content.replace(/<[^>]*>/g, '');
        return plainText.length > maxLength 
            ? plainText.substring(0, maxLength) + '...'
            : plainText;
    };
    // Helper functions for dynamic styling
    const getThumbnailStyle = () => {
        return {
            position: 'absolute' as const,
            left: `${settings.thumbnail.x}%`,
            top: `${settings.thumbnail.y}%`,
            width: `${settings.thumbnail.size}%`,
            height: `${settings.thumbnail.height}px`,
            zIndex: 1
        };
    };

    const getTitleStyle = () => {
        return {
            position: 'absolute' as const,
            left: `${settings.title.x}%`,
            top: `${settings.title.y}%`,
            fontSize: `${settings.title.fontSize * (settings.title.size / 100)}px`,
            zIndex: 2,
            width: `${Math.min(100 - settings.title.x, 80)}%` // Ensure it doesn't overflow
        };
    };

    const getContentStyle = () => {
        return {
            position: 'absolute' as const,
            left: `${settings.content.x}%`,
            top: `${settings.content.y}%`,
            fontSize: `${settings.content.fontSize * (settings.content.size / 100)}px`,
            lineHeight: settings.content.lineHeight,
            zIndex: 3,
            width: `${Math.min(100 - settings.content.x, 80)}%`, // Ensure it doesn't overflow
        };
    };

    return (
        <div className="bg-white" style={{ minHeight: '200vh' }}>
            {/* Main Container - Fixed height container for absolute positioning */}
            <div className="relative w-full bg-white shadow-sm" style={{ height: '150vh', paddingBottom: '2rem' }}>
                {/* Thumbnail */}
                {post.imageUrl ? (
                    <div 
                        className="overflow-hidden rounded-lg border shadow-sm"
                        style={getThumbnailStyle()}
                    >
                        <Image 
                            src={(() => {
                                const finalImageUrl = post.imageUrl.startsWith('http') ? post.imageUrl : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}${post.imageUrl}`;
                                console.log('🖼️ IMAGE RENDER: Original imageUrl:', post.imageUrl);
                                console.log('🔗 IMAGE RENDER: Final URL being used:', finalImageUrl);
                                console.log('🌐 IMAGE RENDER: API_URL env var:', process.env.NEXT_PUBLIC_API_URL);
                                return finalImageUrl;
                            })()} 
                            alt={post.title} 
                            fill
                            className="object-cover"
                            priority
                            onLoad={() => console.log('✅ IMAGE LOADED successfully')}
                            onError={(e) => console.error('❌ IMAGE LOAD ERROR:', e)}
                        />
                    </div>
                ) : (
                    <div 
                        className="bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden rounded-lg border shadow-sm"
                        style={getThumbnailStyle()}
                    >
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-gray-500 text-lg">Featured Image</p>
                        </div>
                    </div>
                )}

                {/* Title */}
                <h1 
                    className="font-bold text-gray-900 leading-tight font-serif"
                    style={getTitleStyle()}
                >
                    {post.title}
                </h1>

                {/* Content */}
                <div
                    className="text-gray-800 font-serif"
                    style={getContentStyle()}
                >
                    {/* Subtitle/Description */}
                    <div className="mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium opacity-80">
                            {getContentSnippet(post.content, 200)}
                        </p>
                    </div>

                    {/* Author and Date Information */}
                    <div className="border-b border-gray-200 pb-6 mb-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-600">
                            <div className="flex items-center gap-4 mb-4 md:mb-0">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="font-semibold text-red-600 uppercase tracking-wide">
                                        Updated
                                    </span>
                                    <span className="text-red-600">-</span>
                                    <span>
                                        {postDate} 09:21 pm BST
                                    </span>
                                    <span>- London</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-800 uppercase tracking-wide text-sm">
                                    {post.author}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                            </svg>
                            <span className="font-medium">SHARE</span>
                        </button>
                        
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <span className="font-medium">READ LATER</span>
                        </button>
                        
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                            <span className="font-medium">PRINT</span>
                        </button>
                    </div>

                    {/* Main Body Content */}
                    <div className="max-w-none mb-12">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
            </div>

            {/* Comment Section - Outside absolute positioning */}
            <div style={{ marginTop: '4rem' }}>
                <CommentSection blogId={post.id} />
            </div>
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
