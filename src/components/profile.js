import React, { Component } from 'react';
import '../styles/profile.css';
import { Col,Grid, Row} from 'react-bootstrap';


class profile extends Component {
  render() {
    return (
       //<div className="formContainer">
      <Grid>
  <Row className="show-grid">
    <Col xs={12} md={11}>
    <div className="bio">
   ksck 
     {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfYOpIsjIBpkAAR1HHsOx7gXn4tTNHca_c3N-qE-iePxJ-5pE"></img>  */}
    </div>
    </Col>
  </Row>
  </Grid>
      
     
    );
  }
}

export default profile;
