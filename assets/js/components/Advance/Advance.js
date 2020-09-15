import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Advanced extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Patty'
		};
	}

	render() {
		return (
			<div id="GrandComp">
				<GrandComp name={this.state.name} />
			</div>
		);
	}
}

const GrandComp = props => {
	return (
		<div className="GrandComp">
			<FatherComp name={props.name} />
		</div>
	);
};

const FatherComp = props => {
	return (
		<div className="FatherComp">
			<ChildComp name={props.name} />
		</div>
	);
};

const ChildComp = props => {
	return <div className="ChildComp">{props.name}</div>;
};
