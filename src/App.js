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

function searchingFor(term, isInStock, catFilter) {
	return function(product){

		if(product.name.toLowerCase().includes(term.toLowerCase()) || !term) {
			//- If 
			if(isInStock && !product.stocked || catFilter !== product.cat) {
				return false;
			}
			else {
				return true;
			}
		}
		else {
			return false;
		}
		// return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
	}
}

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

		this.searchHandler = this.searchHandler.bind(this);
		this.stockHandler = this.stockHandler.bind(this);
		this.categoriesHandler = this.categoriesHandler.bind(this);
		this.addProductHandler = this.addProductHandler.bind(this);

		// A dummy uid, for adding unique products to cart.
		this.uniqueId = 1000;

	}

	searchHandler(event) {
		this.setState({ term: event.target.value })
	}

	stockHandler(event) {
		console.log(event.target.checked);
		this.setState({ isInStock: event.target.checked})
	}

	categoriesHandler(event) {
		console.log("ewfe");
		this.setState({ categoriesFilter: event.target.value });
		console.log(event.target.value);
	}

	addProductHandler(product) {
		let newArr = this.state.cartProducts;

		let alreadyInCart = false;
		for(var i = 0; i < this.state.cartProducts.length; i++) {
		    if (this.state.cartProducts[i].id == product.id) {

		    	// let newArr2 = this.state.cartProducts[i];
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
		console.log("remove " + product.name);
		console.log(this.state.cartProducts);

		for( let i = 0; i < this.state.cartProducts.length; i++) {
			if( this.state.cartProducts[i].id == product.id ) {
				let newArr = this.state.cartProducts;
				newArr.splice(i,1);
				this.setState({ cartProducts: newArr });
				console.log("Removed Product with the ID of " + product.id);
			}
		}

	}

	render() {

		const categoriesList =[
			'groceries', 
			'drinks', 
			'meat', 
			'cereal'
		]
			.map(item => {
				return (
					<option key={item}>{item}</option>
				)
			})

		return (
			<div>
				<Header></Header>
				<Filters 
					searchFilter={this.searchHandler.bind(this)} 
					stockFilter={this.stockHandler.bind(this)} 
					categoriesFilter={this.categoriesHandler.bind(this)}
					categoriesList={categoriesList}
					state={this.state}
					>
				</Filters>

				<Home
					state={this.state}
					addProduct={this.addProductHandler.bind(this)}
					searchFor={searchingFor.bind(this)}
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
