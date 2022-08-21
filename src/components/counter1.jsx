import React, { Component } from "react";

class Counter1 extends Component {
  state = {
    count: this.props.value,
    badgeStyle: {
      fontSize: "20px"
    },
    style: {
      margin: "0",
      padding: "0"
    }
  };
  badgeChanger() {
    if (this.state.count == 0) {
      return "badge m-2 badge-danger";
    } else {
      return "badge m-2 badge-primary";
    }
  }
  btnIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  btnDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div>
        <h5>{this.props.name}</h5>
        <span className={this.badgeChanger()} style={this.state.badgeStyle}>
          {this.state.count}
        </span>
        <button className="btn btn-primary" onClick={this.btnIncrement}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={this.btnDecrement}>
          Decrement
        </button>
        {/* <ul>
          {this.state.items.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}
export default Counter1;
