import React, { Component } from 'react';

export default class TodoOne extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todo: '',
			warning: null,
		};
	}

	handleInput = (e) => {
		const inputValue = e.target.value;
		const newWarning = inputValue.includes('.js') ? 'You Need JavaScript to complete the task. Do you have it?' : null;

		this.setState(() => ({
			todo: inputValue,
			warning: newWarning,
		}));
	};

	render() {
		const { todo, warning } = this.state;
		return (
			<div style={{ border: '1px solid blue' }}>
				<h3>Todo One: Using State</h3>

				{todo}
				<br />

				<input type='text' onChange={this.handleInput} />
				<br />

				<h2>{warning || 'Good Choice'}</h2>
			</div>
		);
	}
}
