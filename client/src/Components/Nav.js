import React, { useState } from 'react';
import './comp.css';

class Navi extends React.Component  {

dropdownmenu() {
    var x;
    x=document.getElementById("dropdownclick");
    if(x.className == "topnav") {
        x.className +=" responsive"; // change topnav to topnav.responsive
    }
    else{
        x.className="topnav";
    }
}

  render() {
    return (
      <div>
          <nav>
              <ul className="topnav" id="dropdownclick">
                  <li><a href="#home">Home</a></li>
                  <li className="topnav-right"><a href="#signin">Sign In</a></li>
                  <li className="topnav-right"><a href="#contact">Contact</a></li>
                  <li className="dropdownicon"><a href="javascript:viod(0)" onClick={this.dropdownmenu}>&#9776;</a></li>
              </ul>
          </nav>
      </div>
    );
  }
}

   

export default Navi;