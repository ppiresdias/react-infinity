import React, { Component } from 'react';
import update from 'immutability-helper';

export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			background: 'black',
			names: ['Bryan', 'Patty', 'Acosta', 'Pires'],
			both: [],
			children: ['Owen', 'Sabrina', 'Caleb'],
			user: {
				name: 'Patty',
				age: 23,
				location: 'NB',
				grades: {
					math: 'A',
					english: 'B+',
					science: 'C-',
					gym: 'F'
				}
			}
		};
	}

	clickBtn = () => {
		console.log(this.state);

		const newChildren = update(this.state.children, {
			$splice: [[1, 1]] // remove position 1 to 1
		});

		const newState = update(this.state, {
			children: { $set: newChildren }
		});

		this.setState(newState, () => {
			console.log(this.state);
		});
		// console.log('Clicked btn');
	};

	changeToActive = () => {
		if (this.state.children[1] !== 'Sabrina') {
			return 'active';
		} else {
			return '';
		}
	};

	render() {
		return (
			<div id="immutable-comp">
				<div className={`box ${this.changeToActive()}`}></div>
				<div className="button" onClick={this.clickBtn}>
					Press Me
				</div>
			</div>
		);
	}
}
