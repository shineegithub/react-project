import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = props => (
    <div className={css.BuildControls}>
        <BuildControl ortsNemekh={props.ortsNemekh} type="salad"  orts="Салад" />
        <BuildControl ortsNemekh={props.ortsNemekh} type="bacon"  orts="Гахайн мах" />
        <BuildControl ortsNemekh={props.ortsNemekh} type="cheese" orts="Бяслаг" />
        <BuildControl ortsNemekh={props.ortsNemekh} type="meat"   orts="Мах" />
        
    </div>
);




export default BuildControls;