import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={darkMode ? "dark-footer" : null}>
      Made with React at Le Reacteur by Adrien Callioni
    </footer>
  );
};

export default Footer;
