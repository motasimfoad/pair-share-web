import React, { Component } from 'react';
import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit,faPen, faShareAlt } from '@fortawesome/free-solid-svg-icons';




class header extends Component {
  render() {
    return (
        <div className="container">
        <div className="header"><h2>tasklist <FontAwesomeIcon icon={faPen} /></h2></div>
            <div className="left">
            <img className="profilepic" src="http://icons-for-free.com/free-icons/png/512/2540590.png" alt="profilepic"></img>
            <img className="personOne" src="http://icons-for-free.com/free-icons/png/512/2540590.png" alt="profilepic"></img>
              <div className="share">
              <FontAwesomeIcon  className="shareicon" icon={faShareAlt} size={"4x"} />
              </div>
            </div>
          
          <div className="right">
            right
          </div>

          <div className="name"><h3>Username <FontAwesomeIcon icon={faUserEdit} /></h3>
          </div>

        </div> 
    )
  }
}

export default header;
