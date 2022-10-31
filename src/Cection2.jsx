import React, { Component } from "react";
import rasm3 from './images/rasm3.png';

class Rasm1 extends Component {
  render() {
    return (
      <div>
        <div className="img">
          <div className="imglar">
            <p>
              <img src={rasm3}/>
              <img src={rasm3}/>
              <img src={rasm3}/>
              <img src={rasm3}/>
              <img src={rasm3}/>
              <img src={rasm3}/>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Rasm1;
