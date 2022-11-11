import React, { Component } from 'react'

class Count extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
		}
		this.increment =  this.increment.bind(this)
		this.decrement =  this.decrement.bind(this)
	}

	increment() {
		this.setState({
			count: this.state.count + 1
		})
	}

	decrement() {
		this.setState({
			count: this.state.count - 1
		})
	}

	render() {
		const { count } = this.state
		let style = {
			countStyle: { fontSize: '10em', margin: 0 },
			buttonStyle: {
				fontSize: "1.2em",
				padding: "10px",
				borderRadius: "10px",
				margin: "5px"
			}
		}
		return (
      <>
        <p style={style.countStyle}>{count}</p>
        <button style={style.buttonStyle} onClick={this.increment}>
          Increment
        </button>
				<button style={style.buttonStyle} onClick={this.decrement}>
          Decrement
        </button>
      </>
    );
	}
}

export default Count