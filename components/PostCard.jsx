import React from "react";
import Link from "next/link";
import {motion} from 'framer-motion';
import { useState, useRef, useEffect } from "react";
import { getCategories } from "../services";
import { RichText } from '@graphcms/rich-text-react-renderer';






const PostCard = ({ post, category }) => {

  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(null)

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="post-box">
<div className="left-box">
    <img  className="img-box" src={post.featuredImage.url} />
       </div>

<div className="right-box">
<motion.div transition={{layout: {duration: 1, type: "spring"}}} onClick={() =>setIsOpen(!isOpen)} className="text-box">
      <motion.h1
        className="post-title"
      >
        {post.title}
      </motion.h1>
          <motion.p className="post-excerpt">
            {post.excerpt}
          </motion.p>
          <motion.button className="button-more">+</motion.button>
    {isOpen &&
(  <motion.p className="p-text">
            {post.content.text}
          </motion.p>)}


          </motion.div>
          <div className="categories-card">
      {post.categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} onClick={() => setActive(category)}
        className={`categories-cards ${active == category && 'active'}`}>
            {category.name}
        </Link>
      ))}
          
    </div>
   
    <div className="web-link"><a
        href={post.websiteLink}
        target="_blank"
        rel="noreferrer"
      >  {post.websiteLink} </a></div>

     </div>
        </div>
    

  );
};

export default PostCard;