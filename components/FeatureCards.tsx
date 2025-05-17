export default function FeatureCards() {
    const features = [
      {
        title: 'Real-time Contrast Checks',
        description: 'Instantly detect color contrast issues to ensure readability for all users.',
      },
      {
        title: 'ARIA Role Validation',
        description: 'Scan your app for ARIA misuse and get actionable feedback.',
      },
      {
        title: 'Screen Reader Simulations',
        description: 'Understand how your site sounds with built-in screen reader testing tools.',
      },
    ];
  
    return (
      <section className="relative px-6 py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Key Features
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 transition hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  