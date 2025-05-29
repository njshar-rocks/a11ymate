import fs from 'fs';
import path from 'path';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import WhyA11yMate from '../components/WhyA11ymate';
import TrustedBy, { Logo } from '../components/TrustedBy';

interface HomePageProps {
  logos: Logo[];
}

export default function HomePage({ logos }: HomePageProps) {
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

      {/* Trusted by logos carousel */}
      <TrustedBy logos={logos} />
    </Layout>
  );
}

export async function getStaticProps() {
  const logoDir = path.join(process.cwd(), 'public', 'logos');
  const files = fs.readdirSync(logoDir).filter((f) =>
    /\.(svg|png|jpg|jpeg)$/.test(f)
  );

  const logos: Logo[] = files.map((file) => ({
    src: `/logos/${file}`,
    alt: file.replace(/\.(svg|png|jpg|jpeg)$/, '').replace(/[-_]/g, ' '),
  }));

  return {
    props: { logos },
  };
}
