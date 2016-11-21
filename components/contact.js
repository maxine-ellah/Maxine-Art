import React, {Component} from 'react';

class Contact extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div className="col-4 contact-content">
        <a className="email" href="mailto:maxine.ellah@gmail.com">maxine.ellah@gmail.com</a>
        <a className="twitter" href="https://twitter.com/_ndidi">@_ndidi</a>
      </div>
    )
  }
}

export default Contact;
