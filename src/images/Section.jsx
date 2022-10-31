import React, { Component } from 'react';
import rasm11 from "../images/rasm11.png"
class Section extends Component {
    render() {
        return (
            <div>
                  <div className='section'>
      <div className='lefttext'>
        <p>EXTRAORDINARY NFTs</p>
        <h1>Change your</h1>
        <h1>Digital Experience</h1>
        <p className='rasm'>Suspendisse sem neque, auctor a elementum ut,<br/>
        varius vel leo. Donec diam arcu, porta et magna at
        </p>
      </div>
      <div className='rightimg'>
        <p><img src={rasm11}/></p>
      </div>
     </div>
            </div>
        );
    }
}

export default Section;
