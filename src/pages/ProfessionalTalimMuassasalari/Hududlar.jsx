import React from "react";

import "./hududlar.css";
import { Link } from "react-router-dom";
import hudud from "../../images/img/hudud.jpg";
import qarshi from "../../images/img/qarshi.jpg";

function Hududlar() {
  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <Link to="/" className="bosh">
            Bosh sahifa
          </Link>
          <Link to="/" className="back">
            Professional ta'lim muassasalari
          </Link>
        </div>
        <div className="right">
          <Link>
            <i class="bi bi-arrow-left-short"></i> Orqaga
          </Link>
        </div>
      </div>
      <div className="hudud_body">
        <h1>Hududlar</h1>
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col-12">
            <div className="hudud_cards">
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={hudud} alt="" />
                  </div>

                  <h4 className="hudud_card-name">
                    Toshkent <br /> shahri
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="ramka">
                    <div className="hudud_card-img">
                      <img src={hudud} alt="" />
                    </div>
                  </div>

                  <h4 className="hudud_card-name">
                    Toshkent <br /> viloyati
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={hudud} alt="" />
                  </div>

                  <h4 className="hudud_card-name">
                    Andijon <br /> viloyati
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={hudud} alt="" />
                  </div>

                  <h4 className="hudud_card-name">
                    Farg‘ona <br /> viloyati
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={hudud} alt="" />
                  </div>

                  <h4 className="hudud_card-name">
                    Namangan <br /> viloyati
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={hudud} alt="" />
                    <div className="doira"></div>
                  </div>

                  <h4 className="hudud_card-name">
                    Navoiy <br /> viloyati
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={qarshi} alt="" />
                  </div>

                  <h4 className="hudud_card-name">
                    Qashqadaryo <br /> viloyati
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={hudud} alt="" />
                  </div>

                  <h4 className="hudud_card-name">
                    Samarqand <br /> viloyati
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={hudud} alt="" />
                  </div>

                  <h4 className="hudud_card-name">
                    Sirdaryo <br /> viloyati
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={hudud} alt="" />
                  </div>

                  <h4 className="hudud_card-name">
                    Surxondaryo <br /> viloyatiri
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={hudud} alt="" />
                  </div>

                  <h4 className="hudud_card-name">
                    Buxoro <br /> viloyati
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={hudud} alt="" />
                  </div>

                  <h4 className="hudud_card-name">
                    Jizzax <br /> viloyati
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={hudud} alt="" />
                  </div>

                  <h4 className="hudud_card-name">
                    Xorazm <br /> viloyati
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hudud_card">
                  <div className="hudud_card-img">
                    <img src={hudud} alt="" />
                  </div>

                  <h4 className="hudud_card-name">
                    Qoraqalpog‘iston <br /> Respublikasi
                  </h4>

                  <div className="hudud_card-btn">
                    <Link to="/Professional-Talim-Muassasalari/shahar">
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hududlar;
