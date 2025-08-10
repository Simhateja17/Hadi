// src/pages/admin/manage-gallery.tsx
import { useEffect, useState, useCallback } from 'react';
import withAuth from '../../components/auth/withAuth';

type GalleryImage = {
  id: string;
  title?: string | null;
  imageUrl: string;
  createdAt: string;
};

const ManageGalleryPage = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState('');

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  const loadImages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/gallery`);
      if (res.ok) {
        const data = await res.json();
        setImages(data);
      }
    } finally {
      setLoading(false);
    }
  }, [API_BASE_URL]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);
    try {
      const token = localStorage.getItem('admin_token');
      const fd = new FormData();
      fd.append('image', selectedFile);
      const uploadRes = await fetch(`${API_BASE_URL}/api/upload/gallery`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });
      if (!uploadRes.ok) throw new Error('Upload failed');
      const { imageUrl } = await uploadRes.json();

      const saveRes = await fetch(`${API_BASE_URL}/api/gallery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title, imageUrl }),
      });
      if (!saveRes.ok) throw new Error('Save failed');
      setTitle('');
      setSelectedFile(null);
      await loadImages();
      alert('Image added to gallery.');
    } catch {
      alert('Failed to add image.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this image?')) return;
    const token = localStorage.getItem('admin_token');
    const res = await fetch(`${API_BASE_URL}/api/gallery/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      setImages(images.filter(i => i.id !== id));
    } else {
      alert('Failed to delete');
    }
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">Manage Gallery</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Image</h2>
        <div className="grid md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">Title (optional)</label>
            <input value={title} onChange={e => setTitle(e.target.value)} className="w-full p-3 border rounded" placeholder="Image title" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Select Image</label>
            <input type="file" accept="image/*" onChange={handleFile} />
          </div>
          <div>
            <button onClick={handleUpload} disabled={!selectedFile || uploading} className="px-5 py-3 bg-green-600 text-white rounded disabled:opacity-50">
              {uploading ? 'Uploading...' : 'Upload & Save'}
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : images.length === 0 ? (
        <p>No images yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(img => (
            <div key={img.id} className="bg-white rounded shadow p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.imageUrl} alt={img.title || 'Gallery'} className="w-full h-40 object-cover rounded" />
              <div className="flex justify-between items-center mt-2 text-sm">
                <span className="font-medium truncate">{img.title || 'Untitled'}</span>
                <button onClick={() => handleDelete(img.id)} className="text-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default withAuth(ManageGalleryPage);


