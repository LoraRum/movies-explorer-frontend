import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className={"about-project"}>
      <div className={"about-project__container"}>
        <div className={"about-project__main-title"}>
          <h2 className={"part-about"}>О проекте</h2>
          <hr className={"part-about__line"}></hr>
        </div>

        <div
          className={
            "about-project__description about-project__description_stage"
          }
        >
          <h2 className={"about-project__title"}>
            Дипломный проект включал 5 этапов
          </h2>
          <h3 className={"about-project__subtitle"}>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </h3>
        </div>
        <div
          className={
            "about-project__description about-project__description_week"
          }
        >
          <h2 className={"about-project__title"}>
            На выполнение диплома ушло 5 недель
          </h2>
          <h3 className={"about-project__subtitle"}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </h3>
        </div>
      </div>
      <div className={"about-project__time"}>
        <dl className={"about-project__work about-project__work_type_backend"}>
          <dt className={"about-project__start"}>1 неделя</dt>
          <dd className={"about-project__time_text"}>Back-end</dd>
        </dl>
        <dl className={"about-project__work about-project__work_type_frontend"}>
          <dt className={"about-project__finish"}>4 недели</dt>
          <dd className={"about-project__time_text"}>Front-end</dd>
        </dl>
      </div>
    </section>
  );
};

export default AboutProject;
