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
     
        ève wolfs    <div className="bio-icon">
     {isActive ? <div>-</div> : <div>+</div>}
   </div>
       
        {isBioOpen &&
(  <motion.div className="p-bio">
Hello, 
<br/>
I am a freelance designer and developer.
<br/>
Born in Brussels, I was raised by a graphic designer mother working in advertising,  an art teacher grandma’ always up for building something alongside with my grandfather - a social house builder. 
I started my first project at 6 : a 5m2 smurf village,  holding 374 figurines, and all facilities a smurf need to smurf a healthy community life. I spent 8 tedious years trying to make every smurf fit in the scene, to finally realise I needed to serve larger impact projects. And that’s how I studied industrial design, user research and front-end developement. Since then, I’ve enjoyed working for a wide range of clients (such as The World Bank or my plumber) with many awesome collaborators, various job titles, and always different design briefs. From scratch to the launch, I truly appreciate every single part of the process, including meeting new people. So don’t hesitate to contact me :)
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
