import React from "react";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: "../lottie/json/6370-keys.json",
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export const BasicLoading = () => {
  return <Lottie options={defaultOptions} height={400} width={400} />;
};
