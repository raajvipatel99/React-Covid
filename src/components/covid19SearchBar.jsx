import React, { Component } from "react";
import "./covid19SearchBar.css";
class Covid19SearchBar extends Component {
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
    if (event.target.value == "Select") {
      this.setState({
        disabled: true,
        buttonMessage: "Select Video Type",
      });
    } else {
      this.setState({
        disabled: false,
        buttonMessage: "Get Videos",
      });
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };
  state = {
    term: "",
    disabled: true,
    buttonMessage: "Select Video Type",
  };
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "#F6F7F7",
            width: 1300,
            marginLeft: 25,
            marginBottom: 20,
          }}
        >
          <label style={{ margin: 20, fontSize: 20, fontWeight: "bold" }}>
            Video Search
          </label>
          <select
            style={{
              backgroundColor: "#d1d8e0",
              width: 500,
              height: 40,
              margn: 20,
              fontSize: 20,
            }}
            id="vtype"
            onChange={this.handleChange}
            value={this.state.term}
            name="video-search"
          >
            <option value="Select">Select</option>
            <option value="covid precautions">Covid Precautions</option>
            <option value="covid symptoms">Covid Symptoms</option>
            <option value="what is covid">What is Covid</option>
          </select>
          <button
            style={{
              margin: 20,
              fontSize: 18,
              fontWeight: "bold",
              borderRadius: 5,
            }}
            disabled={this.state.disabled}
            onClick={this.handleSubmit}
          >
            {this.state.buttonMessage}
          </button>
        </div>
      </div>
    );
  }
}

export default Covid19SearchBar;
