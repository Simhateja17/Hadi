// src/pages/gallery.tsx
import { useEffect, useState } from 'react';
import { PAGE_PADDING_TOP } from '../config/pagePadding';

type GalleryImage = {
  id: string;
  title?: string | null;
  imageUrl: string;
  createdAt: string;
};

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/gallery`);
        if (res.ok) setImages(await res.json());
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [API_BASE_URL]);

  return (
    <div className="min-h-screen bg-gray-50 pb-12" style={{ paddingTop: PAGE_PADDING_TOP.gallery }}>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-british-blue">Gallery</h1>
        {loading ? (
          <p>Loading...</p>
        ) : images.length === 0 ? (
          <p>No images found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img) => (
              <div key={img.id} className="bg-white rounded-lg shadow p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.imageUrl} alt={img.title || 'Gallery'} className="w-full h-48 object-cover rounded" />
                <div className="mt-2 text-sm text-gray-700 truncate">{img.title || 'Untitled'}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


