import "./Footer.css";

const Footer = () => {
  return (
    <section className={"footer"}>
      <div className={"footer__info"}>
        <p className={"footer__title"}>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <hr className={"part-about__line part-about__line_footer"}></hr>
      </div>

      <div className={"footer__icons"}>
        <div className={"footer__link"}>
          <a
            className={"footer__icon"}
            href={"https://practicum.yandex.ru/"}
            target={"_blank"}
          >
            Яндекс.Практикум
          </a>
          <a
            className={"footer__icon"}
            href={"https://github.com/"}
            target={"_blank"}
          >
            Github
          </a>
        </div>

        <div className={"footer__year"}>©2023</div>
      </div>
    </section>
  );
};

export default Footer;
