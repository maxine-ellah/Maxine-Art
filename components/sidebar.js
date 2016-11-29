import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
//Import custom components
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Imagelist from '../components/image-list.js';


class Sidebar extends Component {
  constructor(){
    super();
    this.state = {page: <Imagelist/> };
  }

clickHandler(page){
  this.setState({page: page})
}


  render(){
    return (
      <div>
        <div className="col-1 Sidebar">
          <ul>
            <li className="name-link"><Link to="/">Maxine Ellah</Link></li>
            <li className="contact-link"><Link to="/contact">Contact</Link></li>
            <li className="about-link" onClick={this.clickHandler()}>About</li>
          </ul>
        </div>
        <div>
          {this.state.page}
        </div>
      </div>
    )
  }
}

export default Sidebar;
