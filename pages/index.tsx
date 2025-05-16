import Head from 'next/head';
import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout
    title="A11yMate – Make the Web Accessible"
    description="A lightweight plugin that helps developers ensure accessibility standards effortlessly.">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gray-50">
        <h1 className="text-4xlWha md:text-6xl font-bold mb-4">Make the Web Accessible for Everyone</h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          A lightweight, powerful plugin to help developers ensure their sites meet accessibility standards effortlessly.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/docs" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">Get Started</a>
          <a href="/features" className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition">Learn More</a>
        </div>
      </section>

      {/* Features Summary */}
      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-2">Real-time Contrast Checks</h3>
            <p>Instantly detect color contrast issues to ensure readability for all users.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">ARIA Role Validation</h3>
            <p>Scan your app for ARIA misuse and get actionable feedback.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Screen Reader Simulations</h3>
            <p>Understand how your site sounds with built-in screen reader testing tools.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
