import React, { Component, Fragment, useState } from 'react';
import PropTypes from 'prop-types';

// export default class ReactHooks extends Component {
// 	constructor() {
// 		super();
// 	}

// 	render() {
// 		return (
// 			<div id="Hooks-app">
// 				<h1>Working on hooks</h1>
// 			</div>
// 		);
// 	}
// }

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
	return (
		<div className="HooksApp">
			<h1>Working on Hooks with {state.name}</h1>
			<div className="button" onClick={clickedButton}>
				Change Name
			</div>
		</div>
	);
};

export default ReactHooks;
