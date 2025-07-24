// components/ScrollIndicator.tsx
import { useEffect, useState } from 'react';

export const ScrollIndicator = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [sections, setSections] = useState<string[]>([]);

    useEffect(() => {
        // Get all sections with min-h-screen class
        const sectionElements = document.querySelectorAll('section[class*="min-h-screen"]');
        const sectionIds = Array.from(sectionElements).map((_, index) => `section-${index}`);
        setSections(sectionIds);

        // Add IDs to sections if they don't have them
        sectionElements.forEach((section, index) => {
            if (!section.id) {
                section.id = `section-${index}`;
            }
        });

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            
            sectionElements.forEach((section, index) => {
                const element = section as HTMLElement;
                const rect = element.getBoundingClientRect();
                const absoluteTop = window.scrollY + rect.top;
                const absoluteBottom = absoluteTop + element.offsetHeight;
                
                if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (index: number) => {
        const element = document.getElementById(`section-${index}`);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    if (sections.length <= 1) return null;

    return (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
            {sections.map((_, index) => (
                <button
                    key={index}
                    onClick={() => scrollToSection(index)}
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
                        activeSection === index
                            ? 'bg-primary border-primary'
                            : 'bg-transparent border-primary hover:bg-primary-light'
                    }`}
                    title={`Go to section ${index + 1}`}
                />
            ))}
        </div>
    );
};
