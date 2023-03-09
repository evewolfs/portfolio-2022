import React from "react";
import Link from "next/link";
import {motion} from 'framer-motion';
import { useState, useRef } from "react";




const PostCard = ({ post }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="post-box">

    <img  className="img-box" src={post.featuredImage.url} />
       


<motion.div transition={{layout: {duration: 1, type: "spring"}}} onClick={() =>setIsOpen(!isOpen)} className="text-box">
      <motion.h1
        className="post-title"
      >
        {post.title}
        {post.websiteLink}
      </motion.h1>
      
          <motion.p className="post-excerpt">
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