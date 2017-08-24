import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './Home'
import SearchPage from './SearchPage'
import './App.css'

class App extends Component {
  state = {
    showSearchPage: true
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={SearchPage}/>
      </div>
    )
  }
}

export default App
