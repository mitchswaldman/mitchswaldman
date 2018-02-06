import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className='title'>
          <h1 className='title__main'>Mitch Waldman</h1>
          <h4 className='title__sub'>Developer. Musician. Dog lover.</h4>
        </div>
        <ul>
          <li><a href='#'><i class="fas fa-code fa-2x"></i></a></li>
          <li><a href='#'><i class="fas fa-headphones fa-2x"></i></a></li>
          <li><a href='#'><i class="fas fa-paw fa-2x"></i></a></li>
        </ul>
        <div className='description'>
          <p>My name is Mitch Waldman. This is my website, made better by the fact that you're here. Thanks. </p>
          <p>I'm a developer from San Jose CA, a bedroom musician, and a dog lover. </p>
        </div>
      </div>
    );
  }
}

export default App;
