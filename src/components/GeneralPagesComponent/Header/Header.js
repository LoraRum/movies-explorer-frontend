import "./Header.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";

const Header = ({ openSideMenu, isLoggedIn }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>

      {isLoggedIn ? (
        <>
          <div className="header__navigation-visibility">
            <Navigation navStyle={"header-menu"} />
          </div>
        </>
      ) : (
        <>
          <nav className="header__menu">
            <Button type={"link"} to="/signup">
              Регистрация
            </Button>

            <Button type={"header"} to="/signup">
              Войти
            </Button>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
