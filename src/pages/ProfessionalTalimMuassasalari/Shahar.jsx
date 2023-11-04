import React from "react";
import { Link } from "react-router-dom";

function Shahar() {
  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <Link to="/" className="bosh">
            Bosh sahifa
          </Link>
          <Link to="/" className="bosh">
            Professional ta'lim muassasalari
          </Link>
          <Link className="back">Toshkent shahar</Link>
        </div>
        <div className="right">
          <Link>
            <i class="bi bi-arrow-left-short"></i> Orqaga
          </Link>
        </div>
      </div>
      <h1 className="shahar_title">Toshkent shahri</h1>
      <div className="row row-cols-3 row-cols-lg-4 g-2 g-lg-3">
        <div className="col-12 ">
          <div className="shahar_cards">
            <div className="col">
              <div className="shahar_card">
                <div className="shahar_doira-top"></div>
                <p>Kasb-hunar maktablari</p>
                <h3>820</h3>
                <div className="hudud_card-btn">
                  <Link>Batafsil</Link>
                  <div className="shahar_doira-bottom"></div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="shahar_card">
                <div className="shahar_doira-top"></div>
                <p>Kollejlar</p>
                <h3>820</h3>
                <div className="hudud_card-btn">
                  <Link>Batafsil</Link>
                  <div className="shahar_doira-bottom"></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="shahar_card">
                <div className="shahar_doira-top"></div>
                <p>Texnikumlar</p>
                <h3>820</h3>
                <div className="hudud_card-btn">
                  <Link>Batafsil</Link>
                  <div className="shahar_doira-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shahar;
