import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        purchasable: false,
        ordering: false
    };

    updateIngredient = (type, delta) =>
    {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + delta;

        // Prevent negative counts
        if (newCount < 0) return;

        const updatedIngredients = {
            ...this.state.ingredients,
            [type]: newCount
        };

        const priceChange = INGREDIENT_PRICE[type] * delta;
        const newPrice = this.state.totalPrice + priceChange;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });

        this.updatePurchaseState(updatedIngredients);
    };

    addIngredientHandler = (type) =>
    {
        this.updateIngredient(type, 1);
    };

    removeIngredientHandler = (type) =>
    {
        this.updateIngredient(type, -1);
    };

    orderingHandler = () =>
    {
        this.setState({ordering: true});
    };

    updatePurchaseState(ingredients)
    {
        const sum = Object.values(ingredients).reduce((sum, count) => sum + count, 0);
        this.setState({ purchasable: sum > 0 });
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
                <Modal show={this.state.ordering}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    removeIngredient={this.removeIngredientHandler}
                    addIngredient={this.addIngredientHandler}
                    ordering={this.orderingHandler}
                    disableButton={disableInfo}
                    burgerPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
