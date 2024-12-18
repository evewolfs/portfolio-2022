import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Categories from "./Categories";
import { BsSun, BsMoon, BsCloud, BsRainbow } from "react-icons/bs";
import ButtonContact from "./ButtonContact";

const Layout = ({ children }) => {
  //state
  const [colorTheme, setColorTheme] = useState("theme-sun");
  const [isActive, setIsActive] = useState(false);

  //effect
  useEffect(() => {
    //check for selected theme local sutorage value
    const currentThemeColor = localStorage.getItem("theme-color");
    // if found set selected theme value in state
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  // set theme
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
  };

  const [isBioOpen, setIsBioOpen] = useState(false);

  const handleBio = (event) => {
    setIsBioOpen(!isBioOpen);
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={`Main ${colorTheme}`}>
        <motion.div className="content-box">
          <motion.div className="header-line">
            <motion.div
              transition={{ layout: { duration: 1, type: "spring" } }}
              onClick={handleBio}
              className="bio-button"
            >
              <motion.div className="bio-icon"> ève wolfs</motion.div>

              {isBioOpen && (
                <motion.div className="p-bio">
                  Hello, I am a designer and developer.
                  <br />
                  Based and born in Brussels (1990), I grew up with an art teacher grandmother, and a graphic designer mother crafting advertising from our backyard.
                  <br/>
                  I graduated with an industrial design master (2015) and spent
                  almost 3 years working as a design researcher with a
                  few agencies. Obsessed to understand all about users, I met a
                  ton of them, wrote many reports, and designed several screen
                  flows. Curious to dive deeper into digital production, I
                  studied front-end development (2019) and started selling
                  websites and digital design right after.
                  <br />
                  Since 2015, I’ve enjoyed collaborating with a wide range of
                  clients such as The World Bank, The Luxembourg Institute of
                  Socio-Economic Research, and my plumber.
                  <br />
                  From scratch to the launch and beyond, I appreciate every step of the process, which by the way includes meeting new people. So don’t hesitate to contact me &#128579;
                  <br/>
                </motion.div>
              )}
            </motion.div>
            <ButtonContact />
          </motion.div>

          <motion.div className="theme-options">
            <BsSun
              size={18}
              id="theme-sun"
              onClick={() => handleClick("theme-sun")}
              className={`${colorTheme === "theme-sun" ? "active" : ""}`}
            />
            <BsCloud
              size={20}
              id="theme-cloud"
              onClick={() => handleClick("theme-cloud")}
              className={`${colorTheme === "theme-cloud" ? "active" : ""}`}
            />
            <BsRainbow
              size={22}
              id="theme-rainbow"
              onClick={() => handleClick("theme-rainbow")}
              className={`${colorTheme === "theme-rainbow" ? "active" : ""}`}
            />
            <BsMoon
              size={16}
              id="theme-moon"
              onClick={() => handleClick("theme-moon")}
              className={`${colorTheme === "theme-moon" ? "active" : ""}`}
            />
          </motion.div>
          <Categories />

          {children}
          <div className="footer">
            made with next.js, react.js and me
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Layout;
