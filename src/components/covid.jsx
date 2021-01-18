import React, { Component } from "react";
//import axios from "axios";
class Covid extends Component {
  /*state = {
    cases: [],
  };
  componentDidMount() {
    axios
      .get("https://api.covid19api.com/summary")
      .then((resolve) => {
        console.log(resolve.data);
        this.setState({ cases: resolve.data.Countries });
      })
      .catch((reject) => {
        console.log(reject.data);
      });
  }*/
  render() {
    return (
      <div>
        <span className="badge badge-dark" style={{ fontSize: 25, margin: 20 }}>
          Province-wise cases of {this.props.country}
        </span>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Province</th>
              <th scope="col">Total Confirmed</th>
              <th scope="col">Total Deaths</th>
              <th scope="col">Active</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cases.map((c) => (
              <tr>
                <td>{c.Province}</td>
                <td> {c.Confirmed}</td>
                <td> {c.Deaths}</td>
                <td> {c.Active}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Covid;
