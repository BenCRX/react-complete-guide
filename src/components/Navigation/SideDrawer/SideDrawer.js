import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import style from "./SideDrawer.module.css";

const SideDrawer = (props) =>
{

    let attachedStyles = [style.SideDrawer, style.Close];
    if(props.show)
    {
        attachedStyles = [style.SideDrawer, style.Open];
    };

    return (
        <React.Fragment>
            <Backdrop show={props.show} cancel={props.cancel} />
            <div className={attachedStyles.join(' ')}>
                <Logo specificStyling={{ height: "10%", marginBottom: "32px" }} />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default SideDrawer;
