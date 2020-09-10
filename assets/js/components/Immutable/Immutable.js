import React, { Component } from 'react';

// create new array and add a new name to the new array without changing the original array
// let names = ['Bryan', 'Patty', 'Acosta', 'Pires'];
// let newName = [...names, 'Dias'];

// console.log(newName);

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

		// Add name
		// const newState = {
		// 	names: [...this.state.names, 'Dias']
		// };

		// Remove name
		// const newState = {
		// 	names: this.state.names.filter(name => name !== 'Pires')
		// };

		// Merge 2 arrays
		// const newState = { both: [...this.state.names, ...this.state.children] };

		// Sort array
		const newState = { names: this.state.names.slice().sort() };

		// const newGrade = {
		// 	...this.state.user.grades,
		// 	math: 'A+'
		// };
		// Object.assign({}, this.state.user.grades, {
		// 	math: 'A+'
		// });

		// const newUser = Object.assign({}, this.state.user, {
		// 	name: 'Bryan',
		// 	grades: newGrade
		// });

		this.setState(newState, () => {
			console.log(this.state);
		});
		// console.log('Clicked btn');
	};

	changeToActive = () => {
		if (this.state.names[0] == 'Acosta') {
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
