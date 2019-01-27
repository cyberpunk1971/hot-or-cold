import React, { Component } from 'react'

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevGuesses: [],
      userGuess: "",
      answer: Math.floor(Math.random() * 100) + 1,
      response: "",
      backgroundColor: "white"
    };
    console.log(this.state.answer);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  restartGame = () => {
    this.setState({
      prevGuesses: [],
      userGuess: "",
      answer: Math.floor(Math.random() * 100) + 1,
      response: "",
      backgroundColor: "white"
    })
  }

  // Save previous guesses to an array
  saveGuess = () => {
    this.setState({
      prevGuesses: [...this.state.prevGuesses, `${this.state.userGuess}, `]
    })
  }

  onSubmit = (e) => {
    // console.log(this.userGuess);
    e.preventDefault();

    const parsed = parseInt(this.state.userGuess);
    const difference = Math.abs(parsed - this.state.answer);
    if (difference >= 50) {
      this.setState({ response: "You're ice cold!" });
    } else if (difference >= 25) {
      this.setState({ response: "You're cold!" });
    } else if (difference >= 15) {
      this.setState({ response: "You're warm!" })
    } else if (difference >= 5) {
      this.setState({ response: "You're Hot!" })
    } else if (parsed === this.state.answer) {
      this.setState({ response: "You guessed it!" });
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          <button onClick={() => this.restartGame()}>Restart</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input type="number" name="userGuess" value={this.state.userGuess} onChange={this.onChange}></input>
          <button type="submit" onClick={(e) => this.saveGuess()}
          >Submit</button>
        </form>
        <div>
          Previous Guesses <br />
          {this.state.prevGuesses}
        </div>
        <div>
          {this.state.response}
        </div>
      </div>
    )
  }
}
