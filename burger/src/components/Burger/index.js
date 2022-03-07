import react from "react";
import BurgerIngredient from "../BurgerIngredient";

const Burger = () => (
    <div>
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="salad" />
        <BurgerIngredient type="bacon" />
        <BurgerIngredient type="cheese" />
        <BurgerIngredient type="meet" />
        <BurgerIngredient type="" />
    </div>
);

export default Burger;
