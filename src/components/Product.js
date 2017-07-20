import React, { Component } from 'react';


class Product extends Component {

	constructor(props) {
		super(props);
		this.state = {
			productQuantity: this.props.product.quantity
		}
	}

	setQuantity(value){
        this.setState({
             productQuantity: value
        });
        console.log(this.state.productQuantity);
    }

	render() {
		return (
			<div className="product--container" key={this.props.product.id}>
				<h4> {this.props.product.name}</h4>
				<h4> &pound;{this.props.product.price}</h4>
				<h4> {this.props.product.cat}</h4>
				<h4> In Stock: {this.props.product.stocked.toString()}</h4>
				<button onClick={() =>this.props.addProduct(this.props.product)}>ADD TO CART</button>
			</div>
		)
	}
}

export default Product;