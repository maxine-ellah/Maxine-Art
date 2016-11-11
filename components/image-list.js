import React, {Component} from 'react';
import images from '../public/images/images.js';

class Imagelist extends Component {
  constructor(){
    super()
  }


imageMap(){
  return images.map((image) => {
    var path = image.path;
    return (
      <li key={image.name}>
        <img src={path} />
      </li>
    )
  })
}

  render(){
    return (
      <div className="col-4 img-list-container">
        {this.imageMap()}
      </div>
    )
  }
}


export default Imagelist;
