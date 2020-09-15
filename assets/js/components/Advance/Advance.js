import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

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
				<ChildComp total={6} />
			</div>
		);
		//Fragment: directly return what's imbedded within parent component without having to add a parent element
		// use fragment tag to pass in props, keys, properties, etc.
		// return <Fragment>Text</Fragment>;
	}
}

const ChildComp = props => {
	return <div>{props.total}</div>;
};

// pass in default props in case no props are passed down
ChildComp.defaultProps = {
	total: 3
};

// ensure total is a number, error if its another data type
// useful for debugging
ChildComp.propTypes = {
	total: PropTypes.number
};
