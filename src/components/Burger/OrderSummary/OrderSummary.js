import React from "react";


const OrderSummary = (props) =>
{
    const ingredientsSummary = Object.keys(props.ingredients).map(ingredientKey => 
    {
        return (
            <li key={ingredientKey}>
                <span style={{ textTransform: 'capitalize' }}>{ingredientKey}:</span> {props.ingredients[ingredientKey]}
            </li>
        );
    });

    return (
        <React.Fragment>
            <h3>Your order:</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout ?</p>
        </React.Fragment>
    );
}

export default OrderSummary;