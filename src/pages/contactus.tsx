// pages/contactus.tsx
import React from 'react';
import { PAGE_PADDING_TOP } from '../config/pagePadding';

export default function ContactUs() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-red-50" style={{ paddingTop: PAGE_PADDING_TOP.contactus }}>
            {/* Combined Contact Section */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content - Left Side */}
                        <div className="text-left animate-fade-in-up">
                            <h1 className="heading-xl mb-6 text-british-blue">
                                Get Professional
                                <span className="text-gradient block">Support Today</span>
                            </h1>
                            
                            <p className="body-xl mb-8 text-gray-700 leading-relaxed">
                                Whether you need guidance on your career path, have questions about our services, 
                                or want to collaborate on meaningful projects, our expert team is here to support 
                                your social work journey in the UK.
                            </p>
                        </div>

                        {/* Contact Card - Right Side */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="card card-elevated border-2 border-british-blue p-8 text-center w-full max-w-md">
                                <h3 className="heading-3 text-british-blue mb-6">Contact Us</h3>
                                
                                <div className="bg-gray-50 rounded-lg p-6 mb-6">
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


        </div>
    );
} 