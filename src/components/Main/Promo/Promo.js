import "./Promo.css";
import Button from "../../GeneralPagesComponent/Button/Button";

const Promo = () => {
  return (
    <section className={"project"}>
      <div className={"project__container"}>
        <h1 className={"project__title"}>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <nav>
          <ul className={"project__button"}>
            <li>
              <Button to="#about" type={"default"}>
                О проекте
              </Button>
            </li>
            <li>
              <Button to="#techs" type={"default"}>
                Технологии
              </Button>
            </li>
            <li>
              <Button to="#about-me" type={"default"}>
                Студент
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Promo;
