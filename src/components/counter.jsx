import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    tags: ["Mahdi", "ali", "mahdi"],
    btnStyle: {
      fontWeight: "bold",
      boxShadow: "0 0 10px skyblue",
      backgroundColor: "#1176E9"
    }
  };
  counterFormat() {
    return this.state.counter == 0 ? "Zero" : this.state.counter;
  }
  badgeChager() {
    var st = this.state.counter;
    var text = "badge m-2 badge-";
    return st === 0 ? text + "warning" : text + "primary";
  }
  renderTag() {
    if (this.state.tags.length === 0) {
      return <h3>There are no item in the list</h3>;
    } else {
      return this.state.tags.map(item => <li key={item}>{item}</li>);
    }
  }
  btnIncrement = value => {
    console.log("productId: ", value);
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.badgeChager()}>{this.counterFormat()}</span>
        <button
          onClick={() => this.btnIncrement(this.state.counter)}
          style={this.state.btnStyle}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
        <ul>{this.renderTag()}</ul>
      </React.Fragment>
    );
  }
}
export default Counter;
