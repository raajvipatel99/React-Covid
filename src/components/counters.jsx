import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    //console.log("props", this.props);
    return (
      <div>
        <button
          className="btn-sm btn-primary m-2"
          onClick={this.props.forReset}
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.forDelete}
            onInc={this.props.forInc}
            onDec={this.props.forDec}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
