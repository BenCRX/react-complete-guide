import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import style from "./Layout.module.css"

const Layout = (props) =>
{
    return (
        <React.Fragment>
            <Toolbar />
            <SideDrawer />
            <main className={style.Content}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default Layout;
