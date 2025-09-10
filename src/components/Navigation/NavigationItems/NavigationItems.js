import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import style from "./NavigationItems.module.css";

const NavigationItems = (props) =>
{
    return (
        <ul className={style.NavigationItems}>
            <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    )
};

export default NavigationItems;