import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    
    const message = ["Hello ", "My", "name", "is", "Mitch"]
    const colorClasses = ['clr1', 'clr2', 'clr3', 'clr4', 'clr5']

    const renderWordWithColorClass = (word, color) => {
      return word.split("").map( (letter, idx) => {
        return (
          <div className={`letter-box ${color}`} key={`${letter}-${idx}-${color}`}>
            <p>{letter}</p>
          </div>
        )
      })
    }

    return (
      <div className="wrapper">
        {message.map((word, index)=> {
          return renderWordWithColorClass(word, colorClasses[index])
        })}
      </div>
    );
  }
}

export default App;
