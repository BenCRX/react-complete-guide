import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import style from "./BuildControls.module.css";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
];

const BuildControls = (props) =>
{
    return (
        <div className={style.BuildControls}>
            <p>Current price: <strong>{props.burgerPrice.toFixed(2)}</strong></p>
            {controls.map((ctrl) =>
            {
                return (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        removeIngredient={() => props.removeIngredient(ctrl.type)}
                        addIngredient={() => props.addIngredient(ctrl.type)}
                        disableButton={props.disableButton[ctrl.type]}
                    />
                );
            })}
        </div>
    );
};

export default BuildControls;
