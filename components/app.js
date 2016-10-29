import React, {Component} from 'react';
import Header from './header.js';
import Imagelist from './image-list.js';


class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <Imagelist />
      </div>
    )
  }
}

export default App;
