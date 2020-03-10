import React from "react"

// Components
import { Container, Row, Col } from 'react-grid-system'
import Homepage from '../components/Homepage'
import Project from '../components/Project'


// Styles
import GlobalStyle from "../components/styles/variables/Globals"

// Assets
import projects from "../../static/projects"

export default () => {
  
  return(
    <div>
      <GlobalStyle />
      <Homepage />
      {projects.map((project, index) => (
        <Project project={project} />
      ))}
    </div>
  )
}
