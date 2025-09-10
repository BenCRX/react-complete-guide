import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import style from "./Layout.module.css"

const Layout = (props) =>
{
    return (
        <React.Fragment>
            <Toolbar />
            <main className={style.Content}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default Layout;
