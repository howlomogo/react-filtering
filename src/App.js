import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import Home from './pages/Home';
import Account from './pages/Account';


const products = [
	{
		id: 1,
		name: "Carrot",
		stocked: true,
		cat: "groceries"
	},
	{
		id: 2,
		name: "Coke",
		stocked: true,
		cat: "drinks"
	},
	{
		id: 3,
		name: "Lamb",
		stocked: false,
		cat: "meat"
	},
	{
		id: 4,
		name: "Shredded Wheat",
		stocked: false,
		cat: "cereal"
	},
	{
		id: 5,
		name: "Beef",
		stocked: true,
		cat: "meat"
	}
]

class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			products: products,
			term: '',
			isInStock: true,
			categoriesFilter: 'meat',
			cartProducts: []
		}
	}

	searchFilterHandler(event) {
		this.setState({ term: event.target.value })
	}

	stockFilterHandler(event) {
		this.setState({ isInStock: event.target.checked})
	}

	categoryFilterHandler(event) {
		this.setState({ categoriesFilter: event.target.value });
	}

	addProductHandler(product) {
		let newArr = this.state.cartProducts;

		let alreadyInCart = false;
		for(var i = 0; i < this.state.cartProducts.length; i++) {
		    if (this.state.cartProducts[i].id === product.id) {

		    	newArr[i].quantity++;
		    	this.setState({
		    		cartProducts: newArr
		    	});
		        alreadyInCart = true;
		        break;
		    }
		}

		if(!alreadyInCart) {
			product.quantity = 1;
			newArr.push(product);
			this.setState({ cartProducts: newArr});
		}
	}

	removeProductHandler(product) {
		for( let i = 0; i < this.state.cartProducts.length; i++) {
			if( this.state.cartProducts[i].id === product.id ) {
				let newArr = this.state.cartProducts;
				newArr.splice(i,1);
				this.setState({ cartProducts: newArr });
			}
		}

	}

	render() {
		return (
			<div>
				<Header></Header>
				<Filters 
					state={this.state}
					searchFilter={this.searchFilterHandler.bind(this)} 
					stockFilter={this.stockFilterHandler.bind(this)} 
					categoryFilter={this.categoryFilterHandler.bind(this)}
					>
				</Filters>

				<Home
					state={this.state}
					addProduct={this.addProductHandler.bind(this)}
				>
				</Home>

				<Account 
					products={this.state.cartProducts} 
					remove={this.removeProductHandler.bind(this)}>
				</Account>

			</div>
		);
	}
}

export default App;
