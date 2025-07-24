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
    const snippet = blog.content.substring(0, 140) + '...';
    const postDate = new Date(blog.createdAt).toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <Link href={`/blogs/${blog.id}`} className="group block">
            <article className="bg-card rounded-2xl border border-border hover-lift overflow-hidden h-full">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                    {blog.imageUrl ? (
                        <Image 
                            src={blog.imageUrl} 
                            alt={blog.title} 
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <div className="w-full h-full bg-primary flex items-center justify-center">
                            <svg className="w-20 h-20 text-text-dark opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-card text-text-dark card-shadow">
                            Social Work
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-6">
                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-base">
                        <div className="flex items-center space-x-3 text-text-muted">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <span>By {blog.author}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-text-muted">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span>{postDate}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="heading-secondary text-2xl text-text-dark group-hover:text-text-muted transition-colors duration-200 line-clamp-2 leading-tight">
                        {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-body text-text-medium line-clamp-3 leading-relaxed">
                        {snippet}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center justify-between pt-6 border-t border-border">
                        <span className="inline-flex items-center text-base font-medium text-text-muted group-hover:text-text-dark transition-colors">
                            Read Article
                            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                        
                        {/* Reading Time Estimate */}
                        <div className="flex items-center space-x-2 text-sm text-text-muted">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span>{Math.ceil(blog.content.length / 200)} min read</span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};
