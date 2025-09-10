import React from "react";
import style from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const Toolbar = (props) => {
  return (
    <header className={style.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>...</nav>
    </header>
  )
};

export default Toolbar;