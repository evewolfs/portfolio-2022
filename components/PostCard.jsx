import React from "react";
import Link from "next/link";
import {motion} from 'framer-motion'



const PostCard = ({ post }) => {


  return (
    
    <div className="w-full bg-wite shadow-2xl rounded-lg p-0 my-8">

        <video
          src={post.featuredImage.url}
          alt={post.title}
          className=" object-cover w-full rounded-t-lg md:h-auto"
          // className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg "
        />
<div className="col-span-4 justify-between p-4 leading-normal">
      <h1
        className="mb-2 text-xl font-normal tracking-tight  dark:text-white"
      >
        {post.title}
      </h1>
      
          <p className="mb-3 font-normal text-gray-500">
            {post.excerpt}
          </p>
          <p className="mb-3 font-normal text-gray-500" >
            {post.content.text}
          </p>
     


      
      
            {/* <Link href={`/post/${post.slug}`}>
              <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                Continue reading
              </span>
            </Link> */}
          </div>
        </div>
    

  );
};

export default PostCard;
