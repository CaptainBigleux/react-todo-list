import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ title, darkMode, setDarkMode }) => {
  return (
    <header>
      <div>
        <span className="list-icon">
          <FontAwesomeIcon icon="fa-solid fa-list-check" />
        </span>
        <span>{title}</span>
      </div>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
      </button>
    </header>
  );
};

export default Header;
