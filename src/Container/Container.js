import React, { Component } from "react";
import classes from "./Container.module.css";
import ToggleButton from "../Component/ToggleButton/ToggleButton";

class Container extends Component {
  state = {
    DarkMode: false,
  };

  Handler = () => {
    this.setState({
      DarkMode: !this.state.DarkMode,
    });
  };

  render() {
    return (
      <div className={this.state.DarkMode ? classes.body : null}>
        <div className={classes.SMDashboard}>Social Media Dashboard</div>
        <div className={classes.TFDashboard}>Total Followers: 23,004</div>
        <ToggleButton change={this.Handler} btnTextClr={this.state.DarkMode} />
      </div>
    );
  }
}

export default Container;
