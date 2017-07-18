import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Filters extends Component {
	render() {
		return (
			<form>
				<label>Search for a product</label>
				<input type="text" onChange={this.props.searchFilter} value={this.props.state.term} />
				<p>
					Is Product In Stock
					<input className="ml-2" type="checkbox" checked={this.props.state.isInStock} onChange={this.props.stockFilter} />
				</p>

				<label>Which category is it in?</label>
				<select value={this.props.state.categoriesFilter} onChange={this.props.categoriesFilter}>
					{this.props.categoriesList}
				</select>
			</form>
		)
	}
}

export default Filters;