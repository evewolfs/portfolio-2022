import React from "react";
import Categories from "./Categories";
import TextSlider from "./TextSlider";
import { SliderData } from "./SliderData";
import ButtonContact from "./ButtonContact";
import ButtonGit from "./ButtonGit";
import ButtonLi from "./ButtonLi";

const Header = () => {
  return (
    <div className="container mx-8">
      <div className=" w-full py-8">
        <TextSlider slides={SliderData} />
      </div>
      <div className="w-full inline-block py-4 my-2">
        <ButtonContact />
        <ButtonGit />
        <ButtonLi />
      </div>

      <Categories />
    </div>
  );
};

export default Header;
