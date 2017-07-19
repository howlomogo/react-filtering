import React, { Component } from 'react';

class CartItem extends Component {
	render() {
		return (
			<div key={this.props.product.id}>
				<h4> {this.props.product.name} </h4>
				<h6> Quantity: {this.props.product.quantity} </h6>
				<label>Change Quantity</label>
				<input className="ml-2" type="text"/>
				<button type="button" className="ml-2" onClick={() => {this.props.changeCartQuantity(this.props.product)}}>Change Quantity</button>
				<button className="ml-2" onClick={() =>this.props.remove(this.props.product)}>Remove From Cart</button>
			</div>
		)
	}
}

export default CartItem;