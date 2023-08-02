import "./Promo.css";
import Button from "../../GeneralPagesComponent/Button/Button";

const Promo = () => {
  return (
    <section className={"project"}>
      <div className={"project__container"}>
        <h1 className={"project__title"}>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <ul className={"project__button"}>
          <li>
            <Button type={"default"}>О проекте</Button>
          </li>
          <li>
            <Button type={"default"}>Технологии</Button>
          </li>
          <li>
            <Button type={"default"}>Студент</Button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Promo;
