import React, { Component } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import style from "./Layout.module.css";

class Layout extends Component
{
    state = {
        showSideDrawer: false,
    };

    closeSideDrawerHandler = () =>
    {
        this.setState({ showSideDrawer: false });
    };

    toggleSideDrawerHandler = () =>
    {
        this.setState((prevState) => 
        {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render()
    {
        return (
            <React.Fragment>
                <Toolbar onClickDrawerToggle={this.toggleSideDrawerHandler} />
                <SideDrawer
                    show={this.state.showSideDrawer}
                    cancel={this.closeSideDrawerHandler}
                />
                <main className={style.Content}>{this.props.children}</main>
            </React.Fragment>
        );
    }
}

export default Layout;
