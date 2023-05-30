import React from "react";
import ButtonContact from "./ButtonContact";

const Header = (props) => {
  return (
    <div className="header-box">
      <BioButton />
      {/* <TextSlider slides={SliderData} /> */}
      <ButtonContact />
    </div>
  );
};

export default Header;
