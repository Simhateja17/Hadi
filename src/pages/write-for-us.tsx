import React from 'react';

const WriteForUsPage = () => {

    return (
        <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: '100px' }}>
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 emilys-candy-regular">
                            Write for Us
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-6">
                            Share your knowledge and insights with the social work community
                        </p>
                        <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                            <h2 className="text-lg font-semibold text-blue-800 mb-3">Submission Guidelines</h2>
                            <ul className="text-blue-700 text-left space-y-2">
                                <li>• Articles should be original and relevant to social work practice</li>
                                <li>• Maximum 1200 words for article content</li>
                                <li>• Include your professional bio and contact information</li>
                                <li>• Articles will be reviewed by our editorial team</li>
                                <li>• We reserve the right to edit for clarity and length</li>
                            </ul>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-8">
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <div>
                                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
                                <p className="text-yellow-700">
                                    Articles published on this platform represent the views and opinions of the individual authors 
                                    and do not necessarily reflect the official position or policies of We Social Workers UK. 
                                    Authors are responsible for the accuracy and content of their submissions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Article Submission Contact */}
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Your Article</h3>
                            
                            <p className="text-lg text-gray-600 mb-6">
                                For article submissions, please email us at:
                            </p>
                            
                            <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                <a 
                                    href="mailto:team@wesocialworkers.co.uk" 
                                    className="text-blue-600 font-bold text-xl hover:underline"
                                >
                                    team@wesocialworkers.co.uk
                                </a>
                            </div>

                            <p className="text-gray-600">
                                Please include your article, author bio, and any relevant images in your email. 
                                Our editorial team will review your submission and get back to you within 48 hours.
                            </p>
                            </div>
                    </div>
                </div>
        </div>
    );
};

export default WriteForUsPage;
