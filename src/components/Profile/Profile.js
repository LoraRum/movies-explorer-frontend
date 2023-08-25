import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <h2 className={"profile__title"}>Привет, Виталий!</h2>
      <form className="profile__form">
        <label className="profile__label">
          Имя
          <input
            name="name"
            className="profile__input"
            type="text"
            required
            minLength="2"
            maxLength="30"
          />
        </label>
        <hr
          className={
            "part-about__line part-about__line_footer part-about__line_label"
          }
        ></hr>
        <label className="profile__label">
          E-mail
          <input
            name="email"
            className="profile__input"
            type="email"
            required
          />
        </label>
      </form>
      <button className="profile__button-change" type="submit">
        Редактировать
      </button>
      <button type="submit" className="profile__button-logout">
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
