import React from "react";
//import Auxiliary from "../../hoc/Auxiliary";

const Layout = (props) =>
{
    return (
        //Could be the HOC Auxiliary component as well I guess
        <React.Fragment>
            <div>Toolbar, Sidedrawer, Backdrop</div>
            <main>{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;
