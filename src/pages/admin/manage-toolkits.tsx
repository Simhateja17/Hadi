import { useEffect, useState } from 'react';
import withAuth from '../../components/auth/withAuth';

type Toolkit = {
  id: string;
  title: string;
  description?: string | null;
  pdfUrl: string;
  createdAt: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

function ManageToolkits() {
  const [toolkits, setToolkits] = useState<Toolkit[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('admin_token');
        const res = await fetch(`${API_BASE_URL}/api/toolkits/admin`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setToolkits(data);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfFile) {
      alert('Please select a PDF file');
      return;
    }
    setSubmitting(true);
    try {
      const token = localStorage.getItem('admin_token');
      const form = new FormData();
      form.append('title', title);
      if (description) form.append('description', description);
      form.append('pdf', pdfFile);

      const res = await fetch(`${API_BASE_URL}/api/toolkits`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to create toolkit');
      }
      const created = await res.json();
      setToolkits((prev) => [created, ...prev]);
      setTitle('');
      setDescription('');
      setPdfFile(null);
      (document.getElementById('pdf') as HTMLInputElement).value = '';
    } catch (e: any) {
      alert(e.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this toolkit?')) return;
    const token = localStorage.getItem('admin_token');
    const res = await fetch(`${API_BASE_URL}/api/toolkits/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status === 204) {
      setToolkits((prev) => prev.filter((t) => t.id !== id));
    } else {
      alert('Failed to delete');
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-2">Manage Toolkits (PDF)</h1>
        <p className="text-gray-600">Upload new toolkit PDFs and manage existing ones.</p>
      </div>

      <form onSubmit={handleCreate} className="bg-white rounded-lg shadow p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description (optional)</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">PDF File</label>
          <input id="pdf" type="file" accept="application/pdf" onChange={(e) => setPdfFile(e.target.files?.[0] || null)} required />
        </div>
        <button disabled={submitting} className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">
          {submitting ? 'Uploading...' : 'Create Toolkit'}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {toolkits.map((t) => (
          <div key={t.id} className="bg-white rounded-lg shadow p-5 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{t.title}</h3>
                {t.description && <p className="text-gray-600 text-sm">{t.description}</p>}
              </div>
              <button onClick={() => handleDelete(t.id)} className="text-red-600 hover:underline">Delete</button>
            </div>
            <div className="flex items-center justify-between">
              <a href={t.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Open PDF
              </a>
              <span className="text-xs text-gray-500">{new Date(t.createdAt).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAuth(ManageToolkits);


