import React from 'react';
import { Link } from 'react-router-dom';

export const SideNav = () => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">

      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>all categories</span>
      </h6>

      <ul className="nav flex-column">
        <li className="nav-item border-bottom">
          <Link className="nav-link active">
            Mobile Applications
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link className="nav-link" >
            Web Applications
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link className="nav-link" >
            Embedded Systems
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link className="nav-link" >
            Desktop Applications
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link className="nav-link" >
            Cloud Computing Projects
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link className="nav-link" href="#">
            Computational Algorithm Projects
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);