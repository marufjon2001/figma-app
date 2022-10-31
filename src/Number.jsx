import React, { Component } from 'react';
import rasm6 from "./images/rasm6.png"
import rasm7 from "./images/rasm7.png"
import rasm8 from "./images/rasm8.png"
import rasm9 from "./images/rasm9.png"
import rasm10 from "./images/rasm10.png"

class Number extends Component {
    render() {
        return (
            <div>
                <div className='number'>
        <div className='left'>
          <div className='btn1'>
            <button className='btn11'>01</button><br/>
            <br/> <h2>Motion Graphic</h2><br/>
            <p>Suspendisse sem neque, auctor a elementum ut,<br/>
             varius vel leo. Donec diam arcu, porta et magna at</p>
          </div><br/><br/><br/>
          <div className='btn2'>
            <button>02</button><br/>
            <br/> <h2>Digital Illustration</h2>
            <p>Suspendisse sem neque, auctor a elementum ut,<br/>
             varius vel leo. Donec diam arcu, porta et magna at</p>
          </div><br/><br/><br/>
          <div className='btn3'>
            <button>03</button><br/>
            <br/> <h2>Photography</h2>
            <p>Suspendisse sem neque, auctor a elementum ut,<br/>
             varius vel leo. Donec diam arcu, porta et magna at</p>
          </div>
        </div>
        <div className='right'>
          <p><img src={rasm6}/></p>
        </div>
      </div>
      <div className='rasm'>
        <p><img src={rasm7}/></p>
        <h1>Browse by Collections</h1>
      </div>
      <div className='imglar'>
        <div><img src={rasm8}/></div>
        <div><img src={rasm9}/></div>
        <div><img src={rasm10}/></div>
      </div>
      <div className='textlar'>
      <div><h2>Photography</h2></div>
        <div> <h2>Art</h2></div>
        <div><h2>Collectibles</h2></div>
      </div>
      <div className='wievall'>
        <button>View all</button>
      </div>
      <div className='Top'>
        <div className='Top-NFT'>
          <h1>Top NFT</h1>
        </div>
      </div>
            </div>
        );
    }
}

export default Number;
