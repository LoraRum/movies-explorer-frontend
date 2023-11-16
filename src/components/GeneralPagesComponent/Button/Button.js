import { Link } from "react-router-dom";
import "./Button.css";
import { createElement, useMemo } from "react";

const Button = ({ children, type = "default", to = null }) => {
  let typeClass;

  switch (type) {
    case "default":
      typeClass = "button_type_default";
      break;

    case "header":
      typeClass = "button_type_header";
      break;

    case "search":
      typeClass = "button_type_search";
      break;

    case "link":
      typeClass = "button_type_link";
      break;

    case "blue":
      typeClass = "button_type_blue";
      break;

    case "more":
      typeClass = "button_type_more";
      break;
  }

  if (to === null) {
    return <button className={`button ${typeClass}`}>{children}</button>;
  } else if (to.includes("#")) {
    return (
      <a href={to} className={`button ${typeClass}`}>
        {children}
      </a>
    );
  } else {
    return (
      <Link to={to} className={`button ${typeClass}`}>
        {children}
      </Link>
    );
  }
};

export default Button;
