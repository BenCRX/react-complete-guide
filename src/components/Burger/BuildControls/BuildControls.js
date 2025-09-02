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
            {controls.map((ctrl) =>
            {
                return (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        addIngredient={() => props.addIngredient(ctrl.type)}
                    />
                );
            })}
        </div>
    );
};

export default BuildControls;
