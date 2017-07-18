import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Home extends Component {
	render() {
		return (
			<div>
				{
					this.props.state.products.filter(this.props.searchFor(this.props.state.term, this.props.state.isInStock, this.props.state.categoriesFilter)).map( product =>
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