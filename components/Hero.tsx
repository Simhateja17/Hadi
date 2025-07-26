// components/Hero.tsx
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ImageControl {
    x: number;
    y: number;
    size: number;
}

export const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showControls, setShowControls] = useState(false);
    
    // Image controls state - origin is current position - updated for 7 images
    const [imageControls, setImageControls] = useState<ImageControl[]>([
        { x: -100, y: 65, size: 185 }, //Professional Man in Thoughtful Pose
        { x: -125, y: 50, size: 200 }, // Medical Professional with Smartphone
        { x: 50, y: 60, size: 180 },  // Friendly Male Nurse
        { x: 75, y: 50, size: 200 }, // Friendly Medical Professional
       
    ]);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const updateImageControl = (index: number, property: keyof ImageControl, value: number) => {
        setImageControls(prev => prev.map((control, i) => 
            i === index ? { ...control, [property]: value } : control
        ));
    };

    const resetControls = () => {
        setImageControls([
            { x: 0, y: 0, size: 100 },
            { x: 0, y: 0, size: 100 },
            { x: 0, y: 0, size: 100 },
            { x: 0, y: 0, size: 100 },
            { x: 0, y: 0, size: 100 },
            { x: 0, y: 0, size: 100 },
            { x: 0, y: 0, size: 100 },
        ]);
    };

    const images = [
        {
            src: "/Women.png",
            alt: "Medical Professional with Smartphone",
            name: "Professional 1"
        },
        {
            src: "/Professional Man in Thoughtful Pose-Photoroom.png",
            alt: "Professional Man in Thoughtful Pose",
            name: "Professional 4"
        },
        {
            src: "/Stylized Illustration of a Fashionable Young Man-Photoroom.png",
            alt: "Friendly Male Nurse", 
            name: "Professional 3"
        },
        
        
        {
            src: "/Stylized Female Character Fashion Illustration-Photoroom.png",
            alt: "Friendly Medical Professional",
            name: "Professional 2"
        },
        
        
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-caring-pattern opacity-60"></div>
            </div>

            {/* Control Panel */}
            {showControls && (
                <div className="fixed top-4 right-4 z-50 bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl max-h-[90vh] overflow-y-auto w-80">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg text-gray-800">Image Controls</h3>
                        <button 
                            onClick={() => setShowControls(false)}
                            className="text-gray-500 hover:text-gray-700 text-xl"
                        >
                            ×
                        </button>
                    </div>
                    
                    <button 
                        onClick={resetControls}
                        className="w-full mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Reset All
                    </button>

                    {images.map((image, index) => (
                        <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-3">{image.name}</h4>
                            
                            {/* X Position Control */}
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    X Position: {imageControls[index].x}px
                                </label>
                                <input
                                    type="range"
                                    min="-200"
                                    max="200"
                                    value={imageControls[index].x}
                                    onChange={(e) => updateImageControl(index, 'x', Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            {/* Y Position Control */}
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Y Position: {imageControls[index].y}px
                                </label>
                                <input
                                    type="range"
                                    min="-200"
                                    max="200"
                                    value={imageControls[index].y}
                                    onChange={(e) => updateImageControl(index, 'y', Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            {/* Size Control */}
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Size: {imageControls[index].size}%
                                </label>
                                <input
                                    type="range"
                                    min="25"
                                    max="200"
                                    value={imageControls[index].size}
                                    onChange={(e) => updateImageControl(index, 'size', Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="relative z-10 container-custom py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-16 items-center">
                        {/* Content Section */}
                        <div className="space-y-8">
                            {/* Trust Badge */}
                            <div className={`inline-flex items-center gap-4 px-8 py-4 glass-trust rounded-full border border-tertiary/30 mb-12 transition-all duration-1000 shadow-peaceful ${
                                isVisible ? 'animate-soft-scale opacity-100' : 'opacity-0'
                            }`}>
                                <div className="relative">
                                    <div className="w-4 h-4 bg-gradient-peaceful rounded-full"></div>
                                </div>
                                <span className="text-text-primary font-semibold text-lg font-body"></span>
                            </div>

                            {/* Main Heading - Back to Original Position */}
                            <div className="space-y-8 relative z-20">
                                <h1 className={`font-display heading-xl text-primary text-balance transition-all duration-1000 delay-300 ${
                                    isVisible ? 'animate-gentle-slide-up opacity-100' : 'opacity-0'
                                }`}>
                                    <span className="emilys-candy-regular" style={{ color: '#059669' }}>Building Stronger </span>
                                    <span className="emilys-candy-regular" style={{ color: '#f59e0b' }}>
                                        Communities Together
                                    </span>
                                </h1>
                                
                                <p className={`body-xl text-text-secondary max-w-2xl mx-auto text-balance leading-relaxed transition-all duration-1000 delay-500 font-body ${
                                    isVisible ? 'animate-gentle-slide-up opacity-100' : 'opacity-0'
                                }`}>
                                    
                                </p>
                            </div>

                            {/* Medical Professionals Images - Back to Original Position but Behind Text */}
                            <div className={`flex justify-center items-end gap-4 transition-all duration-1000 delay-700 relative z-0 ${
                                isVisible ? 'animate-gentle-slide-up opacity-100' : 'opacity-0'
                            }`}>
                                {images.map((image, index) => (
                                    <div 
                                        key={index}
                                        className="relative"
                                        style={{
                                            transform: `translate(${imageControls[index].x}px, ${imageControls[index].y}px) scale(${imageControls[index].size / 100})`,
                                            transition: 'transform 0.2s ease-out'
                                        }}
                                    >
                                        <div 
                                            className="animate-simple-float"
                                            style={{
                                                animationDelay: `${index * 0.5}s`
                                            }}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={200}
                                                height={300}
                                                className="w-auto h-64 object-contain"
                                                priority
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Smooth Bottom Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/30 to-transparent"></div>
        </section>
    );
};
