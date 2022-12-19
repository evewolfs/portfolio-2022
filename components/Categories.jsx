import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="w-full py-4 my-2 ">
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="mr-4 cursor-pointer text-base bg-white rounded-3xl px-8 py-2 shadow ">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
