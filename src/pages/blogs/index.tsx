// src/pages/blogs/index.tsx
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getApiUrl } from '../../utils/api';
import { PAGE_PADDING_TOP } from '../../config/pagePadding';

type Blog = {
    id: string;
    title: string;
    author: string;
    content: string;
    imageUrl?: string;
    createdAt: string;
};

type BlogListPageProps = {
    blogs: Blog[];
};

export default function BlogListPage({ blogs }: BlogListPageProps) {
    // Ensure blogs is always an array
    const safeBlogs = Array.isArray(blogs) ? blogs : [];

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
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-lg p-2 text-center">
                        <p className="text-british-blue font-bold text-xs">🇬🇧 UK Resource</p>
                    </div>
                </div>
            </div>,
            
            // Pattern 2: White with blue borders
            <div key="pattern2" className="w-full h-full bg-white border-4 border-british-blue relative">
                <div className="absolute inset-4 border-2 border-british-red"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-british-blue rounded-lg p-2 text-center">
                        <p className="text-white font-bold text-xs">Social Work</p>
                    </div>
                </div>
            </div>,
            
            // Pattern 3: Red with white cross
            <div key="pattern3" className="w-full h-full bg-british-red relative">
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-white transform -translate-y-1/2"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-white transform -translate-x-1/2"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-lg p-2 text-center">
                        <p className="text-british-red font-bold text-xs">🇬🇧 Guide</p>
                    </div>
                </div>
            </div>,
            
            // Pattern 4: Diagonal stripes
            <div key="pattern4" className="w-full h-full bg-british-blue relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,100" stroke="#C8102E" strokeWidth="8"/>
                    <path d="M0,100 L100,0" stroke="white" strokeWidth="4"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-lg p-2 text-center">
                        <p className="text-british-blue font-bold text-xs">Expert Tips</p>
                    </div>
                </div>
            </div>
        ];
        
        return patterns[index % patterns.length];
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-red-50" style={{ paddingTop: PAGE_PADDING_TOP.blogs }}>
                <div className="container-custom text-center">
                    <div className="mb-6">
                        <span className="inline-block px-8 py-4 bg-british-red text-white rounded-full body-medium font-bold mb-6 shadow-smooth">
                           
                        </span>
                    </div>
                    
                    <h1 className="heading-xl mb-6 text-british-blue">
                        UK Social Work
                        <span className="text-gradient block">Resources & Insights</span>
                    </h1>
                    
                    <p className="body-xl mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Stay informed with the latest guidance, tips, and expert insights to help you 
                        succeed as a social worker in the United Kingdom.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding-lg">
                <div className="container-custom">
                    {safeBlogs.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 mx-auto bg-british-blue rounded-2xl flex items-center justify-center mb-8 shadow-smooth">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="heading-3 mb-4 text-british-blue">Resources Coming Soon</h3>
                            <p className="body-large text-gray-700 max-w-2xl mx-auto">
                                We&apos;re preparing valuable insights and guidance to support your UK social work journey. 
                                Check back soon for expert articles and professional resources.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {safeBlogs.map((blog, index) => (
                                <Link key={blog.id} href={`/blogs/${blog.id}`} className="group block">
                                    <article className="card card-elevated hover-lift h-full animate-fade-in-up border-2 border-british-blue" style={{ animationDelay: `${index * 0.1}s` }}>
                                        {/* Header Image */}
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
                                getUnionJackBackground(index)
                            )}                                            {/* Reading time badge */}
                                            <div className="absolute top-4 right-4">
                                                <div className="flex items-center gap-2 bg-white bg-opacity-95 px-3 py-1.5 rounded-lg shadow-sm border border-british-blue">
                                                    <svg className="w-3 h-3 text-british-red" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-xs font-medium text-british-blue">{getReadingTime(blog.content)} min read</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
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
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding-lg bg-gradient-primary text-white">
                <div className="container-custom text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-2 mb-6 text-white">
                            Need Personalized Guidance? 🇬🇧
                        </h2>
                        <p className="body-xl mb-8 text-blue-100 leading-relaxed">
                            Our expert team is ready to provide personalized support for your UK social work journey. 
                            Get in touch to discuss your specific needs and goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contactus" className="btn btn-secondary btn-large">
                                Book Consultation
                            </Link>
                            <Link href="/toolkits" className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-british-blue btn-large">
                                Access Toolkit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const apiUrl = getApiUrl('api/blogs');
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch blogs: ${response.status}`);
        }
        
        const blogs: Blog[] = await response.json();
        
        return {
            props: {
                blogs: blogs || [],
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return {
            props: {
                blogs: [],
            },
            revalidate: 60,
        };
    }
};
