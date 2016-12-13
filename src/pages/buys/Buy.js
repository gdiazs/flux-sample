import React, {Component} from 'react';

export default class Buy extends Component{




	render(){

		return (

			<li>
				Name:{this.props.name}<br/>Description:{this.props.description}
			</li>
		);

	}
}