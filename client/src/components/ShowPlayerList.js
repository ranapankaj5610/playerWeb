import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PlayerCard from './PlayerCard';

class ShowPlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/')
      .then(res => {
        this.setState({
          players: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowPlayerList');
      })
  };
  

  render() {
    const players = this.state.players;
    console.log("Player: " + players);
    let playerList;

    if(!players) {
      playerList = "there is no plyaer record!";
    } else {
      playerList = players.map((player, k) =>
        <PlayerCard player={player} key={k} />
      );
    }

    return (
      <div className="ShowPlayerList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Players List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-player" className="btn btn-outline-warning float-right">
                + Add New Player
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {playerList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPlayerList;