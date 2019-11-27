import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Progress } from 'reactstrap';
import { FaHeart, FaMoneyBill, FaMobile } from 'react-icons/fa';

import { ProjectConsumer } from '../../context';
import { ButtonContainer } from '../styled/Buttons';


export default class Details extends Component {
  render() {
    return (
      <ProjectConsumer>
        {(data) => {
          const { id, owner, title, img, info, requires, received } = data.detailProject;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}

              {/* product details */}
              <div className="row">
                {/* image */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                {/* info text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>{title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{owner}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      requires: <span>$</span> {requires}
                    </strong>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      has received: <span>$</span> {received}
                    </strong>
                  </h4>
                  <Progress value={70} color="success" style={{ height: '10px' }} striped />
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about the product:
                  </p>
                  <p className="text-muted lead">{info}</p>

                  {/** Buttons */}
                  <div>
                    <Link to="/innomark/dashboard/projects">
                      <ButtonContainer>back to projects</ButtonContainer>
                    </Link>

                    <ButtonContainer
                      cart
                      // disabled={inCart ? true : false}
                      // onClick={() => {
                      //   data.addToCart(id);
                      // }}
                    ><FaMoneyBill /> donate to project <FaMoneyBill />
                    </ButtonContainer>
                  </div>
                </div>
              </div>
              {/* end product details */}

            </div>
          );
        }}
      </ProjectConsumer>
    );
  }
}
