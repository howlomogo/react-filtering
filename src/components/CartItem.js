import React, { Component } from 'react';


class CartItem extends Component {

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
			<div>
				<h4> {this.props.product.name} </h4>
				<h6> Quantity: {this.props.product.quantity} </h6>
				<h4>Price: {this.props.product.price}</h4>
				<label>Change Quantity</label>
				<input type="text" value={this.state.productQuantity} onChange={e => this.setQuantity(e.target.value)}/>

				<button type="button" className="ml-2" onClick={() => {this.props.cartHandler(this.props.product, this.state.productQuantity)}}>Change Quantity</button>
				<button type="button" className="ml-2" onClick={() => {this.props.removeProduct(this.props.product)}}>Remove From Cart</button>
			</div>
		)
	}
}

export default CartItem;