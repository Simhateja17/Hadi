// components/BlogScroller.tsx
import Link from 'next/link';

// This is a placeholder type. You should define it based on your Prisma schema.
type Blog = {
    id: string;
    title: string;
    // Add other properties you might want to display
};

type BlogScrollerProps = {
    blogs?: Blog[];
};

export const BlogScroller = ({ blogs }: BlogScrollerProps) => {
    // Ensure blogs is an array before mapping
    const blogsArray = Array.isArray(blogs) ? blogs : [];
    
    if (blogsArray.length === 0) {
        return (
            <div className="w-full py-8 text-center">
                <p className="text-gray-500">No blogs available at the moment.</p>
            </div>
        );
    }

    return (
        <div className="w-full overflow-hidden whitespace-nowrap py-8">
            <div className="inline-block animate-scroll">
                {blogsArray.map((blog) => (
                    <Link key={blog.id} href={`/blogs/${blog.id}`} className="inline-block mx-4 p-6 bg-white shadow-md rounded-lg w-64">
                        <h3 className="text-lg font-bold text-text-dark truncate">{blog.title}</h3>
                    </Link>
                ))}
                {/* Duplicate the content for a seamless loop */}
                {blogsArray.map((blog) => (
                     <Link key={`${blog.id}-clone`} href={`/blogs/${blog.id}`} className="inline-block mx-4 p-6 bg-white shadow-md rounded-lg w-64">
                         <h3 className="text-lg font-bold text-text-dark truncate">{blog.title}</h3>
                     </Link>
                ))}
            </div>
        </div>
    );
};
