import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Progress, Row, Col } from 'reactstrap';
import { FaHeart } from 'react-icons/fa';

import AgricProject3 from '../../assets/img/agric/agric3.jpg';
import AgricProject5 from '../../assets/img/agric/agricSureDevice.png';
import AgricProject6 from '../../assets/img/agric/agricSUre.jpg';
import AgricProject7 from '../../assets/img/agric/agricfield.jpg';

export default class LandingProjects extends Component {
  render() {
    return (
      <div className="landing-projects col-10 mx-auto col-sm-12 col-md-10 col-lg-10 my-3">
        <Row>
          <Col xs="12" sm="12" md="4" lg="3">
            <div className="card">
              <div className="img-container p-0">
                <Link to="/innomark/dashboard/details">
                  <img src={AgricProject3} alt="product" className="card-img-top" />
                </Link>
              </div>

              {/* card footer */}
              <div className="mt-5 card-footer">
                <div className="d-flex justify-content-between">
                  <p className="card-sub-title align-self-center mb-2">Humidity Measurer</p>
                  <FaHeart color="red" />
                </div>
                <p className="some-info">Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring</p>
                <div className="d-flex justify-content-between">
                  <p className="funding">$12,00USD Raised</p>
                </div>
                <Progress style={{ height: '10px' }} color="success" striped value={80} />
              </div>
            </div>
          </Col>

          <Col xs="12" sm="12" md="4" lg="3">
            <div className="card">
              <div className="img-container p-0">
                <Link to="/innomark/dashboard/details">
                  <img src={AgricProject6} alt="product" className="card-img-top" />
                </Link>
              </div>

              {/* card footer */}
              <div className="mt-5 card-footer">
                <div className="d-flex justify-content-between">
                  <p className="card-sub-title align-self-center mb-2">Green House</p>
                  <FaHeart color="red" />
                </div>
                <p className="some-info">Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring</p>
                <div className="d-flex justify-content-between">
                  <p className="funding">$5,000USD Raised</p>
                </div>
                <Progress style={{ height: '10px' }} color="success" striped value={40} />
              </div>
            </div>
          </Col>

          <Col xs="12" sm="12" md="4" lg="3">
            <div className="card">
              <div className="img-container p-0">
                <Link to="/innomark/dashboard/details">
                  <img src={AgricProject7} alt="product" className="card-img-top" />
                </Link>
              </div>

              {/* card footer */}
              <div className="mt-5 card-footer">
                <div className="d-flex justify-content-between">
                  <p className="card-sub-title align-self-center mb-2">Outdoor Farming</p>
                  <FaHeart color="red" />
                </div>
                <p className="some-info">Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring</p>
                <div className="d-flex justify-content-between">
                  <p className="funding">$31,00USD Raised</p>
                </div>
                <Progress style={{ height: '10px' }} color="success" striped value={80} />
              </div>
            </div>
          </Col>

          <Col xs="12" sm="12" md="4" lg="3">
            <div className="card">
              <div className="img-container p-0">
                <Link to="/innomark/dashboard/details">
                  <img src={AgricProject5} alt="product" className="card-img-top" />
                </Link>
              </div>

              {/* card footer */}
              <div className="mt-5 card-footer">
                <div className="d-flex justify-content-between">
                  <p className="card-sub-title align-self-center mb-2">Some Device</p>
                  <FaHeart color="red" />
                </div>
                <p className="some-info">Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring</p>
                <div className="d-flex justify-content-between">
                  <p className="funding">$50,000USD Raised</p>
                </div>
                <Progress style={{ height: '10px' }} color="success" striped value={100} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
