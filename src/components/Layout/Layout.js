import React, { Component } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import style from "./Layout.module.css";

class Layout extends Component
{
    state = {
        showSideDrawer: true,
    };

    closeSideDrawerHandler = () =>
    {
        this.setState({ showSideDrawer: false });
    };

    render()
    {
        return (
            <React.Fragment>
                <Toolbar />
                <SideDrawer show={this.state.showSideDrawer} cancel={this.closeSideDrawerHandler}/>
                <main className={style.Content}>{this.props.children}</main>
            </React.Fragment>
        );
    }
}

export default Layout;
