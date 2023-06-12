import React from "react";
import Head from "next/head";
import Script from "next/script";
import { PostCard } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="post-container">
      <Head>
        <title>ève wolfs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/nmy3nwt.css" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZEXW9RRLVN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZEXW9RRLVN');
        `}
        </Script>
      </Head>

      <div className="wrapper">
        {" "}
        {posts.map((post) => (
          <PostCard post={post.node} key={post.title} />
        ))}
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
