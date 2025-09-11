import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import style from "./SideDrawer.module.css"

const SideDrawer = (props) =>
{
  return (
    <div className={style.SideDrawer}>
      <Logo specificStyling={{height:"10%", marginBottom: "32px"}}/>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
};

export default SideDrawer;