import React, { Component } from "react";
import axios from "axios";
import Covid from "./covid";
class CovidApp extends Component {
  state = {
    cases: [],
    country: "",
  };
  getData = () => {
    axios
      .get("https://api.covid19api.com/live/country/" + this.state.country)
      .then((resolve) => {
        console.log(resolve.data);
        this.setState({ cases: resolve.data });
      })
      .catch((reject) => {
        console.log(reject.data);
      });
  };
  handleSelectCountry = (e) => {
    this.setState({ country: e.target.value }, () => this.getData());
  };
  render() {
    return (
      <div>
        <select
          className="form-control"
          style={{
            backgroundColor: "#C6E6F0",
            width: 500,
            height: 40,
            margin: 20,
            fontSize: 20,
          }}
          id="countries"
          onChange={this.handleSelectCountry}
          value={this.state.country}
        >
          <option value="">Select</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>

        {/*  <button
          className="btn-secondary btn-success btn-lg"
          style={{ margin: 20 }}
          onClick={this.getData}
        >
          Fetch Covid Data
      </button>*/}
        {this.state.country !== "" ? (
          <Covid cases={this.state.cases} country={this.state.country} />
        ) : (
          <span
            style={{
              fontSize: 30,
              color: "#AAC7D1",
              margin: 20,
            }}
          >
            Please Select a Country
          </span>
        )}
      </div>
    );
  }
}

export default CovidApp;
