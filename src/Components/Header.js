import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const context = useContext(UserContext);
  console.log(context);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">
          {context.usuario}
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
