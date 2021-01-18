import React, { Component } from "react";
class AddItem extends Component {
  state = {
    name: "",
  };
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.props.handleForSubmit(this.state.name);
  };
  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <div className="form-inline">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Item to Add"
            style={{ width: 1200, margin: 10 }}
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button
            className="btn-secondary btn-m2 btn-success m-2"
            style={{ height: 36, width: 60, borderRadius: 5 }}
            //onClick={() => this.props.handleSubmit(this.state.name)}
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default AddItem;
