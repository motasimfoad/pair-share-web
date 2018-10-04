import React, { Component } from 'react';
import '../styles/tasktabs.css';
import {Tab,Tabs} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCookie, faCookieBite, faCheckCircle, faTag, faHashtag, faClock, faTags} from '@fortawesome/free-solid-svg-icons';
import dateFns from "date-fns";


class tasktabs extends Component {
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
                <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
                </div>
            </Tab>
           
            </Tabs>

        
        </div>
        </div> 
    )
  }
}

export default tasktabs;
