import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(x, y) {
    //console.log("x", x);
    //console.log("y", y);
  }
  state = {
    //count: this.props.counter.value,
    //imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 20,
  };

  render() {
    return (
      <div>
        {/* <span style={this.styles} className={this.colorHandle()}>
           <img src={this.state.imageUrl} /> 
        <h1>Heyya There!</h1> 
          <span>{this.formatCount()}</span>
        </span>
        <button className="btn btn-secondary btn-sm">+</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {this.state.tags.length === 0 && "Please add tags!"}
        {this.renderTags()}
        {this.props.children}*/}
        <span className="badge m-2 badge-secondary" style={{ fontSize: 20 }}>
          {this.props.counter.name}
        </span>
        <span style={this.styles} className={this.colorHandle()}>
          <span>{this.formatCount()}</span>
        </span>
        <button
          onClick={() => this.props.onInc(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDec(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  handleIncrement = () => {
    let x = this.state.count;
    x++;
    this.setState({ count: x });
    /*this.state.count++;
    this.setState({ count: this.state.count });*/
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No Tags!</p>;
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  colorHandle() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
