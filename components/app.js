import React, {Component} from 'react';
import {render} from 'react-dom';
//Import custom components
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Sidebar from '../components/sidebar.js';
import Imagelist from '../components/image-list.js';

class App extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
        <div>
          <Sidebar>
            <Imagelist/>
            <About/>
            <Contact/>
          </Sidebar>
        </div>
    )
  }
}


  export default App;
