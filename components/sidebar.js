import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
//Import custom components
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Imagelist from '../components/image-list.js';


class Sidebar extends Component {
  constructor(){
    super();
    this.contactClickHandler = this.contactClickHandler.bind(this);
    this.aboutClickHandler = this.aboutClickHandler.bind(this);
    this.state = {isClicked: <Imagelist/> };
  }

aboutClickHandler(){
  this.setState({isClicked: <About/> })
  console.log("about");
}

contactClickHandler(){
  this.setState({isClicked: <Contact/> })
  console.log("contact");
}

  render(){

    return (
      <div>
        <div className="col-1 Sidebar">
          <ul>
            <a className="name-link">Maxine Ellah</a>
            <a className="contact-link" onClick={this.contactClickHandler}>Contact</a>
            <a className="about-link" onClick={this.aboutClickHandler}>About</a>
          </ul>
        </div>
        <div>
          {this.state.isClicked}
        </div>
      </div>
    )
  }
}

export default Sidebar;
