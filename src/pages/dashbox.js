import React, { Component } from 'react';
//import Calendar from '../components/calendar';
import Header from '../components/header';
import Tasktabs from '../components/tasktabs';
import '../styles/dashbox.css';

class dashbox extends Component {
  render() {
    return (
      <div className="mainFormContainer">
         < Header className="formContainer"/>
         <Tasktabs className="formContainer"/>
      </div>
      // <div className="App">
      //     <header>
      //       <div id="logo">
      //         <span className="icon">date_range</span>
      //           <span>
      //             react<b>calendar</b>
      //           </span>
      //       </div>
      //     </header>
      //       <main>
      //         <Calendar />
      //       </main>
      // </div>
    );
  }
}

export default dashbox;

