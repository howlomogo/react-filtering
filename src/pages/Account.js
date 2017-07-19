import React, { Component } from 'react';

class Account extends Component {
	render() {
		return (
			<div>
			<h1>ACCOUNT PAGE</h1>
				{
					/* NO RESULTS FOUND */
					this.props.products
					.map( product =>
						<div key={product.id}>
							<h4> {product.name} </h4>
							<h6> Quantity: {product.quantity} </h6>
							<label>Change Quantity</label>
							<input className="ml-2" type="text"/>
							<button type="button" className="ml-2" onClick={() => {this.props.changeCartQuantity(product.id)}}>Remove From Cart</button>
						</div>
					)
				}

			</div>
		)
	}
}

export default Account;