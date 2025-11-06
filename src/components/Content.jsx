import React, { useEffect, useState } from "react";
import Navigation from "./Navigation.jsx";
import Elements from "./Elements.jsx";

const Content = ({ onFinish }) => {
  return (
    <div className="content">
      <Navigation />
      <Elements />
    </div>
  );
};

export default Content;
