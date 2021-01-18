import React, { Component } from "react";
import axios from "axios";
class PostMe extends Component {
  state = {
    userId: "",
    title: "",
    body: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state.posts)
      .then((resolve) => {
        console.log(resolve.data);
        this.setState({ posts: resolve.data });
      })
      .catch((reject) => {
        console.log(reject.data);
      });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          UserId:
          <input
            type="text"
            name="userId"
            value={this.state.userId}
            onChange={this.handleChange}
          />
          Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          Body:
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostMe;
