import React, { Component } from 'react';
import Header from '../components/header';
import '../styles/dashbox.css';

class dashbox extends Component {
  render() {
    return (
      <div className="mainFormContainer">
         <Header className="formContainer"/>
      </div>
      
    );
  }
}

export default dashbox;

