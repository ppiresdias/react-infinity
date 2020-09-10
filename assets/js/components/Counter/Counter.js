import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

export default class Counter extends Component {
	constructor() {
		super();
		this.state = {
			status: 'manual',
			currentNumber: 0
		};
	}

	componentWillMount() {
		console.log('ComponentWillMount Started');
	}

	componentDidMount() {
		if (this.props.status == 'auto') {
			this.setState(
				{
					status: this.props.status
				},
				() => {
					this.counterRun();
				}
			);
		}
	}
	clickAdd = () => {
		this.setState(
			{
				currentNumber: this.state.currentNumber + 1
			},
			() => {
				console.log(this.state);
			}
		);
	};

	clickMinus = () => {
		this.setState({
			currentNumber: this.state.currentNumber - 1
		});
	};

	counterRun = () => {
		setInterval(() => {
			this.setState({
				currentNumber: this.state.currentNumber + 1
			});
		}, 1000);
	};

	render() {
		const styleButtons = {
			display: this.props.status == 'auto' ? 'none' : 'flex'
		};
		return (
			<div id="counter-comp" style={styleCounterComp}>
				<div className="number" style={styleNumber}>
					{this.state.currentNumber}
				</div>
				<div className="buttons" style={styleButtons}>
					<Button
						action="minus"
						hoverColor="red"
						fontColor="white"
						backgroundColor="black"
						trigger={this.clickMinus}
					>
						-
					</Button>
					<Button
						action="plus"
						hoverColor="purple"
						fontColor="black"
						backgroundColor="white"
						trigger={this.clickAdd}
					>
						+
					</Button>
				</div>
			</div>
		);
	}
}

const styleCounterComp = {
	maxWidth: '400px',
	width: '100%',
	margin: '0 auto'
};

const styleNumber = {
	border: '3px solid black',
	padding: '20px',
	fontSize: '2rem',
	fontWeight: '900',
	textAlign: 'center'
};
