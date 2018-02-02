import React, { Component } from "react";
import Header from "./components/Header";
import SelectorBtn from "./components/Selector-Button"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SelectorBtn />
      </div>
    );
  }
}

export default App;
