import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../../components/navbar/topNavbar/TopNavbar";
import Navbar from "../../components/navbar/navbarMenu/Navbar";
import Footer from "../../components/footer/Footer";
import "./hududlar.css";

function ProfessionalTalimMuassasa() {
  return (
    <>
      <div className="hudud">
        <TopNavbar />
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default ProfessionalTalimMuassasa;
