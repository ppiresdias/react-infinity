/* REACT Manual/Automatic Counter Project */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Counter from './components/Counter/Counter';
// import Immutable from './components/Immutable/Immutable';
import BillsApp from './components/BillsApp/BillsApp';
import Advance from './components/Advance/Advance';
import ReactHooks from './components/Advance/ReactHooks';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="container">
				{/* <Counter status="manual" /> */}
				{/* <BillsApp></BillsApp> */}
				{/* <Advance></Advance> */}
				<ReactHooks />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
