// pages/contact.tsx
import React, { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-caring-pattern opacity-30"></div>
                </div>
                
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Content Section */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="max-w-2xl lg:mx-0 mx-auto">
                                {/* Section Badge */}
                                <div className="inline-flex items-center gap-4 px-8 py-4 glass-trust rounded-full border border-white/30 mb-8 shadow-peaceful">
                                    <div className="w-3 h-3 bg-gradient-warm rounded-full"></div>
                                    <span className="font-semibold text-black text-lg font-body">Get in Touch</span>
                                </div>
                                
                                <h1 className="heading-1 text-black mb-8 animate-gentle-slide-up font-display">
                                    <span className="emilys-candy-regular" style={{ color: '#059669' }}>Connect</span>{' '}
                                    <span className="emilys-candy-regular" style={{ color: '#dc2626' }}>with Our</span>{' '}
                                    <span className="block emilys-candy-regular" style={{ color: '#1e3a8a' }}>Community</span>
                                </h1>
                                
                                {/* Social Media Icons */}
                                <div className="flex justify-center lg:justify-start gap-4 mb-8">
                                    {[
                                        { 
                                            name: 'Reddit', 
                                            icon: 'M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z',
                                            color: '#FF4500'
                                        },
                                        { 
                                            name: 'Discord', 
                                            icon: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z',
                                            color: '#5865F2'
                                        },
                                        { 
                                            name: 'Facebook', 
                                            icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                                            color: '#1877F2'
                                        },
                                        { 
                                            name: 'YouTube', 
                                            icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                                            color: '#FF0000'
                                        },
                                        { 
                                            name: 'Instagram', 
                                            icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                                            color: '#E4405F'
                                        }
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm border border-white/20 group"
                                            aria-label={social.name}
                                        >
                                            <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={social.color} viewBox="0 0 24 24">
                                                <path d={social.icon} />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                                
                                <p className="body-xl text-black mb-12 animate-gentle-slide-up leading-relaxed font-body" style={{ animationDelay: '0.2s' }}>
                                    Join our vibrant community of social workers. Whether you have questions, need support, or want to collaborate, we&apos;re here to connect with you.
                                </p>
                            </div>
                        </div>

                        {/* Illustration */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative mx-auto max-w-md lg:max-w-full">
                                <div className="relative">
                                    <Image
                                        src="/Cheerful Person Waving-Photoroom.png"
                                        alt="Cheerful person waving hello"
                                        width={400}
                                        height={450}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spacer */}
            <div className="h-40 bg-background"></div>

            {/* Contact Form Section */}
            <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Contact Information */}
                        <div className="order-2 lg:order-1">
                            <div className="mb-12">
                                <h2 className="heading-2 text-primary mb-8 font-display">
                                    <span className="emilys-candy-regular" style={{ color: '#1e3a8a' }}>Let&apos;s Start a</span>
                                    <span className="block text-gradient emilys-candy-regular">Conversation</span>
                                </h2>
                                <p className="body-large text-text-secondary leading-relaxed font-body">
                                    We&apos;re here to support your journey in social work. Reach out for collaboration opportunities, questions, or just to connect with fellow professionals.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="grid gap-6">
                                {[
                                    {
                                        icon: (
                                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        ),
                                        title: "Email Us",
                                        description: "contact@wesocialworkers.com",
                                        gradient: "bg-gradient-warm"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        ),
                                        title: "Call Us",
                                        description: "+1 (555) 123-4567",
                                        gradient: "bg-gradient-secondary"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        ),
                                        title: "Visit Us",
                                        description: "123 Community Street, Social Work City",
                                        gradient: "bg-gradient-peaceful"
                                    }
                                ].map((contact, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-6 p-6 glass-trust rounded-2xl border border-white/30 shadow-peaceful hover-caring hover-peaceful group animate-gentle-slide-up"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className={`w-16 h-16 ${contact.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-warm flex-shrink-0`}>
                                            {contact.icon}
                                        </div>
                                        <div>
                                            <h3 className="heading-4 text-primary mb-2 font-display">{contact.title}</h3>
                                            <p className="text-text-secondary font-body">{contact.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="order-1 lg:order-2">
                            <div className="glass-trust rounded-3xl p-10 border border-white/30 shadow-peaceful hover-caring">
                                <h3 className="heading-3 text-primary mb-8 font-display text-center">Send us a Message</h3>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-text-primary font-semibold mb-2 font-body">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="form-modern w-full"
                                                placeholder="Your full name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-text-primary font-semibold mb-2 font-body">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-modern w-full"
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="subject" className="block text-text-primary font-semibold mb-2 font-body">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="form-modern w-full"
                                            placeholder="What would you like to discuss?"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-text-primary font-semibold mb-2 font-body">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="form-modern w-full resize-none"
                                            placeholder="Tell us more about how we can help or connect with you..."
                                            required
                                        ></textarea>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        className="btn-2025 btn-primary-2025 hover-caring hover-peaceful w-full"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Boundary */}
            <div className="h-px bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
        </div>
    );
}
