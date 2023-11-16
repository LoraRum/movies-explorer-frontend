import "./ProfileButton.css";
import Profile from "../../images/profile.svg";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  return (
    <Link to="/profile" className="menu__account">
      <h3 className="header__account-title">Аккаунт</h3>
      <div className={"menu__circle"}>
        <img className={"menu__account-img"} src={Profile} alt={"account"} />
      </div>
    </Link>
  );
};

export default ProfileButton;
