// src/pages/aboutus.tsx
import { PAGE_PADDING_TOP } from '../config/pagePadding';

export default function AboutUsPage() {
    return (
        <div className="bg-white" style={{ paddingTop: PAGE_PADDING_TOP.aboutus }}>
            {/* Main About Us Section */}
            <section className="section-padding-lg bg-white">
                <div className="w-full flex justify-center">
                    <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-british-blue">
                                Welcome to We Social Workers UK
                            </h1>
                            <p className="text-xl text-british-red font-semibold mb-8">By Social Workers. For Social Workers.</p>
                        </div>

                        {/* Main Content */}
                        <div className="space-y-8 text-left">
                            <p className="body-large text-gray-800 leading-relaxed">
                                We Social Workers UK is a free, volunteer-led platform created by experienced UK registered social workers to support international professionals aspiring to build a career in the UK social work sector.
                            </p>

                            <p className="body-large text-gray-800 leading-relaxed">
                                We Social Workers UK is a dedicated support and guidance platform built by social workers, for social workers. Our mission is to empower both aspiring and qualified professionals, especially international social workers on their journey into the UK social work profession.
                            </p>

                            <p className="body-large text-gray-800 leading-relaxed">
                                We understand that stepping into a new country&apos;s professional landscape can be daunting. That&apos;s why we offer guidance to help you navigate every stage of your process.
                            </p>
                        </div>

                        {/* Who We Are Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-british-blue mb-6 text-center">Who We Are</h2>
                            <p className="body-large text-gray-800 leading-relaxed text-left">
                                We are a team of UK registered social workers with over 10 years of experience across both India, Ireland and the UK. We&apos;ve worked on the frontline and in management. We understand firsthand challenges and opportunities of being a social worker, especially when transitioning internationally. Our support is offered voluntarily, out of a shared commitment to uplift our global social work community.
                            </p>
                        </div>

                        {/* Our Promise Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-british-blue mb-6 text-center">Our Promise</h2>
                            <p className="body-large text-gray-800 leading-relaxed text-left mb-6">
                                At We Social Workers UK, you&apos;re not just accessing a service - you&apos;re connecting with a group of professionals who truly understand your journey because we&apos;ve lived it ourselves. We believe in sharing real-world knowledge, practical tools, and ongoing encouragement to help you thrive-wherever your social work journey begins.
                            </p>
                            <p className="body-large text-gray-800 leading-relaxed text-left">
                                You will be guided and supported by social workers who have been through the similar journey and been where you are.
                            </p>
                        </div>

                        {/* What We Offer Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-british-blue mb-6 text-center">What We Offer:</h2>
                            <ul className="space-y-3 text-gray-800 body-large">
                                    <li className="flex items-center">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mr-6 flex-shrink-0"></span>
                                        <span>Step-by-step guidance on registration, job search, and UK practice standards</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mr-6 flex-shrink-0"></span>
                                        <span>Free resources and practical advice from real-world experience</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mr-6 flex-shrink-0"></span>
                                        <span>A growing knowledge hub open to contributions from other professionals</span>
                                    </li>
                                    <li className="flex">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mr-6 flex-shrink-0" style={{ marginTop: '0.6rem' }}></span>
                                        <span>We are not a recruitment agency, we don&apos;t offer visa advice, and we never charge a fee. Our aim is simple: to uplift and guide our fellow social workers with honesty, empathy, and experience.</span>
                                    </li>
                                    <li className="flex">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mr-6 flex-shrink-0" style={{ marginTop: '0.6rem' }}></span>
                                        <span>Join our community and take the next step in your UK social work journey-with the support of those who truly understand it.</span>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA removed as requested */}
        </div>
    );
}




