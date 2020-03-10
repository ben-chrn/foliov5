import React from 'react'

// Components
import { Container, Row, Col } from 'react-grid-system'
import Icon from '../Icon'

// Styles
import * as H from './styles'
import * as S from '../styles/variables/Typography'

const Homepage = () => {

  return(
    <H.Wrapper>
      <Container fluid>
        <Row align="center">
          <Col 
            xs={10}
            md={6}
            offset={{ xs:1, md:3}}
          >
            <S.H1>
              Hi<i>,</i><br/>
              I'm BenChrn<i>.</i>
            </S.H1>
            <div>
              <S.P>I’m a <S.Mark>front-end developer & product designer</S.Mark> dedicated to building beautiful experiences and crafted material.</S.P>
              <S.P>I've had the chance to work on many <S.Mark>amazing projects</S.Mark>, which you can see a sample off by scrolling just a little</S.P>
              <S.P>If something in here interests you in any way, don’t hesitate to <S.A><S.Mark>reach out.</S.Mark></S.A></S.P>
            </div>
            <Icon type="caret-down" />
          </Col>
        </Row>
      </Container>
    </H.Wrapper>
  )
}

export default Homepage