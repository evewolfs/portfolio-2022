import React from 'react'
import { useState } from "react";
import Head from "next/head";
import { PostCard, Categories } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  const [state, setState] = useState(0);

  function betterToggleState() {
    setState((prevState) => (prevState + 1) % 3);
  }

  let colortoshow;
  if (state === 0) {
    colortoshow = "red";
  } else if (state === 1) {
    colortoshow = "green";
  } else {
    colortoshow = "yellow";
  }

  return (
    <div className="containter mx-8 mb-8"    style={{
      background: colortoshow
    }}>
      <Head>
        <title>ève wolfs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        onClick={betterToggleState}
     
      >
        I will toggle between 3 states
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-12">
          {" "}
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} 
            />
          ))}
        </div>
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
