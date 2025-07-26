import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../../components/Layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Check if current page is an admin page
  const isAdminPage = router.pathname.startsWith('/admin');
  
  // If it's an admin page, render without Layout (no header/footer)
  if (isAdminPage) {
    return (
      <div className="min-h-screen bg-background">
        <Component {...pageProps} />
      </div>
    );
  }
  
  // For all other pages, use the normal Layout with header and footer
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
