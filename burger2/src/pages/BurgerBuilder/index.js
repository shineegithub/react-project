import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
// import { type } from "@testing-library/user-event/dist/type";

const INGREDIENTS_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500};

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad:0,
            cheese:0,
            bacon:0,
            meat:0,
        },
        totolPrice: 1000
    };
    ortsNemekh = (type) => {
        // console.log(type)
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;

        const newPrice = this.state.totolPrice + INGREDIENTS_PRICES[type];

        this.setState({ 
            ingredients: newIngredients
            , totolPrice: newPrice 
        });
    };

    ortsHasakh = (type) => {
        if (this.state.ingredients[type] > 0) {
            const newIngredients = { ...this.state.ingredients };
            newIngredients[type]--;
            const newPrice = this.state.totolPrice - INGREDIENTS_PRICES[type];
            this.setState({ 
                ingredients: newIngredients 
                , totolPrice: newPrice 
            });
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
                <BuildControls 
                    price={this.state.totolPrice}
                    disabledIngredients={disabledIngredients} 
                    ortsHasakh={this.ortsHasakh}  
                    ortsNemekh={this.ortsNemekh}
                />
            </div>
        );
    }
}


export default BurgerBuilder;