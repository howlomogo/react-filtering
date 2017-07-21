import React, { Component } from 'react';
import CartItem from './../components/CartItem';

class Account extends Component {

	render() {
		return (
			<div>
			<h3>Account</h3>
			<hr />
				{
					/* NO RESULTS FOUND */
					this.props.products.length ? 
					this.props.products
					.map( product =>

						<CartItem 
							key={product.id}
							product={product} 
							removeProduct={this.props.removeProductHandler} 
							cartHandler={this.props.cartHandler}
						></CartItem>
					)
					:

					<div className="noresults text-center">
						<h2>No Results Found</h2>
					</div>
				}
				<hr />
				<h4>Total Cost: &pound;{this.props.state.totalCost}</h4>
			</div>
		)
	}
}

export default Account;