import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { Navbar } from "./navbar/navbar";
import { HeaderTop } from "./headerTop/headerTop";

export function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <Navbar />
    </header>
  );
}
