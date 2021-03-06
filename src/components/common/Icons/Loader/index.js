import React, { Component } from "react";
import SvgComponent from "../../SvgComponent";
import SvgFile from "./SvgFile";

class Loader extends Component {
  render() {
    return <SvgComponent renderComponent={SvgFile} fill={this.props.color} {...this.props} />;
  }
}

export default Loader;
