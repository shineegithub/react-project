import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
// import { type } from "@testing-library/user-event/dist/type";


class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad:0,
            cheese:0,
            bacon:0,
            meat:0,
        }
    };
    ortsNemekh = (type) => {
        // console.log(type)
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;
        this.setState({ ingredients: newIngredients });
    };

    ortsHasakh = (type) => {
        if (this.state.ingredients[type] > 0) {
            const newIngredients = { ...this.state.ingredients };
            newIngredients[type]--;
            this.setState({ ingredients: newIngredients });
        }
    };

    render() {
        const disabledIngredients = { ...this.state.ingredients };
        for (let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }
        return (
            <div>
                <Burger orts={this.state.ingredients} />
                <BuildControls disabledIngredients={disabledIngredients} ortsHasakh={this.ortsHasakh}  ortsNemekh={this.ortsNemekh}/>
            </div>
        );
    }
}


export default BurgerBuilder;