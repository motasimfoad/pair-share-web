import React, { Component } from 'react';
import LoginForm from '../components/loginform';
import '../styles/login.css';

class login extends Component {
  render() {
    return (
      <div className="mainFormContainer">
         <LoginForm className="formContainer"/>
      </div>
      
     
    );
  }
}

export default login;