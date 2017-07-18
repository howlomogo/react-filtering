import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom'
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div>
				<div><Link to="/">Home</Link></div>
				<div><Link to="/account">Account</Link></div>
				<div>Items In Cart: {this.props.products.length}</div>
				{ /* Update with quantity also */}
				<hr/>
			</div>
		)
	}
}

export default Header;