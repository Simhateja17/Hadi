// pages/schedule-call.tsx
import React from 'react';
import Head from 'next/head';

const ScheduleCallPage: React.FC = () => {
  const calendlyUrl = 'https://calendly.com/couture-founders/30min';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </Head>
      <section className="section-padding-lg">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block px-8 py-4 bg-british-blue text-white rounded-full font-bold shadow-smooth mb-6">
              📞 Schedule a Call
            </span>
            <h1 className="heading-2 mb-3 text-british-blue">Book a time that works for you</h1>
            <p className="body-large text-gray-700 max-w-2xl mx-auto">
              Pick an available slot from our calendar below. You will receive a confirmation email with the meeting details.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border-2 border-british-blue overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url={`${calendlyUrl}?hide_gdpr_banner=1&background_color=ffffff&text_color=0a2a6b&primary_color=c8102e`}
              style={{ minWidth: '320px', height: '850px' }}
            />
          </div>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Trouble loading?{' '}
            <a href={calendlyUrl} className="text-british-blue underline" target="_blank" rel="noreferrer">
              Open Calendly
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ScheduleCallPage;


