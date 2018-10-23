import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/header.module.css";

const Logo = props => {
  return <div className={styles.logo}>Hacker News</div>;
};

const Navigation = props => {
  const activeStyle = { color: "red" };
  return (
    <nav className={styles.nav}>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/best" activeStyle={activeStyle}>
        Best
      </NavLink>
      {" | "}
      <NavLink to="/new" activeStyle={activeStyle}>
        New
      </NavLink>
    </nav>
  );
};

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
