import React from "react";
import { Spring, animated, Trail } from "react-spring";

const items = [
  { key: 1, item: "grapes" },
  { key: 2, text: "oranges" },
  { key: 3, text: "bannana" },
  { key: 4, item: "grapes" },
  { key: 5, text: "oranges" },
  { key: 6, text: "bannana" },
  { key: 7, item: "grapes" },
  { key: 8, text: "oranges" },
  { key: 9, text: "bannana" }
];

const ListItem = ({ text }) => (
  <li>
    <span>{text}</span>
  </li>
);

const LoadAnimatedComponent = () => {
  return (
    <div style={{ position: "relative", zIndex: 9999 }} className="mainHeader">
      <img
        style={{ width: "100vw" }}
        src="https://s3-us-west-1.amazonaws.com/2019.acypaa.org/assets/AALOGO.svg"
      />
      <img
        style={{ width: "100vw" }}
        src="https://s3-us-west-1.amazonaws.com/2019.acypaa.org/assets/ypalogo2.svg"
      />

      {/* <Trail
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        keys={items.map(item => item.key)}
      >
        {items.map(item => styles => (
          <div style={styles}>

            <ul>
              <ListItem {...item} />
            </ul>
          </div>
        ))}
      </Trail> */}
    </div>
  );
};

export default class Home extends React.Component {
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
          {this.state.show && <LoadAnimatedComponent />}
        </div>
      );
    } else {
      return <div />;
    }
  }
}
