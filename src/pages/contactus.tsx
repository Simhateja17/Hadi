// pages/contactus.tsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { PAGE_PADDING_TOP } from '../config/pagePadding';

export default function ContactUs() {
    const MAX_MESSAGE_WORDS = 100;
    
    const countWords = (text: string): number => {
        const trimmed = text.trim();
        if (!trimmed) return 0;
        return trimmed.split(/\s+/).length;
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [messageWords, setMessageWords] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Enforce 100-word limit on the message field
        if (name === 'message') {
            const words = value.trim().length ? value.trim().split(/\s+/) : [];
            let limited = value;
            if (words.length > MAX_MESSAGE_WORDS) {
                limited = words.slice(0, MAX_MESSAGE_WORDS).join(' ');
            }
            setMessageWords(countWords(limited));
            setFormData(prev => ({ ...prev, message: limited }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
            // Use a dedicated contact template; fallback to generic template id only if needed
            const templateId = (process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) as string;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

            if (!serviceId || !templateId || !publicKey) {
                console.warn('EmailJS env vars missing. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.');
                throw new Error('Email service not configured');
            }

            type TemplateParams = {
                name: string;
                email: string;
                phone: string;
                qualification: string;
                message: string;
                site_name: string;
            };

            const templateParams: TemplateParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                qualification: formData.qualification,
                message: formData.message,
                site_name: 'We Social Workers UK'
            };

            await emailjs.send(serviceId, templateId, templateParams, { publicKey });

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                qualification: '',
                message: ''
            });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-red-50" style={{ paddingTop: PAGE_PADDING_TOP.contactus }}>
            {/* Contact Form Section */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <span className="inline-block px-8 py-4 bg-british-blue text-white rounded-full body-medium font-bold mb-6 shadow-smooth">
                               
                            </span>
                            
                            <h2 className="heading-2 mb-6 text-british-blue">
                                Register your interest
                                <span className="text-gradient block"></span>
                            </h2>
                            
                            <p className="body-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                                
                            </p>
                        </div>

                        {/* Success/Error Messages */}
                        {submitStatus === 'success' && (
                            <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 text-green-800 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <h3 className="font-bold">Registration Submitted Successfully!</h3>
                                        <p>Thank you for registering your interest! Our team will get back to you within 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 text-red-800 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <h3 className="font-bold">Error Submitting Registration</h3>
                                        <p>Sorry, there was an error submitting your registration. Please try again.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Contact Form */}
                        <div className="card card-elevated border-2 border-british-blue p-8">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Personal Information Section */}
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-british-blue font-bold mb-3">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-british-blue font-bold mb-3">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-british-blue font-bold mb-3">
                                                Phone Number <span className="text-gray-500">(Optional)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                                placeholder="Enter your Mobile No. with Country Code"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Qualification Section */}
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="qualification" className="block text-british-blue font-bold mb-3">
                                            Qualification *
                                        </label>
                                        <select
                                            id="qualification"
                                            name="qualification"
                                            value={formData.qualification}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                            required
                                        >
                                            <option value="">Select your qualification</option>
                                            <option value="pursuing-ma-ba">Pursuing MA/BA in Social Work</option>
                                            <option value="graduate-pg">Graduate/ PG in Social Work</option>
                                            <option value="working-social-worker">Working as a social worker</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message Section */}
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <label htmlFor="message" className="block text-british-blue font-bold">
                                                Message *
                                            </label>
                                            <span className={`text-sm ${messageWords > MAX_MESSAGE_WORDS ? 'text-red-600' : 'text-gray-500'}`}>
                                                {messageWords}/{MAX_MESSAGE_WORDS} words
                                            </span>
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors resize-vertical bg-gray-50 focus:bg-white"
                                            placeholder="Please provide details about your inquiry, questions, or how we can support you in your social work journey..."
                                            required
                                        ></textarea>
                                        <p className="mt-1 text-xs text-gray-500">Up to {MAX_MESSAGE_WORDS} words.</p>
                                    </div>
                                </div>
                                
                                {/* Submit Button */}
                                <div className="text-center pt-8 border-t-2 border-gray-100">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary btn-large disabled:opacity-50 disabled:cursor-not-allowed hover-lift min-w-60"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                                <span>Submitting...</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                                <span>Submit</span>
                                            </div>
                                        )}
                                    </button>
                                    
                                    <p className="text-sm text-gray-600 mt-4">
                                        ✅ We respect your privacy and will never share your information with third parties.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-red-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-16 items-center">
                        {/* Content */}
                        <div className="text-center lg:text-left animate-fade-in-up">
                            <div className="mb-6">
                                <span className="inline-block px-8 py-4 bg-british-red text-white rounded-full body-medium font-bold mb-6 shadow-smooth">
                                    
                                </span>
                            </div>
                            
                            <h1 className="heading-xl mb-6 text-british-blue">
                                Get Professional
                                <span className="text-gradient block">Support Today</span>
                            </h1>
                            
                            <p className="body-xl mb-8 text-gray-700 leading-relaxed max-w-2xl lg:mx-0 mx-auto">
                                Whether you need guidance on your career path, have questions about our services, 
                                or want to collaborate on meaningful projects, our expert team is here to support 
                                your social work journey in the UK.
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
                                        <p className="text-gray-600">team@wesocialworkers.co.uk</p>
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

                        {/* Removed decorative flag element */}
                    </div>
                </div>
            </section>


        </div>
    );
} 