import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
};

class BurgerBuilder extends Component
{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4
    };

    removeIngredientHandler = (ingredientType) =>
    {
        this.setState((prevState) =>
        {
            const oldIngredientCount = prevState.ingredients[ingredientType];
            if (oldIngredientCount <= 0)
            {
                return null;
            }

            return {
                ingredients: {
                    ...prevState.ingredients,
                    [ingredientType]: oldIngredientCount - 1,
                },
                totalPrice: prevState.totalPrice - INGREDIENT_PRICE[ingredientType],
            };
        });
    };

    addIngredientHandler = (ingredientType) =>
    {
        this.setState((prevState) => ({
            ingredients: {
                ...prevState.ingredients,
                [ingredientType]: prevState.ingredients[ingredientType] + 1,
            },
            totalPrice: prevState.totalPrice + INGREDIENT_PRICE[ingredientType],
        }));
    };

    render()
    {
        const disableInfo = { ...this.state.ingredients };
        for (let key in disableInfo)
        {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    burgerPrice={this.state.totalPrice}
                    removeIngredient={this.removeIngredientHandler}
                    addIngredient={this.addIngredientHandler}
                    disableButton={disableInfo}
                />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
