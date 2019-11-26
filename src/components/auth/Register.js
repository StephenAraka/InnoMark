import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import logo from '../../assets/img/logo.svg';

class Register extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="auth-container">
        <img src={logo} alt="logo_img" className="inno-logo" />
        <div className="header sub-heading">Welcome to InnoMark!</div>
        <div className="header sub-heading-login border-bottom">Please register to join us!</div>

        <div className="content">
          <Form className="auth-form">
            <FormGroup className="mb-1 mr-sm-2 mb-sm-0">
              <Label for="Email" className="mr-sm-2">First Name</Label>
              <Input type="name" name="firstName" placeholder="Name" />
            </FormGroup>
            <FormGroup className="mb-1 mr-sm-2 mb-sm-0">
              <Label for="Email" className="mr-sm-2">Last Name</Label>
              <Input type="name" name="lastName" placeholder="Other name" />
            </FormGroup>
            <FormGroup className="mb-1 mr-sm-2 mb-sm-0">
              <Label for="Email" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" placeholder="Your email" />
            </FormGroup>
            <FormGroup className="mb-1 mr-sm-2 mb-sm-0">
              <Label for="Password" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" placeholder="Password" />
            </FormGroup>
            <Row className="mt-0">
              <Col className="mb-3" xs="12" sm="12" md="12" lg="12">
                <label className="sign-up-qn">
                  <input
                    type="checkbox"
                    name="hasAgreed"
                  />
                  I agree to the <Link to="/terms" className="sign-up-link">terms of service</Link>
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12" md="6" lg="6">
                <Button type="submit" className="mb-1 btns-login-register">Create Account</Button>
              </Col>
            </Row>
            <Row className="mt-5 text-center">
              <Col xs="12" sm="12" md="12" lg="12">
                <p className="sign-up-qn">Already a member?... <Link to="/login" className="sign-up-link">Log In Here</Link></p>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;