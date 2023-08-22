import { Link } from "react-router-dom";
import Logo from "../../images/header/logo.svg";
import Button from "../GeneralPagesComponent/Button/Button";

const Login = () => {
  return (
    <div className="form">
      <form className="form__container">
        <Link to="/" className="form__logo">
          <img className="form__logo-image" src={Logo} alt="логотип" />
        </Link>
        <h2 className="form__title">Рады видеть!</h2>

        <div className={"input__container"}>
          <h3 className="form__input-title">E-mail</h3>
          <input
            className="form__input"
            name="email"
            type="email"
            required
          ></input>

          <h3 className="form__input-title">Пароль</h3>
          <input
            className="form__input input-password"
            type="password"
            name="password"
            minLength={8}
            required
          ></input>
        </div>

        <Button type={"blue"} to="/signin">
          Войти
        </Button>
        <div className="form__question">
          <p className="form__tag">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="form__link">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
