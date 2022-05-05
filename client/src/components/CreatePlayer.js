import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreatePlayer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age:'',
      description:'',
      best_score:'',
      hundred:'',
      fifty:'', 
      debut_date:''
      //file: null
    };
  }

  // handleChange(event) {
  //   this.setState({
  //     file: URL.createObjectURL(event.target.files[0])
  //   })
  // }

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
      hundred:this.state.hundred,
      fifty:this.state.fifty,
      debut_date:this.state.debut_date
      //file: this.state.file
    };

    axios
      .post('http://localhost:4000', data)
      .then(res => {
        this.setState({
            name: '',
            age:'',
            description:'',
            best_score:'',
            hundred:'',
            fifty:'', 
            debut_date:''
            //file:null
        })
       this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in Createplayer!");
      })
  };

  render() {
    return (
      <div className="CreatePlayer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Player List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Player</h1>
              <p className="lead text-center">
                  Create new Player
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name of the Player'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
              

                <div className='form-group'>
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
                  <input
                    type='date'
                    placeholder='debut_date'
                    name='debut_date'
                    className='form-control'
                    value={this.state.debut_date}
                    onChange={this.onChange}
                  />
                </div>

                {/* <div className="form-group">
                <input 
                    type="file" 
                    placeholder='input image'
                    onChange={this.handleChange}
                />
            </div>
                */}

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
            
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePlayer;