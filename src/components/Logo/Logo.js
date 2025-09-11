import React from "react";
import style from "./Logo.module.css";
import burgerLogo from "../../assets/images/144 burger-logo.png";

const Logo = (props) =>
{
    return (
        <div className={style.Logo} style={props.specificStyling}>
            <img src={burgerLogo} alt="BurgerLogo"/>
        </div>
    )
};

export default Logo;