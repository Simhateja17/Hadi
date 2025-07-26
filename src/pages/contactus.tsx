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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        
        // Reset form or show success message
        alert('Thank you for reaching out! We\'ll get back to you soon.');
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-32">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-caring-pattern opacity-60"></div>
                    <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-peaceful rounded-full opacity-10 animate-caring-float blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-warm rounded-full opacity-8 animate-caring-float blur-3xl" style={{ animationDelay: '3s' }}></div>
                </div>
                
                <div className="container-custom relative z-10">
                    <div className="text-center animate-gentle-slide-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-4 px-8 py-4 glass-trust rounded-full border border-white/30 mb-8 shadow-peaceful">
                            <div className="w-3 h-3 bg-gradient-warm rounded-full animate-pulse"></div>
                            <span className="font-semibold text-primary text-lg font-body">Professional Support</span>
                        </div>
                        
                        <h1 className="heading-1 text-primary mb-8 font-display">
                            <span className="emilys-candy-regular" style={{ color: '#059669' }}>Get in</span>{' '}
                            <span className="emilys-candy-regular" style={{ color: '#dc2626' }}>Touch</span>{' '}
                            <span className="block emilys-candy-regular" style={{ color: '#1e3a8a' }}>With Us</span>
                        </h1>
                        
                        <p className="body-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-body mb-8">
                            Whether you need guidance on your career path, have questions about our services, or want to collaborate on meaningful projects, our team is here to support your social work journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-background relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-community-dots opacity-5"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-4 px-8 py-4 glass-trust rounded-full border border-tertiary/20 mb-8 shadow-peaceful">
                                <div className="w-3 h-3 bg-gradient-peaceful rounded-full animate-pulse"></div>
                                <span className="font-semibold text-primary text-lg font-body emilys-candy-regular">Contact Form</span>
                            </div>
                            
                            <h2 className="heading-2 text-primary mb-8 font-display">
                                <span className="emilys-candy-regular" style={{ color: '#1e3a8a' }}>Tell Us About</span>
                                <span className="block text-gradient emilys-candy-regular">Your Needs</span>
                            </h2>
                            
                            <p className="body-large text-text-secondary max-w-2xl mx-auto leading-relaxed font-body">
                                Fill out the form below and our team will get back to you with personalized support and guidance for your social work journey.
                            </p>
                        </div>

                        {/* Contact Form */}
                        <div className="glass-trust rounded-3xl p-12 border border-white/30 shadow-peaceful hover-caring">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Personal Information */}
                                <div className="space-y-6">
                                    <h3 className="heading-4 text-primary font-display emilys-candy-regular flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-warm rounded-2xl flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        Personal Information
                                    </h3>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-text-primary font-semibold mb-2 font-body">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="form-modern w-full"
                                                placeholder="Your first name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-text-primary font-semibold mb-2 font-body">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="form-modern w-full"
                                                placeholder="Your last name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-text-primary font-semibold mb-2 font-body">
                                                Email Address *
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
                                        <div>
                                            <label htmlFor="phone" className="block text-text-primary font-semibold mb-2 font-body">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="form-modern w-full"
                                                placeholder="+44 7XXX XXXXXX"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Professional Information */}
                                <div className="space-y-6">
                                    <h3 className="heading-4 text-primary font-display emilys-candy-regular flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-secondary rounded-2xl flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        Professional Background
                                    </h3>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="organization" className="block text-text-primary font-semibold mb-2 font-body">
                                                Organization/Employer
                                            </label>
                                            <input
                                                type="text"
                                                id="organization"
                                                name="organization"
                                                value={formData.organization}
                                                onChange={handleChange}
                                                className="form-modern w-full"
                                                placeholder="Your current workplace"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="role" className="block text-text-primary font-semibold mb-2 font-body">
                                                Current Role
                                            </label>
                                            <select
                                                id="role"
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                className="form-modern w-full"
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

                                {/* Contact Preferences */}
                                <div className="space-y-6">
                                    <h3 className="heading-4 text-primary font-display emilys-candy-regular flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-peaceful rounded-2xl flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        Contact Preferences
                                    </h3>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="preferredContact" className="block text-text-primary font-semibold mb-2 font-body">
                                                Preferred Contact Method
                                            </label>
                                            <select
                                                id="preferredContact"
                                                name="preferredContact"
                                                value={formData.preferredContact}
                                                onChange={handleChange}
                                                className="form-modern w-full"
                                            >
                                                <option value="email">Email</option>
                                                <option value="phone">Phone</option>
                                                <option value="either">Either Email or Phone</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="urgency" className="block text-text-primary font-semibold mb-2 font-body">
                                                Urgency Level
                                            </label>
                                            <select
                                                id="urgency"
                                                name="urgency"
                                                value={formData.urgency}
                                                onChange={handleChange}
                                                className="form-modern w-full"
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
                                    <h3 className="heading-4 text-primary font-display emilys-candy-regular flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-warm rounded-2xl flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        Your Message
                                    </h3>
                                    
                                    <div>
                                        <label htmlFor="subject" className="block text-text-primary font-semibold mb-2 font-body">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="form-modern w-full"
                                            placeholder="Brief description of your inquiry"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-text-primary font-semibold mb-2 font-body">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="form-modern w-full resize-none"
                                            placeholder="Please provide details about your inquiry, questions, or how we can support you in your social work journey..."
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                
                                {/* Submit Button */}
                                <div className="text-center pt-8">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-2025 btn-primary-2025 hover-caring hover-peaceful min-w-48 relative overflow-hidden group"
                                    >
                                        <div className="flex items-center gap-3">
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                    </svg>
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                    </svg>
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </div>
                                    </button>
                                    
                                    <p className="text-sm text-text-muted mt-4 font-body">
                                        We respect your privacy and will never share your information with third parties.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 