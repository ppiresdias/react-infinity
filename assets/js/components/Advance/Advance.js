import React, { Component, Fragment } from 'react';

export default class Advanced extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		// return <div id="Advanced">Text</div>;
		//Fragment: directly return what's imbedded within parent component without having to add a parent element
		// use fragment tag to pass in props, keys, properties, etc.
		return <Fragment>Text</Fragment>;
	}
}
