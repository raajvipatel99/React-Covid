import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
class Covid19DoughnutChart extends Component {
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
          backgroundColor: [
            "rgba(255,99,132,1)",
            "rgba(255,205,86,1)",
            "rgba(54,162,235,1)",
            "rgba(255,159,64,1)",
            "rgba(153,102,255,1)",
          ],
        },
      ],
    };
    let newOptions = {
      title: {
        display: true,
        text: "Cases of top 5 countries",
      },
    };
    this.setState({ data: newData, options: newOptions });
    console.log("changedddddd", this.state.data);
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
        console.log("**********RESPONSE**********", response);
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
        <Doughnut data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default Covid19DoughnutChart;
