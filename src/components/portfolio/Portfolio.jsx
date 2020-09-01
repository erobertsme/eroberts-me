import React, { Component } from 'react'
import Project from './Project'

export default class Portfolio extends Component {

  projects = [
    { 'title': "Harry Potter themed game", "url": 'https://notharrypotter.herokuapp.com/' },
    { 'title': "ToRA95", "url": 'https://tora95.com' },
    { 'title': "Pixemoji", "url": 'https://pixemoji.netlify.app' },
    { 'title': "Encrypt a Message", "url": '/crypto' }
  ]

  mapProjects = () => {
    return this.projects.map(project => <Project data={project} />)
  }

  render() {
    return (
      <section className="portfolio">
        <h3>Here's some (maybe) fun projects you can click on</h3>
        <div className="project-container">{ this.mapProjects() }</div>
      </section>
    )
  }
}
