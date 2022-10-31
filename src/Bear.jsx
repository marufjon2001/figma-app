import React, { Component } from "react";
import bear from "./images/bear.png";
import qayiq from "./images/qayiq.png";
import dodo from "./images/dodo.png";
import nono from "./images/nono.png";
import zombie from "./images/zombie.png";
import pingdevil from "./images/pingdevil.png";

class Bear extends Component {
  render() {
    return (
      <div>
        <div className="Bear">
          <div className="imglar12">
            <div>
              <img src={bear} />
              <p>
                White Bear # 54385 <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-lock"></i>
              </p>
            </div>
            <div>
              <img src={qayiq} />
              <p>
                Happy Luca # 54385 <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-lock"></i>
              </p>
            </div>
            <div>
              <img src={dodo} />
              <p>
                Dodo # 54385 <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-lock"></i>
              </p>
            </div>
          </div>

          <div className="zombie">
            <div>
              <img src={nono} />
              <p>
                Nano Nano # 54385 <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-lock"></i>
              </p>
            </div>
            <div>
              <img src={zombie} />
              <p>
                Zombie # 54385 <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-lock"></i>
              </p>
            </div>
            <div>
              <img src={pingdevil} />
              <p>
                Pink Devil # 54385 <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-lock"></i>
              </p>
            </div>
          </div>
          <button>View all</button>
          <div className="text_faq">
            <h1>FAQ</h1>
            <br />
            <br />
            <br />

            <div className="left_right">
              <div className="left_1">
                <br />{" "}
                <p>
                  Donec posuere massa nec arcu scelerisque, blandit mattis justo
                  blandit
                </p>
                <br /> <br />{" "}
                <p>
                  Quisque at justo semper, faucibus eros sit amet, scelerisque
                  lorem.
                </p>
                <br /> <br /> <p>Nulla eget justo at eros varius consequat.</p>
                <br /> <br />{" "}
                <p>Vivamus non nibh quis massa laoreet semper et eu quam</p>
                <br />{" "}
                <p>Morbi quis nisi tempus, mollis turpis ut, mollis massa.</p>
              </div>
              <div className="right">
                <p>
                  <i class="fa-solid fa-bars"></i>
                </p>
                <br />
                <br />
                <p>
                  <i class="fa-solid fa-bars"></i>
                </p>
                <p>
                  <br />
                  <br />
                  <i class="fa-solid fa-bars"></i>
                </p>
                <p>
                  <br />
                  <br />
                  <i class="fa-solid fa-bars"></i>
                </p>
                <p>
                  <br />
                  <br />
                  <i class="fa-solid fa-bars"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bear;
