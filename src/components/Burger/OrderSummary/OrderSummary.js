import React from "react";
import Button from "../../UI/Button/Button";


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
            <p><strong>Total price:</strong> {props.orderTotalPrice.toFixed(2)}</p>
            <p>Continue to Checkout ?</p>
            <Button buttonType="Danger" clicked={props.cancelOrdering}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.continueOrdering}>CONTINUE</Button>
        </React.Fragment>
    );
}

export default OrderSummary;