import React from "react";
import FooterWhite from "../../components/footer/FooterWhite";
import TopNavbar from "../../components/navbar/topNavbar/TopNavbar";
import Navbar from "../../components/navbar/navbarMenu/Navbar";
import "./meyoriy.css";
import { Link } from "react-router-dom";
import vazir from "../../images/img/vazir.png";
import PagenationWhite from "../../components/pagenation/PagenationWhite";

function VazirlarQarori() {
  return (
    <div className="farmon farmon_fon">
      <TopNavbar />
      <Navbar />
      <div className="container">
        <div className="top">
          <div className="left">
            <Link to="/" className="bosh">
              Bosh sahifa
            </Link>
            <Link to="/Meyoriy" className="bosh">
              Me’yoriy-huquqiy hujjatlar
            </Link>
            <Link to="/Vazir" className="back">
              Vazirlar Mahkamasi qarorlari
            </Link>
          </div>
          <div className="right">
            <Link>
              <i class="bi bi-arrow-left-short"></i> Orqaga
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className=" farmon_body">
              <div className="farmon_left">
                <div className="col">
                  <div className="farmon_card">
                    <Link to="/Meyoriy" className="farmon_title">
                      Prezident Farmonlari
                    </Link>
                    <Link to="/Vazir" className="farmon_title active">
                      Vazirlar Mahkamasi qarorlari
                    </Link>
                    <Link to="/Buyruq" className="farmon_title">
                      Vazirlig buyruqlari ta'lim
                    </Link>
                    <Link to="/nizom" className="farmon_title">
                      Nizomlar
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-10 farmon_right">
                <div className="col-3 farmon_right-img">
                  <img src={vazir} alt="farmon" />
                </div>
                <div className="col-7">
                  <p>
                    O'zbekiston Respublikasi investisiyalar va tashqi
                    savdovazirligi huzuridagi O'zbekiston texnik
                    jihatdantartibga solish agentligi to'g'risidagi
                    vaO'zbekiston texnik jihatdan tartibga solishagentligining
                    texnik jihatdan
                    tartibgasolish,standartlashtirish,sertifikatlashtirish va
                    metrologiya sohasida davlat nazorati departamenti
                    to'g'risidagi nizomlarni tasdiqlash haqida.
                  </p>
                  <p>
                    O'zbekiston Respublikasi investisiyalar va tashqi
                    savdovazirligi huzuridagi O'zbekiston texnik
                    jihatdantartibga solish agentligi to'g'risidagi
                    vaO'zbekiston texnik jihatdan tartibga solishagentligining
                    texnik jihatdan
                    tartibgasolish,standartlashtirish,sertifikatlashtirish va
                    metrologiya sohasida davlat nazorati departamenti
                    to'g'risidagi nizomlarni tasdiqlash haqida.
                  </p>
                  <p>
                    O'zbekiston Respublikasi investisiyalar va tashqi
                    savdovazirligi huzuridagi O'zbekiston texnik
                    jihatdantartibga solish agentligi to'g'risidagi
                    vaO'zbekiston texnik jihatdan tartibga solishagentligining
                    texnik jihatdan
                    tartibgasolish,standartlashtirish,sertifikatlashtirish va
                    metrologiya sohasida davlat nazorati departamenti
                    to'g'risidagi nizomlarni tasdiqlash haqida.
                  </p>
                </div>

                <p>
                  O'zbekiston Respublikasi investisiyalar va tashqi savdo
                  vazirligi huzuridagi O'zbekiston texnik jihatdan tartibga
                  solish agentligi to'g'risidagi va O'zbekiston texnik jihatdan
                  tartibga solish agentligining texnik jihatdan tartibga
                  solish,standartlashtirish, sertifikatlashtirish va metrologiya
                  sohasida davlat nazorati departamenti to'g'risidagi nizomlarni
                  tasdiqlash haqida. metrologiya sohasida davlat nazorati
                  departamenti to'g'risidagi nizomlarni tasdiqlash haqida.
                  metrologiya sohasida davlat nazorati departamenti
                  to'g'risidagi nizomlarni tasdiqlash haqida. tasdiqlash haqida.
                  metrologiya sohasida davlat nazorati departamenti
                  to'g'risidagi nizomlarni tasdiqlash haqida. metrologiya
                  sohasida davlat nazorati departamenti to'g'risidagi nizomlarni
                  tasdiqlash haqida.
                </p>

                <p>
                  O'zbekiston Respublikasi investisiyalar va tashqi savdo
                  vazirligi huzuridagi O'zbekiston texnik jihatdan tartibga
                  solish agentligi to'g'risidagi va O'zbekiston texnik jihatdan
                  tartibga solish agentligining texnik jihatdan tartibga
                  solish,standartlashtirish, sertifikatlashtirish va metrologiya
                  sohasida davlat nazorati departamenti to'g'risidagi nizomlarni
                  tasdiqlash haqida. metrologiya sohasida davlat nazorati
                  departamenti to'g'risidagi nizomlarni tasdiqlash haqida.
                  metrologiya sohasida davlat nazorati departamenti
                  to'g'risidagi nizomlarni tasdiqlash haqida. tasdiqlash haqida.
                  metrologiya sohasida davlat nazorati departamenti
                  to'g'risidagi nizomlarni tasdiqlash haqida. metrologiya
                  sohasida davlat nazorati departamenti to'g'risidagi nizomlarni
                  tasdiqlash haqida.
                </p>
                <p>
                  O'zbekiston Respublikasi investisiyalar va tashqi savdo
                  vazirligi huzuridagi O'zbekiston texnik jihatdan tartibga
                  solish agentligi to'g'risidagi va O'zbekiston texnik jihatdan
                  tartibga solish agentligining texnik jihatdan tartibga
                  solish,standartlashtirish, sertifikatlashtirish va metrologiya
                  sohasida davlat nazorati departamenti to'g'risidagi nizomlarni
                  tasdiqlash haqida. metrologiya sohasida davlat nazorati
                  departamenti to'g'risidagi nizomlarni tasdiqlash haqida.
                  metrologiya sohasida davlat nazorati departamenti
                  to'g'risidagi nizomlarni tasdiqlash haqida. tasdiqlash haqida.
                  metrologiya sohasida davlat nazorati departamenti
                  to'g'risidagi nizomlarni tasdiqlash haqida. metrologiya
                  sohasida davlat nazorati departamenti to'g'risidagi nizomlarni
                  tasdiqlash haqida.
                </p>

                <p>
                  O'zbekiston Respublikasi investisiyalar va tashqi savdo
                  vazirligi huzuridagi O'zbekiston texnik jihatdan tartibga
                  solish agentligi to'g'risidagi va O'zbekiston texnik jihatdan
                  tartibga solish agentligining texnik jihatdan tartibga
                  solish,standartlashtirish, sertifikatlashtirish va metrologiya
                  sohasida davlat nazorati departamenti to'g'risidagi nizomlarni
                  tasdiqlash haqida. metrologiya sohasida davlat nazorati
                  departamenti to'g'risidagi nizomlarni tasdiqlash haqida.
                  metrologiya sohasida davlat nazorati departamenti
                  to'g'risidagi nizomlarni tasdiqlash haqida. tasdiqlash haqida.
                  metrologiya sohasida davlat nazorati departamenti
                  to'g'risidagi nizomlarni tasdiqlash haqida. metrologiya
                  sohasida davlat nazorati departamenti to'g'risidagi nizomlarni
                  tasdiqlash haqida.
                </p>
              </div>
            </div>
          </div>
        </div>
        <PagenationWhite />
      </div>
      <FooterWhite />
    </div>
  );
}

export default VazirlarQarori;
