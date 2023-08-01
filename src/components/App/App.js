import "./App.css";
import React from "react";
import Header from "../GeneralPagesComponent/Header/Header";
import NavTab from "../Main/NavTab/NavTab";
import AboutProject from "../Main/AboutProject/AboutProject";
import Techs from "../Main/Techs/Techs";
import Portfolio from "../Main/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header isLoggedIn={true}></Header>
      <NavTab></NavTab>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
