import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, ModalFooter } from 'reactstrap';

import SlidePics from './Carousel';

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
                      <Link to="#"><Button className="mr-3 btn-sign-up">SIGN UP NOW</Button></Link>
                      <Link to="#"><Button className="btn-learn-more">LEARN MORE</Button></Link>
                    </div>
                  </ModalFooter>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="landing-section-2">
          <Row>
            <Col>
              <div>
                <h4>About Us</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <p>Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content. Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              </div>
            </Col>
            <Col>
              <div>
                <h3>Holla </h3>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Landing;
