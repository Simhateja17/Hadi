// src/pages/opportunities.tsx
import React from 'react';
import { Layout } from '../../components/Layout';

const OpportunitiesPage = () => {
    return (
        <Layout>
            <div className="py-12 max-w-6xl mx-auto px-6">
                <h1 className="text-4xl font-bold mb-8 text-text-dark">
                    Career Opportunities
                </h1>
                
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-primary mb-4">
                            Find Your Next Career Move
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Explore exciting career opportunities in social work, healthcare, and community services. 
                            We connect talented professionals with meaningful positions that make a difference.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Sample job opportunities - you can replace with dynamic data */}
                            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-semibold text-text-dark mb-2">
                                    Senior Social Worker
                                </h3>
                                <p className="text-gray-600 mb-3">London, UK</p>
                                <p className="text-sm text-gray-700 mb-4">
                                    Join our team to support vulnerable adults and families in the community.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                        Full-time
                                    </span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        £35,000 - £42,000
                                    </span>
                                </div>
                                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors">
                                    Apply Now
                                </button>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-semibold text-text-dark mb-2">
                                    Children&apos;s Social Worker
                                </h3>
                                <p className="text-gray-600 mb-3">Manchester, UK</p>
                                <p className="text-sm text-gray-700 mb-4">
                                    Make a positive impact on children&apos;s lives through dedicated social work practice.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                        Full-time
                                    </span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        £32,000 - £38,000
                                    </span>
                                </div>
                                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors">
                                    Apply Now
                                </button>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-semibold text-text-dark mb-2">
                                    Mental Health Support Worker
                                </h3>
                                <p className="text-gray-600 mb-3">Birmingham, UK</p>
                                <p className="text-sm text-gray-700 mb-4">
                                    Provide crucial support to individuals experiencing mental health challenges.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                        Part-time
                                    </span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        £28,000 - £32,000
                                    </span>
                                </div>
                                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary/5 p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold text-text-dark mb-4">
                            Can&apos;t Find What You&apos;re Looking For?
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Register your interest and we&apos;ll notify you when relevant opportunities become available.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OpportunitiesPage;