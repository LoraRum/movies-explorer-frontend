import "./App.css";
import React from "react";
import Header from "../GeneralPagesComponent/Header/Header";
import Promo from "../Main/Promo/Promo";
import { Route, Routes } from "react-router-dom";
import AboutProject from "../Main/AboutProject/AboutProject";
import Techs from "../Main/Techs/Techs";
import Portfolio from "../Main/Portfolio/Portfolio";
import Footer from "../GeneralPagesComponent/Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesSave from "../Movies/MoviesSave/MoviesSave";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header isLoggedIn={true}></Header>
              <Promo></Promo>
              <AboutProject></AboutProject>
              <Techs></Techs>
              <Portfolio></Portfolio>
              <Footer></Footer>
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header isLoggedIn={true}></Header>
              <SearchForm></SearchForm>
              <MoviesCardList></MoviesCardList>
              <Footer></Footer>
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header isLoggedIn={true}></Header>
              <MoviesSave></MoviesSave>
              <Footer></Footer>
            </>
          }
        ></Route>

        <Route
          path="/signup"
          element={
            <>
              <Register></Register>
            </>
          }
        ></Route>

        <Route
          path="/signin"
          element={
            <>
              <Login></Login>
            </>
          }
        ></Route>

        <Route
          path="/profile"
          element={
            <>
              <Header isLoggedIn={true}></Header>
              <Profile></Profile>
            </>
          }
        ></Route>

        <Route
          path="/*"
          element={
            <>
              <NotFound></NotFound>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
