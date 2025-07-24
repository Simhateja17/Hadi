// src/components/auth/withAuth.tsx
import { useRouter } from 'next/router';
import { useEffect, ComponentType } from 'react';

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
    const AuthComponent = (props: P) => {
        const router = useRouter();

        useEffect(() => {
            const token = localStorage.getItem('admin_token');
            // A more robust check would be to verify the token with a backend endpoint
            if (!token) {
                router.replace('/admin/login');
            }
        }, [router]);

        return <WrappedComponent {...props} />;
    };
    return AuthComponent;
};

export default withAuth;
