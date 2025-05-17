import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Button {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface HeroProps {
  title: string;
  subtitle: string;
  buttons?: Button[];
}

export default function Hero({ title, subtitle, buttons = [] }: HeroProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDarkMode(html.classList.contains('dark'));
    });

    observer.observe(html, { attributes: true, attributeFilter: ['class'] });

    // Set initial state
    setIsDarkMode(html.classList.contains('dark'));

    return () => observer.disconnect();
  }, []);

  return (
        <div
        className={`transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}
        >
        <section
            className={`animated-gradient md:mx-12 relative flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-20 py-24 ${
            isDarkMode
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'
                : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
            }`}
        >
      <div className="relative z-10 w-full max-w-3xl">
        <p
          className={`text-sm font-semibold tracking-wide mb-3 ${
            isDarkMode ? 'text-pink-400' : 'text-blue-600'
          }`}
        >
          Inclusive & Accessible Websites
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg sm:text-xl mb-10 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {buttons.map(({ label, href, variant = 'primary' }) => (
            <Link
              key={href}
              href={href}
              className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold shadow-md transition ${
                variant === 'primary'
                  ? isDarkMode
                    ? 'bg-pink-500 hover:bg-pink-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                  : isDarkMode
                  ? 'text-white underline underline-offset-2 hover:text-pink-400'
                  : 'text-gray-800 underline underline-offset-2 hover:text-blue-500'
              }`}
            >
              {label} {variant === 'primary' && <span className="ml-2">→</span>}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
    </div>
  );
}
