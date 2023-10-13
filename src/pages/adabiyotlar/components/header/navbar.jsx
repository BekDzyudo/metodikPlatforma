import React from "react";
import "./navbar.scss";
import back from "../../../../images/bx_arrow-back.svg";
import { Link, NavLink } from "react-router-dom";
import BreadCrumps from "../breadCrumps/BreadCrumps";

export function Navbar() {
  return (
    <div>
      <nav className="AdabiyotHeader">
        <ul className="nav-menu links" id="nav">
          <li>
            <NavLink className="nav-link" to="/">
              Biz haqimizda
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Meyoriy">
              Me’yoriy-huquqiy hujjatlar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Muassasalar">
              Professional ta'lim muassasalari
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Talim">
              Ta'lim standartlari va fanlar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Adabiyot">
              Adabiyotlar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Yangilik">
              Yangiliklar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Bog‘lanish">
              Bog‘lanish
            </NavLink>
          </li>
        </ul>
        <div className="urlBack">
          <BreadCrumps />
          <p className="back">
            <img src={back} alt="" /> Orqaga
          </p>
        </div>
      </nav>
    </div>
  );
}
