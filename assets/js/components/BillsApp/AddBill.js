import React, { Component } from 'react';

export default class AddBill extends Component {
	constructor() {
		super();
		this.state = {
			business_name: '',
			price: '',
			status: 'unpaid'
		};
	}

	inputChange = event => {
		const name = event.target.name;
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;

		this.setState(
			{
				[name]: value
			},
			() => {
				console.log(this.state);
			}
		);
	};

	handleSubmit = event => {
		event.preventDefault();
		// props are what get passed down
		// state is what is in this class
		this.setState({
			business_name: '',
			price: ''
		});
		this.props.saveBill(this.state);

		console.log(this.state);
	};

	render() {
		return (
			<section
				id="AddBill"
				className={`${this.props.addBillOpen == true ? 'active' : ''}`}
			>
				<div className="container">
					<h2>Add Bill</h2>
					<form>
						<div className="form-group">
							<label htmlFor="business_name">Business name</label>
							<input
								type="text"
								id="business_name"
								name="business_name"
								onChange={this.inputChange}
								value={this.state.business_name}
							></input>
						</div>
						<div className="form-group">
							<label htmlFor="price">Price</label>
							<input
								type="text"
								id="price"
								name="price"
								onChange={this.inputChange}
								value={this.state.price}
							></input>
						</div>
						<button type="submit" onClick={this.handleSubmit}>
							Save
						</button>
					</form>
				</div>
			</section>
		);
	}
}
