import { Layout } from '../../components/Layout';

export default function CookiesPolicy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-4xl font-bold text-british-blue mb-4">Cookie Policy</h1>
        <p className="text-gray-700 mb-4">We use cookies to provide essential site functionality and optional analytics to improve the experience.</p>
        <h2 className="text-2xl font-semibold text-british-blue mt-8 mb-3">Types of Cookies</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Strictly Necessary: authentication, security, load balancing.</li>
          <li>Analytics (optional): page performance and usage insights.</li>
        </ul>
        <p className="text-gray-700 mt-6">You can manage preferences via the cookie banner or your browser settings.</p>
      </div>
    </Layout>
  );
}


