import React, { Component } from 'react';
import Filters from './../components/Filters';
import Product from './../components/Product';


class Home extends Component {
	render() {

		function filteredResults(term, isInStock, catFilter) {
			return function(product){
				console.log(catFilter);

				if(product.name.toLowerCase().includes(term.toLowerCase()) || !term) {
					if((isInStock && !product.stocked) || (catFilter !== product.cat && catFilter !== 'all')) {
						return false;
					}
					else {
						return true;
					}
				}
				else {
					return false;
				}
			}
		}


		return (
			<div>

				<h3>Home</h3>

				<Filters 
					state={this.props.state}
					searchFilter={this.props.searchFilter} 
					stockFilter={this.props.stockFilter} 
					categoryFilter={this.props.categoryFilter}
					>
				</Filters>

				{
					this.props.state.products.filter(
						filteredResults(this.props.state.term, this.props.state.isInStock, this.props.state.categoriesFilter))
						.map( product =>

							<Product
								key={product.id}
								product={product} 
								cartHandler={this.props.cartHandler} 
							></Product>
					)
				}
			</div>
		)
	}
}

export default Home;