import Link from "next/link";
import React from "react";

const LeftSide = ({ categories, activeId }) => {
  return (
    <div className="col-span-3">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.category_id}
            className={`mb-2 w-full py-4  text-center text-lg block font-bold ${activeId === category.category_id ? "bg-[#E7E7E7]" : ""}`}
          >
            <Link href={`/category/${category.category_id}`} className="">
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSide;
