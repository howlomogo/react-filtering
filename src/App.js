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

function searchingFor(term, isInStock) {
	return function(x){

		if(x.name.toLowerCase().includes(term.toLowerCase()) || !term) {
			//- If 
			if(isInStock && !x.stocked) {
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
			isInStock: true
		}

		this.searchHandler = this.searchHandler.bind(this);
		this.stockHandler = this.stockHandler.bind(this);

	}

	searchHandler(event) {
		this.setState({ term: event.target.value })
	}

	stockHandler(event) {
		console.log(event.target.checked);
		this.setState({ isInStock: event.target.checked})
	}

	render() {

		const categoriesList = categories
			.map(item => {
				return (
					<option>{item}</option>
				)
			})

		return (
			<div>
				<form>
					<input type="text" onChange={this.searchHandler} value={this.state.term} />
					<p>
						Is Product In Stock
						<input className="ml-2" type="checkbox" checked={this.state.isInStock} onChange={this.stockHandler} />
					</p>

					<select>
						{categoriesList}
					</select>
				</form>

				{
					this.state.products.filter(searchingFor(this.state.term, this.state.isInStock)).map( product =>
						<div className="product--container" key={product.id}>
							<h4> {product.name}</h4>
							<h4> {product.cat}</h4>
						</div>
					)
				}
				<h1>Hello</h1>
			</div>
		);
	}
}

export default App;
