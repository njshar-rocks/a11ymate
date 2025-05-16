import Link from 'next/link';
import { motion } from 'framer-motion';

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
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8"
      >
        {subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        {buttons.map(({ label, href, variant = 'primary' }) => (
          <Link
            key={href}
            href={href}
            className={`px-6 py-3 rounded-md text-base font-medium transition ${
              variant === 'primary'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {label}
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
