import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/docs', label: 'Docs' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },

];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();


  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    html.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow px-6 py-4"
    >
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">A11yMate</div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-sm px-3 py-1 border rounded border-gray-300 dark:border-gray-600"
          >
            Toggle Theme
          </button>

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
        </div>

        <nav className="hidden md:flex space-x-4">
          {navItems.map(({ href, label }) => {
            const isActive = router.pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`hover:underline ${
                  isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      {menuOpen && (
        <nav className="mt-4 flex flex-col space-y-2 md:hidden">
          {navItems.map(({ href, label }) => {
            const isActive = router.pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}
    </motion.header>
  );
}
