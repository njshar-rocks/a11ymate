import Image from 'next/image';
import Link from 'next/link';

export interface Logo {
  src: string;           // path under /public
  alt: string;
  href?: string;         // optional link around the logo
}

interface TrustedByProps {
  logos: Logo[];
}

export default function TrustedBy({ logos }: TrustedByProps) {
  return (
    <section className="bg-blue-900 dark:bg-gray-800 py-12">
      <h2 className="text-center text-white text-lg font-semibold mb-8">
        Trusted by the world’s most inclusive brands!
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {logos.map((logo) => {
          const img = (
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain filter brightness-0 invert" 
              // invert+brightness → white logos on dark bg
            />
          );

          return (
            <div key={logo.src} className="flex justify-center">
              {logo.href ? (
                <Link href={logo.href} passHref>
                  <a target="_blank" rel="noopener">{img}</a>
                </Link>
              ) : (
                img
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
