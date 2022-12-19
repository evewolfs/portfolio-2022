import React, { useState, useEffect } from "react";
import Link from "next/link";
import Categories from "./Categories";
import TextSlider from "./TextSlider";
import { SliderData } from "./SliderData";


const Header = () => {

  return (
    <div className="container mx-8">
      <div className=" w-full inline-flex py-8">

          <TextSlider  slides={SliderData} />
      </div>

    <Categories />
    </div>
  );
};

export default Header;
