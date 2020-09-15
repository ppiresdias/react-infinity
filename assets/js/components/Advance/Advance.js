import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

class Provider extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Patty',
			clicked: false
		};
	}

	clickedButton = () => {
		this.setState({
			clicked: !this.state.clicked
		});
	};

	render() {
		return (
			<AppContext.Provider
				value={{ globalState: this.state, clickedButton: this.clickedButton }}
			>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
export default class Advanced extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Patty&Bryan'
		};
	}

	render() {
		return (
			<Provider>
				<div id="advancedFeatures">
					<GrandComp />
				</div>
			</Provider>
		);
	}
}

const GrandComp = props => {
	return (
		<div className="GrandComp">
			<FatherComp />
		</div>
	);
};

const FatherComp = props => {
	return (
		<div className="FatherComp">
			<ChildComp />
		</div>
	);
};

const ChildComp = props => {
	return (
		// <div className="ChildComp">
		// 	<AppContext.Consumer>
		// 		{context => <>{context.globalState.name}</>}
		// 	</AppContext.Consumer>
		// </div>

		// or
		<AppContext.Consumer>
			{context => (
				<>
					<div
						className={`ChildComp ${
							context.globalState.clicked === true ? 'active' : ''
						}`}
					>
						{context.globalState.name}
						<div className="button" onClick={context.clickedButton}>
							Save
						</div>
					</div>
				</>
			)}
		</AppContext.Consumer>
	);
};
