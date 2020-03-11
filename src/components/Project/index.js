import React from 'react'

// Components
import { Container, Row, Col } from 'react-grid-system'
import Icon from '../Icon'
import Image from '../Image'

// Styles
import * as P from './styles'
import * as S from '../styles/variables/Typography'

const Project = (props) => {

  const { project } = props

  console.log(project)

  return(
    <P.Wrapper>
      <Container>
        <Row>
            <Col xs={12} lg={6} xl={5}>
              <S.H2>{project.title}</S.H2>
              <P.Misc>
                <S.Mark>{project.dates[0]}</S.Mark>
                <S.Mark>{project.dates[1]}</S.Mark>
                <S.Mark>{project.role}</S.Mark>
              </P.Misc>
              <P.Stack>
                {project.stack.map(tech => (
                  <Icon type={tech} />
                ))}
              </P.Stack>
              <S.P>{project.description}</S.P>
              <P.Link><S.A>Link</S.A><Icon type="arrow-right"/></P.Link>
            </Col>
            <Col xs={12} lg={6} offset={{xl:1}}>
              <Image src="https://via.placeholder.com/800x800" />
            </Col>
        </Row>
      </Container>
    </P.Wrapper>
  )
}

export default Project