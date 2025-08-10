import { Layout } from '../../components/Layout';

export default function GDPR() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-4xl font-bold text-british-blue mb-4">GDPR Compliance</h1>
        <p className="text-gray-700 leading-relaxed">
          We process personal data in accordance with the UK GDPR and Data Protection Act 2018. We act as a Data Controller for enquiries and submissions on this website.
        </p>
        <h2 className="text-2xl font-semibold text-british-blue mt-8 mb-3">Lawful Bases</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Consent: contact forms and newsletter opt-ins.</li>
          <li>Legitimate interests: site security, anti-abuse, improving services.</li>
          <li>Contract: delivering requested services and responses.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-british-blue mt-8 mb-3">Retention</h2>
        <p className="text-gray-700">We retain data only as long as necessary for the purposes collected or to comply with our legal obligations.</p>
      </div>
    </Layout>
  );
}


