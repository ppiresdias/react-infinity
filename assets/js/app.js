/* REACT Manual/Automatic Counter Project */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Counter from './components/Counter/Counter';
import Immutable from './components/Immutable/Immutable';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className={'container'}>
				{/* <Counter status="manual" /> */}
				<Immutable />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
