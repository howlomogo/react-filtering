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
							<button onClick={() =>this.props.remove(product)}>Remove From Cart</button>
						</div>
					)
				}

			</div>
		)
	}
}

export default Account;