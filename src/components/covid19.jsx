import React, { Component } from "react";
import { Link } from "react-router-dom";
import Covid19LineChart from "./covid19LineChart";
import Covid19BarChart from "./covid19BarChart";
import Covid9Navbar from "./covid19Navbar";
import Covid19Navbar from "./covid19Navbar";
class Covid19 extends Component {
  state = {
    total: "",
    recovered: "",
    deaths: "",
    country: "USA",
    cntry: "",
  };
  handleChange = (e) => {
    this.setState({
      country: e.target.value,
    });
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
          Country-wise Stats &nbsp;&nbsp;
          <Link
            style={this.ishtyles}
            to="/totalCases"
            className="badge m-2 badge-warning"
          >
            View Global Stats
          </Link>
        </div>
        <div style={this.styles}>
          <div>
            <input
              type="text"
              value={this.state.country}
              onChange={this.handleChange}
              style={{ fontSize: 20, margin: 15 }}
            />
            &nbsp;
            <button onClick={this.update} style={{ fontSize: 20, margin: 10 }}>
              Fetch
            </button>
          </div>
          <div style={{ fontSize: 30, margin: 10 }}>
            <span className="badge m-2 badge-secondary">Country</span>
            <span className="badge m-2 badge-primary">{this.state.cntry}</span>
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
          <div>
            <Covid19LineChart />
          </div>
        </div>
        <div style={this.styles}>
          <Covid19BarChart />
        </div>
      </div>
    );
  }
  update = () => {
    fetch(
      `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${this.state.country}`,
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
          total: resp.latest_stat_by_country[0].total_cases,
          recovered: resp.latest_stat_by_country[0].total_recovered,
          deaths: resp.latest_stat_by_country[0].total_deaths,
          cntry: resp.country,
        });
      })
      .catch((err) => {
        console.log("**********ERROR**********", err);
        window.alert(err);
      });
  };
}

export default Covid19;
