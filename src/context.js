import React, { Component } from 'react';
import { allProjects, detailProject } from './data/data';

const ProjectContext = React.createContext();
// Provider - provides context data
// Consumer - uses context data

class ProjectProvider extends Component {
  state = {
    projects: [],
    detailProject,
    cart: []
  };

  componentDidMount() {
    this.setProjects();
  }

  setProjects = () => {
    let tempProjects = [];
    allProjects.forEach(item => {
      const singleItem = { ...item };
      tempProjects = [...tempProjects, singleItem];
    });
    this.setState(() => {
      return { projects: tempProjects }
    });
    debugger;
  }

  // sets detailProduct to details of clicked product
  handleDetail = (id) => {
    const project = this.getItem(id);
    this.setState(() => {
      return { detailProject: project }
    })
  }

  // get single project of specified id
  getItem = (id) => {
    const project = this.state.projects.find(item => item.id === id);
    return project;
  }

  render() {
    return (
      <ProjectContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}>
        {this.props.children}
      </ProjectContext.Provider>
    )
  }
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectConsumer, ProjectProvider }