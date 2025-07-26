// pages/toolkit.tsx
import React from 'react';
import Image from 'next/image';

export default function Toolkit() {
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
                                    <span className="font-semibold text-white text-lg font-body">Professional Resources</span>
                                </div>
                                
                                <h1 className="heading-1 text-white mb-8 animate-gentle-slide-up font-display">
                                    <span className="emilys-candy-regular" style={{ color: '#059669' }}>Professional</span>{' '}
                                    <span className="emilys-candy-regular" style={{ color: '#dc2626' }}>Toolkit</span>{' '}
                                    <span className="block emilys-candy-regular" style={{ color: '#1e3a8a' }}>for Social Workers</span>
                                </h1>
                                
                                <p className="body-xl text-white/90 mb-12 animate-gentle-slide-up leading-relaxed font-body" style={{ animationDelay: '0.2s' }}>
                                    Access comprehensive resources, tools, and templates designed to enhance your practice and support your professional growth in social work.
                                </p>
                            </div>
                        </div>

                        {/* Illustration */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative mx-auto max-w-md lg:max-w-full">
                                <div className="relative">
                                    <Image
                                        src="/Professional Cartoon Man in Suit-Photoroom.png"
                                        alt="Professional toolkit illustration"
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

            {/* Toolkit Resources Section */}
            <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="heading-2 text-primary mb-8 font-display">
                            <span className="emilys-candy-regular" style={{ color: '#1e3a8a' }}>Essential Tools</span>
                            <span className="block text-gradient emilys-candy-regular">for Your Practice</span>
                        </h2>
                        <p className="body-large text-text-secondary max-w-3xl mx-auto leading-relaxed font-body">
                            Discover professional resources designed to streamline your workflow and enhance client outcomes.
                        </p>
                    </div>

                    {/* Tools Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Assessment Templates",
                                description: "Comprehensive assessment forms and evaluation tools for various client populations.",
                                icon: "📋",
                                gradient: "bg-gradient-warm"
                            },
                            {
                                title: "Case Management",
                                description: "Digital tools and templates for effective case documentation and tracking.",
                                icon: "📁",
                                gradient: "bg-gradient-secondary"
                            },
                            {
                                title: "Resource Directory",
                                description: "Curated list of community resources, referral services, and support networks.",
                                icon: "🏢",
                                gradient: "bg-gradient-peaceful"
                            },
                            {
                                title: "Professional Development",
                                description: "Continuing education resources, certification programs, and skill-building materials.",
                                icon: "📚",
                                gradient: "bg-gradient-warm"
                            },
                            {
                                title: "Crisis Intervention",
                                description: "Emergency protocols, safety planning templates, and crisis response guidelines.",
                                icon: "🚨",
                                gradient: "bg-gradient-secondary"
                            },
                            {
                                title: "Documentation Forms",
                                description: "Professional forms, reports, and documentation templates for various scenarios.",
                                icon: "📝",
                                gradient: "bg-gradient-peaceful"
                            }
                        ].map((tool, index) => (
                            <div
                                key={index}
                                className="p-8 glass-trust rounded-3xl border border-white/30 shadow-peaceful hover-caring hover-peaceful group animate-gentle-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`w-16 h-16 ${tool.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-warm text-2xl`}>
                                    {tool.icon}
                                </div>
                                <h3 className="heading-4 text-primary mb-4 font-display">{tool.title}</h3>
                                <p className="text-text-secondary leading-relaxed font-body mb-6">{tool.description}</p>
                                <button className="btn-2025 btn-secondary-2025 hover-caring hover-peaceful w-full">
                                    Access Resource
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
