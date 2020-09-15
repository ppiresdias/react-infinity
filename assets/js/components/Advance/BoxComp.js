import React, { Component, Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BoxComp = () => {
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
		<div
			className="Box"
			style={{
				width: '100%',
				height: '200px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: 'blue',
				color: 'white'
			}}
		>
			<h1>This is a blue box</h1>
		</div>
	);
};

export default BoxComp;
