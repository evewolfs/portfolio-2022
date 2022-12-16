import React, { useState, useEffect } from "react";
import Link from "next/link";
import Categories from "./Categories";

const Header = () => {

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className=" w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer text-base bg-white rounded-3xl px-8 py-2 ">
              ève wolfs
            </span>
          </Link>
        </div>
    <Categories />
      </div>
    </div>
  );
};

export default Header;
