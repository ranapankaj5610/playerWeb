import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showPlayerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:4000/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          player: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowPlayerDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:4000/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowPlayerDetails_deleteClick");
      })
  };


  render() {

    const player = this.state.player;
    let PlayerItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ player.name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Age</td>
            <td>{ player.age }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Description</td>
            <td>{ player.description }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Best Score</td>
            <td>{ player.best_score }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Hundreds</td>
            <td>{ player.hundred }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Fifties</td>
            <td>{ player.fifty }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>My Image</td>
            <td>{ player.file}</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowPlayerDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Player List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Player's Record</h1>
              <p className="lead text-center">
                  View Player's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { PlayerItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,player._id)}>Delete Player</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-player/${player._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Player
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showPlayerDetails;