import React from "react";
import Link from "next/link";
import {motion} from 'framer-motion';
import { useState, useRef, useEffect } from "react";
import { getCategories } from "../services";
import { RichText } from '@graphcms/rich-text-react-renderer';






const PostCard = ({ post, category }) => {

  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const handleMore = event => {
    setIsActive(!isActive);
    setIsOpen(!isOpen);
    };




  return (
    
    <div className="post-box">
<div className="left-box">
{post.featuredImage.url &&
    <img  className="img-box" src={post.featuredImage.url} />}
    {/* {post.featuredImage.url &&
    <img  className="img-box" src={post.featuredImage.url} />} */}
       </div>

<div className="right-box">
<motion.div className="text-box">
      <motion.h1
        className="post-title"
      >
        {post.title}
      </motion.h1>
          <motion.p className="post-excerpt">
            {post.excerpt}
          </motion.p>
         
          <motion.div onClick={handleMore} transition={{layout: {duration: 1, type: "spring"}}} > 
          {isOpen &&
(  
<motion.p className="p-text">
{post.content.raw &&
<RichText content={post.content.raw}/>}
<br/>

{post.process.raw &&
<RichText content={post.process.raw}/>}   
          </motion.p>)}

          <motion.button className="button-more">
     {isActive ? <div>-</div> : <div>+</div>}
          </motion.button>

    </motion.div>

          </motion.div>
          <div className="categories-card">
      {post.categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} onClick={() => setActive(category)}
        className={`categories-cards ${active == category && 'active'}`}>
            {category.name}
        </Link>
      ))}
          
    </div>
    <>
 {post.websiteLink &&
    <div className="web-link"><a
        href={post.websiteLink}
        target="_blank"
        rel="noreferrer"
      >  {post.websiteLink} </a></div>}</>

     </div>
        </div>
    

  );
};

export default PostCard;