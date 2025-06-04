import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
      <Analytics />
    </>
  );
}

export default MyApp;
