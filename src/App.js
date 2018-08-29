import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import WorkHistory from './Workhistory';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/WorkHistory' component={WorkHistory}/>
            <Route path='/Projects' component={Projects}/>
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}

export default App;
