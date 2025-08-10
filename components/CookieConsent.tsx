import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (!saved) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };
  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[720px] z-[1000]">
      <div className="bg-white border-2 border-british-blue rounded-xl shadow-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="text-sm text-gray-700">
          We use cookies to improve your experience. Read our{' '}
          <Link href="/cookies" className="text-british-blue underline">Cookie Policy</Link> and{' '}
          <Link href="/privacy" className="text-british-blue underline">Privacy Policy</Link>.
        </div>
        <div className="flex gap-2">
          <button onClick={reject} className="px-4 py-2 rounded-lg border border-british-blue text-british-blue bg-white">Reject</button>
          <button onClick={accept} className="px-4 py-2 rounded-lg bg-british-blue text-white">Allow Cookies</button>
        </div>
      </div>
    </div>
  );
}


