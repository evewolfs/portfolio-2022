import React  from "react";
import TextSlider from "./TextSlider";
import { SliderData } from "./SliderData";
import ButtonContact from "./ButtonContact";
import ButtonGit from "./ButtonGit";
import BioButton from "./BioButton";


const Header = (props) => {

  return (
    <div className="header-box">
    
        <BioButton/>
        {/* <TextSlider slides={SliderData} /> */}
        <ButtonContact />
      </div>
 
  );
};

export default Header;
