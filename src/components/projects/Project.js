import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Progress } from 'reactstrap';
import PropTypes from 'prop-types';

import { ProjectConsumer } from '../../context';
import { ProductWrapper } from '../styled/ProductWrapper';

export default class Project extends Component {
  render() {
    const { id, title, img, smallInfo, requires, received } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-sm-12 col-md-6 col-lg-4 my-3">
        <div className="card">

          <ProjectConsumer>
            {(value) => (
              <div className="img-container p-0" onClick={() => value.handleDetail(id)}>
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
              </div>
            )}
          </ProjectConsumer>

          {/* card footer */}
          <div className="mt-5 card-footer">
            <p className="card-sub-title align-self-center mb-0">
              {title}
            </p>
            <p>{smallInfo}</p>
            <div className="d-flex justify-content-between">
              <p>{received}</p>
              <p>{requires}</p>
            </div>
            <Progress style={{ height: '10px' }} color="success" striped value={received} />
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Project.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    requires: PropTypes.number,
    received: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
