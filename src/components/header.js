import React, { Component } from 'react';
import {logo} from './images/logo.png'
import './header.css';

class Header extends Component {

  render() {
    return (
      <div>   
        <div class="navbar-fixed">
          <nav className="navbar">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Udacity</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">Nanodegree</a></li>
                <li><a href="#">Hire Talent</a></li>
                <li><a href="#">For Business</a></li>
                <li><a className="waves-effect waves-light btn findbtn">Course Finder</a></li>
              </ul>
            </div>
          </nav>
         </div>
      </div>
    );
  }
}

export default Header;