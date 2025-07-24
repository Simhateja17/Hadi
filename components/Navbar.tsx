// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <nav className="bg-primary shadow-sm p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    {/* Assuming you have the logo image in /public/logo.png */}
                    <Image src="/logo.png" alt="We Social Workers UK Logo" width={80} height={80} />
                </Link>
                <div className="flex space-x-6 text-text-dark font-semibold">
                    <Link href="/" className="hover:text-accent">Home</Link>
                    <Link href="/blogs" className="hover:text-accent">Blogs</Link>
                    <Link href="/jobs" className="hover:text-accent">Jobs</Link>
                    <Link href="/toolkit" className="hover:text-accent">Toolkit</Link>
                </div>
            </div>
        </nav>
    );
};
