import EventEmitter from 'events';

class BuysStore extends EventEmitter{

	constructor(){
		super();
		this.buys = [
			{
				id: 1000,
				name: "Laptop",
				description: "A nice Laptop",
				category: "pc"
			},
		];

	}

	allBuys(){

		

		return this.buys;
	}

	addBuy(name, description){
		this.buys.push({
			name, 
			description

		});
		this.emit("addBuy");
	}


}


const buysStore = new BuysStore;
window.buysStore = buysStore;
export default buysStore;