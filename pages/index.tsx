import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <Layout
      title="A11yMate – Accessibility Plugin"
      description="Build accessible websites faster and with confidence."
    >
      <Hero
        title="Make the Web Accessible for Everyone"
        subtitle="A lightweight, powerful plugin to help developers ensure their sites meet accessibility standards effortlessly."
        buttons={[
          { label: 'Get Started', href: '/docs', variant: 'primary' },
          { label: 'Learn More', href: '/features', variant: 'secondary' },
        ]}
      />

      {/* other homepage content */}

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
