import React from "react";
import Link from "next/link";
import {motion} from 'framer-motion';
import { useState, useRef, useEffect } from "react";
import { getCategories } from "../services";
import { RichText } from '@graphcms/rich-text-react-renderer';
import { BsArrowUpRight } from 'react-icons/bs'







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


    const getExtension = (featuredImage) => {
      return featuredImage.split('.').pop()
    }

    
  return (
 
    <div className="wrapper">
<div class="box content">
{getExtension(post.featuredImage.url).toLowerCase() == 1 ? 
           (<video
    playsInline
    loop
    muted
controls
    src={post.featuredImage.url}
    alt={post.title}
    className=" object-cover w-full rounded-t-lg md:h-auto"
  />) :(<img  className="img-box" src={post.featuredImage.url} />) }


   </div>

<div class="box sidebar">
  <div className="info-box">
      <motion.h1
        className="post-title">
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

          <motion.button className="more-button">
     {isActive ? <div>- info</div> : <div>+ info </div>}
          </motion.button>

    </motion.div>
    <>
 {post.websiteLink &&
    <div className="web-link"><a
        href={post.websiteLink}
        target="_blank"
        rel="noreferrer"
      ><BsArrowUpRight size={11} style={{marginRight:'8px'}}/> website</a></div>}</>

     
     
<div className="categories-card">
      {post.categories.filter(category => category.name !== 'all').map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} onClick={() => setActive(category)}
        className={`categories-cards ${active == category && 'active'}`}>
          {category.name} <span>&#160;|&#160;</span>
        </Link> 
      ))}
            </div> 
          </div>
   
     </div>
     </div>
    

  );
};

export default PostCard;