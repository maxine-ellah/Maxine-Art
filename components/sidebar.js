import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
//Import custom components
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Imagelist from '../components/image-list.js';


class Sidebar extends Component {
  constructor(){
    super();
    this.state = { content: <Imagelist/> };
  }

contentHandler(content){
  if (content === "contact") {
    this.setState({ content: <Contact/> })
  } else if (content === "about"){
    this.setState({ content: <About/> })
  } else {
    this.setState({ content: <Imagelist/> })    
  }
}


  render(){
    return (
      <div>
        <div className="col-1 Sidebar">
          <ul>
            <a className="name-link" onClick={ () => this.contentHandler("home") }>Maxine Ellah</a>
            <a className="contact-link" onClick={ () => this.contentHandler("contact") }>Contact</a>
            <a className="about-link" onClick={ () => this.contentHandler("about") }>About</a>
          </ul>
        </div>
        <div>
          {this.state.content}
        </div>
      </div>
    )
  }
}

export default Sidebar;
