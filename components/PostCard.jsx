import React from "react";
import Link from "next/link";
import {motion} from 'framer-motion'
import { useState, useRef } from "react";




const PostCard = ({ post }) => {


  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="w-full bg-wite shadow-2xl rounded-lg my-8">

        <video
          playsInline
          loop
          muted
          // autoPlay
          src={post.featuredImage.url}
          alt={post.title}
          className=" object-cover w-full rounded-t-lg md:h-auto"
          // className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg "
        />
<motion.div transition={{layout: {duration: 1, type: "spring"}}} onClick={() =>setIsOpen(!isOpen)} className="col-span-4 justify-between p-4 leading-normal">
      <motion.h1
        className="mb-2 text-xl font-normal tracking-tight  dark:text-white"
      >
        {post.title}
      </motion.h1>
      
          <motion.p>
            {post.excerpt}
          </motion.p>

{isOpen &&
(  <motion.p className="p-text">
            {post.content.text}
          </motion.p>)}


      
      
            {/* <Link href={`/post/${post.slug}`}>
              <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                Continue reading
              </span>
            </Link> */}
          </motion.div>
        </div>
    

  );
};

export default PostCard;
