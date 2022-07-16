import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import { type } from "@testing-library/user-event/dist/type";


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
        console.log(type)

        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;

        this.setState({ ingredients: newIngredients });
    };

    render() {
        return (
            <div>
                <Burger orts={this.state.ingredients} />
                <BuildControls ortsNemekh={this.ortsNemekh}/>
            </div>
        );
    }
}


export default BurgerBuilder;