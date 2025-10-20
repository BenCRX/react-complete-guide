import React from "react";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import style from "./Toolbar.module.css";

const Toolbar = (props) =>
{
    return (
        <header className={style.Toolbar}>
            <DrawerToggle onClickDrawerToggle={props.onClickDrawerToggle} />
            <Logo specificStyling={{ height: "80%" }} />
            <nav className={style.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;
