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
(  <motion.p>
       1990 - born and brewed in Brussels <br/>
        2008 - raised by a graphic designer and a plastic art teacher <br/>
        2015 - graduated from a industrial design master<br/>
        2016 - worked for 3 years as a design researcher/UX designer for agencies<br/>
        2019 - studied front-end development <br/>
        2020 - have been freelancing as a designer and developer, see below ;)
        


          </motion.p>)}

          </motion.div>
         
         
  
        <div className="theme-options">
       <BsSun size={20} id='theme-sun' onClick={() => handleClick('theme-sun')} className={`${colorTheme === 'theme-sun' ? 'active' : ''}`} />
       <BsCloud  size={22} id='theme-cloud' onClick={() => handleClick('theme-cloud')} className={`${colorTheme === 'theme-cloud' ? 'active' : ''}`} />
       <BsRainbow size={24} id='theme-rainbow' onClick={() => handleClick('theme-rainbow')} className={`${colorTheme === 'theme-rainbow' ? 'active' : ''}`}  />
       <BsMoon size={18} id='theme-moon' onClick={() => handleClick('theme-moon')} className={`${colorTheme === 'theme-moon' ? 'active' : ''}`}  />
      </div>
      <ButtonContact />
      </motion.div>
      <Categories />
     
      {children}
      </motion.div></div> 
    </>
  );
};

export default Layout;
