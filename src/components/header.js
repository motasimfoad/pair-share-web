import React, { Component } from 'react';
import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCookie, faCookieBite, faCheckCircle, faUserEdit,faPen, faUserFriends, faClipboardList, faHashtag, faTag, faThList,faClock, faTags} from '@fortawesome/free-solid-svg-icons';
import {FormControl,Tab,Tabs,ProgressBar} from 'react-bootstrap';
import dateFns from "date-fns";


class header extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };
  render() {
    return (
        <div className="container">
        <div className="header"><h2>tasklist <FontAwesomeIcon icon={faPen} /></h2></div>
            <div className="left">
            <img className="profilepic" src="http://icons-for-free.com/free-icons/png/512/2540590.png" alt="profilepic"></img>
            <img className="personOne" src="http://icons-for-free.com/free-icons/png/512/2540590.png" alt="profilepic"></img>
              <div className="share">
              <FontAwesomeIcon  className="shareicon" icon={faUserFriends} size={"5x"} />
              </div>
            </div>
          
          <div className="right">
            <div className="logo">
            <FontAwesomeIcon  className="" icon={faClipboardList} size={"5x"} />
            <h2>Pair Share</h2>
            </div>
              <div className="container">
              <FormControl className="search" type="text" placeholder="Search" />
              <h4 className="list"> <FontAwesomeIcon  icon={faThList} /> Add task</h4>
              <h4 className="list"> <FontAwesomeIcon  icon={faTag} /> Create tag</h4>
              <h4 className="list"> <FontAwesomeIcon  icon={faHashtag} /> Important</h4>
              <h4 className="list"> <FontAwesomeIcon  icon={faTags} /> Personal</h4>
              <h4 className="list"> <FontAwesomeIcon  icon={faTags} /> Work</h4>
              <ProgressBar className="progress" bsStyle="info" now={50} />
              <h4> 50% done - 2/4 </h4>
              </div>
          </div>

          <div className="name"><h3>Username <FontAwesomeIcon icon={faUserEdit} /></h3>
          <div className="nav-center tasktab">
       
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
                  <div className="calendar">
                  {this.renderHeader()}
                  {this.renderDays()}
                  {this.renderCells()}
                  </div>
              </Tab>
              
              </Tabs>

   
   </div>
          </div>

        </div> 
    )
  }
}

export default header;
