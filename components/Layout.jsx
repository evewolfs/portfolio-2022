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

Hello,<br/>
I am a freelance digital designer and developer.<br/>

Based and born in Brussels (1990), I grew up with an art teacher grandmother, and a graphic designer mother crafting advertising from our backyard - where I discovered Painter Mac air brush effects and Pantone markers.
<br/>
Later on, I graduated from an industrial design master (2015) and spent 3 years working as a UX designer & design researcher with a few design agencies. Obsessed to understand all about user behaviours, tastes and needs, I met many of them and wrote a lot of reports. At the time, I also had the pleasure to design some screen flows, which motivated me to learn front-end development in a class, and alone. I then began designing, developing and selling websites as a freelancer from 2020 on. Since 2013, I’ve enjoyed working for a wide range of clients such as The World Bank, The Free University of Brussels (VUB) and my plumber. I’ve worked on 3 continents, with many awesome collaborators, various design job titles, and always different briefs.
<br/>
I love to figure out complex digital systems for people that are not like me. As well as designing and developing interfaces triggering a sense of adequacy and clarity to their users.
<br/>
From scratch to the launch and beyond, I prefer and appreciate being involved in every step of the process, which by the way includes meeting new people. So don’t hesitate to contact me :) 
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
