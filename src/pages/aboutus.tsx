// src/pages/aboutus.tsx
import Link from 'next/link';
import { PAGE_PADDING_TOP } from '../config/pagePadding';

export default function AboutUsPage() {
    return (
        <div className="bg-white flex flex-col items-center" style={{ paddingTop: PAGE_PADDING_TOP.aboutus }}>
            {/* Hero */}
            <section className="section-padding-lg bg-white">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-british-blue">
                        Welcome to We Social Workers UK
                    </h1>
                    <p className="text-xl text-british-red font-semibold mb-6">By Social Workers. For Social Workers.</p>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        We Social Workers UK is a free, volunteer-led platform created by experienced UK-registered social workers to support international professionals aspiring to build a career in the UK social work sector.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section-padding-lg">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    <p className="body-xl text-gray-800 mb-6 text-center">
                        You will be guided and supported by social workers who have been through the similar journey and been where you are.
                    </p>

                    <div className="mt-10">
                        <h2 className="heading-2 mb-4 text-british-blue text-center">What We Offer:</h2>
                        <ul className="list-none space-y-3 text-gray-800 body-large text-center mx-auto">
                            <li>Step-by-step guidance on registration, job search, and UK practice standards</li>
                            <li>Free resources and practical advice from real-world experience</li>
                            <li>Fortnightly group sessions for international candidates</li>
                            <li>A growing knowledge hub open to contributions from other professionals</li>
                        </ul>
                    </div>

                    <p className="body-large text-gray-800 mt-8 text-center">
                        We are not a recruitment agency, we don&apos;t offer visa advice, and we never charge a fee. Our aim is simple: to uplift and guide our fellow social workers with honesty, empathy, and experience.
                    </p>

                    <p className="body-large text-gray-800 mt-6 text-center">
                        Join our community and take the next step in your UK social work journey—with the support of those who truly understand it.
                    </p>
                </div>
            </section>

            {/* About Us */}
            <section className="section-padding-lg bg-gray-50">
                <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    <h2 className="heading-2 text-british-blue mb-6 text-center">About Us</h2>
                    <p className="body-large text-gray-800 mb-6 text-center">
                        We Social Workers UK is a dedicated support and guidance platform built by social workers, for social workers. Our mission is to empower both aspiring and qualified professionals—especially international social workers—on their journey into the UK social work profession.
                    </p>
                    <p className="body-large text-gray-800 mb-6 text-center">
                        We understand that stepping into a new country&apos;s professional landscape can be daunting. That&apos;s why we offer free, personalised guidance to help you navigate every stage—from education and training to career transition, job readiness, and adapting to practice in the UK.
                    </p>

                    <h3 className="heading-3 text-british-blue mb-4 text-center">Who We Are</h3>
                    <p className="body-large text-gray-800 mb-6 text-center">
                        We are a team of UK-registered social workers with over 10 years of experience across both India and the UK. We&apos;ve worked on the frontline and in management, and we understand firsthand the challenges and opportunities of being a social worker—especially when transitioning internationally. Our support is offered voluntarily, out of a shared commitment to uplift our global social work community.
                    </p>

                    <h3 className="heading-3 text-british-blue mb-4 text-center">Our Promise</h3>
                    <p className="body-large text-gray-800 text-center">
                        At We Social Workers UK, you&apos;re not just accessing a service — you&apos;re connecting with a group of professionals who truly understand your journey because we&apos;ve lived it ourselves. We believe in sharing real-world knowledge, practical tools, and ongoing encouragement to help you thrive—wherever your social work journey begins.
                    </p>
                </div>
            </section>

            {/* CTA removed as requested */}
        </div>
    );
}




