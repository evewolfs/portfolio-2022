import React from 'react';
import {motion} from 'framer-motion';
import { useState } from "react";



const BioButton = () => {
    
    const [isBioOpen, setIsBioOpen] = useState(false);

  return (
  
    <motion.div transition={{layout: {duration: 1, type: "spring"}}} onClick={() =>setIsBioOpen(!isBioOpen)} className="bio-button">
      <motion.h1>
        ève wolfs &#8595;
        </motion.h1>
         
    

{isBioOpen &&
(  <motion.p>
      I am a UX/UI designer and front-end developer.
I was born in Brussels, and raised by a graphic designer and a high school art teacher.
I have a master in industrial design (2015) and first worked 3 years as a design researcher, service and UX designer. 
Mostly interviewing users, analysing markets, reporting trends or writing UX recommendations.  I then studied web development and started my own design+development freelance activity (2020). 
From visual identity, and information architecture to product development, I enjoy every single step of the process, including meeting potential clients. So don’t hesitate to contact me, if you feel we could do great things together.
    
        </motion.p>)}

        
          </motion.div>
      
  )
}

export default BioButton