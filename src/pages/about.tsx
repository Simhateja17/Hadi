// pages/about.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-red-50">
                <div className="container-custom">
                    <div className="text-center">
                        <div className="mb-6">
                            <span className="inline-block px-6 py-3 bg-british-red text-white rounded-full body-medium font-bold mb-6 shadow-smooth">
                                🇬🇧 About Us
                            </span>
                        </div>
                        <h1 className="heading-xl mb-6 text-british-blue">
                            About 
                            <span className="text-british-red block">We Social Workers UK</span>
                        </h1>
                        <p className="body-xl mb-8 max-w-4xl mx-auto text-gray-700 leading-relaxed">
                            A dedicated support and guidance platform built by social workers, for social workers.
                        </p>
                    </div>
                </div>
            </section>

            {/* First Section - About Us */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <p className="body-large mb-8 text-gray-700 leading-relaxed">
                                We Social Workers UK is a dedicated support and guidance platform built by social workers, for social workers. Our mission is to empower both aspiring and qualified professionals—especially international social workers—on their journey into the UK social work profession.
                            </p>
                            
                            <p className="body-large mb-12 text-gray-700 leading-relaxed">
                                We understand that stepping into a new country&apos;s professional landscape can be daunting. That&apos;s why we offer free, personalised guidance to help you navigate every stage—from education and training to career transition, job readiness, and adapting to practice in the UK.
                            </p>

                            {/* Who We Are */}
                            <div className="mb-12">
                                <h2 className="heading-2 mb-6 text-british-blue">Who We Are</h2>
                                <p className="body-large text-gray-700 leading-relaxed">
                                    We are a team of UK-registered social workers with over 10 years of experience across both India and the UK. We&apos;ve worked on the frontline and in management, and we understand firsthand the challenges and opportunities of being a social worker—especially when transitioning internationally. Our support is offered voluntarily, out of a shared commitment to uplift our global social work community.
                                </p>
                            </div>

                            {/* What We Do */}
                            <div className="mb-12">
                                <h2 className="heading-2 mb-6 text-british-blue">What We Do</h2>
                                <p className="body-large mb-6 text-gray-700 leading-relaxed">
                                    At We Social Workers UK, we support you by offering:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">Insight into the UK social work system, including education pathways and career options</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">Guidance on how to get your international degree recognised in the UK</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">Help with Social Work England registration and understanding its requirements</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">Support with language proficiency, sponsorship pathways, and essential readiness criteria</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">Tailored interview coaching, CV development, and job application preparation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">Training and advice to meet UK practice standards and workplace expectations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">Mock interviews and peer referral for job opportunities within England</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What We Don't Do */}
                            <div className="mb-12">
                                <h2 className="heading-2 mb-6 text-british-blue">What We Don&apos;t Do</h2>
                                <p className="body-large mb-6 text-gray-700 leading-relaxed">
                                    To set clear expectations, here&apos;s what we don&apos;t offer:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">We do not provide visa or immigration advice</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">We are not a recruitment agency</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">We do not charge any fees — all our guidance is completely free</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">We do not offer legal or licensed immigration services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">We do not act as a substitute for formal qualifications or regulatory requirements</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Our Promise */}
                            <div className="bg-gradient-to-r from-british-blue/5 to-british-red/5 p-8 rounded-lg">
                                <h2 className="heading-2 mb-6 text-british-blue">Our Promise</h2>
                                <p className="body-large text-gray-700 leading-relaxed">
                                    At We Social Workers UK, you&apos;re not just accessing a service — you&apos;re connecting with a group of professionals who truly understand your journey because we&apos;ve lived it ourselves. We believe in sharing real-world knowledge, practical tools, and ongoing encouragement to help you thrive—wherever your social work journey begins.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section - Our Story */}
            <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-purple-50 to-red-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <h2 className="heading-1 mb-8 text-british-blue text-center">Our Story: How We Social Workers UK Began</h2>
                            
                            <p className="body-large mb-8 text-gray-700 leading-relaxed">
                                In 2023, Ali and Mayel—both qualified and experienced social workers from India—embarked on their journey to the UK to begin new roles with two different local authorities. Though they shared a common goal, their experiences navigating the complex process of job hunting, Social Work England registration, and settling into UK practice were quite different.
                            </p>
                            
                            <p className="body-large mb-12 text-gray-700 leading-relaxed">
                                Each faced unique challenges, from understanding the regulatory landscape to adapting to workplace culture, visa pathways, and practical matters of relocation. But through persistence, learning, and community support, both successfully transitioned into UK social work practice.
                            </p>

                            {/* Helping Others Find Their Path */}
                            <div className="mb-12">
                                <h3 className="heading-3 mb-6 text-british-blue">Helping Others Find Their Path</h3>
                                <p className="body-large mb-6 text-gray-700 leading-relaxed">
                                    Over the following two years, while still adjusting to their new roles and life in the UK, Ali and Mayel voluntarily supported over 25–30 international aspirants—students and professionals alike—by:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">Explaining the process of social work registration in the UK</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">Offering guidance on where and how to apply for jobs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">Sharing their own experiences and practical advice</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">Helping candidates prepare for interviews and understand UK practice standards</span>
                                    </li>
                                </ul>
                                <p className="body-large text-gray-700 leading-relaxed">
                                    Despite their willingness to help more people, time constraints and the pressures of settling into a new country limited how much support they could offer individually. However, their shared passion for helping others never faded.
                                </p>
                            </div>

                            {/* From Conversations to a Community */}
                            <div className="mb-12">
                                <h3 className="heading-3 mb-6 text-british-blue">From Conversations to a Community</h3>
                                <p className="body-large mb-6 text-gray-700 leading-relaxed">
                                    Now, with more experience and stability in the UK, Ali and Mayel have joined forces to formalise their support and make it more accessible. Their idea evolved into WeSocialWorkers.uk — a community-driven platform designed to provide free, open-access information and guidance for international social workers looking to transition into the UK workforce.
                                </p>
                                <p className="body-large mb-6 text-gray-700 leading-relaxed">
                                    This platform is a space where:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">They can continue sharing their knowledge and experiences</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">Other professionals can contribute their insights</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-british-red rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span className="body-medium text-gray-700">International social workers can access up-to-date, real-world guidance at any stage of their journey</span>
                                    </li>
                                </ul>
                                <p className="body-large text-gray-700 leading-relaxed">
                                    In addition to the resources available on the website, Ali and Mayel now host fortnightly virtual sessions for interested candidates, focusing mainly on job readiness and transition support for international students or professionals. These sessions are offered purely on a voluntary, not-for-profit basis.
                                </p>
                            </div>

                            {/* Built on Shared Experience */}
                            <div className="bg-gradient-to-r from-british-blue/10 to-british-red/10 p-8 rounded-lg">
                                <h3 className="heading-3 mb-6 text-british-blue">Built on Shared Experience. Driven by Solidarity.</h3>
                                <p className="body-large text-gray-700 leading-relaxed">
                                    At its core, We Social Workers UK is not an agency or a business—it&apos;s a grassroots initiative powered by lived experience, solidarity, and a commitment to support fellow social workers across borders. Ali and Mayel believe that when one social worker thrives, the whole community benefits.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Third Section - Meet Ali */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <h2 className="heading-1 mb-12 text-british-blue text-center">Meet Our Team</h2>
                            
                            {/* Ali's Profile */}
                            <div className="bg-gradient-to-br from-british-blue/5 to-british-red/5 p-8 rounded-lg">
                                <div className="grid lg:grid-cols-3 gap-8 items-start">
                                    {/* Profile Image */}
                                    <div className="lg:col-span-1">
                                        <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg relative">
                                            <Image 
                                                src="/ali-azam-profile-new.jpg" 
                                                alt="Ali Azam - Co-Founder and Mentor"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Profile Content */}
                                    <div className="lg:col-span-2">
                                        <h3 className="heading-3 mb-2 text-british-blue">Meet Ali</h3>
                                        <h4 className="heading-5 mb-4 text-british-red">Md Ali Azam – Co-Founder and Mentor, We Social Workers UK</h4>
                                        <p className="body-medium mb-4 text-gray-600 font-semibold">PhD, MA, BA (Social Work)</p>
                                        
                                        <p className="body-medium mb-6 text-gray-700 leading-relaxed">
                                            Ali is a UK-registered social worker currently working with a local authority in England. Since moving to the UK in 2023, he has been actively involved in frontline social work practice and supporting fellow international professionals in navigating their own career transitions.
                                        </p>
                                        
                                        <p className="body-medium mb-6 text-gray-700 leading-relaxed">
                                            With over 10 years of diverse experience across research, legislative institutions, government bodies, voluntary organisations, social enterprises, CSR projects, and academia, Ali brings a deeply informed and interdisciplinary perspective to social work practice and support.
                                        </p>
                                        
                                        <p className="body-medium mb-6 text-gray-700 leading-relaxed">
                                            Ali holds a PhD, Master&apos;s, and Bachelor&apos;s degree in Social Work from the Department of Social Work, Jamia Millia Islamia, New Delhi. He is a published scholar with nine academic articles, a co-authored book, and 14 conference papers to his name—demonstrating his commitment to advancing knowledge and contributing to the profession beyond practice.
                                        </p>
                                        
                                        <p className="body-medium text-gray-700 leading-relaxed">
                                            Outside of work, Ali enjoys travelling, meeting new people, reading, cooking, and driving. His curiosity, warmth, and academic grounding make him a thoughtful and approachable mentor to many aspiring social workers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Mayel's Profile */}
                            <div className="bg-gradient-to-br from-british-red/5 to-british-blue/5 p-8 rounded-lg mt-12">
                                <div className="grid lg:grid-cols-3 gap-8 items-start">
                                    {/* Profile Image */}
                                    <div className="lg:col-span-1">
                                        <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg relative">
                                            <Image 
                                                src="/mayel-hadi-profile.jpg" 
                                                alt="Mayel Hadi - Co-Founder and Mentor"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Profile Content */}
                                    <div className="lg:col-span-2">
                                        <h3 className="heading-3 mb-2 text-british-blue">Meet Mayel</h3>
                                        <h4 className="heading-5 mb-4 text-british-red">Mayel Hadi – Co-Founder and Mentor, We Social Workers UK</h4>
                                        <p className="body-medium mb-4 text-gray-600 font-semibold">BSW (Jamia Millia Islamia) | MSW (University of Delhi) | MSc (Comparative Social Change – Trinity College Dublin & University College Dublin)</p>
                                        
                                        <p className="body-medium mb-6 text-gray-700 leading-relaxed">
                                            Mayel is a committed social work professional with international academic and practice background. With his education and experience in different countries, he brings a comparative and cross-cultural lens to social policy, inclusion, and grassroots impact.
                                        </p>
                                        
                                        <p className="body-medium mb-6 text-gray-700 leading-relaxed">
                                            He has worked across the corporate sector and nonprofit organisations in both India and Ireland, contributing to initiatives focused on children, youth, social development, equity, and community engagement. His work reflects a strong blend of practical insight, strategic thinking, and a deep commitment to social justice.
                                        </p>
                                        
                                        <p className="body-medium mb-6 text-gray-700 leading-relaxed">
                                            Mayel holds a Bachelor&apos;s in Social Work from Jamia Millia Islamia, a Master&apos;s in Social Work from the University of Delhi, and an MSc in Comparative Social Change jointly awarded by Trinity College Dublin and University College Dublin. His education and experience have equipped him with analytical skills and a passion for system-level change.
                                        </p>
                                        
                                        <p className="body-medium text-gray-700 leading-relaxed">
                                            Beyond his professional life, Mayel enjoys reading, playing badminton, and connecting with people from diverse walks of life. A strong believer in giving back, he is dedicated to supporting others and creating spaces where aspiring social workers can thrive.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="section-padding-lg bg-gradient-to-br from-british-blue via-purple-600 to-british-red text-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-2 mb-6">Ready to Start Your Journey?</h2>
                        <p className="body-large mb-8 opacity-90">
                            Join our community of international social workers and get the support you need to succeed in the UK.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn bg-white text-british-blue hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                                Get Started Today
                            </Link>
                            <Link href="/" className="btn border-2 border-white text-white hover:bg-white hover:text-british-blue px-8 py-4 rounded-lg font-semibold transition-colors">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
