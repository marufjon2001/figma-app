import React, { Component } from "react";
import logo from "./images/logo.png";
class Navbar1 extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="left">
            <ul>
              <li className="logo">
                <img src={logo} />
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">NFTs</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <button className="">View on OpenSea</button>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar1;
