import React, { Component } from 'react';
import 'App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from 'screens/HomeScreen'
import AboutScreen from 'screens/AboutScreen'
import CodeScreen from 'screens/CodeScreen'
import SoundsScreen from 'screens/SoundsScreen'
import ContactScreen from 'screens/ContactScreen'
import SampleLoader from 'SampleLoader'
import SamplePlayer from 'SamplePlayer'

class App extends Component {
  render() {
    return (
      <div>
        <SampleLoader/>
        <SamplePlayer/>
        <BrowserRouter>
          <div className="wrapper">
            <nav>
              <Link to="/">Home</Link>&nbsp;|&nbsp;
              <Link to="/about">About</Link>&nbsp;|&nbsp;
              <Link to="/code">Code</Link>&nbsp;|&nbsp;
              <Link to="/sounds">Sounds</Link>&nbsp;|&nbsp;
              <Link to="/contact">Contact</Link>
            </nav>
            <Route exact path={'/contact'} component={ContactScreen}/>
            <Route exact path={'/sounds'} component={SoundsScreen}/>
            <Route exact path={'/code'} component={CodeScreen}/>
            <Route exact path={'/about'} component={AboutScreen}/>
            <Route exact path={'/'} component={HomeScreen}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
