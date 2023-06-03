import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { getCategories } from "../services";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { SlControlPlay } from "react-icons/sl";

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        // <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
        <div className="small-chevron"> &#8592;</div>
      )}
      {!props.left && (
        // <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
        <path d="M492.5,293.3c-0.2,0-0.3-0.1-0.4-0.2c-0.1-0.2-0.1-0.5,0.2-0.7l18.7-10.8c1.1-0.7,1.8-1.8,1.8-3.1c0-1.3-0.7-2.5-1.8-3.1
        l-18.7-10.8c-0.2-0.1-0.3-0.4-0.2-0.7c0.1-0.2,0.4-0.3,0.7-0.2l18.7,10.8c1.5,0.8,2.3,2.3,2.3,4c0,1.7-0.9,3.2-2.3,4l-18.7,10.8
        C492.7,293.3,492.6,293.3,492.5,293.3z"/>
        // <div className="small-chevron">&#8594;</div>
      )}
    </svg>
  );
}

const PostCard = ({ post, category, src }) => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const handleMore = (event) => {
    setIsActive(!isActive);
    setIsOpen(!isOpen);
  };

  const playOrPause = () => {
    if(videoRef.current.paused){videoRef.current.play();}
   else {videoRef.current.pause()}
  };

  const onPlay = () => setIsPlaying(true);

const onPause = () => setIsPlaying(false);


  return (
    <div className="wrapper">
      <div class="box content">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {post.featuredImg.length === 0 && !post.featuredVideo && (
              <div className="keen-slider__slide">
                <img className="img-box" src={post.featuredImage.url} />
              </div>
            )}

            {post.featuredImg.length > 0 &&
              post.featuredImg.map((item, i) => {
                return (
                  <div key={i} className="keen-slider__slide">
                    <img className="img-box" src={item.url} />
                  </div>
                );

                
              })}

            {post.featuredVideo && (
              <div className="keen-slider__slide">
                <div className="video-wrapper">
                  <video
                       onPlay={onPlay}
                       onPause={onPause}
                       ref={videoRef}
                    poster={post.featuredImage.url}
                    src={post.featuredVideo.url}
                    alt={post.title}
                    className="video-box"
                  />
                  <div className="controls" onClick={playOrPause}>
                {!isPlaying &&(<SlControlPlay size={50} className='video-control' />)
                }
                </div>
                </div>
              </div>
            )}
          </div>
          {loaded && instanceRef.current && post.featuredImg.length > 1 && (
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
        {loaded && instanceRef.current && post.featuredImg.length > 1 && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>

      <div class="box sidebar">
        <motion.h1 className="post-title">{post.title}</motion.h1>
        <motion.h1 className="post-client">{post.excerpt}</motion.h1>

        <motion.div
          onClick={handleMore}
          transition={{ layout: { duration: 1, type: "spring" } }}
        >
          {isOpen && (
            <motion.p className="p-text">
              <div className="categories-box">
                {post.categories
                  .filter((category) => category.name !== "all")
                  .map((category) => (
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      onClick={() => setActive(category)}
                      className={`categories ${active == category && "active"}`}
                      id="cat-cards"
                    >
                      {category.name}
                    </Link>
                  ))}
              </div>

              {post.content.raw && <RichText content={post.content.raw} />}

              {post.process.raw && <RichText content={post.process.raw} />}

              <>
                {post.websiteLink && (
                  <motion.div className="web-link">
                    <a href={post.websiteLink} target="_blank" rel="noreferrer">
                      {post.websiteLink}
                    </a>
                  </motion.div>
                )}
              </>
            </motion.p>
          )}

          <motion.button className="more-button">
            {isActive ? <div>less</div> : <div>more</div>}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PostCard;
