import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { FaFilter, FaShare } from 'react-icons/fa';
// import Title from '../projects/Title';
import { SideNav } from '../common/SideNav';

import ProjectsList from '../projects/ProjectsList';
import Details from '../projects/Details';

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid dashboard">
        <div className="row">

          <SideNav />

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button className="btn btn-sm btn-outline-secondary"><FaShare /> Share</button>
                  <button className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                  <FaFilter /> Filter projects by
                </button>
              </div>
            </div>

            {/* <Title name="all" title="projects" /> */}

            <Switch>
              <Route path='/innomark/dashboard/projects' component={ProjectsList} />
              <Route path='/innomark/dashboard/details' component={Details} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default Dashboard;
