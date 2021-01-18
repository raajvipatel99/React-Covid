import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import AddItem from "./components/addItem";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5, name: "Burger" },
      { id: 2, value: 0, name: "Pizza" },
      { id: 3, value: 0, name: "Fries" },
    ],
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleInc = (counter) => {
    const x = [...this.state.counters];
    const index = x.indexOf(counter);
    x[index] = { ...counter };
    x[index].value++;
    this.setState({ counters: x });
    //console.log(this.state.counters[0]);
  };
  handleDec = (counter) => {
    if (counter.value !== 0) {
      const x = [...this.state.counters];
      const index = x.indexOf(counter);
      x[index] = { ...counter };
      x[index].value = x[index].value - 1;
      this.setState({ counters: x });
      //console.log(this.state.counters[0]);
    }
  };
  handleDelete = (deleteId) => {
    //console.log("called", deleteId);
    const newCounters = this.state.counters.filter((c) => c.id !== deleteId);
    this.setState({ counters: newCounters });
    /*const counters = this.state.counters.filter((c) => c.id !== deleteId);
    this.setState({ counters });*/
    //if both the names(old and new) are same (i.e. counters), you can write it only once
  };
  handleSubmit = (name) => {
    const newCounters = {
      id: Math.floor(Math.random() * Math.floor(50)),
      value: 5,
      name: name,
    };
    this.setState({ counters: [...this.state.counters, newCounters] });
    //console.log(newCounters);
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <AddItem handleForSubmit={this.handleSubmit} />
        <main className="container">
          <Counters
            forDelete={this.handleDelete}
            forInc={this.handleInc}
            forDec={this.handleDec}
            forReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
