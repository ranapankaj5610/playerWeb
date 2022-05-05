import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreatePlayer from './components/CreatePlayer';
import ShowPlayerList from './components/ShowPlayerList';
import ShowPlayerDetails from './components/ShowPlayerDetails';
import UpdatePlayerInfo from './components/UpdatePlayerInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowPlayerList} />
          <Route path='/create-player' component={CreatePlayer} />
          <Route path='/edit-player/:id' component={UpdatePlayerInfo} />
          <Route path='/show-player/:id' component={ShowPlayerDetails} />
        </div>
      </Router>
    );
  }
}

export default App;

