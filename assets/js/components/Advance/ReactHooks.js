import React, { Component, Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BoxComp from './BoxComp';

const ReactHooks = () => {
	const [state, useState] = useState({
		name: 'Patty'
	});
	// console.log(useState({}));
	const clickedButton = () => {
		setState({
			name: 'Bryan'
		});
	};

	const 
	return (
		<div className="HooksApp">
			<h1>Working on Hooks with {state.name}</h1>
			<div className="button" onClick={clickedButton}>
				Change Name
			</div>
			<BoxComp />
		</div>
	);
};

export default ReactHooks;
