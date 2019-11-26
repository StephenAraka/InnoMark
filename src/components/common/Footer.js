import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { FaEnvelopeOpenText } from 'react-icons/fa';

import sponsor from '../../assets/img/sponsors/mak.png';
import sponsor1 from '../../assets/img/sponsors/vu.png';
import sponsor2 from '../../assets/img/sponsors/ndejje.png';
import sponsor3 from '../../assets/img/sponsors/kyu.jpg';

const Footer = () => {

  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <Row className="border-bottom">
          <Col xs="12" sm="12" md="3" lg="3">
            <div className="sub-head">explore</div>
            <ul className="footer-links">
              <li><Link to="#" className="link">What we do</Link></li>
              <li><Link to="#" className="link">Donation</Link></li>
              <li><Link to="#" className="link">Adoption of Innovation</Link></li>
              <li><Link to="#" className="link">Collaboration</Link></li>
            </ul>
          </Col>
          <Col xs="12" sm="12" md="3" lg="3">
            <div className="sub-head">about</div>
            <ul className="footer-links">
              <li><Link to="#" className="link">About Us</Link></li>
              <li><Link to="#" className="link">Blog</Link></li>
              <li><Link to="#" className="link">Trut and Safety</Link></li>
              <li><Link to="#" className="link">Help and Support</Link></li>
              <li><Link to="#" className="link">Careers</Link></li>
              <li><Link to="#" className="link">Contact</Link></li>
            </ul>
          </Col>
          <Col xs="12" sm="12" md="3" lg="3">
            <div className="sub-head">Innovators</div>
            <ul className="footer-links">
              <li><Link to="#" className="link">How it works</Link></li>
              <li><Link to="#" className="link">Terms and Conditions</Link></li>
              <li><Link to="#" className="link">Fees</Link></li>
              <li><Link to="#" className="link">Community Edition</Link></li>
              <li><Link to="#" className="link">Enterprise releases</Link></li>
            </ul>
          </Col>
          <Col xs="12" sm="12" md="3" lg="3">
            <div className="mini-form">
              <div className="sub-head border-bottom">find innomark</div>
              <FaEnvelopeOpenText className="footer-icon" />
              <div className="header sub-heading-login">Would you like to discover new brilliant products through our newsletter?</div>
              <div className="content">
                <Form>
                  <FormGroup className="mb-1 mr-sm-2 mb-sm-0">
                    <Input type="email" name="email" placeholder="Your email" />
                  </FormGroup>
                  <Row className="mt-0">
                    <Col className="mb-3" xs="12" sm="12" md="12" lg="12">
                      <label className="mt-2 sign-up-qn">
                        <input
                          type="checkbox"
                          name="hasAgreed"
                        />
                        I agree to the <Link to="/terms" className="sign-up-link">terms of service</Link>
                      </label>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs="12" sm="12" md="6" lg="6">
                      <Button type="submit" className="btn-footer">sign me up</Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-2 sponsors">
          <Row>
            <Col xs="12" sm="12" md="3" lg="3">
              <img src={sponsor} className="sponsor-logo" />
            </Col>
            <Col xs="12" sm="12" md="3" lg="3">
              <img src={sponsor2} className="sponsor-logo" />
            </Col>
            <Col xs="12" sm="12" md="3" lg="3">
              <img src={sponsor3} className="sponsor-logo" />
            </Col>
            <Col xs="12" sm="12" md="3" lg="3">
              <img src={sponsor1} className="sponsor-logo" />
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
