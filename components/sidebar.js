import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

class Sidebar extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <div className="Sidebar">
          <ul>
            <li>Maxine Ellah</li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
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
