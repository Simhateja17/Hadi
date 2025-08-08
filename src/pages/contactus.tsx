// pages/contactus.tsx
import React, { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        role: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        urgency: 'medium'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Form submitted:', formData);
            setSubmitStatus('success');
            // Reset form on success
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                organization: '',
                role: '',
                subject: '',
                message: '',
                preferredContact: 'email',
                urgency: 'medium'
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-red-50">
            {/* Hero Section */}
            <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-red-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="text-center lg:text-left animate-fade-in-up">
                            <div className="mb-6">
                                <span className="inline-block px-8 py-4 bg-british-red text-white rounded-full body-medium font-bold mb-6 shadow-smooth">
                                    🇬🇧 Contact Us
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

                        {/* Union Jack Design Element */}
                        <div className="relative animate-scale-in">
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
                                                    <h3 className="heading-5 text-british-blue mb-1">Professional Contact</h3>
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
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <span className="inline-block px-8 py-4 bg-british-blue text-white rounded-full body-medium font-bold mb-6 shadow-smooth">
                                📧 Professional Contact Form
                            </span>
                            
                            <h2 className="heading-2 mb-6 text-british-blue">
                                Tell Us About
                                <span className="text-gradient block">Your Professional Needs</span>
                            </h2>
                            
                            <p className="body-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                                Fill out our comprehensive form below and our expert team will get back to you 
                                with personalized support and guidance for your social work journey.
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
                                        <h3 className="font-bold">Message Sent Successfully!</h3>
                                        <p>Thank you for reaching out! Our team will get back to you within 24 hours.</p>
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
                                        <h3 className="font-bold">Error Sending Message</h3>
                                        <p>Sorry, there was an error sending your message. Please try again.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Contact Form */}
                        <div className="card card-elevated border-2 border-british-blue p-8">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Personal Information Section */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 pb-4 border-b-2 border-british-blue">
                                        <div className="w-10 h-10 bg-british-blue rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="heading-4 text-british-blue font-bold">Personal Information</h3>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-british-blue font-bold mb-3">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                                placeholder="Enter your first name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-british-blue font-bold mb-3">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                                placeholder="Enter your last name"
                                                required
                                            />
                                        </div>
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
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                                placeholder="+44 7XXX XXXXXX"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Professional Information Section */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 pb-4 border-b-2 border-british-red">
                                        <div className="w-10 h-10 bg-british-red rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="heading-4 text-british-red font-bold">Professional Background</h3>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="organization" className="block text-british-blue font-bold mb-3">
                                                Organization/Employer
                                            </label>
                                            <input
                                                type="text"
                                                id="organization"
                                                name="organization"
                                                value={formData.organization}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                                placeholder="Your current workplace"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="role" className="block text-british-blue font-bold mb-3">
                                                Current Role
                                            </label>
                                            <select
                                                id="role"
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                            >
                                                <option value="">Select your role</option>
                                                <option value="social-worker">Social Worker</option>
                                                <option value="student">Social Work Student</option>
                                                <option value="manager">Team Manager</option>
                                                <option value="senior-practitioner">Senior Practitioner</option>
                                                <option value="independent">Independent Social Worker</option>
                                                <option value="educator">Social Work Educator</option>
                                                <option value="researcher">Researcher</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Preferences Section */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 pb-4 border-b-2 border-gray-300">
                                        <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="heading-4 text-gray-700 font-bold">Contact Preferences</h3>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="preferredContact" className="block text-british-blue font-bold mb-3">
                                                Preferred Contact Method
                                            </label>
                                            <select
                                                id="preferredContact"
                                                name="preferredContact"
                                                value={formData.preferredContact}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                            >
                                                <option value="email">Email</option>
                                                <option value="phone">Phone</option>
                                                <option value="either">Either Email or Phone</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="urgency" className="block text-british-blue font-bold mb-3">
                                                Urgency Level
                                            </label>
                                            <select
                                                id="urgency"
                                                name="urgency"
                                                value={formData.urgency}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                            >
                                                <option value="low">Low - General inquiry</option>
                                                <option value="medium">Medium - Within a few days</option>
                                                <option value="high">High - Within 24 hours</option>
                                                <option value="urgent">Urgent - Same day response needed</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Section */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 pb-4 border-b-2 border-british-blue">
                                        <div className="w-10 h-10 bg-british-blue rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <h3 className="heading-4 text-british-blue font-bold">Your Message</h3>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="subject" className="block text-british-blue font-bold mb-3">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-british-blue focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                            placeholder="Brief description of your inquiry"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-british-blue font-bold mb-3">
                                            Message *
                                        </label>
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
                                                <span>Sending Message...</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                                <span>Send Message 🇬🇧</span>
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

            {/* Why Choose Us Section */}
            <section className="section-padding-lg bg-red-50">
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
                            <p className="body-medium text-gray-700">Professional advice from experienced UK social workers with proven track records</p>
                        </div>
                        
                        <div className="text-center p-6 card border-2 border-british-red hover-lift">
                            <div className="w-16 h-16 bg-british-red rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                </svg>
                            </div>
                            <h3 className="heading-5 mb-3 text-british-red">Personalized Support</h3>
                            <p className="body-medium text-gray-700">Tailored assistance based on your unique background, goals, and circumstances</p>
                        </div>
                        
                        <div className="text-center p-6 card border-2 border-british-blue hover-lift">
                            <div className="w-16 h-16 bg-white border-2 border-british-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-british-blue" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <h3 className="heading-5 mb-3 text-british-blue">Proven Success</h3>
                            <p className="body-medium text-gray-700">95% success rate in helping international social workers achieve UK careers</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 