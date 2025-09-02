import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import style from '../Burger/Burger.module.css'

const Burger = (props) =>
{
    let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => 
    {
        return [...Array(props.ingredients[ingredientKey])].map((_, index) => 
        {
            return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        });
    }).reduce((arr, el) => arr.concat(el), []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={style.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;