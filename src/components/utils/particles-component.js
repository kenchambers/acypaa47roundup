import React, { Component } from "react";
import Particles from "react-particles-js";
import { particlesConfig } from "./particles-json";

class ParticlesComponent extends Component {
  componentDidMount() {}
  render() {
    const { width, height } = this.props;

    return (
      <div>
        <Particles width={width} height={height} params={particlesConfig} />
      </div>
    );
  }
}

export default ParticlesComponent;
