// src/pages/blogs/index.tsx
import { GetStaticProps } from 'next';
import { BlogCard } from '../../components/BlogCard';

type Blog = {
    id: string;
    title: string;
    author: string;
    content: string;
    imageUrl?: string;
    createdAt: string;
};
type BlogListPageProps = { blogs: Blog[] };

export default function BlogListPage({ blogs }: BlogListPageProps) {
    // Ensure blogs is always an array
    const safeBlogs = Array.isArray(blogs) ? blogs : [];
    
    return (
        <div className="py-12">
            <h1 className="text-4xl font-extrabold text-center text-text-dark mb-12">
                Our Blog
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {safeBlogs.length > 0 ? (
                    safeBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">
                        No blogs available at the moment.
                    </div>
                )}
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const res = await fetch('http://localhost:3001/api/blogs'); // Your backend URL
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        // Ensure blogs is always an array
        const blogs: Blog[] = Array.isArray(data) ? data : [];
        return { props: { blogs }, revalidate: 60 };
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        return { props: { blogs: [] } };
    }
};
