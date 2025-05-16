import Layout from '../components/Layout';
import Hero from '../components/Hero';


export default function AboutPage() {
  return (
    <Layout>
      <main className="px-6 py-12">
      <Hero
        title="About A11yMate"
        subtitle="We're on a mission to make accessibility easy, automatic, and built-in."
        buttons={[{ label: 'Meet the Team', href: '/about/team', variant: 'primary' }]}
        />
      </main>
    </Layout>
  );
}
