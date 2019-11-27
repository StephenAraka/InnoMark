import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, ModalFooter } from 'reactstrap';

import SlidePics from './Carousel';
import LandingProjects from './LandingProjects';
import { FaMobile, FaHome, FaHospital, FaDollarSign, FaTree, FaSchool } from 'react-icons/fa';

export class Landing extends Component {
  render() {
    return (
      <>
        <div className='landing-section-1'>
          <SlidePics />
          <div className="carousel-overlap">
            <Row>
              <Col xs="0" sm="0" md="6" lg="6" className="left-side">
                {/* Some stuff here */}
              </Col>
              <Col xs="12" sm="12" md="6" lg="6" className="right-side">
                <div className="card-custom">
                  <h3 className="mb-2 pb-2 sub-heading">Find the Technology Innovation on Innovation Market</h3>
                  <p className="my-2 p-big">InnoMark is where donors, adopters and collaborators find cutting edge Technology Innovations from Uganda.</p>
                  <ModalFooter>
                    <div className="btn-toolbar pull-right">
                      <Link to="/innomark/register"><Button className="mr-3 btn-sign-up">SIGN UP NOW</Button></Link>
                      <Link to="#"><Button className="btn-learn-more">LEARN MORE</Button></Link>
                    </div>
                  </ModalFooter>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="landing-section-2">
          <LandingProjects />
        </div>

        <div className="landing-section-3">
          <div className="col-9 mx-auto col-sm-12 col-md-9 col-lg-6 my-5">
            <h4>Lots of Interesting Categories</h4>
            <Row>
              <Col xs="6" sm="6" md="4" lg="2">
                <FaHome  className="r-icon"/>
                <p>home</p>
              </Col>
              <Col xs="6" sm="6" md="2" lg="2">
                <FaMobile  className="r-icon"/>
                <p>mobile apps</p>
              </Col>
              <Col xs="6" sm="6" md="2" lg="2">
                <FaHospital className="r-icon"/>
                <p>health</p>
              </Col>
              <Col xs="6" sm="6" md="2" lg="2">
                <FaDollarSign  className="r-icon"/>
                <p>finance</p>
              </Col>
              <Col xs="6" sm="6" md="2" lg="2">
                <FaTree  className="r-icon"/>
                <p>agric</p>
              </Col>
              <Col xs="6" sm="6" md="2" lg="2">
                <FaSchool  className="r-icon"/>
                <p>education</p>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
