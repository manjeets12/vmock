

import React, { Component } from 'react';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let {name, value} = event.target;
    this.setState({
      [name]:value
    });
  }

  handleSubmit(event) {
    let {username, password}= this.state;
    /*if(userName ===""){
      alert("please provide username");
    }else if(password ===""){
      alert("please provide password");
    }else{
      this.props.onSubmit({userName, password});
    }*/
    this.props.onSubmit({username});
    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          UserName:
          <input type="text" value={this.state.value} onChange={this.handleChange} name ="username"/>
        </label>
        <br/><br/>
        <label>
          Password:
          <input type="password" value={this.state.value} onChange={this.handleChange} name="password"/>
        </label>
        <br/><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default LoginForm;