import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class Covid19BarChart extends Component {
  state = {
    /*country: [],
    cases: [],*/
    data: {},
    options: {},
  };
  updateChart = (cn, cs) => {
    let newData = {
      labels: [...cn],
      datasets: [
        {
          label: "Cases vs Country",
          data: [...cs],
          backgroundColor: ["pink", "green", "orange", "red", "purple"],
        },
      ],
    };
    let newOptions = {
      title: {
        display: true,
        text: "Bar Chart",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 500000,
              max: 6000000,
            },
          },
        ],
      },
    };
    this.setState({ data: newData, options: newOptions });
    //console.log("changedddddd", this.state.data);
  };
  componentDidMount() {
    fetch(
      `https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php`,
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
        //console.log("**********RESPONSE**********", response);
        return response.json();
      })
      .then((resp) => {
        let arrCountry = [];
        let arrCases = [];
        let temp;
        for (let i = 0; i < 5; i++) {
          arrCountry.push(resp.countries_stat[i].country_name);
          temp = resp.countries_stat[i].cases.replace(/,/g, "");
          arrCases.push(temp);
        }
        /*   arrCases = resp.countries_stat;
        console.log("ALLLLLL", arrCases);
        let max = Math.max(arrCases.cases);
        console.log("MAAAXXXX", max);*/
        /*this.setState({
          /*country: resp.countries_stat[0].country_name,
          cases: resp.countries_stat[0].cases,
          country: arrCountry,
          cases: arrCases,
        });*/

        this.updateChart(arrCountry, arrCases);
        //console.log("hhheeeyyy", resp);
      })
      .catch((err) => {
        console.log("**********ERROR**********", err);
        //window.alert(err);
      });
  }
  render() {
    return (
      <div>
        <Bar data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default Covid19BarChart;
