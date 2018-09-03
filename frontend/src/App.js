import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HairdresserDetailContainer from './containers/HairdresserDetailContainer';
import HairdresserListContainer from './containers/HairdresserListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/detail/:id' component={HairdresserDetailContainer} />
          <Route path='/' component={HairdresserListContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
