import React from "react";
import Lottie from "react-lottie";
import animationData from "./json/6370-keys.json";

const BasicLoading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default BasicLoading;
