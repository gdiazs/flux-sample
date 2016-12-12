import React, {Component} from 'react';
import { Link } from 'react-router';
export default class Header extends Component{



	render(){
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#" >POS</a>
					</div>

					<ul className="nav navbar-nav">
						<li><Link to="/" >Buys</Link></li>
						<li><Link to="sales" >Sales</Link></li>
						<li><Link to="settings" >Settings</Link></li>
					</ul>
				</div>

			</nav>
		);

	}
}