import React from "react";
import logowhite from "../../../images/img/PTRI-new-logotype2-white.svg";
import "./TopNavbar.css";
import { NavLink } from "react-router-dom";

function TopNavbar() {
  return (
    <div className="container">
      <div className="bar">
        <div className="logo">
          <NavLink to="/" className="logo-box">
            <div className="logo-img">
              <img src={logowhite} alt="rasm" />
            </div>
            <p className="logo-title">
              PROFESSIONAL TA'LIMNI <br /> RIVOJLANTIRISH <br /> INSTITUTI
            </p>
          </NavLink>
        </div>
        <div className="search">
          <input type="text" placeholder="izlash..." />
          <i class="bi bi-search"></i>
        </div>
        <div className="dropdowns">
          <div className="til">
            <select>
              <option selected>O‘zbek til</option>
              <option value="Rus Til">Rus til</option>
              <option value="Englis Til">Englis til</option>
            </select>
          </div>
          <div className="kirish">
            <NavLink className="kirish-btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 21H10.5C9.8372 20.9992 9.20178 20.7355 8.73311 20.2669C8.26444 19.7982 8.00079 19.1628 8 18.5V16.5C8 16.3674 8.05268 16.2402 8.14645 16.1464C8.24022 16.0527 8.36739 16 8.5 16C8.63261 16 8.75979 16.0527 8.85355 16.1464C8.94732 16.2402 9 16.3674 9 16.5V18.5C9 19.327 9.673 20 10.5 20H14.5C14.6326 20 14.7598 20.0527 14.8536 20.1464C14.9473 20.2402 15 20.3674 15 20.5C15 20.6326 14.9473 20.7598 14.8536 20.8535C14.7598 20.9473 14.6326 21 14.5 21ZM10.5 11H0.5C0.367392 11 0.240215 10.9473 0.146447 10.8535C0.0526784 10.7598 0 10.6326 0 10.5C0 10.3674 0.0526784 10.2402 0.146447 10.1464C0.240215 10.0527 0.367392 10 0.5 10H10.5C10.6326 10 10.7598 10.0527 10.8536 10.1464C10.9473 10.2402 11 10.3674 11 10.5C11 10.6326 10.9473 10.7598 10.8536 10.8535C10.7598 10.9473 10.6326 11 10.5 11Z"
                  fill="white"
                />
                <path
                  d="M16 24C14.897 24 14 23.103 14 22V4C14 3.14 14.552 2.379 15.373 2.105L21.373 0.105C21.563 0.037 21.778 0 22 0C23.103 0 24 0.897 24 2V20C24 20.859 23.449 21.621 22.628 21.894L16.628 23.894C16.4262 23.9648 16.2138 24.0007 16 24ZM22 1C21.8979 1 21.7966 1.01689 21.7 1.05L15.689 3.054C15.4892 3.11906 15.315 3.24554 15.1913 3.41541C15.0676 3.58527 15.0006 3.78986 15 4V22C15 22.551 15.449 23 16 23C16.1028 23 16.2049 22.9827 16.302 22.949L22.312 20.946C22.723 20.808 23 20.428 23 20V2C23 1.449 22.551 1 22 1Z"
                  fill="white"
                />
                <path
                  d="M8.5 5C8.36739 5 8.24022 4.94732 8.14645 4.85355C8.05268 4.75978 8 4.63261 8 4.5V2.5C8 1.122 9.122 0 10.5 0H22C22.1326 0 22.2598 0.0526784 22.3536 0.146447C22.4473 0.240215 22.5 0.367392 22.5 0.5C22.5 0.632608 22.4473 0.759785 22.3536 0.853553C22.2598 0.947321 22.1326 1 22 1L10.5 1C9.673 1 9 1.673 9 2.5V4.5C9 4.63261 8.94732 4.75978 8.85355 4.85355C8.75979 4.94732 8.63261 5 8.5 5ZM6.5 15C6.40119 15 6.30459 14.9707 6.22242 14.9158C6.14024 14.8609 6.07617 14.7829 6.0383 14.6916C6.00042 14.6004 5.99044 14.4999 6.00961 14.403C6.02877 14.3061 6.07624 14.217 6.146 14.147L9.793 10.5L6.146 6.854C6.05492 6.7597 6.00452 6.6334 6.00566 6.5023C6.0068 6.3712 6.05939 6.24579 6.15209 6.15309C6.2448 6.06038 6.3702 6.0078 6.5013 6.00666C6.6324 6.00552 6.7587 6.05592 6.853 6.147L10.853 10.147C10.9467 10.2408 10.9994 10.3679 10.9994 10.5005C10.9994 10.6331 10.9467 10.7602 10.853 10.854L6.853 14.854C6.80667 14.9004 6.75163 14.9371 6.69106 14.9622C6.63048 14.9872 6.56555 15.0001 6.5 15Z"
                  fill="white"
                />
              </svg>
              Kirish
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
