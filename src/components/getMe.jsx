import React, { Component } from "react";
import axios from "axios";
class GetMe extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resolve) => {
        console.log(resolve.data);
        this.setState({ posts: resolve.data });
      })
      .catch((reject) => {
        console.log(reject.data);
      });
  }
  render() {
    return (
      <div>
        List of Posts:
        <ul>
          {this.state.posts.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GetMe;
