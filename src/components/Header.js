import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom'
import './Header.css';

class Header extends Component {

	getCartAmount() {
		var totalProducts = 0;
		for(var i = 0; i < this.props.cartProducts.length; i++) {
			totalProducts += this.props.cartProducts[i].quantity;
		}
		return totalProducts;
	}

	render() {
		return (
			<div>
				<div className="navigation">
					<div><Link to="/">Home</Link></div>
					<div><Link to="/account">Account</Link></div>
					<div>Items In Cart: {this.getCartAmount()}</div>
				</div>
				<hr/>
			</div>
		)
	}
}

export default Header;