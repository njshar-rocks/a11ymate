import Layout from '../components/Layout';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout title="Contact A11yMate" description="Reach out to the team behind A11yMate.">
      <section className="max-w-xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        {submitted ? (
        <p className="text-green-600 text-center">Thanks! We&rsquo;ll get back to you soon.</p>
        ) : (
          <form
            className="space-y-4"
            action="https://formspree.io/f/xblowonq" 
            method="POST"
            onSubmit={() => setSubmitted(true)}
          >
            <label className="block">
              <span className="text-sm font-medium">Name</span>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2"
              />
            </label>

            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </Layout>
  );
}
