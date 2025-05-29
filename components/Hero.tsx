import Link from 'next/link';
import Image from 'next/image';
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
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  title,
  subtitle,
  buttons = [],
  imageSrc = '/images/hero-screenshot.png',
  imageAlt = 'Accessibility menu example',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Gradient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 opacity-30 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Column */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wide uppercase mb-4 text-blue-600 dark:text-pink-400"
          >
            Inclusive & Accessible Web
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            {buttons.map(({ label, href, variant = 'primary' }) => (
              <Link key={href} href={href} passHref>
                <a
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    variant === 'primary'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md focus:ring-blue-500 dark:bg-pink-500'
                      : 'border border-transparent text-blue-600 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-pink-400 focus:ring-blue-400'
                  }`}
                >
                  {label}
                  {variant === 'primary' && <span className="ml-2">→</span>}
                </a>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Screenshot Column */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-md shadow-xl rounded-xl overflow-hidden bg-white dark:bg-gray-800"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={480}
              height={320}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
