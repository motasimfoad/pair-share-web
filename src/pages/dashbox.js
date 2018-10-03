import React, { Component } from 'react';
import Tasktabs from '../components/tasktabs';
// import Header from '../components/header';
import '../styles/dashbox.css';

class dashbox extends Component {
  render() {
    return (
      <div className="mainFormContainer">
         {/* < Header className="formContainer"/> */}
         <Tasktabs className="formContainer"/>
      </div>
      
    );
  }
}

export default dashbox;

