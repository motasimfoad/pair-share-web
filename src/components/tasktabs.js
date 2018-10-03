import React, { Component } from 'react';
import '../styles/tasktabs.css';
import {Tab,Tabs} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCookie, faCookieBite, faCheckCircle, faTag, faHashtag, faClock, faTags} from '@fortawesome/free-solid-svg-icons';



class tasktabs extends Component {
  render() {
    return (
        <div className="container">
        <div className="nav-center">
       
            <Tabs defaultActiveKey={1} className="nav panel-body">
            
            <Tab eventKey={1} title="Daily">
            <div className="tasklist">
              <h4><FontAwesomeIcon icon={faCookie}/> task1 - 15 mins <FontAwesomeIcon className="second" icon={faTag}/> </h4>
              <h4><FontAwesomeIcon icon={faCookieBite}/> task1       <FontAwesomeIcon className="first" icon={faClock}/> <FontAwesomeIcon className="second" icon={faHashtag}/></h4>              
              <h4><FontAwesomeIcon icon={faCookieBite}/> task1       <FontAwesomeIcon className="first" icon={faClock}/> <FontAwesomeIcon className="second" icon={faHashtag}/> <FontAwesomeIcon className="third" icon={faTags}/> </h4> 
              <h4 className="done"><FontAwesomeIcon icon={faCheckCircle}/> task1 - 20 mins <FontAwesomeIcon className="second" icon={faTag}/></h4>
              <h4 className="done"><FontAwesomeIcon icon={faCheckCircle}/> task1      <FontAwesomeIcon className="second" icon={faHashtag}/> <FontAwesomeIcon className="third" icon={faTag}/></h4>
            </div>
            </Tab>
            <Tab eventKey={2} title="Calender">

            </Tab>
           
            </Tabs>

        
        </div>
        </div> 
    )
  }
}

export default tasktabs;
