import React from "react";
import "./Home.css";
import TopNavbar from "../../../components/navbar/topNavbar/TopNavbar";
import Navbar from "../../../components/navbar/navbarMenu/Navbar";
import Fon from "../../../images/img/Fon.png";

function Home() {
  return (
    <div className="homeBag">
      <TopNavbar />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 home_box">
            <div className="col-6">
              <div className="name">
                <h1>Metodik ta’minlash platformasi</h1>
              </div>
              <div className="text">
                <p>
                  Pedagogik innovatsiyalar, kasb-hunar ta’limi boshqaruv hamda
                  pedagog kadrlarni qayta tayyorlash va ularning malakasini
                  oshirish instituti
                </p>
              </div>
              <div className="home_btn">
                <button className="BTN">Batafsil</button>
              </div>
            </div>
            <div className="col-6">
              <div className="home_img">
                <img src={Fon} alt="rasm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
