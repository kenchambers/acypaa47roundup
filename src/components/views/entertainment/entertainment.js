import React from "react";
import {
  Parallax,
  ParallaxLayerSpring,
  animated,
  Spring,
  config,
  ParallaxLayer,
  Trail,
  Transition
} from "react-spring";
import { entertainmentData } from "../../../program-data";
import { ListGroupItem, ListGroup } from "react-bootstrap";

class ExpandedListItem extends React.Component {
  state = {
    toggle: false
  };

  onClick = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  render() {
    const toggle = this.state.toggle;

    const { name, length, location, time, description } = this.props.item;
    return (
      <div onClick={this.onClick}>
        <Spring
          native
          from={{
            height: 10
          }}
          to={{
            height: toggle ? 500 : 50,
            width: "100%",
            backgroundColor: toggle ? "#e6e9f0" : "#fff"
          }}
          toggle={this.toggle}
        >
          {styles => (
            <animated.div style={styles}>
              {!toggle && (
                <div>
                  <h3>{time}</h3>
                  <div>{name}</div>
                </div>
              )}
              {toggle && (
                <div>
                  <div className="expanded-list-item-container">
                    <h3>{time}</h3>
                    <h3 style={{ color: "#f700af" }}>{name}</h3>
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-6">
                          <h4>Location:</h4>
                        </div>
                        <div className="col-xs-6">
                          <h4>{location}</h4>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-6">
                        <h4>duration:</h4>
                      </div>
                      <div className="col-xs-6">
                        <h4>{length}</h4>
                      </div>
                    </div>
                    <div />

                    <div>
                      <div>
                        <h2>Description:</h2>
                      </div>
                      <div>{description}</div>
                    </div>
                  </div>
                </div>
              )}
            </animated.div>
          )}
        </Spring>
      </div>
    );
  }
}

class ListItem extends React.Component {
  state = {
    expanded: false
  };

  onClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };
  render() {
    return <ExpandedListItem item={this.props.item} />;
  }
}

const LoadAnimatedComponent = ({ day }) => {
  let eventKeys = entertainmentData[day].map(item => item.id.toString());

  return (
    <div style={{ position: "relative", zIndex: 9999 }} className="mainHeader">
      <Trail native from={{ opacity: 0 }} to={{ opacity: 1 }} keys={eventKeys}>
        {entertainmentData[day].map(item => styles => (
          <animated.div style={styles}>
            <div>
              <ListItem item={item} />
            </div>
          </animated.div>
        ))}
      </Trail>
    </div>
  );
};

const BigEventParallaxLayer = ({
  offset,
  speed,
  picUrl,
  gradientBackground,
  title,
  titleColor,
  descriptionOne,
  descriptionTwo,
  location,
  time
}) => {
  return (
    <Parallax.Layer factor={1} offset={offset} speed={speed}>
      <div>
        <img
          style={{
            width: "calc(100% - 40px)"
          }}
          src={picUrl}
        />
        <div
          className="dropShadow"
          style={{
            marginLeft: 20,
            marginRight: 20,
            backgroundImage: gradientBackground,
            lineHeight: 1,
            color: "#fff",
            textAlign: "left"
          }}
        >
          <div className="row">
            <div className="col-xs-6">
              <h1 style={{ color: "#23ccea" }}>{title}</h1>
              <span>{descriptionTwo}</span>
            </div>
            <div className="col-xs-6">
              <span>{descriptionTwo}</span>
              <h4>Location: {location}</h4>
              <h5>Time: {time}</h5>
            </div>
          </div>
        </div>
      </div>
    </Parallax.Layer>
  );
};

export default class Entertainment extends React.Component {
  state = {
    selectedDay: 1
  };
  render() {
    return (
      <div>
        <h1> Entertainment </h1>
        <div>
          <div className="row">
            <div className="col-xs-4">
              <button onClick={() => this.setState({ selectedDay: 1 })}>
                Thursday
              </button>
            </div>
            <div className="col-xs-4">
              <button onClick={() => this.setState({ selectedDay: 2 })}>
                Friday
              </button>
            </div>
            <div className="col-xs-4">
              <button onClick={() => this.setState({ selectedDay: 3 })}>
                Saturday
              </button>
            </div>
          </div>
        </div>

        {this.state.selectedDay === 1 && (
          <Spring
            native
            config={config.molasses}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            {props => (
              <animated.div style={props} className="thursday">
                <Parallax native pages={2} vertical scrolling={true}>
                  <BigEventParallaxLayer
                    offset={0}
                    speed={1}
                    picUrl={
                      "https://runthetrap.com/wp-content/uploads/2016/01/alison-wonderland.jpg"
                    }
                    gradientBackground={
                      "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"
                    }
                    title={"Alison Wonderland"}
                    descriptionOne={
                      "Alexandra Sholler, who performs as Alison Wonderland, is an Australian electronic dance music DJ, producer"
                    }
                    descriptionTwo={
                      "Alexandra Sholler, who performs as Alison Wonderland, is an Australian electronic dance music DJ, producer and singer. Her debut album, Run, was released on 20 March 2015"
                    }
                    location={"Imperial Ball Room"}
                    time={"10pm - 12pm"}
                  />

                  <ParallaxLayer factor={1} offset={0.6} speed={0.4}>
                    <div
                      style={{
                        margin: 20,
                        height: 200
                      }}
                    >
                      <LoadAnimatedComponent day={"thursday"} />
                    </div>
                  </ParallaxLayer>
                </Parallax>
              </animated.div>
            )}
          </Spring>
        )}
        {this.state.selectedDay === 2 && (
          <Spring
            config={config.molasses}
            native
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            {props => (
              <animated.div style={props} className="thursday">
                <Parallax native pages={2} vertical scrolling={true}>
                  <BigEventParallaxLayer
                    offset={0}
                    speed={1}
                    picUrl={
                      "https://runthetrap.com/wp-content/uploads/2016/01/alison-wonderland.jpg"
                    }
                    gradientBackground={
                      "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"
                    }
                    title={"Alison Wonderland"}
                    descriptionOne={
                      "Alexandra Sholler, who performs as Alison Wonderland, is an Australian electronic dance music DJ, producer"
                    }
                    descriptionTwo={
                      "Alexandra Sholler, who performs as Alison Wonderland, is an Australian electronic dance music DJ, producer and singer. Her debut album, Run, was released on 20 March 2015"
                    }
                    location={"Imperial Ball Room"}
                    time={"10pm - 12pm"}
                  />

                  <ParallaxLayer factor={1} offset={0.6} speed={0.4}>
                    <div
                      style={{
                        margin: 20,
                        height: 200
                      }}
                    >
                      <LoadAnimatedComponent day={"thursday"} />
                    </div>
                  </ParallaxLayer>
                </Parallax>
              </animated.div>
            )}
          </Spring>
        )}
        {this.state.selectedDay === 3 && (
          <Spring
            config={config.molasses}
            native
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            {props => (
              <animated.div style={props} className="thursday">
                <Parallax native pages={2} vertical scrolling={true}>
                  <BigEventParallaxLayer
                    offset={0}
                    speed={1}
                    picUrl={
                      "https://runthetrap.com/wp-content/uploads/2016/01/alison-wonderland.jpg"
                    }
                    gradientBackground={
                      "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"
                    }
                    title={"Alison Wonderland"}
                    descriptionOne={
                      "Alexandra Sholler, who performs as Alison Wonderland, is an Australian electronic dance music DJ, producer"
                    }
                    descriptionTwo={
                      "Alexandra Sholler, who performs as Alison Wonderland, is an Australian electronic dance music DJ, producer and singer. Her debut album, Run, was released on 20 March 2015"
                    }
                    location={"Imperial Ball Room"}
                    time={"10pm - 12pm"}
                  />

                  <ParallaxLayer factor={1} offset={0.6} speed={0.4}>
                    <div
                      style={{
                        margin: 20,
                        height: 200
                      }}
                    >
                      <LoadAnimatedComponent day={"thursday"} />
                    </div>
                  </ParallaxLayer>
                </Parallax>
              </animated.div>
            )}
          </Spring>
        )}
      </div>
    );
  }
}
