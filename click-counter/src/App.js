import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showError: false
    };
  }

  renderErrorNumberBelow0 = () => {
    if (!this.state.showError) return;

    return (
      <h1 style={{ color: "red" }} data-test="counter-below-0">
        Your counter can't below 0
      </h1>
    );
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        {this.renderErrorNumberBelow0()}
        <button
          onClick={() => {
            this.setState({
              showError: false,
              counter: this.state.counter + 1
            });
          }}
          data-test="increment-button"
        >
          Increment
        </button>
        <button
          onClick={() => {
            if (this.state.counter <= 0) {
              this.setState({ showError: true });
              return;
            }

            this.setState({
              showError: false,
              counter: this.state.counter - 1
            });
          }}
          data-test="decrement-button"
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
