import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
//Import custom components
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Sidebar from '../components/sidebar.js';
import Imagelist from '../components/image-list.js';


  render(
      <Router history={browserHistory}>
        <Route path="/" component={Sidebar}>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Route>
      </Router>,
      document.getElementById('content')
    );
