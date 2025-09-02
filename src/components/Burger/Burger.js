import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import style from '../Burger/Burger.module.css'

const Burger = (props) =>
{
    const transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => 
    {
        return [...Array(props.ingredients[ingredientKey])].map((_, index) => 
        {
            return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        });
    });


    return (
        <div className={style.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger