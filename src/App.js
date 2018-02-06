import React, { Component } from 'react';
import 'App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomeScreen from 'screens/HomeScreen'
import SampleLoader from 'SampleLoader'
import SamplePlayer from 'SamplePlayer'

class App extends Component {
  render() {
    return (
      <div>
        <SampleLoader/>
        <SamplePlayer/>
        <BrowserRouter>
          <Switch>
            <Route path={'/'} component={HomeScreen}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
