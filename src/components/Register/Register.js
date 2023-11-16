import "./Register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/header/logo.svg";
import Button from "../GeneralPagesComponent/Button/Button";
import React, { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormErrors = {
      name: "",
      email: "",
      password: "",
    };

    if (formData.name.trim() === "") {
      newFormErrors.name = "Please enter your name";
    }

    if (formData.email.trim() === "") {
      newFormErrors.email = "Please enter your email";
    }

    if (formData.password.trim() === "") {
      newFormErrors.password = "Please enter your password";
    }

    if (
      newFormErrors.name !== "" ||
      newFormErrors.email !== "" ||
      newFormErrors.password !== ""
    ) {
      setFormErrors(newFormErrors);
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="form">
      <form
        id="form-register"
        className="form__container"
        onSubmit={handleSubmit}
      >
        <Link to="/" className="form__logo">
          <img className="form__logo-image" src={Logo} alt="логотип" />
        </Link>
        <h2 className="form__title">Добро пожаловать!</h2>

        <div className={"input__container"}>
          <h3 className="form__input-title">Имя</h3>
          <input
            className="form__input"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            minLength={2}
            maxLength={30}
            required
            placeholder={"name"}
          />
          <span className="form__input-error">{formErrors.name}</span>

          <h3 className="form__input-title">E-mail</h3>
          <input
            className="form__input"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder={"email"}
          />
          <span className="form__input-error">{formErrors.email}</span>

          <h3 className="form__input-title">Пароль</h3>
          <input
            className="form__input input-password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            minLength={8}
            required
            placeholder={"password"}
          />
          <span className="form__input-error">{formErrors.password}</span>
        </div>

        <Button form={"form-register"} type={"blue"}>
          Зарегистрироваться
        </Button>
        <div className="form__question">
          <p className="form__tag">Уже зарегистрированы?</p>
          <Link to="/signin" className="form__link">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
