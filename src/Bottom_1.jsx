import React, { Component } from "react";
import logo from "./images/logo.png";

class Bottom1 extends Component {
  render() {
    return (
      <div>
        <div className="Bottom_1">
          <div className="left">
            <div>
              {" "}
              <img src={logo} />
              <br />
              <br />
              <br /> <h3>Join the community</h3>
              <p>
                <br />
                <a href="#">
                  {" "}
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  {" "}
                  <i class="fa-brands fa-facebook-f"></i>
                  <br />{" "}
                </a>
              </p>
            </div>
            <div>
              <p>Site</p>
              <br />
              <p>About us</p>
              <br />
              <p>NFTs</p>
              <br />
              <p>Contact</p>
              <br />
            </div>
          </div>
          <div className="right">
            <div>
              <p>Utility</p> <br />
              <p>Style guide</p> <br />
              <p>Lincensing</p> <br />
              <p>404</p> <br />
            </div>
            <div>
              <h2>Stay in the loop</h2> <br />
              <p>
                Suspendisse sem neque, auctor a el <br />
                varius vel leo. Donec diam arcu, porta et{" "}
              </p>
              <br /> <br /> <button id="email">Your email address</button>
              <button id="sign">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottom1;
