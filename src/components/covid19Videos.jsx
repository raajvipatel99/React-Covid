import React, { Component } from "react";
import Covid19Youtube from "./covid19Youtube";
import Covid19VideoList from "./covid19VideoList";
import Covid19VideoDetail from "./covid19VideoDetail";
import Covid19SearchBar from "./covid19SearchBar";
import Covid19Navbar from "./covid19Navbar";
const KEY = "AIzaSyBG557-Im5qJ_KX63kQpo9a0mWRv_Q-qIM";
//AIzaSyBG557-Im5qJ_KX63kQpo9a0mWRv_Q-qIM
//AIzaSyDaP8ddPy0O347Ek9N7-QyBAmV6OLB-8_U
class Covid19Videos extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  toggleButton = () => {};
  handelSubmit = async (searchMe) => {
    const response = await Covid19Youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: searchMe,
      },
    })
      .then((response) => {
        console.log("*******VIDEOS*******", response.data.items);
        this.setState({
          videos: response.data.items,
        });
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  handleVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };
  render() {
    return (
      <>
        <Covid19Navbar />
        <div style={{ marginTop: "1em" }}>
          <Covid19SearchBar handleFormSubmit={this.handelSubmit} />
          <div>
            <div>
              <div
                style={{
                  width: 650,
                  marginLeft: 20,
                  display: "inline-block",
                }}
              >
                <Covid19VideoDetail
                  style={{ float: "left" }}
                  video={this.state.selectedVideo}
                />
              </div>
              <div
                style={{
                  float: "right",
                  marginRight: 0,
                }}
              >
                <Covid19VideoList
                  handleVideoSelect={this.handleVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Covid19Videos;
