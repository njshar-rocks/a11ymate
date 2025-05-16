import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <main className="px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">About A11yMate</h1>
        <p className="max-w-2xl mb-6">
          A11yMate was built to make digital accessibility simple, actionable, and automatic.
          We believe everyone deserves equal access to the web.
        </p>

        <p className="text-gray-700">
          Built by developers who care about inclusion, A11yMate is open-source and community-driven.
          Want to contribute? Check us out on GitHub!
        </p>
      </main>
    </Layout>
  );
}
