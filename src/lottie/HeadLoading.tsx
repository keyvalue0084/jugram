import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./json/7878-headphones.json";

class HeadLoading extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return <Lottie options={defaultOptions} height={400} width={400} />;
  }
}

export default HeadLoading;
