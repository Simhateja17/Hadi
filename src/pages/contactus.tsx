// pages/contactus.tsx
import React from 'react';
import { PAGE_PADDING_TOP } from '../config/pagePadding';

export default function ContactUs() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-red-50" style={{ paddingTop: PAGE_PADDING_TOP.contactus }}>
            {/* Contact Form Section */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto flex justify-center">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <span className="inline-block px-8 py-4 bg-british-blue text-white rounded-full body-medium font-bold mb-6 shadow-smooth">
                               
                            </span>
                            
                            <h2 className="heading-2 mb-6 text-british-blue">
                                
                                <span className="text-gradient block"></span>
                            </h2>
                            
                            <p className="body-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                                
                            </p>
                        </div>

                        {/* Contact Card */}
                        <div className="card card-elevated border-2 border-british-blue p-8 text-center w-full">
                            <div className="max-w-md mx-auto">
                                <div className="w-16 h-16 bg-british-blue rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                
                                <h3 className="heading-3 text-british-blue mb-4">Contact Us</h3>
                                
                                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                    <p className="text-gray-600 mb-2">Email</p>
                                    <a 
                                        href="mailto:team@wesocialworkers.co.uk" 
                                        className="text-british-blue font-bold text-lg hover:underline"
                                    >
                                        team@wesocialworkers.co.uk
                                    </a>
                                </div>
                                
                                <p className="text-gray-600 text-sm">
                                    We&apos;re here to help with any questions or inquiries you may have.
                                </p>
                            </div>
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
                        </div>

                        {/* Removed decorative flag element */}
                    </div>
                </div>
            </section>


        </div>
    );
} 