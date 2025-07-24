
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
                <div className="max-w-md mx-auto space-y-8">
                    <div className="w-20 h-20 mx-auto bg-primary-light rounded-2xl flex items-center justify-center">
                        <svg className="w-10 h-10 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <p className="text-body text-text-muted">No articles available at the moment.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full overflow-hidden py-12">
            <div className="flex space-x-8">
                {blogsArray.map((blog) => (
                    <Link key={blog.id} href={`/blogs/${blog.id}`} className="flex-shrink-0 group">
                        <div className="w-96 p-8 bg-card rounded-2xl border border-border hover-lift">
                            <div className="space-y-6">
                                <div className="h-3 w-20 bg-primary rounded-full"></div>
                                <h3 className="text-xl font-medium text-text-dark group-hover:text-text-muted transition-colors duration-200 line-clamp-2 leading-tight">
                                    {blog.title}
                                </h3>
                                <div className="flex items-center justify-between pt-4">
                                    <span className="text-base font-medium text-text-muted group-hover:text-text-dark transition-colors">
                                        Read Article
                                    </span>
                                    <svg className="w-5 h-5 text-text-muted group-hover:text-text-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                {/* Duplicate for seamless loop */}
                {blogsArray.map((blog) => (
                    <Link key={`${blog.id}-clone`} href={`/blogs/${blog.id}`} className="flex-shrink-0 group">
                        <div className="w-96 p-8 bg-card rounded-2xl border border-border hover-lift">
                            <div className="space-y-6">
                                <div className="h-3 w-20 bg-primary rounded-full"></div>
                                <h3 className="text-xl font-medium text-text-dark group-hover:text-text-muted transition-colors duration-200 line-clamp-2 leading-tight">
                                    {blog.title}
                                </h3>
                                <div className="flex items-center justify-between pt-4">
                                    <span className="text-base font-medium text-text-muted group-hover:text-text-dark transition-colors">
                                        Read Article
                                    </span>
                                    <svg className="w-5 h-5 text-text-muted group-hover:text-text-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
