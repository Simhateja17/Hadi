// src/pages/admin/dashboard.tsx
import Link from 'next/link';
import withAuth from '../../components/auth/withAuth';
import { logout } from '../../utils/auth';

const AdminDashboard = () => {
    const handleLogout = () => {
        logout();
    };

    return (
        <div className="py-12">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-extrabold text-text-dark">Admin Dashboard</h1>
                <button onClick={handleLogout} className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600">
                    Logout
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/admin/manage-blogs" className="block p-8 bg-primary rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-bold text-text-dark">Manage Blogs</h2>
                    <p className="text-text-light mt-2">Create, edit, and delete blog posts.</p>
                </Link>
                <Link href="/admin/manage-jobs" className="block p-8 bg-primary rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-bold text-text-dark">Manage Jobs</h2>
                    <p className="text-text-light mt-2">Create, edit, and delete job listings.</p>
                </Link>
            </div>
        </div>
    );
};

export default withAuth(AdminDashboard); // <-- Protecting the page
