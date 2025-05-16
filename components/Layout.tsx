import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';

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
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/docs', label: 'Docs' },
    { href: '/about', label: 'About' },
  ];

  useEffect(() => {
    const html = window.document.documentElement;
    html.classList.toggle('dark', localStorage.getItem('theme') === 'dark');
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header className="px-6 py-4 shadow-md bg-white dark:bg-gray-800">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">A11yMate</div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map(({ href, label }) => {
              const isActive = router.pathname === href;
              return (
                <Link key={href} href={href} className={`hover:underline ${isActive ? 'text-blue-600 font-semibold dark:text-blue-400' : ''}`}>
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="mt-4 flex flex-col space-y-2 md:hidden">
            {navItems.map(({ href, label }) => {
              const isActive = router.pathname === href;
              return (
                <Link key={href} href={href} className={`block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive ? 'text-blue-600 font-semibold dark:text-blue-400' : ''}`}>
                  {label}
                </Link>
              );
            })}
          </nav>
        )}
      </header>

      {children}

      <footer className="bg-gray-100 dark:bg-gray-800 px-6 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} A11yMate. Built with care.
      </footer>
    </main>
  );
}
