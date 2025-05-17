import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';

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

      <FeatureCards />
      <WhyA11yMate />
    </Layout>
  );
}