import React, { useRef } from "react";
import "./regMalumotlar.scss";
import newLogo from "../../images/newLogo.svg";

export function RegMalumotlar() {
  const addMalumotlarForm = useRef();
  const hudud = useRef();
  const ChetTillarniBilishDaraja = useRef();
  const Toifa = useRef();
  const TamomlaganOliyTalimMuassasalari = useRef();
  const tuman = useRef();
  const TalimBeradiganTili = useRef();
  const mehnatFaoliyatiniBoshlaganYili = useRef();

  function addMalumot() {
    let malumotObj = {
      hudud: hudud.current.value,
      ChetTillarniBilishDaraja: ChetTillarniBilishDaraja.current.value,
      Toifa: Toifa.current.value,
      TamomlaganOliyTalimMuassasalari:
        TamomlaganOliyTalimMuassasalari.current.value,
      tuman: tuman.current.value,
      TalimBeradiganTili: TalimBeradiganTili.current.value,
      mehnatFaoliyatiniBoshlaganYili:
        mehnatFaoliyatiniBoshlaganYili.current.value,
    };

    let errorArr = Object.keys(malumotObj).filter((key) => {
      return !malumotObj[key];
    });

    errorArr.forEach((item) => {
      document.getElementById(`${item}`).classList.add("errorBorder");
    });
    Array.from(addMalumotlarForm.current).forEach((item) => {
      item.addEventListener("change", (e) => {
        if (e.target.value) {
          item.classList.remove("errorBorder");
        } else {
          item.classList.add("errorBorder");
        }
      });
    });

    if (errorArr.length == 0) {
      fetch(
        "https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/TeacherInfo.json",
        {
          method: "POST",
          body: JSON.stringify(malumotObj),
        }
      )
        .then((res) => {
          if (!res.ok) throw new Error("nimadir xato");
          return res.json();
        })
        .then((data) => {
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          addMalumotlarForm.current.reset();
          saveMalumot.innerHTML = "Davom etish";
        });

      saveMalumot.innerHTML = `<div style="width: 20px; height: 20px; margin-top:5px;"  class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
             </div>`;
    }
  }

  return (
    <div className="regMalumotlar">
      <div className="container">
        <div className="regData">
          <div className="logo">
            <img src={newLogo} alt="" />
          </div>
          <div className="title">
            <h1>PROFESSIONAL TA'LIMNI RIVOJLANTIRISH INSTITUTI</h1>
            <p>Ro'yxatdan o'tish</p>
          </div>

          <form action="" className="addMalumotlarForm" ref={addMalumotlarForm}>
            <div className="leftInput">
              <label htmlFor="hudud">Hudud</label>
              <br />
              <select name="" id="hudud" ref={hudud}>
                <option value="Surxondaryo">Surxondaryo</option>
                <option value="Qashqadaryo">Qashqadaryo</option>
              </select>
              <br />
              <br />
              <label htmlFor="ChetTillarniBilishDaraja">
                Chet tillarni bilish daraja:
              </label>
              <br />
              <select
                name=""
                id="ChetTillarniBilishDaraja"
                ref={ChetTillarniBilishDaraja}
              >
                <option value="yaxwi">yaxwi</option>
                <option value="yomon">yomon</option>
                <option value="orta">o'rta</option>
              </select>
            </div>
            <div className="centerInput">
              <label htmlFor="Toifa">Toifa:</label>
              <input type="text" id="Toifa" ref={Toifa} />
              <br />
              <br />
              <label htmlFor="TamomlaganOliyTalimMuassasalari">
                Tamomlagan oliy ta'lim muassasalari:
              </label>
              <input
                type="text"
                id="TamomlaganOliyTalimMuassasalari"
                ref={TamomlaganOliyTalimMuassasalari}
              />
              <br />
              <br />
              <label htmlFor="tuman">Tuman:</label>
              <input type="text" id="tuman" ref={tuman} />
            </div>
            <div className="rightInput">
              <label htmlFor="TalimBeradiganTili">Talim beradigan tili:</label>
              <br />
              <select name="" id="TalimBeradiganTili" ref={TalimBeradiganTili}>
                <option value="ozbek">o'zbek</option>
                <option value="rus">rus</option>
                <option value="ingliz">ingliz</option>
              </select>
              <br />
              <br />
              <label htmlFor="mehnatFaoliyatiniBoshlaganYili">
                Mehnat faoliyatini boshlagan yili:
              </label>
              <input
                type="text"
                id="mehnatFaoliyatiniBoshlaganYili"
                ref={mehnatFaoliyatiniBoshlaganYili}
              />
              <br />
              <br />
            </div>
          </form>
          <div className="saveMalumotlarButton">
            <button onClick={addMalumot} id="saveMalumot">
              Davom etish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
