import React, { Component } from "react";
import classes from "./ToggleButton.module.css";

class ToggleButton extends Component {
  render() {
    return (
      <div>
        <div className={classes.Dashboard}>
          <div
            className={
              this.props.DarkMode ? classes.smdashboard : classes.SMDashboard
            }
          >
            Social Media Dashboard
          </div>
          <div
            className={
              this.props.DarkMode ? classes.tfdashboard : classes.TFDashboard
            }
          >
            Total Followers: 23,004
          </div>
        </div>
        <div className={classes.btnAndText}>
          <p
            className={this.props.DarkMode ? classes.btntext : classes.btnText}
          >
            Dark Mode
          </p>
          <div onChange={this.props.change} className={classes.btn}>
            <label className={classes.switch}>
              <input type="checkbox" />
              <span
                className={[classes.slider, classes.round].join(" ")}
              ></span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default ToggleButton;
