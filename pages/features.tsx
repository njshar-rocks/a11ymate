import Layout from '../components/Layout';

export default function FeaturesPage() {
  return (
    <Layout>
      <main className="px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Features</h1>
        <p className="mb-10 max-w-2xl">
          A11yMate helps developers ensure accessibility compliance with ease. Here are some of the key features:
        </p>

        <ul className="space-y-6">
          <li>
            <h2 className="text-xl font-semibold">✅ Real-time Contrast Checks</h2>
            <p className="text-gray-700">Automatically catch contrast issues as you code.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">✅ ARIA Role Validation</h2>
            <p className="text-gray-700">Scan for misused ARIA attributes and roles.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">✅ Screen Reader Simulation</h2>
            <p className="text-gray-700">Preview your app as it sounds to screen reader users.</p>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
