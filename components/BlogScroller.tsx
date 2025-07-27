
// components/BlogScroller.tsx
import Link from 'next/link';
import Image from 'next/image';

type Blog = {
    id: string;
    title: string;
    author: string;
    content: string;
    imageUrl?: string;
    createdAt: string;
};

type BlogScrollerProps = {
    blogs: Blog[];
};

export const BlogScroller = ({ blogs }: BlogScrollerProps) => {
    // Ensure blogs is an array before mapping
    const blogsArray = Array.isArray(blogs) ? blogs : [];
    
    if (blogsArray.length === 0) {
        return (
            <div className="w-full py-20 text-center">
                <div className="max-w-md mx-auto space-y-8 animate-soft-scale">
                    <div className="w-20 h-20 mx-auto bg-gradient-peaceful rounded-3xl flex items-center justify-center hover-gentle shadow-peaceful">
                        <svg className="w-10 h-10 transition-all duration-300" fill="#ffffff" stroke="#ffffff" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="heading-4 text-primary mb-3 font-display autour-one-regular">Resources Coming Soon</h3>
                        <p className="text-text-secondary font-body lexend-regular">We&apos;re preparing valuable insights and guidance to support your social work journey.</p>
                    </div>
                </div>
            </div>
        );
    }

    // Helper function to get snippet
    const getSnippet = (content: string) => {
        return content.substring(0, 140) + '...';
    };

    // Helper function to format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-UK', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    // Helper function to calculate reading time
    const getReadingTime = (content: string) => {
        return Math.ceil(content.length / 200);
    };

    // Array of professional fallback images
    const fallbackImages = [
        "/Friendly Medical Professional Illustration-Photoroom.png",
        "/Cartoon Hotel Receptionist Illustration-Photoroom.png",
        "/Guided Tour-Photoroom.png",
        "/Professional Cartoon Man in Suit-Photoroom.png",
        "/Confident Professional Woman Illustration-Photoroom.png",
        "/Confident Woman Illustration-Photoroom.png"
    ];

    // Helper function to get fallback image
    const getFallbackImage = (blogId: string) => {
        return fallbackImages[parseInt(blogId) % fallbackImages.length];
    };

    return (
        <div className="w-full py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {blogsArray.slice(0, 6).map((blog) => (
                    <Link key={blog.id} href={`/blogs/${blog.id}`} className="group block">
                        <article className="relative bg-white rounded-3xl overflow-hidden shadow-peaceful hover:shadow-caring transition-all duration-500 group-hover:-translate-y-2 border border-white/20 backdrop-blur-sm h-full">
                            {/* Caring accent line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-warm"></div>
                            
                            {/* Image Section with overlay */}
                            <div className="relative h-56 overflow-hidden">
                                {blog.imageUrl ? (
                                    <>
                                        <Image 
                                            src={blog.imageUrl.startsWith('http') ? blog.imageUrl : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}${blog.imageUrl}`} 
                                            alt={blog.title} 
                                            fill
                                            className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                            style={{ objectPosition: 'center 20%' }}
                                        />
                                        {/* Caring overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500"></div>
                                    </>
                                ) : (
                                    <div className="relative w-full h-full bg-gradient-to-br from-surface-warm via-primary/5 to-secondary/10">
                                        {/* Caring pattern overlay */}
                                        <div className="absolute inset-0 bg-caring-pattern opacity-10"></div>
                                        <div className="flex items-center justify-center h-full p-6 relative z-10">
                                            <div className="text-center space-y-4">
                                                <Image
                                                    src={getFallbackImage(blog.id)}
                                                    alt="Professional social worker illustration"
                                                    width={100}
                                                    height={120}
                                                    className="w-auto h-24 object-contain mx-auto group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="w-12 h-1 bg-gradient-peaceful rounded-full mx-auto opacity-60"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Floating expertise badge */}
                                <div className="absolute top-4 right-4">
                                    <div className="glass-trust px-4 py-2 rounded-2xl border border-white/30 shadow-soft">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-gradient-warm rounded-full animate-pulse"></div>
                                            <span className="text-xs font-semibold text-primary font-body emilys-candy-regular">Expert Insight</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Reading time badge */}
                                <div className="absolute bottom-4 left-4">
                                    <div className="flex items-center gap-2 glass-trust px-3 py-1.5 rounded-xl border border-white/20">
                                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-xs font-medium text-primary font-body">{getReadingTime(blog.content)} min read</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section with caring spacing */}
                            <div className="p-8 space-y-6 flex flex-col flex-grow">
                                {/* Author section with warmth */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-peaceful rounded-2xl flex items-center justify-center shadow-soft">
                                        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-primary text-sm font-body emilys-candy-regular">{blog.author}</p>
                                        <p className="text-xs text-text-muted font-body">{formatDate(blog.createdAt)}</p>
                                    </div>
                                </div>

                                {/* Title with caring emphasis */}
                                <div className="space-y-3 flex-grow">
                                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-tight font-display emilys-candy-regular">
                                        {blog.title}
                                    </h3>
                                    
                                    {/* Caring divider */}
                                    <div className="flex items-center gap-3">
                                        <div className="h-0.5 flex-1 bg-gradient-to-r from-primary/20 via-secondary/30 to-transparent rounded-full"></div>
                                        <div className="w-2 h-2 bg-gradient-warm rounded-full"></div>
                                    </div>
                                    
                                    {/* Excerpt with breathing room */}
                                    <p className="text-text-secondary line-clamp-3 leading-relaxed text-sm font-body">
                                        {getSnippet(blog.content)}
                                    </p>
                                </div>

                                {/* Action section with personality */}
                                <div className="flex items-center justify-between pt-4">
                                    <div className="flex items-center gap-3 text-text-secondary group-hover:text-primary transition-all duration-300">
                                        <span className="font-semibold text-sm font-body emilys-candy-regular">Discover More</span>
                                        <div className="w-8 h-8 bg-gradient-to-br from-surface-warm to-primary/10 rounded-xl flex items-center justify-center group-hover:from-gradient-secondary group-hover:to-accent shadow-soft group-hover:shadow-caring transition-all duration-300">
                                            <svg className="w-4 h-4 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Caring indicator */}
                                    <div className="flex items-center gap-1">
                                        <div className="w-1 h-1 bg-gradient-warm rounded-full animate-pulse"></div>
                                        <div className="w-1 h-1 bg-gradient-peaceful rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-1 h-1 bg-gradient-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Subtle caring glow effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 pointer-events-none"></div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
};
