import React, {Component} from 'react';

class Contact extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div className="col-4 contact-content">
        <a href="mailto:maxine.ellah@gmail.com" target="_blank">maxine.ellah@gmail.com</a>
        <a href="http://kiiis.tumblr.com/" target="_blank">kiiis.tumblr.com</a>
      </div>
    )
  }
}

export default Contact;
