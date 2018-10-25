import React from "react";
import { animated } from "react-spring";
import Entertainment from "./entertainment/entertainment";
import Home from "./home/home";
import Marathon from "./marathon/marathon";
import Panels from "./panels/panels";
import Other from "./other/other";

export const HomeComponent = ({ style, ...props }) => {
  return (
    <animated.div
      className="fill"
      style={{
        ...style,
        background: `hsl(10,90,50)`,
        overflow: "scroll"
      }}
    >
      <div
        className="gradientbackgroundSnow"
        style={{ width: "100%", height: "100%" }}
      >
        <Home />
      </div>
    </animated.div>
  );
};

export const PanelsComponent = ({ style, ...props }) => {
  return (
    <animated.div
      className="fill"
      style={{
        ...style,
        background: `hsl(10,90,50)`,
        overflow: "scroll"
      }}
    >
      <div
        className="gradientbackgroundSnow"
        style={{ width: "100%", height: "100%" }}
      >
        <Panels />
      </div>
    </animated.div>
  );
};

export const EntertainmentComponent = ({ style, ...props }) => {
  return (
    <animated.div
      className="fill"
      style={{
        ...style,
        background: `hsl(10,90,50)`,
        overflow: "scroll"
      }}
    >
      <div
        className="gradientbackgroundSnow"
        style={{ width: "100%", height: "100%" }}
      >
        <Entertainment />
      </div>
    </animated.div>
  );
};

export const MarathonComponent = ({ style, ...props }) => {
  return (
    <animated.div
      className="fill"
      style={{
        ...style,
        background: `hsl(10,90,50)`,
        overflow: "scroll"
      }}
    >
      <div
        className="gradientbackgroundSnow"
        style={{ width: "100%", height: "100%" }}
      >
        <Marathon />
      </div>
    </animated.div>
  );
};

export const OtherComponent = ({ style, ...props }) => {
  return (
    <animated.div
      className="fill"
      style={{
        ...style,
        background: `hsl(10,90,50)`
      }}
    >
      <div
        className="gradientbackgroundSnow"
        style={{ width: "100%", height: "100%" }}
      >
        <Other />
      </div>
    </animated.div>
  );
};
