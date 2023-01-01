import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
// import axios from "axios";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";

const INGREDIENTS_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500};

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad:0,
            cheese:0,
            bacon:0,
            meat:0,
        },
        totolPrice: 1000,
        purchasing: false,
        confirmOrder: false,
        lastCustomerName: "N/A",
        Loading: false
    };
    componentDidMount = () => {
        this.setState({Loading: true});
        axios.get("/orders.json").then(response => {
            let arr = Object.entries(response.data);
            arr = arr.reverse();
            arr.forEach( el => {
                console.log(el[1].hayag.name + " ==> " + el[1].dun);
            });
            const lastOrder = arr[arr.length -1][1];
            this.setState({
                lastCustomerName: lastOrder.hayag.name, 
                ingredients: lastOrder.orts, 
                totolPrice: lastOrder.dun
            });
        })
        .catch(err => console.log(err))
        .finally(() => {
            this.setState({Loading: false});
        });
    };
    continueOrder = () => {
        const order = {
            orts: this.state.ingredients,
            dun: this.state.totolPrice,
            hayag: {
                name: 'Dorj',
                city: 'Ub',
                street: '10r horoolol 23-12'
            }
        };
        this.setState({ Loading: true });
        axios
            .post('/orders.json',order )
            .then(response => {})
            .finally(() => {
                this.setState({ Loading: false });
            });
            
    };

    showConfirmModal = () => {
        this.setState ({ confirmOrder: true });
    };

    closeConfirmModal = () => {
        this.setState ({ confirmOrder: false });
    };

    ortsNemekh = (type) => {
        // console.log(type)
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;

        const newPrice = this.state.totolPrice + INGREDIENTS_PRICES[type];

        this.setState({ 
            purchasing: true
            , ingredients: newIngredients
            , totolPrice: newPrice 
        });
    };

    ortsHasakh = (type) => {
        if (this.state.ingredients[type] > 0) {
            const newIngredients = { ...this.state.ingredients };
            newIngredients[type]--;
            const newPrice = this.state.totolPrice - INGREDIENTS_PRICES[type];
            this.setState({ 
                purchasing: newPrice > 1000
                , ingredients: newIngredients 
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
                <Modal 
                    closeConfirmModal={this.closeConfirmModal}
                    show={this.state.confirmOrder} 
                >
                    {this.state.Loading ? (
                        <Spinner />
                    ): (
                        <OrderSummary 
                            onCancel={this.closeConfirmModal}
                            onContinue={this.continueOrder}
                            price={this.state.totolPrice}
                            //ingredientsNames = {INGREDIENT_NAMES}
                            ingredients={this.state.ingredients}
                        />
                    )}   
                </Modal>

                {this.state.Loading && <Spinner/>}
                
                <p style={{ width: "100%", textAlign: "center", fontsize: "32px"}}>
                    Suulchiin zahialagch: {this.state.lastCustomerName}
                </p>
                <Burger orts={this.state.ingredients} />

                <BuildControls 
                    showConfirmModal = {this.showConfirmModal}
                    disabled={!this.state.purchasing}
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