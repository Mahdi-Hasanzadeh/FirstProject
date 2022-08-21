import React, { Component } from "react";
import Counter1 from "./counter1.jsx";
class Counters extends React.Component {
  state = {
    nOCounters: [
      { id: 1, value: 0, name: "Hamburger" },
      { id: 2, value: 0, name: "pizza" },
      { id: 3, value: 0, name: "Coca Cola" },
      { id: 4, value: 0, name: "Sandwich" }
    ]
  };
  render() {
    return (
      <div>
        {this.state.nOCounters.map(item => (
          <Counter1 key={item.id} value={item.value} name={item.name}>
            {item.name}
          </Counter1>
        ))}
      </div>
    );
  }
}

export default Counters;
