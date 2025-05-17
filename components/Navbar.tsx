import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import Image from 'next/image';


const navItems = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/docs', label: 'Docs' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    html.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    const html = document.documentElement;

    const observer = new MutationObserver(() => {
      setIsDarkMode(html.classList.contains('dark'));
    });

    observer.observe(html, { attributes: true, attributeFilter: ['class'] });

    setIsDarkMode(html.classList.contains('dark'));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 px-6 py-4"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
        <Image
            src={isDarkMode ? "/images/logo-white.svg" : "/images/logo.png"}
            alt="A11yMate Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
            />
          <span className="sr-only">A11yMate Home</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map(({ href, label }) => {
            const isActive = router.pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors duration-300 hover:underline ${
                  isActive
                    ? 'font-semibold text-blue-600 dark:text-pink-400'
                    : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="ml-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-pink-400 transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-pink-400 transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className=""
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
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="mt-4 flex flex-col space-y-2 md:hidden">
          {navItems.map(({ href, label }) => {
            const isActive = router.pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`block px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive
                    ? 'font-semibold text-blue-600 dark:text-pink-400'
                    : 'text-gray-800 dark:text-gray-200'
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
