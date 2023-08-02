import "./App.css";
import React from "react";
import Header from "../GeneralPagesComponent/Header/Header";
import Promo from "../Main/Promo/Promo";
import AboutProject from "../Main/AboutProject/AboutProject";
import Techs from "../Main/Techs/Techs";
import Portfolio from "../Main/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header isLoggedIn={true}></Header>
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
