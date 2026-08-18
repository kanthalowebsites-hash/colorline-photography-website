import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Colorline Photography MW | Luxury Wedding &amp; Portrait Photography</title>
        <meta name="description" content="Colorline Photography MW offers luxury wedding photography, engagement photography, studio portraits, event photography, fashion and outdoor photography in Malawi and worldwide." />
        <meta name="keywords" content="Colorline Photography MW, Malawi photography, Blantyre photographer, wedding photographer Malawi, wedding photography Blantyre, studio photography Malawi, portrait photographer Malawi" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
