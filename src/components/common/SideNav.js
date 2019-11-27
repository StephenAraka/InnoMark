import React from 'react';
import { Link } from 'react-router-dom';

export const SideNav = () => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">

      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>project categories</span>
      </h6>

      <ul className="nav flex-column">
        <li className="nav-item border-bottom">
          <Link to="/innomark/dashboard/projects" className="nav-link">
            All projects
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link to="/dashboard/mobile-apps" className="nav-link">
            Mobile Applications
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link to="/dashboard/web-apps" className="nav-link" >
            Web Applications
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link to="/dashboard/embedded" className="nav-link" >
            Embedded Systems
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link className="nav-link" >
            Desktop Applications
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link to="/dashboard/cloud" className="nav-link" >
            Cloud Computing Projects
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link to="/dashboard/comp-algorithm" className="nav-link" href="#">
            Computational Algorithm Projects
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);