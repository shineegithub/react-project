import React from "react";
import css from "./style.module.css"


const BuildControl = props =>  (
    <div className={css.BuildControl}>
        <div className={css.label}>{props.orts}</div>
        <button disabled={props.disabled[props.type]} onClick={() => props.ortsHasakh(props.type)} className={css.Less}>
            Хасах
        </button>
        <button onClick={() => props.ortsNemekh(props.type)} className={css.More}>
            Нэмэх
        </button>
        
    </div>
);
    





export default BuildControl;