// pages/contact.tsx
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-red-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="text-center lg:text-left">
                            <div className="mb-6">
                                <span className="inline-block px-6 py-3 bg-british-red text-white rounded-full body-medium font-bold mb-6 shadow-smooth">
                                    🇬🇧 Contact Us
                                </span>
                            </div>
                            
                            <h1 className="heading-xl mb-6 text-british-blue">
                                Ready to Start Your
                                <span className="text-gradient block">UK Journey?</span>
                            </h1>
                            
                            <p className="body-xl mb-8 text-gray-700 leading-relaxed max-w-2xl lg:mx-0 mx-auto">
                                Get in touch with our expert team for personalized guidance on your 
                                social work career in the United Kingdom. We&apos;re here to help you succeed.
                            </p>
                            
                            {/* Contact Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-british-blue shadow-smooth">
                                    <div className="w-12 h-12 bg-british-blue rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-british-blue">Email</h3>
                                        <p className="text-gray-600">info@wesocialworkersuk.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-british-red shadow-smooth">
                                    <div className="w-12 h-12 bg-british-red rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-british-red">Phone</h3>
                                        <p className="text-gray-600">+44 (0) 20 1234 5678</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Union Jack Design Element instead of character image */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative mx-auto max-w-md lg:max-w-full">
                                <div className="relative">
                                    <div className="w-full max-w-sm mx-auto aspect-square">
                                        {/* Union Jack Contact Design */}
                                        <div className="relative w-full h-full bg-white rounded-3xl shadow-2xl border-4 border-british-blue overflow-hidden">
                                            {/* Blue background */}
                                            <div className="absolute inset-0 bg-british-blue"></div>
                                            
                                            {/* White cross */}
                                            <div className="absolute top-0 bottom-0 left-1/2 w-12 bg-white transform -translate-x-1/2"></div>
                                            <div className="absolute left-0 right-0 top-1/2 h-8 bg-white transform -translate-y-1/2"></div>
                                            
                                            {/* Red cross */}
                                            <div className="absolute top-0 bottom-0 left-1/2 w-6 bg-british-red transform -translate-x-1/2"></div>
                                            <div className="absolute left-0 right-0 top-1/2 h-4 bg-british-red transform -translate-y-1/2"></div>
                                            
                                            {/* Contact overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-white bg-opacity-95 rounded-2xl p-6 text-center shadow-lg">
                                                    <div className="w-16 h-16 bg-british-blue rounded-full flex items-center justify-center mx-auto mb-3">
                                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="heading-5 text-british-blue mb-1">Get In Touch</h3>
                                                    <p className="body-small text-british-red font-bold">🇬🇧 UK Support</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section-padding-lg bg-red-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-3 bg-british-blue text-white rounded-full body-medium font-bold mb-6 shadow-smooth">
                                📧 Send us a Message
                            </span>
                            <h2 className="heading-2 mb-6 text-british-blue">
                                Let&apos;s Discuss Your
                                <span className="text-gradient block">Career Goals</span>
                            </h2>
                            <p className="body-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                                Fill out the form below and our team will get back to you within 24 hours 
                                to discuss how we can support your UK social work journey.
                            </p>
                        </div>

                        <div className="card card-elevated p-8 border-2 border-british-blue">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-british-blue font-bold mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-british-blue font-bold mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-british-blue font-bold mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors"
                                        placeholder="What can we help you with?"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-british-blue font-bold mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors resize-vertical"
                                        placeholder="Tell us more about your goals and how we can help..."
                                    />
                                </div>
                                
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary btn-large disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message 🇬🇧
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                            
                            {submitStatus === 'success' && (
                                <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                    ✅ Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                    ❌ Sorry, there was an error sending your message. Please try again.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info Section */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="heading-2 mb-6 text-british-blue">
                            Why Choose 
                            <span className="text-gradient block">We Social Workers UK?</span>
                        </h2>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 card border-2 border-british-blue hover-lift">
                            <div className="w-16 h-16 bg-british-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="heading-5 mb-3 text-british-blue">Expert Guidance</h3>
                            <p className="body-medium text-gray-700">Professional advice from experienced UK social workers</p>
                        </div>
                        
                        <div className="text-center p-6 card border-2 border-british-red hover-lift">
                            <div className="w-16 h-16 bg-british-red rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                </svg>
                            </div>
                            <h3 className="heading-5 mb-3 text-british-red">Personalized Support</h3>
                            <p className="body-medium text-gray-700">Tailored assistance based on your unique background and goals</p>
                        </div>
                        
                        <div className="text-center p-6 card border-2 border-british-blue hover-lift">
                            <div className="w-16 h-16 bg-white border-2 border-british-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-british-blue" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <h3 className="heading-5 mb-3 text-british-blue">Proven Success</h3>
                            <p className="body-medium text-gray-700">95% success rate in helping social workers achieve UK careers</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
