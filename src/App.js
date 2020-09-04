import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      joke: null,
      isFetchingJoke: false
    };

    this.onTellJoke = this.onTellJoke.bind(this);
  }
  componentDidMount() {
    this.fetchjoke();
  }

  onTellJoke() {
    this.fetchjoke();
  }

  fetchjoke() {
    this.setState({ isFetchingJoke: true });
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          joke: json.joke,
          isFetchingJoke: false
        });
      });
  }

  render() {
    return (
      <div className="App">
        <button disabled={this.state.isFetchingJoke} onClick={this.onTellJoke}>
          Tell Me a joke
        </button>
        <p>
          {this.state.isFetchingJoke ? "Loading Joke ..." : this.state.joke}
        </p>
      </div>
    );
  }
}
