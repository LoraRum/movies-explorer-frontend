import "./Portfolio.css";
import Photo from "../../../images/photo.png";
import Arrow from "../../../images/arrow.png";

const Portfolio = () => {
  return (
    <section className={"portfolio"}>
      <div className={"portfolio__about"}>
        <div className={"part-about"}>Студент</div>
        <hr className={"part-about__line"}></hr>
      </div>
      <div className={"portfolio__container"}>
        <img className={"portfolio__photo"} src={Photo}></img>
        <div className={"portfolio__description"}>
          <h2 className={"portfolio__name"}>Виталий</h2>
          <p className={"portfolio__work"}>Фронтенд-разработчик, 30 лет</p>
          <p className={"portfolio__hobby"}>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className={"portfolio__git"} href="https://github.com/LoraRum">
            Github
          </a>
        </div>
      </div>
      <p className={"portfolio__text"}>Портфолио</p>
      <div className={"portfolio__links"}>
        <a className={"portfolio__link"}>
          <p className={"portfolio__title"}>Статичный сайт</p>
          <img className={"portfolio__image"} src={Arrow}></img>
        </a>
        <hr className={"part-about__line part-about__line_small"}></hr>

        <a className={"portfolio__link"}>
          <p className={"portfolio__title"}>Адаптивный сайт</p>
          <img className={"portfolio__image"} src={Arrow}></img>
        </a>
        <hr className={"part-about__line part-about__line_small"}></hr>
        <a className={"portfolio__link"}>
          <p className={"portfolio__title"}>Одностраничное приложение</p>
          <img className={"portfolio__image"} src={Arrow}></img>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
