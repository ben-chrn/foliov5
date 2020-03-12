import React from 'react'
import { TimelineMax, TweenMax, Power2 } from "gsap"

// Components
import { Container, Row, Col } from 'react-grid-system'
import Icon from '../Icon'

// Styles
import * as H from './styles'
import * as S from '../styles/variables/Typography'

class Homepage extends React.Component {

  constructor(props) {
    super(props)

    this.title = React.createRef()
    this.texts = React.createRef()
    this.icon = React.createRef()
  }

  componentDidMount() {
    this.tl = new TimelineMax()
    this.tl.fromTo(this.title.current, 1, {y:15, opacity:0, ease:Power2.easeInOut}, {y:0, opacity:1, ease:Power2.easeInOut}, 1)
    this.tl.staggerFromTo(this.texts.current.children, .5, {y:15, opacity:0, ease:Power2.easeInOut}, {y:0, opacity:1, ease:Power2.easeInOut}, .1, 3)
    this.tl.fromTo(this.icon.current, 0.5, {y:0, opacity:0, ease:Power2.easeInOut}, {y:15, opacity:1, ease:Power2.easeInOut}, 3.5)

    this.tl.play()
  }

  render() {

    return(
      <H.Wrapper>
        <Container fluid>
          <Row align="center">
            <Col 
              xs={10}
              md={6}
              offset={{ xs:1, md:3}}
            >
              <S.H1 ref={this.title}>
                Hi<i>,</i><br/>
                I'm BenChrn<i>.</i>
              </S.H1>
              <div ref={this.texts}>
                <S.P>I’m a <S.Mark>front-end developer & product designer</S.Mark> dedicated to building beautiful experiences and crafted material.</S.P>
                <S.P>I've had the chance to work on many <S.Mark>amazing projects</S.Mark>, which you can see a sample off by scrolling just a little</S.P>
                <S.P>If something in here interests you in any way, don’t hesitate to <S.A href="mailto:benjaminchareyron@gmail.com">reach out.</S.A></S.P>
              </div>
              <div ref={this.icon}><Icon type="caret-down" id="homeIcon" /></div>
            </Col>
          </Row>
        </Container>
      </H.Wrapper>
    )
  }
}

export default Homepage