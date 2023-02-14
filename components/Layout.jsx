import React from "react";
import FeaturedPosts from "../section/FeaturedPosts";
import { Header } from "./index";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <FeaturedPosts />
      {children}
    </>
  );
}
