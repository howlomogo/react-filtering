import React, { Component } from 'react';

class Home extends Component {
	render() {

		function filteredResults(term, isInStock, catFilter) {
			return function(product){

				if(product.name.toLowerCase().includes(term.toLowerCase()) || !term) {
					if((isInStock && !product.stocked) || (catFilter !== product.cat)) {
						return false;
					}
					else {
						return true;
					}
				}
				else {
					return false;
				}
			}
		}


		return (
			<div>
				{
					this.props.state.products.filter(
						filteredResults(this.props.state.term, this.props.state.isInStock, this.props.state.categoriesFilter))
						.map( product =>
						<div className="product--container" key={product.id}>
							<h4> {product.name}</h4>
							<h4> {product.cat}</h4>
							<h4> In Stock: {product.stocked.toString()}</h4>
							<button onClick={() =>this.props.addProduct(product)}>ADD TO CART</button>
						</div>
					)
				}
			</div>
		)
	}
}

export default Home;