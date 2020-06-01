import React, { Component } from "react";
import classes from "./Container.module.css";
import ToggleButton from "../Component/ToggleButton/ToggleButton";
import BigBox from "../Component/BigBox/BigBox";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";

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
        <ToggleButton change={this.Handler} DarkMode={this.state.DarkMode} />
        <div className={classes.BigBoxes}>
          <BigBox
            DarkMode={this.state.DarkMode}
            year={"1987"}
            arrowdescription={"12"}
            icon={<GrFacebook />}
            boxbandColor={"blue"}
          />
          <BigBox
            DarkMode={this.state.DarkMode}
            year={"1044"}
            arrowdescription={"99"}
            icon={<FaTwitter />}
            boxbandColor={"blue"}
          />
          <BigBox
            DarkMode={this.state.DarkMode}
            year={"11k"}
            arrowdescription={"1099"}
            icon={<AiOutlineInstagram />}
            boxbandColor={"green"}
          />
          <BigBox
            DarkMode={this.state.DarkMode}
            year={"8239"}
            arrowdescription={"144"}
            icon={<AiFillYoutube />}
            boxbandColor={"red"}
          />
        </div>
      </div>
    );
  }
}

export default Container;
