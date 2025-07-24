// components/Layout.tsx
import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollIndicator } from './ScrollIndicator';

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <ScrollIndicator />
            <main className="flex-grow pt-24">
                {children}
            </main>
            <Footer />
        </div>
    );
};
