import React, { Component } from 'react';
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
            <li className="name-link"><a onClick={ () => this.contentHandler("home") }>Maxine Ellah</a></li>
            <li className="contact-link"><a onClick={ () => this.contentHandler("contact") }>Contact</a></li>
            <li className="about-link"><a onClick={ () => this.contentHandler("about") }>About</a></li>
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
