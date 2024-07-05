import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handledec = this.handledec.bind(this);
    this.handleinc = this.handleinc.bind(this);
  }

  handledec() {
    this.setState((cur) => {
      return { count: cur.count - 1 };
    });
  }

  handleinc() {
    this.setState((cur) => {
      return { count: cur.count + 1 };
    });
  }

  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handledec}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleinc}>+</button>
      </div>
    );
  }
}

export default Counter;
