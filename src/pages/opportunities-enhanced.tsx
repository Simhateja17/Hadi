// src/pages/opportunities-enhanced.tsx
import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { getApiUrl } from '../utils/api';
import { layoutApi } from '../lib/api';
import { Layout } from '../../components/Layout';

type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
    salary?: string;
    type: string;
    applyUrl: string;
};

type OpportunitiesPageProps = { 
  jobs: Job[] 
};

interface LayoutState {
  headingHorizontal: number;
  headingVertical: number;
  headingSize: number;
  jobsHorizontal: number;
  jobsVertical: number;
  jobsSize: number;
}

export default function OpportunitiesEnhanced({ jobs }: OpportunitiesPageProps) {
  const [layout, setLayout] = useState<LayoutState>({
    headingHorizontal: 0,
    headingVertical: 0,
    headingSize: 100,
    jobsHorizontal: 0,
    jobsVertical: 0,
    jobsSize: 100
  });

  useEffect(() => {
    loadLayoutSettings();
  }, []);

  const loadLayoutSettings = async () => {
    try {
      const [headingPos, jobsPos, headingSize, jobsSize] = await Promise.all([
        layoutApi.getOpportunitiesHeadingPosition(),
        layoutApi.getOpportunitiesJobsPosition(),
        layoutApi.getOpportunitiesHeadingSize(),
        layoutApi.getOpportunitiesJobsSize()
      ]);

      setLayout({
        headingHorizontal: headingPos.horizontal,
        headingVertical: headingPos.vertical,
        headingSize: headingSize.size,
        jobsHorizontal: jobsPos.horizontal,
        jobsVertical: jobsPos.vertical,
        jobsSize: jobsSize.size
      });
    } catch (error) {
      console.error('Failed to load layout settings:', error);
    }
  };

  return (
    <Layout>
      <div className="py-12 max-w-6xl mx-auto px-6">
        {/* Dynamic Title with Layout Controls */}
        <div 
          className="mb-8 transition-all duration-300"
          style={{
            transform: `translate(${layout.headingHorizontal * 2}px, ${layout.headingVertical * 2}px)`,
            fontSize: `${layout.headingSize}%`
          }}
        >
          <h1 className="text-4xl font-bold text-text-dark">
            Career Opportunities
          </h1>
        </div>
        
        <div className="space-y-8">
          {/* Jobs Section with Layout Controls */}
          <div 
            className="bg-white p-8 rounded-lg shadow-md transition-all duration-300"
            style={{
              transform: `translate(${layout.jobsHorizontal * 2}px, ${layout.jobsVertical * 2}px) scale(${layout.jobsSize / 100})`
            }}
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">
              
            </h2>
            <p className="text-gray-700 mb-6">
              
            </p>
            
            {jobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-text-dark mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{job.company} - {job.location}</p>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                      {job.salary && (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {job.salary}
                        </span>
                      )}
                    </div>
                    
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block text-center bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors"
                    >
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sample job opportunities when no real jobs are available */}
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
            )}
          </div>

          {/* Email subscription section - not affected by layout controls */}
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
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const apiUrl = getApiUrl('api/jobs');
    const res = await fetch(apiUrl);
    const jobs: Job[] = await res.json();
    return { 
      props: { jobs }, 
      revalidate: 300 // Revalidate every 5 minutes
    };
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    return { 
      props: { jobs: [] } 
    };
  }
};
