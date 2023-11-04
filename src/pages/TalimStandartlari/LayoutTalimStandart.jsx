import React from "react";

import "./talim.css";
import { Outlet } from "react-router-dom";
import TopNavbar from "../../components/navbar/topNavbar/TopNavbar";
import Navbar from "../../components/navbar/navbarMenu/Navbar";
import FooterWhite from "../../components/footer/FooterWhite";

function LayoutTalimStandart() {
  return (
    <div className="talim">
      <TopNavbar />
      <Navbar />
      <Outlet />
      <FooterWhite />
    </div>
  );
}

export default LayoutTalimStandart;
