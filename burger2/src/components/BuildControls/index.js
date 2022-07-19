import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = props => (
    <div className={css.BuildControls}>
        <p>Бургерйин үнэ : {props.price}</p>
        <BuildControl ortsHasakh={props.ortsHasakh}  ortsNemekh={props.ortsNemekh} disabled={props.disabledIngredients}    type="salad"  orts="Салад" />
        <BuildControl ortsHasakh={props.ortsHasakh}  ortsNemekh={props.ortsNemekh} disabled={props.disabledIngredients}    type="bacon"  orts="Гахайн мах" />
        <BuildControl ortsHasakh={props.ortsHasakh}  ortsNemekh={props.ortsNemekh} disabled={props.disabledIngredients}   type="cheese" orts="Бяслаг" />
        <BuildControl ortsHasakh={props.ortsHasakh}  ortsNemekh={props.ortsNemekh} disabled={props.disabledIngredients}     type="meat"   orts="Мах" />
        
    </div>
);




export default BuildControls;