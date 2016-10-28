import React, {Component} from 'react';

class Imagelist extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div className="img-list-container">
        <li>
          <img src="../images/chosen3.jpg"/>
        </li>
      </div>
    )
  }
}


export default Imagelist;
