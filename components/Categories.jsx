import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(null)

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="w-full p-4 m-4 ">
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} onClick={() => setActive(category)}
        className={`categories ${active == category && 'active'}`}>
            {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
