import React, {useEffect, useState} from "react";
import { Header } from "./";
import Categories from "./Categories";
import { BsSun, BsMoon, BsCloud, BsRainbow } from 'react-icons/bs'


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

  return (
    <>
     <div className={`Main ${colorTheme}`} >
    
      <div className="content-box">
      <Header />
        <div className="theme-options">
       <BsSun size={20} id='theme-sun' onClick={() => handleClick('theme-sun')} className={`${colorTheme === 'theme-sun' ? 'active' : ''}`} />
       <BsMoon size={18} id='theme-moon' onClick={() => handleClick('theme-moon')} className={`${colorTheme === 'theme-moon' ? 'active' : ''}`}  />
       <BsCloud  size={22} id='theme-cloud' onClick={() => handleClick('theme-cloud')} className={`${colorTheme === 'theme-cloud' ? 'active' : ''}`} />
       <BsRainbow size={24} id='theme-rainbow' onClick={() => handleClick('theme-rainbow')} className={`${colorTheme === 'theme-rainbow' ? 'active' : ''}`}  />
      </div>
   
      
      <Categories />
      {children}
      </div></div>
    </>
  );
};

export default Layout;
