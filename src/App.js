import React, { Component } from 'react'
import Tasky from './Tasky'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "80px"}} >
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <Tasky />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
