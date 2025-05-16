import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-gray-100 dark:bg-gray-800 px-6 py-6 text-center text-sm text-gray-600 dark:text-gray-400"
    >
      © {new Date().getFullYear()} A11yMate. Built with care.
    </motion.footer>
  );
}
