import { Layout } from '../../components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-4xl font-bold text-british-blue mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-6">Last updated: {new Date().getFullYear()}</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We respect your privacy. This policy explains what personal data we collect, how we use it, and your rights.
        </p>
        <h2 className="text-2xl font-semibold text-british-blue mt-8 mb-3">Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Contact details submitted via forms (name, email, phone).</li>
          <li>Usage data (analytics, pages visited) for improving the site.</li>
          <li>Files you upload (e.g., blog images) for publishing content.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-british-blue mt-8 mb-3">How We Use Data</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Respond to enquiries and provide services.</li>
          <li>Operate and improve the website and content.</li>
          <li>Meet legal obligations and security requirements.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-british-blue mt-8 mb-3">Your Rights</h2>
        <p className="text-gray-700 mb-4">You can request access, correction, deletion, or portability of your data. Contact us at info@wesocialworkersuk.com.</p>
      </div>
    </Layout>
  );
}


