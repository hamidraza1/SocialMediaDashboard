import React, { Component } from "react";
import classes from "./ToggleButton.module.css";

class ToggleButton extends Component {
  render() {
    return (
      <div className={classes.btnAndText}>
        <p
          className={this.props.btnTextClr ? classes.btntext : classes.btnText}
        >
          Dark Mode
        </p>
        <div onChange={this.props.change} className={classes.btn}>
          <label className={classes.switch}>
            <input type="checkbox" />
            <span className={[classes.slider, classes.round].join(" ")}></span>
          </label>
        </div>
      </div>
    );
  }
}

export default ToggleButton;
