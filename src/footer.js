import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

const NavLink = props => (
  <div className="navItem">
    <Link {...props} style={{ cursor: "pointer", color: "inherit" }} />
  </div>
);

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="App-footer">
        <NavLink to="/">
          <div
            key={1}
            className={classnames("footer-menu-button", {
              activeButton: this.props.activeButton == 1
            })}
            onClick={() => this.props.setActive(1)}
          >
            <img style={{ width: "6vw" }} src={require("./assets/home.svg")} />
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink to="/panels">
          <div
            key={2}
            className={classnames("footer-menu-button", {
              activeButton: this.props.activeButton == 2
            })}
            onClick={() => this.props.setActive(2)}
          >
            <img
              style={{ width: "6vw" }}
              src={require("./assets/meetings.svg")}
            />
            <span>Panels</span>
          </div>
        </NavLink>
        <NavLink to="/entertainment">
          <div
            key={3}
            className={classnames("footer-menu-button", {
              activeButton: this.props.activeButton == 3
            })}
            onClick={() => this.props.setActive(3)}
          >
            <img style={{ width: "6vw" }} src={require("./assets/film.svg")} />
            <span>Entertainment</span>
          </div>
        </NavLink>
        <NavLink to="/marathon">
          <div
            key={4}
            className={classnames("footer-menu-button", {
              activeButton: this.props.activeButton == 4
            })}
            onClick={() => this.props.setActive(4)}
          >
            <img
              style={{ width: "6vw" }}
              src={require("./assets/calendar.svg")}
            />
            <span>Marathons</span>
          </div>
        </NavLink>
        <NavLink to="/other">
          <div
            key={5}
            className={classnames("footer-menu-button", {
              activeButton: this.props.activeButton == 5
            })}
            onClick={() => this.props.setActive(5)}
          >
            <img
              style={{ width: "6vw" }}
              src={require("./assets/elipsis.svg")}
            />
            <span>Other</span>
          </div>
        </NavLink>
      </footer>
    );
  }
}
