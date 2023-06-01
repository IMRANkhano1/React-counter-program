import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  Changenum() {
    this.setState({
      num: this.state.num + 1,
    });
  }

  render() {
    return (
      <div>
        <h3>no of clicks - {this.state.num}</h3>
        <button onClick={() => this.Changenum()}>Count</button>
      </div>
    );
  }
}

export default Counter;