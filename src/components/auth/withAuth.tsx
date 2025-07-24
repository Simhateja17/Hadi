// src/components/auth/withAuth.tsx
import { useRouter } from 'next/router';
import { useEffect, ComponentType, useState } from 'react';

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
    const AuthComponent = (props: P) => {
        const router = useRouter();
        const [isLoading, setIsLoading] = useState(true);
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            const verifyAuth = async () => {
                const token = localStorage.getItem('admin_token');
                
                if (!token) {
                    router.replace('/admin/login');
                    return;
                }

                try {
                    // Verify token with backend
                    const response = await fetch('/api/auth/verify-token', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        if (data.valid) {
                            setIsAuthenticated(true);
                        } else {
                            localStorage.removeItem('admin_token');
                            router.replace('/admin/login');
                        }
                    } else {
                        localStorage.removeItem('admin_token');
                        router.replace('/admin/login');
                    }
                } catch (error) {
                    console.error('Auth verification error:', error);
                    localStorage.removeItem('admin_token');
                    router.replace('/admin/login');
                } finally {
                    setIsLoading(false);
                }
            };

            verifyAuth();
        }, [router]);

        if (isLoading) {
            return (
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100vh',
                    fontSize: '18px' 
                }}>
                    Verifying authentication...
                </div>
            );
        }

        if (!isAuthenticated) {
            return null; // Will redirect to login
        }

        return <WrappedComponent {...props} />;
    };
    
    return AuthComponent;
};

export default withAuth;
