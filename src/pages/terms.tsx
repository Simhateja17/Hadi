import { Layout } from '../../components/Layout';

export default function TermsOfService() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-4xl font-bold text-british-blue mb-4">Terms of Service</h1>
        <p className="text-gray-700 leading-relaxed mb-4">By accessing this site you agree to these terms. If you do not agree, please discontinue use.</p>
        <h2 className="text-2xl font-semibold text-british-blue mt-8 mb-3">Use of Site</h2>
        <p className="text-gray-700">Content is provided for information only and does not constitute legal advice. We may update these terms from time to time.</p>
        <h2 className="text-2xl font-semibold text-british-blue mt-8 mb-3">Liability</h2>
        <p className="text-gray-700">We are not liable for indirect or consequential loss arising from use of this site. Nothing excludes liability that cannot be excluded by law.</p>
      </div>
    </Layout>
  );
}


