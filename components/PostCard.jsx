import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { getCategories } from '../services';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { BsArrowUpRight } from 'react-icons/bs';
import Carousel from './Carousel';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  );
}

const PostCard = ({ post, category }) => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    // slideChanged(slider) {
    //   setCurrentSlide(slider.track.details.rel);
    // },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));

    console.log(post);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const handleMore = (event) => {
    setIsActive(!isActive);
    setIsOpen(!isOpen);
  };

  const getExtension = (featuredImage) => {
    return featuredImage.split('.').pop();
  };

  return (
    <div className='wrapper'>
      <div class='box content'>
        {/* <div className="carousel-container">
        
        <div className="Carousel">
            {post.featuredImg.map((post, idx) => (<div className="carousel-item" key={`${idx}-${post.title}`}>
<img src={post.featuredImg.url} />
            </div>))}
        </div>
    </div> */}

        {/* {getExtension(post.featuredImage.url).toLowerCase() == 1 ? (
          <video
            playsInline
            loop
            muted
            controls
            src={post.featuredImage.url}
            alt={post.title}
            className='object-cover w-full rounded-t-lg md:h-auto'
          />
        ) : (
          <img className='img-box' src={post.featuredImage.url} />
        )} */}

        {/* slider start */}

        <div className='navigation-wrapper'>
          <div ref={sliderRef} className='keen-slider'>
            {post.featuredImg.length === 0 && !post.featuredVideo && (
              <div className='keen-slider__slide'>
                <img className='img-box' src={'/vercel.svg'} />
              </div>
            )}

            {post.featuredImg.length > 0 &&
              post.featuredImg.map((item, i) => {
                return (
                  <div key={i} className='keen-slider__slide'>
                    <img className='img-box' src={item.url} />
                  </div>
                );
              })}

            {post.featuredVideo && (
              <div className='keen-slider__slide'>
                <video
                  playsInline
                  loop
                  muted
                  controls
                  src={post.featuredVideo.url}
                  alt={post.title}
                  className='object-cover w-full rounded-t-lg md:h-auto'
                />
              </div>
            )}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details?.slides.length - 1
                }
              />
            </>
          )}
        </div>
      </div>

      <div class='box sidebar'>
        <motion.h1 className='post-title'>{post.title}</motion.h1>
        <motion.h1 className='post-client'>{post.excerpt}</motion.h1>

        <div className='categories-box'>
          {post.categories
            .filter((category) => category.name !== 'all')
            .map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                onClick={() => setActive(category)}
                className={`categories-cards ${active == category && 'active'}`}
              >
                {category.name} <span>&#160;|&#160;</span>
              </Link>
            ))}
        </div>

        <motion.div
          onClick={handleMore}
          transition={{ layout: { duration: 1, type: 'spring' } }}
        >
          {isOpen && (
            <motion.p className='p-text'>
              {post.content.raw && <RichText content={post.content.raw} />}
              <br />

              {post.process.raw && <RichText content={post.process.raw} />}

              <>
                {post.websiteLink && (
                  <motion.div className='web-link'>
                    <a href={post.websiteLink} target='_blank' rel='noreferrer'>
                      {post.websiteLink}
                    </a>
                  </motion.div>
                )}
              </>
            </motion.p>
          )}

          <motion.button className='more-button'>
            {isActive ? <div>less -</div> : <div>more +</div>}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PostCard;
