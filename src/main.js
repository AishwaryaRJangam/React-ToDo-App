import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Tasky from './Tasky'
import './App.css'

class Main extends Component {
  render () {
    return (
      <Router>
        <div>
             <h1>React To Do App</h1>
          <Switch>
            <Route exact path='/' component={Tasky} />
          </Switch>
        </div>

      </Router>
    )
  }
}

export default Main
