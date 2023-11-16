import "./Techs.css";

const Techs = () => {
  return (
    <section className={"techs"} id="techs">
      <div className={"techs__about"}>
        <div className={"part-about"}>Технологии</div>
        <hr className={"part-about__line part-about__line_black"}></hr>
      </div>

      <h2 className={"techs__title"}>7 технологий</h2>
      <h3 className={"techs__subtitle"}>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </h3>
      <dl className={"techs__skills"}>
        <dt className={"techs__skill"}>HTML</dt>
        <dt className={"techs__skill"}>CSS</dt>
        <dt className={"techs__skill"}>JS</dt>
        <dt className={"techs__skill"}>React</dt>
        <dt className={"techs__skill"}>Git</dt>
        <dt className={"techs__skill"}>Express.js</dt>
        <dt className={"techs__skill"}>mongoDB</dt>
      </dl>
    </section>
  );
};
export default Techs;
