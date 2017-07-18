import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/account">Account</Link></li>
					</ul>

					<hr/>

				</div>
			</Router>

		)
	}
}

export default Header;