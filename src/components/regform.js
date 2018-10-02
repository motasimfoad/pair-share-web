import React, { Component } from 'react';
import '../styles/regform.css';
import { Button, Form, FormGroup, Col, FormControl, Checkbox} from 'react-bootstrap';


class regform extends Component {
  render() {
    return (
       <div className="formContainer">
       <Form className="form" horizontal>
       <FormGroup controlId="formHorizontalUsername">
            <Col sm={12}>
            <FormControl type="username" placeholder="Username" />
            </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
            <Col sm={12}>
            <FormControl type="email" placeholder="Email" />
            </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
            <Col sm={12}>
            <FormControl type="password" placeholder="Password" />
            </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
            <Col sm={12}>
            <FormControl type="password" placeholder="Confirm Password" />
            </Col>
        </FormGroup>

    
        <Checkbox>Accept terms and conditions</Checkbox>
        <br/>
        <Button type="submit">Register</Button>
        <br/>
        <hr/> 

        <div class="loginalternative">or log in with </div>
        <br/>
            <div class="loginwith">
              <div class="btn-group btn-group-justified" role="group" aria-label="...">
                <div class="btn-group" role="group">
                <button type="button" class="btn btn-default fb">Facebook</button>
                </div>
                <div class="btn-group" role="group">
                <button type="button" class="btn btn-default google">Google</button>
                </div>
              </div>
            </div>
        </Form>
      </div>
     
    );
  }
}

export default regform;
