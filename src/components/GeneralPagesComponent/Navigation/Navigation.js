import "./Navigation.css";
import BurgerButton from "../../../images/burger-button.svg";
import CloseButton from "../../../images/close_icon.svg";
import { Link } from "react-router-dom";
import ProfileButton from "../../ProfileButton/ProfileButton";
import { useState } from "react";

function Navigation() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className={"menu menu_screen_large"}>
        <ul className={"menu__list"}>
          <li className={"menu__link"}>
            <Link className={"menu__link"} to={"/movies"} onClick={closeMenu}>
              Фильмы
            </Link>
          </li>
          <li className={"menu__link"}>
            <Link
              className={"menu__link"}
              to={"/saved-movies"}
              onClick={closeMenu}
            >
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <ProfileButton></ProfileButton>
      </nav>

      {open ? (
        <nav className="menu menu_screen_small">
          <button className="menu__button" onClick={closeMenu}>
            <img
              className="menu__button-close"
              src={CloseButton}
              alt={"close"}
            />
          </button>
          <ul className={"menu__list"}>
            <li className={"menu__link"}>
              <Link className={"menu__link"} to={"/"} onClick={closeMenu}>
                Главная
              </Link>
            </li>
            <li className={"menu__link"}>
              <Link className={"menu__link"} to={"/movies"} onClick={closeMenu}>
                Фильмы
              </Link>
            </li>
            <li className={"menu__link"}>
              <Link
                className={"menu__link"}
                to={"/saved-movies"}
                onClick={closeMenu}
              >
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <ProfileButton></ProfileButton>
        </nav>
      ) : (
        <nav className="menu__burger">
          <button className="menu__button" onClick={openMenu}>
            <img
              className={"menu__button-img"}
              src={BurgerButton}
              alt={"menu"}
            />
          </button>
        </nav>
      )}
    </>
  );
}

export default Navigation;
