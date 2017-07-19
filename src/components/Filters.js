import React, { Component } from 'react';

class Filters extends Component {
	render() {

		const categoriesList =[
			'all',
			'groceries', 
			'drinks', 
			'meat', 
			'cereal'
		]
		.map(item => {
			return (
				<option key={item}>{item}</option>
			)
		})

		let newTerm = '';

		return (
			<form>
				<label>Search for a product</label>
				<input type="text" onChange={this.props.searchFilter} autoFocus value={this.props.state.term} />
				<p>
					Is Product In Stock
					<input className="ml-2" type="checkbox" checked={this.props.state.isInStock} onChange={this.props.stockFilter} />
				</p>

				<label>Which category is it in?</label>
				<select value={this.props.state.categoriesFilter} onChange={this.props.categoryFilter}>
					{categoriesList}
				</select>
			</form>
		)
	}
}

export default Filters;