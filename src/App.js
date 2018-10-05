import React, { Component } from 'react';
import Dashbox from './pages/dashbox';
import './styles/main.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <div className ="bg">
        < Dashbox />
        
      </div>
    );
  }
}

export default App;
