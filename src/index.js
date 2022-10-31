import Navbar1 from "./Navbar1";
import Section from "./images/Section";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Img from "./Img";
import Text from "./Text";
import Photography from "./Photography";
import Section1 from "./Section1";
import Number from "./Number";
import Bear from "./Bear";
import Bottom1 from "./Bottom_1";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Navbar1 />
    <Section />
    <Img />
    <Text />
    <Section1 />
    <Photography />
    <Number />
    <Bear />
    <Bottom1 />
  </div>
);
