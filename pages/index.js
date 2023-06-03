import React from "react";
import Head from "next/head";
import { PostCard } from "../components";
import { getPosts } from "../services";
import { RichText } from "@graphcms/rich-text-react-renderer";



export default function Home({ posts }) {
  return (
    <div className="post-container" >
      <Head>
        <title>ève wolfs</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <div className="content-box">
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
