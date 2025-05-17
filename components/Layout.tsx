import Head from 'next/head';
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'A11yMate – Accessible Web Plugin',
  description = 'A11yMate helps developers build accessible websites quickly and effectively.',
}: LayoutProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://a11ymate.vercel.app" />
        <meta property="og:image" content="https://a11ymate.vercel.app/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://a11ymate.vercel.app/og-image.png" />
        </Head>


      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
