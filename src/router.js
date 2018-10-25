import React from "react";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import {
  Spring,
  animated,
  interpolate,
  Parallax,
  Transition,
  config
} from "react-spring";
import classnames from "classnames";

import {
  HomeComponent,
  PanelsComponent,
  EntertainmentComponent,
  MarathonComponent,
  OtherComponent
} from "./components/views/index";

import Footer from "./footer";

const NavLink = props => (
  <div className="navItem">
    <Link {...props} style={{ cursor: "pointer", color: "inherit" }} />
  </div>
);

const MainRouter = ({ activeButton, setActive }) => (
  <Router>
    <Route
      render={({ location }) => (
        <div className="fill">
          <Route exact path="/" render={() => <Redirect to="/" />} />

          <div className="content">
            <Transition
              native={true}
              config={config.slow}
              keys={location.pathname}
              from={{ opacity: 0, transform: "scale3d(0.2,0.2,0.4)" }}
              enter={{ opacity: 1, transform: "scale3d(1,1, 0.3)" }}
              leave={{ opacity: 0, transform: "scale3d(0.2,0.2,0.4)" }}
            >
              {style => (
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={props => HomeComponent({ style, ...props })}
                  />
                  <Route
                    exact
                    path="/panels"
                    render={props => PanelsComponent({ style, ...props })}
                  />

                  <Route
                    exact
                    path="/entertainment"
                    render={props =>
                      EntertainmentComponent({ style, ...props })
                    }
                  />
                  <Route
                    exact
                    path="/marathon"
                    render={props => MarathonComponent({ style, ...props })}
                  />
                  <Route
                    exact
                    path="/other"
                    render={props => OtherComponent({ style })}
                  />

                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              )}
            </Transition>
          </div>
          <Footer activeButton={activeButton} setActive={setActive} />
        </div>
      )}
    />
  </Router>
);

export default MainRouter;
