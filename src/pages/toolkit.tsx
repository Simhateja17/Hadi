// pages/toolkit.tsx
import React from 'react';
import Link from 'next/link';

export default function Toolkit() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-red-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="mb-6">
                                <span className="inline-block px-8 py-4 bg-british-red text-white rounded-full body-medium font-bold mb-6 shadow-smooth">
                                    🛠️ Professional Toolkit
                                </span>
                            </div>
                            
                            <h1 className="heading-xl mb-6 text-british-blue">
                                Your Essential
                                <span className="text-gradient block">UK Social Work</span>
                                Toolkit
                            </h1>
                            
                            <p className="body-xl mb-8 text-gray-700 leading-relaxed max-w-2xl lg:mx-0 mx-auto">
                                Access comprehensive resources, templates, and guidance designed specifically 
                                for international social workers transitioning to the UK professional landscape.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/contact" className="btn btn-primary btn-large">
                                    Get Full Access 🇬🇧
                                </Link>
                                <Link href="/blogs" className="btn btn-secondary btn-large">
                                    Browse Resources
                                </Link>
                            </div>
                        </div>

                        {/* Union Jack Design Element instead of character image */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative mx-auto max-w-md lg:max-w-full">
                                <div className="relative">
                                    <div className="w-full max-w-sm mx-auto aspect-square">
                                        {/* Union Jack Toolkit Design */}
                                        <div className="relative w-full h-full bg-white rounded-3xl shadow-2xl border-4 border-british-blue overflow-hidden">
                                            {/* Blue background */}
                                            <div className="absolute inset-0 bg-british-blue"></div>
                                            
                                            {/* White diagonal stripes */}
                                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                                                <path d="M0,0 L200,200" stroke="white" strokeWidth="20"/>
                                                <path d="M0,200 L200,0" stroke="white" strokeWidth="20"/>
                                            </svg>
                                            
                                            {/* Red diagonal stripes */}
                                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                                                <path d="M0,0 L200,200" stroke="#C8102E" strokeWidth="12"/>
                                                <path d="M0,200 L200,0" stroke="#C8102E" strokeWidth="12"/>
                                            </svg>
                                            
                                            {/* White cross */}
                                            <div className="absolute top-0 bottom-0 left-1/2 w-12 bg-white transform -translate-x-1/2"></div>
                                            <div className="absolute left-0 right-0 top-1/2 h-8 bg-white transform -translate-y-1/2"></div>
                                            
                                            {/* Red cross */}
                                            <div className="absolute top-0 bottom-0 left-1/2 w-6 bg-british-red transform -translate-x-1/2"></div>
                                            <div className="absolute left-0 right-0 top-1/2 h-4 bg-british-red transform -translate-y-1/2"></div>
                                            
                                            {/* Toolkit overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-white bg-opacity-95 rounded-2xl p-6 text-center shadow-lg">
                                                    <div className="w-16 h-16 bg-british-blue rounded-full flex items-center justify-center mx-auto mb-3">
                                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="heading-5 text-british-blue mb-1">Professional</h3>
                                                    <p className="body-small text-british-red font-bold">🇬🇧 Toolkit</p>
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

            {/* Toolkit Resources Section */}
            <section className="section-padding-lg bg-red-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="inline-block px-8 py-4 bg-british-blue text-white rounded-full body-medium font-bold mb-6 shadow-smooth">
                            📚 Essential Resources
                        </span>
                        <h2 className="heading-2 mb-6 text-british-blue">
                            Everything You Need for
                            <span className="text-gradient block">UK Social Work Success</span>
                        </h2>
                        <p className="body-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            Our comprehensive toolkit provides you with professionally crafted resources 
                            to navigate your journey as a social worker in the United Kingdom.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "CV Templates & Examples",
                                description: "Professional CV templates specifically designed for UK social work positions",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                                    </svg>
                                ),
                                color: "blue"
                            },
                            {
                                title: "Interview Preparation Guide",
                                description: "Comprehensive guide with common questions and best practices for UK interviews",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                    </svg>
                                ),
                                color: "red"
                            },
                            {
                                title: "Registration Checklist",
                                description: "Step-by-step checklist for Social Work England registration process",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                ),
                                color: "white"
                            },
                            {
                                title: "UK Social Work Terminology",
                                description: "Essential glossary of UK-specific social work terms and concepts",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                                    </svg>
                                ),
                                color: "blue"
                            },
                            {
                                title: "Visa Application Guide",
                                description: "Complete guide to visa requirements and application processes",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                                    </svg>
                                ),
                                color: "red"
                            },
                            {
                                title: "Cultural Integration Tips",
                                description: "Practical advice for adapting to UK workplace culture and practices",
                                icon: (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                                    </svg>
                                ),
                                color: "white"
                            }
                        ].map((resource, index) => {
                            const colorClasses: Record<string, string> = {
                                blue: "bg-british-blue text-white",
                                red: "bg-british-red text-white",
                                white: "bg-white text-british-blue border-2 border-british-blue"
                            };
                            
                            return (
                                <div key={index} className="card card-elevated hover-lift animate-fade-in-up border-2 border-british-blue" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="p-8">
                                        <div className={`w-16 h-16 ${colorClasses[resource.color]} rounded-xl flex items-center justify-center mb-6 shadow-smooth`}>
                                            {resource.icon}
                                        </div>
                                        <h3 className="heading-5 mb-4 text-british-blue">{resource.title}</h3>
                                        <p className="body-medium text-gray-700 leading-relaxed mb-6">
                                            {resource.description}
                                        </p>
                                        <Link href="/toolkits" className="inline-flex items-center text-british-red font-bold hover:text-british-blue transition-colors">
                                            Access Toolkit PDFs
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding-lg bg-gradient-primary text-white">
                <div className="container-custom text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-2 mb-6 text-white">
                            Ready to Access Your Complete Toolkit? 🇬🇧
                        </h2>
                        <p className="body-xl mb-8 text-blue-100 leading-relaxed">
                            Get instant access to all our professional resources, templates, and guides. 
                            Everything you need to succeed as a social worker in the United Kingdom.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-secondary btn-large">
                                Get Full Access Now
                            </Link>
                            <Link href="/blogs" className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-british-blue btn-large">
                                Browse Free Resources
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
