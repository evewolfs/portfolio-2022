import React from "react";
import Link from "next/link";
import {motion} from 'framer-motion';
import { useState, useRef, useEffect } from "react";
import { getCategories } from "../services";






const PostCard = ({ post, category }) => {

  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(null)

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
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
      <div className="categories">
      {post.categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} onClick={() => setActive(category)}
        className={`categories ${active == category && 'active'}`} id="cat-link">
            {category.name}
        </Link>
      ))}
    </div>
          <motion.p className="post-excerpt">
            {post.excerpt}
          </motion.p>

    
    

{isOpen &&
(  <motion.div className="p-text" >
            {post.markdownText}
          </motion.div>)}


      
      
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