import React  from "react";
import TextSlider from "./TextSlider";
import { SliderData } from "./SliderData";
import ButtonContact from "./ButtonContact";
import ButtonGit from "./ButtonGit";


const Header = (props) => {

  return (
    <div className="container">
      <div className="p-8">
        <TextSlider slides={SliderData} />
        <ButtonContact />
      </div>
    </div>
  );
};

export default Header;
