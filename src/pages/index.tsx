// pages/index.tsx
import { GetStaticProps } from 'next';
import { getApiUrl } from '../utils/api';
import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '../../components/Hero';
import { BlogScroller } from '../../components/BlogScroller';
import { useState, useEffect } from 'react';

type Blog = {
    id: string;
    title: string;
    author: string;
    content: string;
    imageUrl?: string;
    createdAt: string;
};
type HomeProps = { blogs: Blog[]; };

export default function Home({ blogs }: HomeProps) {
    const [bubbleSize, setBubbleSize] = useState({ 
        horizontal: 8, 
        vertical: 4 
    });

    const [ctaPosition, setCtaPosition] = useState({
        x: 0,
        y: 0
    });

    // Desktop CTA Section Controls
    const [desktopCtaPosition, setDesktopCtaPosition] = useState({
        x: 0,
        y: 0
    });

    const [desktopCtaSize, setDesktopCtaSize] = useState({
        width: 100, // percentage
        height: 100 // percentage
    });

    // Mobile CTA Section Controls
    const [mobileCtaPosition, setMobileCtaPosition] = useState({
        x: 0,
        y: 0
    });

    const [mobileCtaSize, setMobileCtaSize] = useState({
        width: 100, // percentage
        height: 100 // percentage
    });

    // Desktop Button Position Controls
    const [desktopAboutUsBubblePosition, setDesktopAboutUsBubblePosition] = useState({
        x: 0,
        y: 0
    });

    const [desktopLearnMoreButtonPosition, setDesktopLearnMoreButtonPosition] = useState({
        x: 0,
        y: 0
    });

    // Mobile Button Position Controls
    const [mobileAboutUsBubblePosition, setMobileAboutUsBubblePosition] = useState({
        x: 0,
        y: 0
    });

    const [mobileLearnMoreButtonPosition, setMobileLearnMoreButtonPosition] = useState({
        x: 0,
        y: 0
    });

    const [iconSize, setIconSize] = useState({
        width: 16,
        height: 16
    });

    const [iconPosition, setIconPosition] = useState({
        x: 0,
        y: 0
    });

    // Desktop Image Size Controls
    const [desktopImageSize, setDesktopImageSize] = useState({
        width: 300,
        height: 300
    });

    // Desktop Image Position Controls
    const [desktopImagePosition, setDesktopImagePosition] = useState({
        x: -20,
        y: 0
    });

    const [imageSize, setImageSize] = useState({
        width: 300,
        height: 300
    });

    const [imagePosition, setImagePosition] = useState({
        x: 0,
        y: 0
    });

    // Mobile Image Size Controls  
    const [mobileImageSize, setMobileImageSize] = useState({
        width: 250,
        height: 250
    });

    const [mobileImagePosition, setMobileImagePosition] = useState({
        x: -120,
        y: 0
    });

    // Save bubble size to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('bubbleSizeControls');
        if (saved) {
            setBubbleSize(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('bubbleSizeControls', JSON.stringify(bubbleSize));
    }, [bubbleSize]);

    // Save CTA position to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('ctaPositionControls');
        if (saved) {
            setCtaPosition(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('ctaPositionControls', JSON.stringify(ctaPosition));
    }, [ctaPosition]);

    // Save icon size to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('iconSizeControls');
        if (saved) {
            setIconSize(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('iconSizeControls', JSON.stringify(iconSize));
    }, [iconSize]);

    // Save icon position to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('iconPositionControls');
        if (saved) {
            setIconPosition(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('iconPositionControls', JSON.stringify(iconPosition));
    }, [iconPosition]);

    // Save desktop image size to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('desktopImageSizeControls');
        if (saved) {
            setDesktopImageSize(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('desktopImageSizeControls', JSON.stringify(desktopImageSize));
    }, [desktopImageSize]);

    // Save desktop image position to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('desktopImagePositionControls');
        if (saved) {
            setDesktopImagePosition(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('desktopImagePositionControls', JSON.stringify(desktopImagePosition));
    }, [desktopImagePosition]);

    // Save image size to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('imageSizeControls');
        if (saved) {
            setImageSize(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('imageSizeControls', JSON.stringify(imageSize));
    }, [imageSize]);

    // Save image position to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('imagePositionControls');
        if (saved) {
            setImagePosition(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('imagePositionControls', JSON.stringify(imagePosition));
    }, [imagePosition]);

    // Save mobile image size to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('mobileImageSizeControls');
        if (saved) {
            setMobileImageSize(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('mobileImageSizeControls', JSON.stringify(mobileImageSize));
    }, [mobileImageSize]);

    // Save mobile image position to localStorage
    useEffect(() => {
        // Temporarily disabled to allow manual position changes
        // const saved = localStorage.getItem('mobileImagePositionControls');
        // if (saved) {
        //     setMobileImagePosition(JSON.parse(saved));
        // }
    }, []);

    useEffect(() => {
        localStorage.setItem('mobileImagePositionControls', JSON.stringify(mobileImagePosition));
    }, [mobileImagePosition]);

    // Save desktop CTA controls to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('desktopCtaPositionControls');
        if (saved) {
            setDesktopCtaPosition(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('desktopCtaPositionControls', JSON.stringify(desktopCtaPosition));
    }, [desktopCtaPosition]);

    useEffect(() => {
        const saved = localStorage.getItem('desktopCtaSizeControls');
        if (saved) {
            setDesktopCtaSize(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('desktopCtaSizeControls', JSON.stringify(desktopCtaSize));
    }, [desktopCtaSize]);

    // Save mobile CTA controls to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('mobileCtaPositionControls');
        if (saved) {
            setMobileCtaPosition(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('mobileCtaPositionControls', JSON.stringify(mobileCtaPosition));
    }, [mobileCtaPosition]);

    useEffect(() => {
        const saved = localStorage.getItem('mobileCtaSizeControls');
        if (saved) {
            setMobileCtaSize(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('mobileCtaSizeControls', JSON.stringify(mobileCtaSize));
    }, [mobileCtaSize]);

    // Save desktop button position controls to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('desktopAboutUsBubblePositionControls');
        if (saved) {
            setDesktopAboutUsBubblePosition(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('desktopAboutUsBubblePositionControls', JSON.stringify(desktopAboutUsBubblePosition));
    }, [desktopAboutUsBubblePosition]);

    useEffect(() => {
        const saved = localStorage.getItem('desktopLearnMoreButtonPositionControls');
        if (saved) {
            setDesktopLearnMoreButtonPosition(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('desktopLearnMoreButtonPositionControls', JSON.stringify(desktopLearnMoreButtonPosition));
    }, [desktopLearnMoreButtonPosition]);

    // Save mobile button position controls to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('mobileAboutUsBubblePositionControls');
        if (saved) {
            setMobileAboutUsBubblePosition(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('mobileAboutUsBubblePositionControls', JSON.stringify(mobileAboutUsBubblePosition));
    }, [mobileAboutUsBubblePosition]);

    useEffect(() => {
        const saved = localStorage.getItem('mobileLearnMoreButtonPositionControls');
        if (saved) {
            setMobileLearnMoreButtonPosition(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('mobileLearnMoreButtonPositionControls', JSON.stringify(mobileLearnMoreButtonPosition));
    }, [mobileLearnMoreButtonPosition]);

    const updateBubbleSize = (type: 'horizontal' | 'vertical', value: number) => {
        setBubbleSize(prev => ({
            ...prev,
            [type]: Math.max(1, Math.min(20, value))
        }));
    };

    const resetBubbleSize = () => {
        setBubbleSize({ horizontal: 8, vertical: 4 });
    };

    const updateCtaPosition = (axis: 'x' | 'y', value: number) => {
        setCtaPosition(prev => ({
            ...prev,
            [axis]: Math.max(-200, Math.min(200, value))
        }));
    };

    const resetCtaPosition = () => {
        setCtaPosition({ x: 0, y: 0 });
    };

    const updateIconSize = (dimension: 'width' | 'height', value: number) => {
        setIconSize(prev => ({
            ...prev,
            [dimension]: Math.max(8, Math.min(32, value))
        }));
    };

    const resetIconSize = () => {
        setIconSize({ width: 16, height: 16 });
    };

    const updateIconPosition = (axis: 'x' | 'y', value: number) => {
        setIconPosition(prev => ({
            ...prev,
            [axis]: Math.max(-100, Math.min(100, value))
        }));
    };

    const resetIconPosition = () => {
        setIconPosition({ x: 0, y: 0 });
    };

    // Desktop image control functions
    const updateDesktopImageSize = (dimension: 'width' | 'height', value: number) => {
        setDesktopImageSize(prev => ({
            ...prev,
            [dimension]: Math.max(100, Math.min(500, value))
        }));
    };

    const resetDesktopImageSize = () => {
        setDesktopImageSize({ width: 300, height: 300 });
    };

    // Desktop image position control functions
    const updateDesktopImagePosition = (axis: 'x' | 'y', value: number) => {
        setDesktopImagePosition(prev => ({
            ...prev,
            [axis]: Math.max(-150, Math.min(150, value))
        }));
    };

    const resetDesktopImagePosition = () => {
        setDesktopImagePosition({ x: 0, y: 0 });
    };

    const updateImageSize = (dimension: 'width' | 'height', value: number) => {
        setImageSize(prev => ({
            ...prev,
            [dimension]: Math.max(100, Math.min(500, value))
        }));
    };

    const resetImageSize = () => {
        setImageSize({ width: 300, height: 300 });
    };

    const updateImagePosition = (axis: 'x' | 'y', value: number) => {
        setImagePosition(prev => ({
            ...prev,
            [axis]: Math.max(-150, Math.min(150, value))
        }));
    };

    const resetImagePosition = () => {
        setImagePosition({ x: 0, y: 0 });
    };

    // Mobile image control functions
    const updateMobileImageSize = (dimension: 'width' | 'height', value: number) => {
        setMobileImageSize(prev => ({
            ...prev,
            [dimension]: Math.max(100, Math.min(400, value))
        }));
    };

    const resetMobileImageSize = () => {
        setMobileImageSize({ width: 250, height: 250 });
    };

    const updateMobileImagePosition = (axis: 'x' | 'y', value: number) => {
        setMobileImagePosition(prev => ({
            ...prev,
            [axis]: Math.max(-100, Math.min(100, value))
        }));
    };

    const resetMobileImagePosition = () => {
        setMobileImagePosition({ x: 0, y: 0 });
    };

    // Desktop Button position control functions
    const updateDesktopAboutUsBubblePosition = (axis: 'x' | 'y', value: number) => {
        setDesktopAboutUsBubblePosition(prev => ({
            ...prev,
            [axis]: Math.max(-200, Math.min(200, value))
        }));
    };

    const resetDesktopAboutUsBubblePosition = () => {
        setDesktopAboutUsBubblePosition({ x: 0, y: 0 });
    };

    const updateDesktopLearnMoreButtonPosition = (axis: 'x' | 'y', value: number) => {
        setDesktopLearnMoreButtonPosition(prev => ({
            ...prev,
            [axis]: Math.max(-200, Math.min(200, value))
        }));
    };

    const resetDesktopLearnMoreButtonPosition = () => {
        setDesktopLearnMoreButtonPosition({ x: 0, y: 0 });
    };

    // Mobile Button position control functions
    const updateMobileAboutUsBubblePosition = (axis: 'x' | 'y', value: number) => {
        setMobileAboutUsBubblePosition(prev => ({
            ...prev,
            [axis]: Math.max(-200, Math.min(200, value))
        }));
    };

    const resetMobileAboutUsBubblePosition = () => {
        setMobileAboutUsBubblePosition({ x: 0, y: 0 });
    };

    const updateMobileLearnMoreButtonPosition = (axis: 'x' | 'y', value: number) => {
        setMobileLearnMoreButtonPosition(prev => ({
            ...prev,
            [axis]: Math.max(-200, Math.min(200, value))
        }));
    };

    const resetMobileLearnMoreButtonPosition = () => {
        setMobileLearnMoreButtonPosition({ x: 0, y: 0 });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-red-50">
            <Hero />
            
            {/* About Section */}
            <section className="section-padding-lg bg-white/80 backdrop-blur-sm">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="animate-fade-in-up">
                            <div className="mb-6">
                                {/* Single About Us Bubble with Responsive Positioning */}
                                <span 
                                    className="inline-block bg-british-red text-white rounded-full body-medium font-bold shadow-smooth transition-transform duration-300"
                                    style={{ 
                                        paddingLeft: `${bubbleSize.horizontal * 0.25}rem`, 
                                        paddingRight: `${bubbleSize.horizontal * 0.25}rem`,
                                        paddingTop: `${bubbleSize.vertical * 0.25}rem`,
                                        paddingBottom: `${bubbleSize.vertical * 0.25}rem`,
                                        '--desktop-x': `${desktopAboutUsBubblePosition.x}px`,
                                        '--desktop-y': `${desktopAboutUsBubblePosition.y}px`,
                                        '--mobile-x': `${mobileAboutUsBubblePosition.x}px`,
                                        '--mobile-y': `${mobileAboutUsBubblePosition.y}px`,
                                        transform: `translate(var(--mobile-x), var(--mobile-y))`,
                                    } as React.CSSProperties & { [key: string]: string }}
                                >
                                    <style jsx>{`
                                        @media (min-width: 768px) {
                                            span {
                                                transform: translate(var(--desktop-x), var(--desktop-y)) !important;
                                            }
                                        }
                                    `}</style>
                                    About Us
                                </span>
                            </div>
                            
                            <h2 className="heading-2 mb-6 text-british-blue">
                                Empowering Social Workers to 
                                <span className="text-gradient block">Thrive in the UK</span>
                            </h2>
                            
                            <p className="body-large mb-8 text-gray-700 leading-relaxed">
                                We Social Workers UK is run by a group of experienced social 
                                workers with strong roots in both India and the UK. With years of 
                                frontline and management experience, we guide international 
                                social workers through every step of building a career in the UK.
                            </p>
                            
                            <p className="body-large mb-8 text-gray-700 leading-relaxed">
                                From degree recognition, registration, and visa requirements to 
                                job readiness, training, CV and interview prep, we offer expert 
                                support tailored to your journey. Our mission is simple: to help 
                                you succeed as a confident, competent social worker in the UK.
                            </p>
                            
                            <div className="grid grid-cols-3 gap-8 mb-8">
                                <div className="text-center">
                                    <div 
                                        className="w-16 h-16 bg-british-blue rounded-lg flex items-center justify-center mx-auto mb-3 transition-transform duration-300"
                                        style={{
                                            transform: `translate(${iconPosition.x}px, ${iconPosition.y}px)`
                                        }}
                                    >
                                        <svg 
                                            className="text-white" 
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                            style={{
                                                width: `${iconSize.width * 0.25}rem`,
                                                height: `${iconSize.height * 0.25}rem`
                                            }}
                                        >
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="heading-5 mb-2 text-british-blue">Global Experience</h3>
                                    <p className="body-small text-gray-600">International perspective</p>
                                </div>
                                
                                <div className="text-center">
                                    <div 
                                        className="w-16 h-16 bg-british-red rounded-lg flex items-center justify-center mx-auto mb-3 transition-transform duration-300"
                                        style={{
                                            transform: `translate(${iconPosition.x}px, ${iconPosition.y}px)`
                                        }}
                                    >
                                        <svg 
                                            className="text-white" 
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                            style={{
                                                width: `${iconSize.width * 0.25}rem`,
                                                height: `${iconSize.height * 0.25}rem`
                                            }}
                                        >
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                        </svg>
                                    </div>
                                    <h3 className="heading-5 mb-2 text-british-red">Expert Team</h3>
                                    <p className="body-small text-gray-600">Experienced professionals</p>
                                </div>
                                
                                <div className="text-center">
                                    <div 
                                        className="w-16 h-16 bg-white border-2 border-british-blue rounded-lg flex items-center justify-center mx-auto mb-3 transition-transform duration-300"
                                        style={{
                                            transform: `translate(${iconPosition.x}px, ${iconPosition.y}px)`
                                        }}
                                    >
                                        <svg 
                                            className="text-british-blue" 
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                            style={{
                                                width: `${iconSize.width * 0.25}rem`,
                                                height: `${iconSize.height * 0.25}rem`
                                            }}
                                        >
                                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="heading-5 mb-2 text-british-blue">Comprehensive Support</h3>
                                    <p className="body-small text-gray-600">End-to-end guidance</p>
                                </div>
                            </div>
                            
                            {/* Single Learn More Button with Responsive Positioning */}
                            <Link 
                                href="/about" 
                                className="btn btn-primary transition-transform duration-300"
                                style={{
                                    '--desktop-x': `${desktopLearnMoreButtonPosition.x}px`,
                                    '--desktop-y': `${desktopLearnMoreButtonPosition.y}px`,
                                    '--mobile-x': `${mobileLearnMoreButtonPosition.x}px`,
                                    '--mobile-y': `${mobileLearnMoreButtonPosition.y}px`,
                                    transform: `translate(var(--mobile-x), var(--mobile-y))`,
                                } as React.CSSProperties & { [key: string]: string }}
                            >
                                <style jsx>{`
                                    @media (min-width: 768px) {
                                        a {
                                            transform: translate(var(--desktop-x), var(--desktop-y)) !important;
                                        }
                                    }
                                `}</style>
                                Learn More About Us
                            </Link>
                        </div>
                        
                        {/* Replace Union Jack Design with Logo */}
                        <div className="animate-scale-in">
                            <div className="relative">
                                <div className="w-full max-w-md mx-auto aspect-square">
                                    {/* Image container without boundary - responsive positioning and sizing */}
                                    <div 
                                        className="relative w-full h-full flex items-center justify-center transition-transform duration-300"
                                        style={{
                                            transform: `translate(${desktopImagePosition.x}px, ${desktopImagePosition.y}px)`
                                        }}
                                    >
                                        {/* Desktop Image - hidden on mobile */}
                                        <Image 
                                            src="/gemini-generated-image.png" 
                                            alt="We Social Workers UK" 
                                            width={desktopImageSize.width} 
                                            height={desktopImageSize.height}
                                            className="rounded-xl object-contain hidden md:block"
                                        />
                                        
                                        {/* Mobile Image - hidden on desktop */}
                                        <div 
                                            className="block md:hidden transition-transform duration-300"
                                            style={{
                                                transform: `translate(${mobileImagePosition.x}px, ${mobileImagePosition.y}px)`
                                            }}
                                        >
                                            <Image 
                                                src="/gemini-generated-image.png" 
                                                alt="We Social Workers UK" 
                                                width={mobileImageSize.width} 
                                                height={mobileImageSize.height}
                                                className="rounded-xl object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding-lg bg-white/70 backdrop-blur-sm">
                <div className="container-custom">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span 
                            className="inline-block bg-british-blue text-white rounded-full body-medium font-bold mb-6 shadow-smooth"
                            style={{ 
                                paddingLeft: `${bubbleSize.horizontal * 0.25}rem`, 
                                paddingRight: `${bubbleSize.horizontal * 0.25}rem`,
                                paddingTop: `${bubbleSize.vertical * 0.25}rem`,
                                paddingBottom: `${bubbleSize.vertical * 0.25}rem`
                            }}
                        >
                            Our Services Include
                        </span>
                        <h2 className="heading-2 mb-6 text-british-blue">
                            Comprehensive Support for Your 
                            <span className="text-british-red block">Professional Journey</span>
                        </h2>
                        <p className="body-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
                            We provide end-to-end support to help international social workers successfully 
                            transition and thrive in the UK&apos;s professional landscape.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Degree Recognition & Validation",
                                description: "Expert guidance through UK qualification recognition processes",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                                    </svg>
                                ),
                                color: "blue"
                            },
                            {
                                title: "Visa Requirements & Guidance",
                                description: "Navigate complex visa processes with confidence",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                                    </svg>
                                ),
                                color: "red"
                            },
                            {
                                title: "Professional CV & Interview Coaching",
                                description: "Stand out with professionally crafted applications",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                ),
                                color: "white"
                            },
                            {
                                title: "Social Work England Registration",
                                description: "Seamless registration with regulatory bodies",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                ),
                                color: "blue"
                            },
                            {
                                title: "Job Readiness Training",
                                description: "Comprehensive preparation for UK workplace culture",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                    </svg>
                                ),
                                color: "red"
                            },
                            {
                                title: "Ongoing Mentorship & Support",
                                description: "Continuous guidance throughout your career journey",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                    </svg>
                                ),
                                color: "white"
                            }
                        ].map((service, index) => {
                            const colorClasses: Record<string, string> = {
                                blue: "bg-british-blue text-white",
                                red: "bg-british-red text-white",
                                white: "bg-white text-british-blue border-2 border-british-blue"
                            };
                            
                            return (
                                <div key={index} className="card card-elevated hover-lift animate-fade-in-up bg-white/90 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="p-8">
                                        <div className={`w-16 h-16 ${colorClasses[service.color]} rounded-xl flex items-center justify-center mb-6 shadow-smooth`}>
                                            {service.icon}
                                        </div>
                                        <h3 className="heading-5 mb-4 text-british-blue">{service.title}</h3>
                                        <p className="body-medium text-gray-700 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="section-padding-lg bg-white/60 backdrop-blur-sm">
                <div className="container-custom">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span 
                            className="inline-block bg-british-red text-white rounded-full body-medium font-bold mb-6 shadow-smooth"
                            style={{ 
                                paddingLeft: `${bubbleSize.horizontal * 0.25}rem`, 
                                paddingRight: `${bubbleSize.horizontal * 0.25}rem`,
                                paddingTop: `${bubbleSize.vertical * 0.25}rem`,
                                paddingBottom: `${bubbleSize.vertical * 0.25}rem`
                            }}
                        >
                            Professional Growth & Learning
                        </span>
                        <h2 className="heading-2 mb-6 text-british-blue">
                            Expert Knowledge for
                            <span className="text-british-red block">Compassionate Care</span>
                        </h2>
                        <p className="body-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
                            Access our curated resources and insights to stay ahead in your professional development.
                        </p>
                    </div>
                    
                    <div className="overflow-hidden">
                        <BlogScroller blogs={blogs} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding-lg bg-white/50 backdrop-blur-sm">
                <div className="container-custom text-center">
                    {/* Desktop CTA Section */}
                    <div 
                        className="max-w-4xl mx-auto animate-fade-in-up transition-transform duration-300 hidden md:block"
                        style={{
                            transform: `translate(${desktopCtaPosition.x}px, ${desktopCtaPosition.y}px) scale(${desktopCtaSize.width / 100}, ${desktopCtaSize.height / 100})`
                        }}
                    >
                        <h2 className="heading-2 mb-6 text-british-blue">
                            Ready to Start Your UK Journey?
                        </h2>
                        <p className="body-xl mb-8 text-gray-700 leading-relaxed">
                            Join hundreds of successful social workers who have transformed their careers with our guidance. 
                            Let&apos;s build your path to success in the United Kingdom together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-large">
                                Get Started Today
                            </Link>
                            <Link href="/toolkit" className="btn btn-outline border-2 border-british-blue text-british-blue hover:bg-british-blue hover:text-white btn-large">
                                Explore Toolkit
                            </Link>
                        </div>
                    </div>

                    {/* Mobile CTA Section */}
                    <div 
                        className="max-w-4xl mx-auto animate-fade-in-up transition-transform duration-300 block md:hidden"
                        style={{
                            transform: `translate(${mobileCtaPosition.x}px, ${mobileCtaPosition.y}px) scale(${mobileCtaSize.width / 100}, ${mobileCtaSize.height / 100})`
                        }}
                    >
                        <h2 className="heading-2 mb-6 text-british-blue">
                            Ready to Start Your UK Journey?
                        </h2>
                        <p className="body-xl mb-8 text-gray-700 leading-relaxed">
                            Join hundreds of successful social workers who have transformed their careers with our guidance. 
                            Let&apos;s build your path to success in the United Kingdom together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-large">
                                Get Started Today
                            </Link>
                            <Link href="/toolkit" className="btn btn-outline border-2 border-british-blue text-british-blue hover:bg-british-blue hover:text-white btn-large">
                                Explore Toolkit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const apiUrl = getApiUrl('api/blogs');
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch blogs: ${response.status}`);
        }
        
        const blogs: Blog[] = await response.json();
        
        return {
            props: {
                blogs: blogs || [],
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return {
            props: {
                blogs: [],
            },
            revalidate: 60,
        };
    }
};
