

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
                <div className="max-w-md mx-auto space-y-8 animate-fade-in">
                    <div className="w-20 h-20 mx-auto bg-british-blue rounded-2xl flex items-center justify-center shadow-smooth">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="heading-4 mb-3 text-british-blue">Resources Coming Soon</h3>
                        <p className="body-medium text-gray-700">
                            We&apos;re preparing valuable insights and guidance to support your social work journey.
                        </p>
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

    // Union Jack themed backgrounds instead of character images
    const getUnionJackBackground = (index: number) => {
        const patterns = [
            // Pattern 1: Blue with red cross
            <div key="pattern1" className="w-full h-full bg-british-blue relative">
                <div className="absolute top-1/2 left-0 right-0 h-3 bg-british-red transform -translate-y-1/2"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-3 bg-british-red transform -translate-x-1/2"></div>
            </div>,
            
            // Pattern 2: White with blue borders
            <div key="pattern2" className="w-full h-full bg-white border-4 border-british-blue relative">
                <div className="absolute inset-4 border-2 border-british-red"></div>
            </div>,
            
            // Pattern 3: Red with white cross
            <div key="pattern3" className="w-full h-full bg-british-red relative">
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-white transform -translate-y-1/2"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-white transform -translate-x-1/2"></div>
            </div>,
            
            // Pattern 4: Diagonal stripes
            <div key="pattern4" className="w-full h-full bg-british-blue relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,100" stroke="#C8102E" strokeWidth="8"/>
                    <path d="M0,100 L100,0" stroke="white" strokeWidth="4"/>
                </svg>
            </div>
        ];
        
        return patterns[index % patterns.length];
    };

    return (
        <div className="w-full py-12 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {blogsArray.slice(0, 6).map((blog, index) => (
                    <Link key={blog.id} href={`/blogs/${blog.id}`} className="group block">
                        <article className="card card-elevated hover-lift h-full animate-fade-in-up border-2 border-british-blue" style={{ animationDelay: `${index * 0.1}s` }}>
                            {/* Union Jack themed header instead of image */}
                            <div className="relative h-56 overflow-hidden rounded-t-lg">
                                {blog.imageUrl ? (
                                    // Display actual blog thumbnail image
                                    <div className="relative w-full h-full">
                                        <Image 
                                            src={blog.imageUrl.startsWith('http') ? blog.imageUrl : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}${blog.imageUrl}`} 
                                            alt={blog.title} 
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Optional subtle UK themed overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-british-blue/10 to-british-red/10"></div>
                                    </div>
                                ) : (
                                    // Union Jack themed background instead of character photos
                                    <div className="relative w-full h-full">
                                        {getUnionJackBackground(index)}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white bg-opacity-95 rounded-xl p-3 text-center">
                                                <h4 className="text-british-blue font-bold text-sm">🇬🇧 UK</h4>
                                                <p className="text-british-red text-xs font-bold">Social Work</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Reading time badge */}
                                <div className="absolute top-4 right-4">
                                    <div className="flex items-center gap-2 bg-white bg-opacity-95 px-3 py-1.5 rounded-lg shadow-sm border border-british-blue">
                                        <svg className="w-3 h-3 text-british-red" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-xs font-medium text-british-blue">{getReadingTime(blog.content)} min read</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 space-y-4 flex flex-col flex-grow">
                                {/* Author section */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-british-red rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-british-blue body-small">{blog.author}</p>
                                        <p className="text-xs text-gray-500">{formatDate(blog.createdAt)}</p>
                                    </div>
                                </div>

                                {/* Title and content */}
                                <div className="space-y-3 flex-grow">
                                    <h3 className="heading-5 text-british-blue group-hover:text-british-red transition-colors duration-200 line-clamp-2 leading-tight">
                                        {blog.title}
                                    </h3>
                                    
                                    <p className="body-medium line-clamp-3 leading-relaxed text-gray-700">
                                        {getSnippet(blog.content)}
                                    </p>
                                </div>

                                {/* Read more section */}
                                <div className="flex items-center justify-between pt-4 border-t-2 border-british-blue">
                                    <span className="body-small font-bold text-british-red group-hover:text-british-blue">
                                        Read More 🇬🇧
                                    </span>
                                    <div className="w-8 h-8 bg-british-blue rounded-lg flex items-center justify-center group-hover:bg-british-red transition-colors duration-200">
                                        <svg className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
};
