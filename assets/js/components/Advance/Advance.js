import React, { Component, Fragment } from 'react';

console.dir(document.getElementById('testing'));

export default class Advanced extends Component {
	constructor() {
		super();
		this.state = {};
		this.bryanRef = React.createRef();
	}

	componentDidMount() {
		// console.dir(document.getElementById('bryan'));
		console.dir(this.bryanRef);
	}

	render() {
		return (
			<div id="Advanced">
				<div ref={this.bryanRef}>Bryan</div>
			</div>
		);
		//Fragment: directly return what's imbedded within parent component without having to add a parent element
		// use fragment tag to pass in props, keys, properties, etc.
		// return <Fragment>Text</Fragment>;
	}
}
