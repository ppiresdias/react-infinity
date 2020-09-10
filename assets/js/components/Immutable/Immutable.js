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

		const newGrades = update(this.state.user.grades, {
			$merge: {
				art: 'B-',
				biology: 'D'
			}
		});
		const newState = update(this.state, {
			user: {
				grades: { $set: newGrades }
			}
		});
		this.setState(newState, () => {
			console.log(this.state);
		});
		// console.log('Clicked btn');
	};

	changeToActive = () => {
		if (this.state.user.grades.biology == 'D') {
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
