import React, { Component } from 'react';
import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit,faPen, faUserFriends, faClipboardList, faHashtag, faTag, faThList, faTags} from '@fortawesome/free-solid-svg-icons';
import {FormControl} from 'react-bootstrap';


class header extends Component {
  render() {
    return (
        <div className="container">
        <div className="header"><h2>tasklist <FontAwesomeIcon icon={faPen} /></h2></div>
            <div className="left">
            <img className="profilepic" src="http://icons-for-free.com/free-icons/png/512/2540590.png" alt="profilepic"></img>
            <img className="personOne" src="http://icons-for-free.com/free-icons/png/512/2540590.png" alt="profilepic"></img>
              <div className="share">
              <FontAwesomeIcon  className="shareicon" icon={faUserFriends} size={"4x"} />
              </div>
            </div>
          
          <div className="right">
            <div className="logo">
            <FontAwesomeIcon  className="" icon={faClipboardList} size={"5x"} />
            <h1>Pair Share</h1>
            </div>
              <div className="container">
              <FormControl className="search" type="text" placeholder="Search" />
              <h4 className="list"> <FontAwesomeIcon  icon={faThList} /> Add task</h4>
              <h4 className="list"> <FontAwesomeIcon  icon={faTag} /> Create tag</h4>
              <h4 className="list"> <FontAwesomeIcon  icon={faHashtag} /> Important</h4>
              <h4 className="list"> <FontAwesomeIcon  icon={faTags} /> Personal</h4>
              <h4 className="list"> <FontAwesomeIcon  icon={faTags} /> Work</h4>
              </div>
          </div>

          <div className="name"><h3>Username <FontAwesomeIcon icon={faUserEdit} /></h3>
          </div>

        </div> 
    )
  }
}

export default header;
