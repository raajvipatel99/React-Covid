import React, { Component } from "react";
import { Link } from "react-router-dom";
class Covid19Navbar extends Component {
  state = {};
  styles = {
    textDecoration: "none",
    margin: 0,
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    textShadow: "4px 4px 4px #808080",
    fontFamily: "cursive",
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">
          <img
            src={require("./covidLogo.png")}
            style={{
              height: 100,
              width: 150,
              borderRadius: 5,
              marginLeft: 10,
            }}
          />
          <span className="badge m-2 badge-light" style={this.styles}>
            COVID-19
          </span>
        </a>
        <div>
          <Link style={this.styles} to="/">
            Cases
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link style={this.styles} to="/map">
            Map
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link style={this.styles} to="/wiki">
            Wiki
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link style={this.styles} to="/videos">
            Videos
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link style={this.styles} to="/news">
            News
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        {/*} <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
    </form>*/}
      </nav>
    );
  }
}

export default Covid19Navbar;
