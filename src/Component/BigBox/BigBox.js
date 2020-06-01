import React, { Component } from "react";
import classes from "./BigBox.module.css";
import { GrFacebook } from "react-icons/gr";
import { TiArrowSortedUp } from "react-icons/ti";

class BigBox extends Component {
  render() {
    return (
      <div className={this.props.DarkMode ? classes.Bigbox : classes.bigbox}>
        <div
          className={this.props.DarkMode ? classes.Boxband : classes.boxband}
          style={{ backgroundColor: this.props.boxbandColor }}
        ></div>
        <span className={this.props.DarkMode ? classes.Icon : classes.icon}>
          {this.props.icon}
        </span>
        <div
          className={
            this.props.DarkMode
              ? classes.Icondescription
              : classes.icondescription
          }
        >
          @nathanf
        </div>
        <div className={this.props.DarkMode ? classes.Year : classes.year}>
          {this.props.year}
        </div>
        <div
          className={
            this.props.DarkMode ? classes.Followers : classes.followers
          }
        >
          FOLLOWERS
        </div>
        <div>
          <TiArrowSortedUp
            className={
              this.props.DarkMode ? classes.Iconarrow : classes.iconarrow
            }
          />
          <div
            className={
              this.props.DarkMode
                ? classes.Arrowdescription
                : classes.arrowdescription
            }
          >
            {this.props.arrowdescription} Today
          </div>
        </div>
      </div>
    );
  }
}

export default BigBox;
