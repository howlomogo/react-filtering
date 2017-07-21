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
			<div className="cart--container">
				<div className="row align-items-center text-center">
					<div className="col-md-3">
						<h5>Product</h5>
						<h6> {this.props.product.name} </h6>
					</div>
					<div className="col-md-3">
						<h5>Price: &pound;{this.props.product.price}</h5>
						<h6> Quantity: {this.props.product.quantity}</h6>
					</div>
					<div className="col-md-3">
						<label>Change Quantity</label>
						<input type="text" value={this.state.productQuantity} onChange={e => this.setQuantity(e.target.value)}/>
					</div>
					<div className="col-md-3">
						<button type="button" className="btn btn-primary mb-2 d-block" onClick={() => {this.props.cartHandler(this.props.product, this.state.productQuantity)}}>Update Quantity</button>
						<button type="button" className="btn btn-danger d-block" onClick={() => {this.props.removeProduct(this.props.product)}}>Remove</button>
					</div>
				</div>
			</div>
		)
	}
}

export default CartItem;