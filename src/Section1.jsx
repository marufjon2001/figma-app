import React, { Component } from "react";
import rasm4 from "./images/rasm4.png"

class Section1 extends Component {
  render() {
    return (
      <div>
        <div className="section1">
          <div className="left1">
            <p>
              <img src={rasm4} />
            </p>
          </div>
          <div className="right1">
            <h6>Digital Artist</h6>
            <h1>
              Pellentesque blandit
              <br />
              in quam rhoncus
            </h1>
            <p>
              Suspendisse ante mauris, volutpat congue sem ac,
              <br /> ul trices tempor lorem. Nullam eget vehicula tellus,
              <br /> ac consectetur urna. Mauris tincidunt, libero id
              <br /> ultrices tincidunt, mi leo pharetra dolor, sed luctus
              <br /> dui ipsum et augue. Integer non quam feugiat,
              <br /> porttitor libero a, tempor neque. Nulla ac orci
              <br /> mauris. Quisque nisi nisl, rutrum ac diam et, semper <br />
              commodo quam
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Section1;
