import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import style from "./Toolbar.module.css";

const Toolbar = (props) => {
  return (
    <header className={style.Toolbar}>
        <div>MENU</div>
        <Logo height="80%"/>
        <NavigationItems />
    </header>
  )
};

export default Toolbar;