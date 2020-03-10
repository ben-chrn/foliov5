import React from 'react'

// Components
import { Container, Row, Col } from 'react-grid-system'
import Icon from '../Icon'

// Styles
import * as P from './styles'
import * as S from '../styles/variables/Typography'

const Project = (props) => {

  const { project } = props

  console.log(project)

  return(
    <P.Wrapper>
      <S.H2>{project.title}</S.H2>
      <P.Stack>
      </P.Stack>
      <S.P>{project.description}</S.P>
    </P.Wrapper>
  )
}

export default Project