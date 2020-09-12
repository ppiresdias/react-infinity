/* REACT Manual/Automatic Counter Project */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Counter from './components/Counter/Counter';
// import Immutable from './components/Immutable/Immutable';
import BillsApp from './components/BillsApp/BillsApp';
import Advance from './components/Advance/Advance';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="app">
				{/* <Counter status="manual" /> */}
				{/* <BillsApp></BillsApp> */}
				<Advance></Advance>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
