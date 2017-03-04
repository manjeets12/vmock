import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux'

import './login.css';
import {fetchLogin} from '../../actions/login'
import LoginForm from './components/LoginForm'

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(data){
    this.props.fetchLogin(data);
    console.log(data);
  }
  render() {
    return (
      <div className="LoginContainer">
        <LoginForm onSubmit ={this.onSubmit.bind(this)}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin:(data) => dispatch(fetchLogin(data)),
  }
};

const mapStateToProps = (state) => {
   return {
       user:state.user,
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);