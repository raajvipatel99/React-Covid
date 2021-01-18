import React, { Component } from "react";
import Covid19Navbar from "./covid19Navbar";
import Covid19DoughnutChart from "./covid19DoughnutChart";
import { Link } from "react-router-dom";
class Covid19TotalStats extends Component {
  state = {
    total: "",
    recovered: "",
    deaths: "",
    active: "",
  };
  ishtyles = {
    textDecoration: "none",
    marginTop: 20,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    float: "right",
  };
  styles = {
    width: 600,
    height: 350,
    padding: 10,
    borderWidth: 0,
    borderStyle: "solid",
    borderRadius: 3,
    margin: 30,
    backgroundColor: "#F6F7F7",
    display: "inline-block",
    verticalAlign: "top",
    boxShadow: " 2px 4px 4px 4px #A9A9A9 ",
  };
  componentDidMount() {
    fetch(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key":
            "8c75b51e8fmsh93b28d636cae912p1a08acjsnd6401eecb069",
        },
      }
    )
      .then((response) => {
        console.log("**********RESPONSE**********", response);
        return response.json();
      })
      .then((resp) => {
        this.setState({
          total: resp.total_cases,
          recovered: resp.total_recovered,
          deaths: resp.total_deaths,
          active: resp.active_cases,
        });
      })
      .catch((err) => {
        console.log("**********ERROR**********", err);
        //window.alert(err);
      });
  }
  render() {
    return (
      <div>
        <Covid19Navbar />
        <div
          style={{
            margin: 20,
            height: 50,
            width: 1300,
            fontWeight: "bold",
            fontSize: 35,
            textAlign: "center",
            backgroundColor: "#F7F7F7",
          }}
        >
          Global Stats &nbsp;&nbsp;
          <Link
            style={this.ishtyles}
            to="/"
            className="badge m-2 badge-warning"
          >
            View Country-wise Stats
          </Link>
        </div>
        <div style={this.styles}>
          <div style={{ fontSize: 30, margin: 10 }}>
            <span className="badge m-2 badge-secondary">Active</span>
            <span className="badge m-2 badge-primary">{this.state.active}</span>
          </div>
          <div style={{ fontSize: 30, margin: 10 }}>
            <span className="badge m-2 badge-secondary">Total</span>
            <span className="badge m-2 badge-primary">{this.state.total}</span>
          </div>
          <div style={{ fontSize: 30, margin: 10 }}>
            <span className="badge m-2 badge-secondary">Recovered</span>
            <span className="badge m-2 badge-primary">
              {this.state.recovered}
            </span>
          </div>
          <div style={{ fontSize: 30, margin: 10 }}>
            <span className="badge m-2 badge-secondary">Deaths</span>
            <span className="badge m-2 badge-primary">{this.state.deaths}</span>
          </div>
        </div>
        <div style={this.styles}>
          <Covid19DoughnutChart />
        </div>
      </div>
    );
  }
}

export default Covid19TotalStats;
