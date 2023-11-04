import React from "react";
import "./meyoriy.css";
import PrezidentFarmoni from "./PrezidentFarmoni";
import Nizomlar from "./Nizomlar";
import VazirlarQarori from "./VazirlarQarori";
import VazirlarBuyrugi from "./VazirlarBuyrugi";
import TopNavbar from "../../components/navbar/topNavbar/TopNavbar";
import Navbar from "../../components/navbar/navbarMenu/Navbar";
import FooterWhite from "../../components/footer/FooterWhite";
import { Outlet } from "react-router-dom";

function MeyoriySahifa() {
  return (
    <div className="farmon farmon_fon">
      <TopNavbar />
      <Navbar />
        <Outlet/>
      <FooterWhite />
    </div>
  );
}

export default MeyoriySahifa;
