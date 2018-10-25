import React from "react";
import { Spring, animated, Trail, Transition } from "react-spring";
import { ListGroupItem, ListGroup } from "react-bootstrap";
import { marathonData } from "../../../program-data";

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

    const {
      meeting,
      topic,
      duration,
      location,
      hostedBy,
      time
    } = this.props.item;
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
                  <div>{meeting}</div>
                </div>
              )}
              {toggle && (
                <div>
                  <div className="expanded-list-item-container">
                    <h3>{time}</h3>
                    <h3 style={{ color: "#f700af" }}>{meeting}</h3>
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-6">
                          <h4>Topic:</h4>
                        </div>
                        <div className="col-xs-6">
                          <h4>{topic}</h4>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-6">
                        <h4>duration:</h4>
                      </div>
                      <div className="col-xs-6">
                        <h4>{duration}</h4>
                      </div>
                    </div>

                    <div>
                      <div>
                        <h2>Hosted By:</h2>
                      </div>
                      <div>{hostedBy}</div>
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
  let panelKeys = marathonData[day].map(item => item.id.toString());

  return (
    <div style={{ position: "relative", zIndex: 9999 }} className="mainHeader">
      <Trail native from={{ opacity: 0 }} to={{ opacity: 1 }} keys={panelKeys}>
        {marathonData[day].map(item => styles => (
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

const GroupByDayComponent = ({ day }) => {
  return (
    <div>
      <h1>{day}</h1>
      <div>
        <LoadAnimatedComponent day={day} />
      </div>
    </div>
  );
};

export default class Panels extends React.Component {
  state = {
    show: false
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ show: true });
    }, 900);
  }
  render() {
    if (this.state.show) {
      return (
        <div style={{ height: "100%", width: "100vw" }}>
          {this.state.show && (
            <div>
              <div className="row">
                <GroupByDayComponent day={"thursday"} />
              </div>
              <div className="row">
                <GroupByDayComponent day={"friday"} />
              </div>
              <div className="row">
                <GroupByDayComponent day={"saturday"} />
              </div>
              <div className="row">
                <GroupByDayComponent day={"sunday"} />
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return <div />;
    }
  }
}
