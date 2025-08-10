// components/Layout.tsx
import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import CookieConsent from './CookieConsent';

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow pt-16 overflow-y-auto">
                {children}
            </main>
            <Footer />
            <CookieConsent />
        </div>
    );
};
