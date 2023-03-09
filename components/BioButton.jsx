import React from 'react';
import {motion} from 'framer-motion';
import { useState } from "react";

const BioButton = () => {
    const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <div className="box">
    <motion.div transition={{layout: {duration: 1, type: "spring"}}} onClick={() =>setIsBioOpen(!isBioOpen)} className="bio-button">
      <motion.div>
        ève wolfs &#8595;
        </motion.div>
         
          </motion.div>

{isBioOpen &&
(  <motion.p>
       1990 - born and brewed in Brussels <br/>
        2008 - raised by a graphic designer and a plastic art teacher <br/>
        2015 - graduated from a industrial design master<br/>
        2016 - worked for 3 years as a design researcher/UX designer for agencies<br/>
        2019 - studied front-end development <br/>
        2020 - have been freelancing as a designer and developer, see below ;
        


          </motion.p>)}

        
          </div>
  )
}

export default BioButton