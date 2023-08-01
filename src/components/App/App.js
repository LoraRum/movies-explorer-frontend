import "./App.css";
import React from "react";
import Header from "../GeneralPagesComponent/Header/Header";
import NavTab from "../Main/NavTab/NavTab";
import AboutProject from "../Main/AboutProject/AboutProject";

function App() {
  return (
    <div className="App">
      <Header isLoggedIn={true}></Header>
      <NavTab></NavTab>
      <AboutProject></AboutProject>
    </div>
  );
}

export default App;
