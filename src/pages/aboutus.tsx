// src/pages/aboutus.tsx
import Link from 'next/link';
import { PAGE_PADDING_TOP } from '../config/pagePadding';

export default function AboutUsPage() {
    return (
        <div className="bg-white" style={{ paddingTop: PAGE_PADDING_TOP.aboutus }}>
            {/* Hero */}
            <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-red-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
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
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="body-xl text-gray-800 mb-6">
                        You will be guided and supported by social workers who have been through the similar journey and been where you are.
                    </p>

                    <div className="mt-10">
                        <h2 className="heading-2 mb-4 text-british-blue">What We Offer:</h2>
                        <ul className="list-disc pl-6 space-y-3 text-gray-800 body-large text-left inline-block">
                            <li>Step-by-step guidance on registration, job search, and UK practice standards</li>
                            <li>Free resources and practical advice from real-world experience</li>
                            <li>Fortnightly group sessions for international candidates</li>
                            <li>A growing knowledge hub open to contributions from other professionals</li>
                        </ul>
                    </div>

                    <p className="body-large text-gray-800 mt-8">
                        We are not a recruitment agency, we don’t offer visa advice, and we never charge a fee. Our aim is simple: to uplift and guide our fellow social workers with honesty, empathy, and experience.
                    </p>

                    <p className="body-large text-gray-800 mt-6">
                        Join our community and take the next step in your UK social work journey—with the support of those who truly understand it.
                    </p>
                </div>
            </section>

            {/* About Us */}
            <section className="section-padding-lg bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="heading-2 text-british-blue mb-6">About Us</h2>
                    <p className="body-large text-gray-800 mb-6">
                        We Social Workers UK is a dedicated support and guidance platform built by social workers, for social workers. Our mission is to empower both aspiring and qualified professionals—especially international social workers—on their journey into the UK social work profession.
                    </p>
                    <p className="body-large text-gray-800 mb-6">
                        We understand that stepping into a new country’s professional landscape can be daunting. That’s why we offer free, personalised guidance to help you navigate every stage—from education and training to career transition, job readiness, and adapting to practice in the UK.
                    </p>

                    <h3 className="heading-3 text-british-blue mb-4">Who We Are</h3>
                    <p className="body-large text-gray-800 mb-6">
                        We are a team of UK-registered social workers with over 10 years of experience across both India and the UK. We’ve worked on the frontline and in management, and we understand firsthand the challenges and opportunities of being a social worker—especially when transitioning internationally. Our support is offered voluntarily, out of a shared commitment to uplift our global social work community.
                    </p>

                    <h3 className="heading-3 text-british-blue mb-4">Our Promise</h3>
                    <p className="body-large text-gray-800">
                        At We Social Workers UK, you're not just accessing a service — you're connecting with a group of professionals who truly understand your journey because we’ve lived it ourselves. We believe in sharing real-world knowledge, practical tools, and ongoing encouragement to help you thrive—wherever your social work journey begins.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding-lg bg-gradient-primary text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="heading-2 text-white mb-6">Ready to connect?</h3>
                    <p className="body-xl text-blue-100 mb-8">Join our next group session or reach out for guidance.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contactus#schedule-call" className="btn btn-secondary btn-large">Book a Call</Link>
                        <Link href="/blogs" className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-british-blue btn-large">Read Blogs</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}




