// components/Layout.tsx
import { ReactNode } from 'react';
import Header from './Header';
import { Footer } from './Footer';
import { ScrollIndicator } from './ScrollIndicator';

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
            {/* Sophisticated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle mesh gradient overlay */}
                <div className="absolute inset-0 bg-gradient-mesh opacity-[0.02] animate-gradient-shift" style={{ backgroundSize: '400% 400%' }}></div>
                
                {/* Floating geometric elements */}
                <div className="absolute top-1/4 left-10 w-40 h-40 bg-gradient-secondary rounded-full opacity-[0.03] animate-float-complex blur-2xl"></div>
                <div className="absolute top-2/3 right-20 w-32 h-32 bg-gradient-accent rounded-full opacity-[0.03] animate-float-complex blur-2xl" style={{ animationDelay: '3s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-primary rounded-full opacity-[0.03] animate-float-complex blur-xl" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
            </div>
            
            <Header />
            <main className="flex-grow relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};
