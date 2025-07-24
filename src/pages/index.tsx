// pages/index.tsx
import { GetStaticProps } from 'next';
import { Hero } from '../../components/Hero';
import { BlogScroller } from '../../components/BlogScroller';

type Blog = { id: string; title: string; };
type HomeProps = { blogs: Blog[]; };

export default function Home({ blogs }: HomeProps) {
    return (
        <div>
            <Hero />
            <h2 className="text-3xl font-bold text-center text-text-dark my-8">Latest From Our Blog</h2>
            <BlogScroller blogs={blogs} />
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        // IMPORTANT: Replace with your actual backend URL
        const res = await fetch('http://localhost:3001/api/blogs');
        
        if (!res.ok) {
            console.error(`Failed to fetch blogs: ${res.status} ${res.statusText}`);
            return {
                props: {
                    blogs: [],
                },
            };
        }
        
        const blogs = await res.json();
        
        // Ensure blogs is an array
        if (!Array.isArray(blogs)) {
            console.error("Blogs data is not an array:", blogs);
            return {
                props: {
                    blogs: [],
                },
            };
        }

        return {
            props: {
                blogs,
            },
            revalidate: 60, // Re-generate the page every 60 seconds
        };
    } catch (error) {
        console.error("Failed to fetch blogs for homepage:", error);
        return {
            props: {
                blogs: [],
            },
        };
    }
};
