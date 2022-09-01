import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = props => {

    const controls = {
        bacon: "Гахайн мах",
        cheese: "Бяслаг",
        meat: "Үхрийн мах",
        salad: "Салад",
    };

    return (
        
            <div className={css.BuildControls}>
                <p>Бургерйин үнэ : <strong>{props.price}</strong></p>
                {Object.keys(controls).map(el => (
                    <BuildControl 
                        key={el}
                        ortsHasakh={props.ortsHasakh}  
                        ortsNemekh={props.ortsNemekh} 
                        disabled={props.disabledIngredients}    
                        type={el}  
                        orts={controls[el]}
                    />
                ))}

                <button 
                    onClick={props.showConfirmModal} 
                    disalbled={props.disabled} 
                    className={css.OrderButton}>
                    Захиалах
                </button>
                
                
                
            </div>
        
    )
}




export default BuildControls;