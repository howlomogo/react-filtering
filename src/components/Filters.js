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
			<div>
				<form className="form-inline">
					<hr />
					<div className="form-group">
						<label>Search for a product</label>
						<input className="form-control" type="text" onChange={this.props.searchFilter} autoFocus value={this.props.state.term} />
					</div>

					<div className="form-group">
						<label>Is Product In Stock</label>
						<input className="checkbox-inline" type="checkbox" checked={this.props.state.isInStock} onChange={this.props.stockFilter} />
					</div>

					<div className="form-group">
						<label>Which category is it in?</label>
						<select className="form-control" value={this.props.state.categoriesFilter} onChange={this.props.categoryFilter}>
							{categoriesList}
						</select>
					</div>
				</form>
				<hr />
			</div>
		)
	}
}

export default Filters;