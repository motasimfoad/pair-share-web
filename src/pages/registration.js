import React, { Component } from 'react';
import RegForm from '../components/regform';
import '../styles/reg.css';

class registration extends Component {
  render() {
    return (
      <div className="mainFormContainer">
         <RegForm className="formContainer"/>
      </div>
      
    );
  }
}

export default registration;

