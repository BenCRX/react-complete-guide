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
        totalPrice: 4,
    };

    // addIngredientHandler = (ingredientType) =>
    // {
    //     const oldIngredientsCount = this.state.ingredients[ingredientType];
    //     const updatedIngredientsCount = oldIngredientsCount + 1;
    //     const updatedIngredients = { ...this.state.ingredients };
    //     updatedIngredients[ingredientType] = updatedIngredientsCount;

    //     const priceAddition = INGREDIENT_PRICE[ingredientType];
    //     const oldPrice = this.state.totalPrice;
    //     const updatedPrice = oldPrice + priceAddition;

    //     this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
    // };

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

    removeIngredientHandler = (ingredientType) => { };

    render()
    {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addIngredient={this.addIngredientHandler} />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
