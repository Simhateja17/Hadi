// src/pages/blogs/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

type Blog = {
    id: string;
    title: string;
    author: string;
    content: string; // Assuming content is safe HTML from your admin editor
    imageUrl?: string;
    createdAt: string;
};
type BlogPostPageProps = { post: Blog };

export default function BlogPostPage({ post }: BlogPostPageProps) {
    if (!post) return <p>Loading...</p>;

    const postDate = new Date(post.createdAt).toLocaleDateString('en-UK', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <article className="max-w-3xl mx-auto py-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-4">{post.title}</h1>
            <p className="text-text-light mb-6">By {post.author} on {postDate}</p>

            {post.imageUrl && (
                <div className="relative h-72 w-full rounded-lg overflow-hidden mb-8">
                    <Image 
                        src={post.imageUrl.startsWith('http') ? post.imageUrl : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}${post.imageUrl}`} 
                        alt={post.title} 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>
            )}

            {/* This will render HTML content from your blog editor. Ensure it's trusted. */}
            <div
                className="prose lg:prose-xl max-w-none text-text-dark"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
        const res = await fetch(`${baseUrl}/api/blogs`);
        if (!res.ok) {
            console.error('Failed to fetch blogs:', res.status, res.statusText);
            return { paths: [], fallback: true };
        }
        
        const data = await res.json();
        console.log('API Response:', data); // Debug log
        
        // Check if data is an array
        const blogs: Blog[] = Array.isArray(data) ? data : [];
        
        if (blogs.length === 0) {
            console.warn('No blogs found or blogs is not an array');
            return { paths: [], fallback: true };
        }
        
        const paths = blogs.map((blog) => ({ params: { id: blog.id.toString() } }));
        return { paths, fallback: true }; // `fallback: true` allows for newly created blogs
    } catch (error) {
        console.error('Error in getStaticPaths:', error);
        return { paths: [], fallback: true };
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
