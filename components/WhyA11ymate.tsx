export default function WhyA11yMate() {
    return (
      <section className="px-6 py-20 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Why A11yMate?
            </h2>
            <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              More than 98% of websites have accessibility issues. A11yMate gives every developer the
              power to fix that — quickly and confidently.
            </p>
            <ul className="space-y-4 text-base text-gray-800 dark:text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400">✓</span>
                No setup required
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400">✓</span>
                Built-in WCAG testing
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400">✓</span>
                Works with any stack
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400">✓</span>
                Pro includes early AI feedback features
              </li>
            </ul>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 to-purple-100/20 dark:from-blue-900/20 dark:to-purple-900/10 rounded-lg blur-xl" />
            <img
              src="/images/illustration-accessibility.png"
              alt="Illustration showing accessibility in action"
              className="relative rounded-xl shadow-xl z-10"
            />
          </div>
        </div>
      </section>
    );
  }
  