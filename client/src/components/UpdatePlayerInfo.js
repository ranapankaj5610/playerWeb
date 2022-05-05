import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdatePlayerInfo extends Component {
  constructor(props) {
    super(props);
   this.state = {
        name: '',
        age:'',
        description:'',
        best_score:'',
        hundred:'',
        fifty:'', 
        debut_date:'',
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:4000/'+this.props.match.params.id)
      .then(res => {
        this.setState({
            name: res.data.name,
            age: res.data.age,
            description: res.data.description,
            best_score: res.data.best_score,
            hundred: res.data.hundred,
            fifty:res.data.fifty,
            debut_date:res.data.debut_date
        })
      })
      .catch(err => {
        console.log("Error from UpdatePlayerInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        name: this.state.name,
        age: this.state.age,
        description: this.state.description,
        best_score: this.state.best_score,
        hundred: this.state.hundred,
        fifty:this.state.fifty,
        debut_date:this.state.debut_date
    };

    axios
      .put('http://localhost:4000/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-player/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateplayerInfo!");
      })
  };


  render() {
    return (
      <div className="UpdatePlayerInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Player List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Player</h1>
              <p className="lead text-center">
                  Update player's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Name</label>
              <input
                    type='text'
                    placeholder='Name of the Player'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="age">Age</label>
                 <input
                    type='number'
                    placeholder='age'
                    name='age'
                    className='form-control'
                    value={this.state.age}
                    onChange={this.onChange}
                  />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
            <input
                    type='text'
                    placeholder='Describe this Player'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
            </div>


            <div className='form-group'>
            <label htmlFor="published_date">Best Score</label>
            <input
                    type='number'
                    placeholder='Best Score'
                    name='best_score'
                    className='form-control'
                    value={this.state.best_score}
                    onChange={this.onChange}
                  />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Hundreds</label>
            <input
                    type='number'
                    placeholder='hundred'
                    name='hundred'
                    className='form-control'
                    value={this.state.hundred}
                    onChange={this.onChange}
                  />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Fifties</label>
            <input
                    type='fifty'
                    placeholder='fifty'
                    name='fifty'
                    className='form-control'
                    value={this.state.fifty}
                    onChange={this.onChange}
                  />
            </div>

            <div className='form-group'>
            <label htmlFor="publisher">Debut Date</label>
            <input
                    type='date'
                    placeholder='debut_date'
                    name='debut_date'
                    className='form-control'
                    value={this.state.debut_date}
                    onChange={this.onChange}
                  />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Player</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdatePlayerInfo;