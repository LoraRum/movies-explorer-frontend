import "./NavTab.css";
import Button from "../../GeneralPagesComponent/Button/Button";

const NavTab = () => {
  return (
    <section className={"project"}>
      <div className={"project__container"}>
        <h2 className={"project__title"}>
          Учебный проект студента факультета Веб-разработки.
        </h2>
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

export default NavTab;
