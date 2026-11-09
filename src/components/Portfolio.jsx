import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
      projects: this.props.projects
    };
    this.handleSelectFilter = this.handleSelectFilter.bind(this);
  }

  handleSelectFilter(filterName) {
    this.setState({
      selected: filterName
    });
  }

  render() {
    const { selected, projects } = this.state;
    
    const filteredProjects = selected === 'All' 
      ? projects 
      : projects.filter(project => project.category === selected);

    const categories = ['All', ...new Set(projects.map(p => p.category))];

    return (
      <div className="portfolio">
        <Toolbar 
          filters={categories} 
          selected={selected} 
          onSelectFilter={this.handleSelectFilter} 
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;