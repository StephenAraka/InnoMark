import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

import logo from '../../assets/img/logo.svg';

class Login extends Component {
  // state = {

  // }

  render() {
    return (
      <div className="auth-container">
        <img src={logo} alt="logo_img" className="inno-logo"/>
        <div className="header sub-heading">Welcome back to InnoMark!</div>
        <div className="header sub-heading-login border-bottom">Login to continue</div>
        
        <div className="content">  
          <Form className="auth-form">
            <FormGroup className="mb-1 mr-sm-2 mb-sm-0">
              <Label for="Email" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" placeholder="Your email" />
            </FormGroup>
            <FormGroup className="mb-1 mr-sm-2 mb-sm-0">
              <Label for="Password" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" placeholder="Password" />
            </FormGroup>
            <Row className="mt-0">
              <Col className="mb-3" xs="12" sm="12" md="6" lg="6">
                <Link to="/innomark/reset-password" className="forgot-pw">Forgot password?</Link>
              </Col>
              <Col xs="0" sm="0" md="6" lg="6">
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12" md="6" lg="6">
                <Link to="/innomark/dashboard/projects"><Button type="submit" className="mb-1 btns-login-register">Login</Button></Link>
              </Col>
            </Row>
            <Row className="mt-5 text-center">
              <Col xs="12" sm="12" md="12" lg="12">
                <p className="sign-up-qn">New to InnoMark? ... <Link to="/innomark/register" className="sign-up-link">Sign Up Here</Link></p>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;