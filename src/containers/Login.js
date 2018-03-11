import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.loginUser(user);
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  loginUser(user) {
    const history = this.props.history;

    return axios({
      method: 'get',
      url: '/api/users/1',
      data: {
        username: user.username,
        password: user.password
      }
    })
    .then(user => {
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/dashboard');
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input 
          type="text" 
          placeholder="username"
          name="username"
          onChange={ this.handleInput }
        />
        <input 
          type="text" 
          placeholder="password"
          name="password"
          onChange={ this.handleInput }
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Login;