import React, { Component } from "react";
import Covid19Navbar from "./covid19Navbar";
class Covid19News extends Component {
  state = {
    news: [],
  };
  componentDidMount() {
    fetch(
      "https://covid-19-news.p.rapidapi.com/v1/covid?lang=en&media=True&q=covid-19",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
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
          news: resp.articles,
        });
      })
      .catch((err) => {
        console.log("**********ERROR**********", err);
      });
  }
  //reduce news to 10
  makeItTen = () => {
    let newss = [];
    for (let i = 1; i <= 10; i++) {
      newss[i - 0] = this.state.news[i];
    }
    this.setState({
      news: newss,
    });
  };
  render() {
    return (
      <div>
        <Covid19Navbar />
        {this.state.news.map((subNews) => (
          <div
            style={{
              height: 350,
              width: 1300,
              backgroundColor: "#F6F7F7",
              margin: 30,
              borderRadius: 5,
            }}
          >
            <div style={{ margin: 10 }}>
              <h2> {subNews.title}</h2>
              <hr></hr>
              <h4>
                <a href={subNews.link}>{subNews.link}</a>
              </h4>
              <p style={{ fontWeight: "bold" }}>{subNews.summary}</p>
              <p style={{ fontWeight: "bold" }}>
                {subNews.author} , {subNews.rights}
              </p>
              <p style={{ fontWeight: "bold" }}>{subNews.published_date}</p>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  }
}

export default Covid19News;
