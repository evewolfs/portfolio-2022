import React, {useEffect, useState} from "react";
import {motion} from 'framer-motion';
import { Header } from "./";
import Categories from "./Categories";
import { BsSun, BsMoon, BsCloud, BsRainbow } from 'react-icons/bs'
import ButtonContact from "./ButtonContact";


const Layout = ({ children }) => {
    //state
const [colorTheme, setColorTheme] = useState('theme-sun');
const [isActive, setIsActive] = useState(false);

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

  const handleBio = event => {
  setIsBioOpen(!isBioOpen); 
  setIsActive(!isActive)
  };

  return (
    <>
     <div className={`Main ${colorTheme}`} >
  
      <motion.div className="content-box">
        <motion.div className="header-line">
        <motion.div transition={{layout: {duration: 1, type: "spring"}}} onClick={handleBio} className="bio-button">
     
         <motion.div className="bio-icon"> ève wolfs
    
   </motion.div>
       
        {isBioOpen &&
(  <motion.div className="p-bio">
Hello, I am a designer and developer.
<br/>
Based and born in Brussels (1990), I grew up with an art teacher grandmother, and a graphic designer mother crafting advertising from our backyard.
 <br/>
I graduated from an industrial design master (2015) and spent almost 4 years working as a UX designer and design researcher with a few design agencies. Obsessed to understand all about users’ behaviours, needs and tastes, I met a lot of them, wrote many reports and designed several screen flows. 

Curious to dive deeper in digital production, I studied front-end development (2019) and started selling websites and digital design a few months later.  Since 2013, I’ve enjoyed collaborating with a wide range of clients such as The World Bank, an architecture office, The Free University of Brussels, and my plumber.
 <br/>
From scratch to the launch, I appreciate every step of the process, which also includes meeting new people. So don’t hesitate to contact me :)

</motion.div>)}
          </motion.div>
          <ButtonContact />
          </motion.div>
         
         
  
        <motion.div className="theme-options">
       <BsSun size={18} id='theme-sun' onClick={() => handleClick('theme-sun')} className={`${colorTheme === 'theme-sun' ? 'active' : ''}`} />
       <BsCloud  size={20} id='theme-cloud' onClick={() => handleClick('theme-cloud')} className={`${colorTheme === 'theme-cloud' ? 'active' : ''}`} />
       <BsRainbow size={22} id='theme-rainbow' onClick={() => handleClick('theme-rainbow')} className={`${colorTheme === 'theme-rainbow' ? 'active' : ''}`}  />
       <BsMoon size={16} id='theme-moon' onClick={() => handleClick('theme-moon')} className={`${colorTheme === 'theme-moon' ? 'active' : ''}`}  />
      </motion.div>
    
     
      <Categories />
     
      {children}
      </motion.div>
    </div> 
    </>
  );
};

export default Layout;
