import React from "react";
import style from "./Layout.module.css"
//import Auxiliary from "../../hoc/Auxiliary";

const Layout = (props) =>
{
    return (
        //Could be the HOC Auxiliary component as well I guess
        <React.Fragment>
            <div>Toolbar, Sidedrawer, Backdrop</div>

            <main className={style.Content}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default Layout;
