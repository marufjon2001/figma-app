import React, { Component } from "react";

class Text extends Component {
  render() {
    return (
      <div>
        <div className="text">
          <h1>Hey there,we are</h1>
          <p>
            Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec
            diam
          </p>
          <p>arcu, porta et magna at</p>
        </div>
        <div className="button">
          <button>Jack</button>
          <button>Suni</button>
          <button>Colin</button>
        </div>
      </div>
    );
  }
}

export default Text;
