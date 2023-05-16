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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div className="col-span-12">
    {/* <div className="categories"> */}
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} onClick={() => setActive(category)}
        className={`categories ${active == category && 'active'}`} id="cat-link">
            {category.name}
        </Link>
        
      ))}
    </div>
    </div>
  );
};

export default Categories;
