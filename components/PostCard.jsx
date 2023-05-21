import React from "react";
import Link from "next/link";
import {motion} from 'framer-motion';
import { useState, useRef, useEffect } from "react";
import { getCategories } from "../services";
import { RichText } from '@graphcms/rich-text-react-renderer';
import { BsArrowUpRight } from 'react-icons/bs'
import Carousel from "./Carousel";




 


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
{/* <div className="carousel-container">
        
        <div className="Carousel">
            {post.featuredImg.map((post, idx) => (<div className="carousel-item" key={`${idx}-${post.title}`}>
<img src={post.featuredImg.url} />
            </div>))}
        </div>
    </div> */}

{getExtension(post.featuredImage.url).toLowerCase() == 1 ? 
           (<video
    playsInline
    loop
    muted
controls
    src={post.featuredImage.url}
    alt={post.title}
    className=" object-cover w-full rounded-t-lg md:h-auto"
  />) :(<img  className="img-box" src={post.featuredImage.url} />)}
   </div>

<div class="box sidebar">
  
      <motion.h1
        className="post-title">
        {post.title}
      </motion.h1>
          <motion.h1 className="post-client">
            {post.excerpt}
          </motion.h1>

          <div className="categories-box">
      {post.categories.filter(category => category.name !== 'all').map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} onClick={() => setActive(category)}
        className={`categories-cards ${active == category && 'active'}`}>
          {category.name} <span>&#160;|&#160;</span>
        </Link> 
      ))}
            </div>    

         
          <motion.div onClick={handleMore} transition={{layout: {duration: 1, type: "spring"}}} > 
          {isOpen &&
(  

  
<motion.p className="p-text">


{post.content.raw &&
<RichText content={post.content.raw}/>}
<br/>

{post.process.raw &&
<RichText content={post.process.raw}/>}  

<>
 {post.websiteLink &&
    <motion.div className="web-link"><a
        href={post.websiteLink}
        target="_blank"
        rel="noreferrer"
      >{post.websiteLink}</a></motion.div>}</>


          </motion.p>)}


          <motion.button className="more-button">
     {isActive ? <div>less -
     </div> : <div>more +</div>}
          </motion.button>

    </motion.div>


   
   
     </div>
     </div>
    

  );
};

export default PostCard;