import React from "react"

// Components
import Homepage from '../components/Homepage'
import Project from '../components/Project'
import Socials from '../components/Socials'
import SEO from '../components/SEO'


// Styles
import GlobalStyle from "../components/styles/variables/Globals"

// Assets
import projects from "../../static/projects"

export default () => {
  
  return(
    <div>
      <SEO />
      <GlobalStyle />
      <Homepage />
      {projects.map((project, index) => (
        <Project project={project} index={index} key={index}/>
      ))}
      <Socials />
    </div>
  )
}
