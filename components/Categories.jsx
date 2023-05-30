import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { useRouter } from "next/router";

const Categories = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(!slug ? "all" : slug);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="categories-container">
      <div className="categories">
        {categories.map((category, i) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            onClick={() => setActive(category.slug)}
            className={`categories ${active == category.slug && "active"}`}
            id="cat-link"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
