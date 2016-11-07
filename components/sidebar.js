import React, {Component} from 'react';

class Sidebar extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <div className="Sidebar">
          <p>Maxine Ellah</p>
          <p>Contact</p>
          <p>About</p>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Sidebar;
