
// components/BlogScroller.tsx
import Link from 'next/link';

type Blog = {
    id: string;
    title: string;
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
                        <h3 className="heading-4 text-primary mb-3 font-display">Resources Coming Soon</h3>
                        <p className="text-text-secondary font-body">We&apos;re preparing valuable insights and guidance to support your social work journey.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {blogsArray.slice(0, 9).map((blog, index) => (
                    <Link key={blog.id} href={`/blogs/${blog.id}`} className="group">
                        <div className="card-modern hover-caring hover-peaceful group relative overflow-hidden h-full">
                            {/* Caring accent */}
                            <div className="absolute top-4 right-4 w-8 h-8 opacity-30 group-hover:opacity-60 transition-all duration-300">
                                <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="space-y-6 h-full flex flex-col">
                                {/* Community indicator */}
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-16 bg-gradient-peaceful rounded-full"></div>
                                    <span className="body-small text-text-muted font-medium font-body">Community Resource #{index + 1}</span>
                                </div>
                                
                                <h3 className="heading-4 text-primary group-hover:text-accent transition-colors duration-300 line-clamp-3 leading-tight font-display flex-grow">
                                    {blog.title}
                                </h3>
                                
                                <div className="flex items-center justify-between pt-4 mt-auto">
                                    <span className="body-medium font-medium text-text-secondary group-hover:text-primary transition-colors font-body">
                                        Read & Learn
                                    </span>
                                    <div className="w-10 h-10 bg-surface-warm rounded-2xl flex items-center justify-center group-hover:bg-gradient-secondary transition-all duration-300 shadow-soft">
                                        <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
