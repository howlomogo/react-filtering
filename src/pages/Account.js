import React, { Component } from 'react';
import CartItem from './../components/CartItem';

class Account extends Component {

	render() {
		return (
			<div>
			<h1>ACCOUNT PAGE</h1>
				{
					/* NO RESULTS FOUND */
					this.props.products
					.map( product =>

						<CartItem 
							key={product.id}
							product={product} 
							removeProduct={this.props.removeProductHandler} 
							changeCartQuantity={this.props.changeCartQuantity}
						></CartItem>
					)
				}

			<h4>Total Cost: &pound;{this.props.state.totalCost}</h4>

			</div>
		)
	}
}

export default Account;