import React, { Component } from 'react';

class App extends Component {

	state = {
		counter: 0;
	}

	increment = () => {
		let { counter } = this.state;
		counter += 1;
		this.setState({
			counter;
		})
	}

	render() {
		let { counter } = this.state;
		return(
			<div>
				<h1>Testing components</h1>
				<h2>Counter: { counter } </h2>
				<button onClick= {this.increment}>Increment</button>

			</div>
		)
	}
}

export default App;