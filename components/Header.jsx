import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";

export default function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);
  return (
    <header className="container mx-auto px-10 mb-8">
      <div className="border-b w-full md:flex md:justify-between inline-block border-blue-500 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-right md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`category/${category.slug}`}>
              <span className="md:float-left mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
