import React, { Component } from "react";
import rasm5 from "./images/rasm5.png";

class Photography extends Component {
  render() {
    return (
      <div>
        <div className="display">
          <div className="left2">
            <img src={rasm5} />
          </div>
          <div className="right2">
            <h3>our work</h3>
            <br />
            <h1>“Um… what’s going on here?”</h1>
            <p>
              Nulla facilisi. Praesent molestie diam eu enim aliquet <br />
              pellentesque. Vestibulum consectetur vestibulum tristique. Sed{" "}
              <br />
              purus neque, maximus fermentum bibendum et, porta in sapien.
            </p>
            <button>About Codx</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Photography;
