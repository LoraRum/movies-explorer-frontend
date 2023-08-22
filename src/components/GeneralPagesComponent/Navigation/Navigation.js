import React, { useState } from "react";
import "./Navigation.css";
import BurgerButton from "../../../images/burger-button.svg";
import CloseButton from "../../../images/close_icon.svg";
import { Link } from "react-router-dom";

function Navigation() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  if (open) {
    return (
      <nav className="menu">
        <button className="menu__button" onClick={closeMenu}>
          <img className="menu__button_close" src={CloseButton} />
        </button>
        <ul className={"menu__list"}>
          <li className={"menu__link"}>
            <Link className={"menu__link"} to={""}>
              Главная
            </Link>
          </li>
          <li className={"menu__link"}>
            <Link className={"menu__link"} to={""}>
              Фильмы
            </Link>
          </li>
          <li className={"menu__link"}>
            <Link className={"menu__link"} to={""}>
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="menu__burger">
        <button className="menu__button" onClick={openMenu}>
          <img src={BurgerButton} />
        </button>
      </nav>
    );
  }
}

export default Navigation;
