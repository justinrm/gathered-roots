import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Accessibility meta tags */}
        <meta name="color-scheme" content="light" />

        {/* Leaflet CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />

        {/* Favicon links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#006978" />

        {/* Default meta description (can be overridden by pages) */}
        <meta
          name="description"
          content="Gathered Roots Cleaning offers professional residential cleaning services for homes in Lewiston, ID 83501, Clarkston, WA 99403, and surrounding areas with a personal touch. We tend to your home like an old garden, bringing back stillness and comfort."
        />

        {/* Accessibility statement link */}
        <link rel="help" href="/accessibility-statement" title="Accessibility Statement" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
