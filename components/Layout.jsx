import React, {useEffect, useState} from "react";
import {motion} from 'framer-motion';
import { Header } from "./";
import Categories from "./Categories";
import { BsSun, BsMoon, BsCloud, BsRainbow } from 'react-icons/bs'
import ButtonContact from "./ButtonContact";


const Layout = ({ children }) => {
    //state
const [colorTheme, setColorTheme] = useState('theme-sun');

//effect
useEffect(() => {
  //check for selected theme local sutorage value
  const currentThemeColor = localStorage.getItem('theme-color');
  // if found set selected theme value in state
  if (currentThemeColor) {
    setColorTheme(currentThemeColor);
  }
}, []);

// set theme
const handleClick = (theme) => {
setColorTheme(theme);
localStorage.setItem('theme-color', theme)
}


  const [isBioOpen, setIsBioOpen] = useState(false);


  return (
    <>
     <div className={`Main ${colorTheme}`} >
  
      <motion.div className="content-box">
        <motion.div className="header-line">
        <motion.div transition={{layout: {duration: 1, type: "spring"}}} onClick={() =>setIsBioOpen(!isBioOpen)} className="bio-button">
     
        ève wolfs &#8595;
       
        {isBioOpen &&
(  <motion.div className="p-bio">
                   I am a multi-designer and front-end developer.<br/>
I was born and raised in Brussels, by a graphic designer and a high school art teacher.
I have a master in product design (2015) and first worked as a design researcher and  UX designer for 3 years.
<br/>I then got trained as a front-end developer (2019) and have been working since then for quite different individuals and organisations.<br/>
I enjoy every single step of the process, including meeting new people and writing proposals.<br/> So don’t hesitate to contact me!
        


          </motion.div>)}
          </motion.div>
          <ButtonContact />
          </motion.div>
         
         
  
        <motion.div className="theme-options">
       <BsSun size={20} id='theme-sun' onClick={() => handleClick('theme-sun')} className={`${colorTheme === 'theme-sun' ? 'active' : ''}`} />
       <BsCloud  size={22} id='theme-cloud' onClick={() => handleClick('theme-cloud')} className={`${colorTheme === 'theme-cloud' ? 'active' : ''}`} />
       <BsRainbow size={24} id='theme-rainbow' onClick={() => handleClick('theme-rainbow')} className={`${colorTheme === 'theme-rainbow' ? 'active' : ''}`}  />
       <BsMoon size={18} id='theme-moon' onClick={() => handleClick('theme-moon')} className={`${colorTheme === 'theme-moon' ? 'active' : ''}`}  />
      </motion.div>
    
     
      <Categories />
     
      {children}
      </motion.div>
    </div> 
    </>
  );
};

export default Layout;
