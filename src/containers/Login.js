import React, { Component } from 'react';

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
    
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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