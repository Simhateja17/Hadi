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
    const snippet = blog.content.substring(0, 100) + '...';
    const postDate = new Date(blog.createdAt).toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <Link href={`/blogs/${blog.id}`} className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {blog.imageUrl && (
                <div className="relative h-48 w-full">
                    <Image src={blog.imageUrl} alt={blog.title} layout="fill" objectFit="cover" />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-xl font-bold text-text-dark mb-2">{blog.title}</h3>
                <p className="text-sm text-text-light mb-1">By {blog.author} on {postDate}</p>
                <p className="text-text-dark">{snippet}</p>
            </div>
        </Link>
    );
};
