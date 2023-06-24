import React from "react";
import { Layout } from "../components";
import Script from 'next/script'
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import "../styles/switcher.scss";


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-ZEXW9RRLVN"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZEXW9RRLVN', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
