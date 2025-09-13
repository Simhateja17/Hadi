// src/components/BlogCard.tsx
import Link from 'next/link';
import Image from 'next/image';

// Match the type definition to your backend's blog model
type Blog = {
    id: string;
    title: string;
    author: string;
    content: string;
    imageUrl?: string;
    createdAt: string;
};

export const BlogCard = ({ blog }: { blog: Blog }) => {
    // Remove any HTML tags and get clean text for snippet
    const plainText = blog.content.replace(/<[^>]*>/g, '');
    const snippet = plainText.substring(0, 140) + '...';
    const postDate = new Date(blog.createdAt).toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const readingTime = Math.ceil(blog.content.length / 200);

    // Array of professional fallback images
    const fallbackImages = [
        "/Friendly Medical Professional Illustration-Photoroom.png",
        "/Friendly_Pharmacist_at_Work-removebg-preview.png",
        "/Cartoon Hotel Receptionist Illustration-Photoroom.png",
        "/Guided Tour-Photoroom.png"
    ];

    // Select a consistent fallback image based on blog ID
    const fallbackImage = fallbackImages[parseInt(blog.id) % fallbackImages.length];

    return (
        <Link href={`/blogs/${blog.id}`} className="group block">
            <article className="card overflow-hidden h-full relative">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-surface-muted">
                    {blog.imageUrl ? (
                        <Image 
                            src={blog.imageUrl.startsWith('http') ? blog.imageUrl : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}${blog.imageUrl}`} 
                            alt={blog.title} 
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="relative w-full h-full">
                            {/* Professional illustration as fallback */}
                            <div className="flex items-center justify-center h-full p-6">
                                <Image
                                    src={fallbackImage}
                                    alt="Professional social worker illustration"
                                    width={160}
                                    height={200}
                                    className="w-auto h-full max-h-48 object-contain"
                                />
                            </div>
                        </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center px-4 py-2 rounded-full body-small font-medium bg-surface/90 backdrop-blur-sm text-primary border border-white/20">
                            Social Work
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-6">
                    {/* Meta Information */}
                    <div className="flex items-center justify-between body-small">
                        <div className="flex items-center gap-2 text-text-muted">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="font-medium lexend-medium">{blog.author}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-text-muted">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="lexend-regular">{postDate}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="heading-4 text-primary group-hover:text-secondary transition-colors duration-300 line-clamp-2 leading-tight autour-one-regular">
                        {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-text-secondary line-clamp-3 leading-relaxed lexend-regular">
                        {snippet}
                    </p>

                    {/* Action Section */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-3 text-text-secondary group-hover:text-primary transition-colors">
                            <span className="font-medium lexend-medium">Read Article</span>
                            <div className="w-8 h-8 bg-surface-muted rounded-lg flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
                                <svg className="w-4 h-4 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                        
                        {/* Reading Time Estimate */}
                        <div className="flex items-center gap-2 body-small text-text-muted">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span className="lexend-regular">{readingTime} min read</span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};
