import React, { Component } from "react";
import Home from "./components/views/home/home";
import Panels from "./components/views/panels/panels";
import Marathons from "./components/views/marathon/marathon";
import Entertainment from "./components/views/entertainment/entertainment";
import Other from "./components/views/other/other";
import logo from "./logo.svg";
import "./App.css";

import ParticlesComponent from "./components/utils/particles-component";
import MainRouter from "./router";

import {
  Spring,
  animated,
  interpolate,
  Parallax,
  Transition,
  config
} from "react-spring";

class App extends Component {
  state = {
    render: false,
    activeButton: null
  };

  setActive = key => {
    this.setState({
      activeButton: key
    });
  };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Accypaa 47 Program</h1>
        </header> */}
        <ParticlesComponent width="100vw" height="100vh" />
        <MainRouter
          activeButton={this.state.activeButton}
          setActive={this.setActive}
        />
      </div>
    );
  }
}

export default App;
