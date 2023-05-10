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
{/* Hello,<br/>
I am a freelance digital designer and developer.<br/>
Based and born in Brussels (1990), I grew up with an art teacher grandmother, and a graphic designer mother crafting advertising from our backyard - where I discovered the world of cheesy stock photos books, and brush effects on painter Mac. From the age of 5, I spent 8 years building a 6 m² smurf village; collecting 384 figurines and tinkering bespoke stories and mushroom facilities. Until the day I realised I needed to serve larger impact projects, for real people. That’s how I studied industrial design, user research, and front-end development. Since 2013, I’ve enjoyed working for a wide range of clients such as The World Bank, Samsung, The Free University of Brussels (VUB) and my plumber. 
I’ve worked on 3 continents, with many awesome collaborators, always different design briefs, and a wide palet of job titles. From scratch to the launch of a digital project, I appreciate every step of the process, which by the way also includes meeting new people. So don’t hesitate to contact me :) Telkens ook in het Nederlands, et d'ailleurs aussi en français.           */}
Hello,<br/>
I am a freelance digital designer and developer.<br/>

Based and born in Brussels (1990), I grew up with an art teacher grandmother, and a graphic designer mother crafting advertising from our backyard - where I fell in love with Pantone markers and air brush effects on Painter Mac.
<br/>
Later on, I graduated from an industrial design master (2015) and spent 3 years working as a UX designer & design researcher with a few design agencies. Obsessed to understand all about user behaviours, tastes and needs, I met many of them and contributed to VR, AR, AI, IOT, Apps, and intranet projects. I wrote and read a lot of reports for big brands, and also had the pleasure to design some screen flows. This motivated me to learn front-end development in a class, and alone. To finally design, develop and sell websites for small clients since 2020. Since 2013, I’ve enjoyed working for a wide range of clients such as The World Bank, Samsung, The Free University of Brussels (VUB) and my plumber. I’ve worked on 3 continents, with many awesome collaborators, various design job titles, and always different briefs.
<br/>
I love to figure out complex digital systems for users that are not like me. As well as designing and developing interfaces triggering a sense of adequacy and clarity to their users.
<br/>
From scratch to the launch of a digital project and beyond, I prefer and appreciate being involved in every step of the process, which by the way includes meeting new people. So don’t hesitate to contact me :) 
ook in het Nederlands, et aussi en français!


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
