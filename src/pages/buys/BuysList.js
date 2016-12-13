import React, {Component} from 'react';
import Buy from './Buy';
import buysStore from '../../stores/BuysStore';

export default class BuysList extends Component{

	constructor(){
		super();

		this.state = {
			allBuys: buysStore.allBuys(),
		};
		buysStore.on("addBuy", () => {
			this.setState({
				allBuys: buysStore.allBuys(),
			});
		});
	}

	componentWillMount(){

	}

	render(){
		const { allBuys } = this.state;

		const buys = allBuys.map((aBuy, index) => {
			return ( <Buy key={ index } name={aBuy.name} description={aBuy.description} ></Buy> );
		});


		return (
			<div>
				<h1>Buys</h1>
				<ul>
					{ buys }
				</ul>
			</div>
		);

	}
}