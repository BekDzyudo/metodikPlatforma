import React from "react";
import "./adabiyotlarAll.scss";
import { HeaderTop } from "../profil/components/header/headerTop/headerTop";

import { Navbar } from "./components/header/navbar";
import { MainAdabiyot } from "./components/main/main";
import { FooterAdabiyotlar } from "./components/footer/footer";
import { BookBatafsil } from "./components/main/bookBatafsil/bookBatafsil";
import { Route, Routes } from "react-router-dom";

export function AdabiyotlarAll() {
  return (
    <div className="adabiyotlar_Bg">
      <div className="container">
        <header>
          <HeaderTop />
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MainAdabiyot />} />
            <Route path="/:id" element={<BookBatafsil />} />
            <Route path="*" element={<div>error page</div>} />
          </Routes>
        </main>
        <FooterAdabiyotlar />
      </div>
    </div>
  );
}
