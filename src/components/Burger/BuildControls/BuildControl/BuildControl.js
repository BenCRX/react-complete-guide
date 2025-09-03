import React from "react";
import style from "./BuildControl.module.css";

const BuildControl = (props) =>
{
    return (
        <div className={style.BuildControl}>
            <div className={style.Label}>{props.label}</div>
            <button className={style.Less} onClick={props.removeIngredient} disabled={props.disableButton}>Less</button>
            <button className={style.More} onClick={props.addIngredient}>More</button>
        </div>
    );
};

export default BuildControl;
