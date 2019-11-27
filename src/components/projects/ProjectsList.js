import React, { Component } from 'react';
import Project from './Project';

import { ProjectConsumer } from '../../context';
import { allProjects } from '../../data/data';

export class ProductList extends Component {
  state = {
    projects: allProjects
  }

  render() {
    return (
      <React.Fragment>
        <div className="py-1">
          <div className="container">
            <div className="row">
              <ProjectConsumer>
                {(data) => {
                  return data.projects.map(product => {
                    return <Project
                      key={product.id}
                      product={product}
                    />
                  });
                }}
              </ProjectConsumer>
            </div>
          </div>
        </div>
        {/* <Product /> */}
      </React.Fragment>
    );
  }
}

export default ProductList;
