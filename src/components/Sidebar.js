import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={`${style.sidebar} sidebar`}>
      <NavLink to="/dashboard/categories">Categories</NavLink>
      <NavLink to="/dashboard/products">Products</NavLink>
    </div>
  );
}
