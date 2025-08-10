import { GetStaticProps } from 'next';
import Link from 'next/link';
import { PAGE_PADDING_TOP } from '../config/pagePadding';

type Toolkit = {
  id: string;
  title: string;
  description?: string | null;
  pdfUrl: string;
  createdAt: string;
};

type Props = { toolkits: Toolkit[] };

export default function ToolkitsPage({ toolkits }: Props) {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8" style={{ paddingTop: PAGE_PADDING_TOP.toolkits }}>
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Toolkit Library</h1>
        <p className="text-gray-600">Download free PDFs to support your UK social work journey.</p>
      </div>
      {toolkits.length === 0 ? (
        <p className="text-center text-gray-500">No toolkits available yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {toolkits.map((t) => (
            <div key={t.id} className="bg-white rounded-lg shadow p-5 space-y-3">
              <h3 className="text-lg font-semibold">{t.title}</h3>
              {t.description && <p className="text-gray-700 text-sm">{t.description}</p>}
              <div className="flex items-center justify-between">
                <a href={t.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Open PDF</a>
                <span className="text-xs text-gray-500">{new Date(t.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center">
        <Link href="/contactus" className="inline-block bg-blue-600 text-white px-5 py-3 rounded">Need personalized guidance?</Link>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  try {
    const res = await fetch(`${base}/api/toolkits`);
    const toolkits = res.ok ? await res.json() : [];
    return { props: { toolkits }, revalidate: 60 };
  } catch {
    return { props: { toolkits: [] }, revalidate: 60 };
  }
};


