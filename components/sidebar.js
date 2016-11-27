import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

class Sidebar extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <div className="col-1 Sidebar">
          <ul>
            <li className="name-link"><Link to="/Maxine-Art">Maxine Ellah</Link></li>
            <li className="contact-link"><Link to="/contact">Contact</Link></li>
            <li className="about-link"><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Sidebar;
