import React, { Component } from 'react';
import './App.css';


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

const categories =[
	'groceries', 
	'drinks', 
	'meat', 
	'cereal'
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
		this.setState({ categoriesFilter: event.target.value });
		console.log(event.target.value);
	}

	addProductHandler(product) {
		// Fix this tomorrow
		var uid = this.uniqueId++;
		let newArr = this.state.cartProducts;
		product.uid = uid;
		console.log("ADDED " + product.name + " to cart - " + " It has the uid of " + product.uid);
		newArr.push(product);
		this.setState({ cartProducts: newArr});

		console.log(this.state.cartProducts);
	}

	removeProductHandler(product) {
		console.log("remove " + product.name);

		for( let i = 0; i < this.state.cartProducts.length; i++) {
			if( this.state.cartProducts[i].uid == product.uid ) {
				let newArr = this.state.cartProducts;
				newArr.splice(i,1);
				this.setState({ cartProducts: newArr });
				console.log("Removed Product with the unique ID of " + product.uid);
			}
		}

	}

	render() {

		const categoriesList = categories
			.map(item => {
				return (
					<option key={item}>{item}</option>
				)
			})

		return (
			<div>
				<form>
					<label>Search for a product</label>
					<input type="text" onChange={this.searchHandler} value={this.state.term} />
					<p>
						Is Product In Stock
						<input className="ml-2" type="checkbox" checked={this.state.isInStock} onChange={this.stockHandler} />
					</p>

					<label>Which category is it in?</label>
					<select value={this.state.categoriesFilter} onChange={this.categoriesHandler}>
						{categoriesList}
					</select>
				</form>

				{
					this.state.products.filter(searchingFor(this.state.term, this.state.isInStock, this.state.categoriesFilter)).map( product =>
						<div className="product--container" key={product.id}>
							<h4> {product.name}</h4>
							<h4> {product.cat}</h4>
							<h4> In Stock: {product.stocked.toString()}</h4>
							<button onClick={() =>this.addProductHandler(product)}>ADD TO CART</button>
						</div>
					)
				}
				<h4>Products added to cart - {this.state.cartProducts.length}</h4>
				{
					this.state.cartProducts.map( product =>
						<div>
							<h4> Unique Id: {product.uid} </h4>
							<h4> {product.name} </h4>
							<button onClick={() =>this.removeProductHandler(product)}>Remove From Cart</button>
						</div>
					)
				}
			</div>
		);
	}
}

export default App;
