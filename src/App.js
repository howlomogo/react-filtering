import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import Header from './components/Header';
import Home from './pages/Home';
import Account from './pages/Account';
import './App.css';

// Dummy JSON data - Todo Add in correct data
const products = [
	{
		id: 1,
		name: "Carrot",
		stocked: true,
		cat: "groceries",
		price: 0.79
	},
	{
		id: 2,
		name: "Coke",
		stocked: true,
		cat: "drinks",
		price: 1.29
	},
	{
		id: 3,
		name: "Lamb",
		stocked: false,
		cat: "meat",
		price: 4.59
	},
	{
		id: 4,
		name: "Shredded Wheat",
		stocked: false,
		cat: "cereal",
		price: 2.49
	},
	{
		id: 5,
		name: "Beef",
		stocked: true,
		cat: "meat",
		price: 3.89
	}
]

class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			products: products,
			term: '',
			isInStock: true,
			categoriesFilter: 'all',
			cartProducts: [],
			totalCost: 0
		}
	}

	totalCostHandler() {
		var totalCost = 0;

		for(var i = 0; i < this.state.cartProducts.length; i++) {
			totalCost += this.state.cartProducts[i].price * this.state.cartProducts[i].quantity;
			console.log(totalCost);
		}

    	this.setState({
    		totalCost: totalCost.toFixed(2)
    	});

	}

	searchFilterHandler(event) {
		this.setState({ term: event.target.value })
	}

	stockFilterHandler(event) {
		this.setState({ isInStock: event.target.checked})
	}

	categoryFilterHandler(event) {
		console.log(event);
		this.setState({ categoriesFilter: event.target.value });
	}

	cartHandler(product, newQuantity) {
		let newArr = this.state.cartProducts;

		let alreadyInCart = false;
		for(var i = 0; i < this.state.cartProducts.length; i++) {
		    if (this.state.cartProducts[i].id === product.id) {

		    	// If a quantity is specified in the function call it is coming from the account page
		    	if(newQuantity) {
			    	newArr[i].quantity = newQuantity;
			    	this.setState({
			    		cartProducts: newArr
			    	});
			        alreadyInCart = true;
			        break;
		    	}
		    	// Else the product has been added through the hompage
		    	else {
			    	newArr[i].quantity++;
			    	this.setState({
			    		cartProducts: newArr
			    	});
			        alreadyInCart = true;
			        break;
		    	}
		    }
		}

		if(!alreadyInCart) {
			product.quantity = 1;
			newArr.push(product);
			this.setState({ cartProducts: newArr});
		}
		
		this.totalCostHandler();
	}

	removeProductHandler(product) {
		console.log("REMOVE IT");
		console.log(product);
		for( let i = 0; i < this.state.cartProducts.length; i++) {
			if( this.state.cartProducts[i].id === product.id ) {
				let newArr = this.state.cartProducts;
				newArr.splice(i,1);
				this.setState({ cartProducts: newArr });
			}
		}

		this.totalCostHandler();
	}

	render() {
		return (
			<Router>
			<div className="container">

				<Header cartProducts={this.state.cartProducts}></Header>
				<div>
					<Route exact path="/" component={(props) => 
						<Home 
							state={this.state} 
							cartHandler={this.cartHandler.bind(this)}
							searchFilter={this.searchFilterHandler.bind(this)} 
							stockFilter={this.stockFilterHandler.bind(this)} 
							categoryFilter={this.categoryFilterHandler.bind(this)}
						/>
					}/>
					<Route path="/account" component={(props) => 
						<Account 
							state={this.state} 
							products={this.state.cartProducts} 
							removeProductHandler={this.removeProductHandler.bind(this)}
							cartHandler={this.cartHandler.bind(this)}
						/>
					}/>
				</div>

			</div>
			</Router>
		);
	}
}

export default App;
