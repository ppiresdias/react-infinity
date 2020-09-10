/* REACT Manual/Automatic Counter Project */
/* React Infinity Course CodingPhase.com */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter/Counter';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className={'container'}>
				<Counter status="manual" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
