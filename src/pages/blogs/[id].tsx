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
                    <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" />
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
    const res = await fetch('http://localhost:3001/api/blogs');
    const blogs: Blog[] = await res.json();
    const paths = blogs.map((blog) => ({ params: { id: blog.id } }));
    return { paths, fallback: true }; // `fallback: true` allows for newly created blogs
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const res = await fetch(`http://localhost:3001/api/blogs/${params?.id}`);
        if (!res.ok) return { notFound: true };
        const post: Blog = await res.json();
        return { props: { post }, revalidate: 60 };
    } catch (error) {
        return { notFound: true };
    }
};
