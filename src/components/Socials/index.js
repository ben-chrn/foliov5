import React from 'react'
import * as ScrollMagic from "scrollmagic"
import { TimelineMax, TweenMax, Power2 } from "gsap"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"

// Components
import Icon from '../Icon'


// Styles
import * as So from './styles'
import * as S from '../styles/variables/Typography'

class Socials extends React.Component {

  constructor(props) {
    super(props)

    this.text = React.createRef()
    this.icons = React.createRef()
  }

  componentDidMount() {

    this.tl = new TimelineMax()
    this.tl.fromTo(this.text.current, 0.5, {y:15, opacity:0, ease:Power2.easeOut}, {y:0, opacity:1, ease:Power2.easeOut}, .1)
    this.tl.staggerFromTo(this.icons.current.children, 0.5, {y:15, opacity:0, ease:Power2.easeOut}, {y:0, opacity:1, ease:Power2.easeOut}, .08, .2)

    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

    this.controller = new ScrollMagic.Controller()
    this.scene = new ScrollMagic.Scene({
      duration: 0,
      offset: 300,
      triggerElement:"#socialWrapper",
      reverse: false
    })
    .setTween(this.tl)
    .addTo(this.controller)
  }

  render() {
    return(
      <So.Wrapper id="socialWrapper">
        <S.P ref={this.text}>Find me on</S.P>
        <So.Icons ref={this.icons}>
          <So.Single><Icon type="github" /><S.A href="https://github.com/ben-chrn" target="_blank">Github</S.A></So.Single>
          <So.Single><Icon type="twitter" /><S.A href="https://twitter.com/ben-chrn" target="_blank">Twitter</S.A></So.Single>
          <So.Single><Icon type="email" /><S.A href="mailto:benjaminchareyron@gmail.com">Email</S.A></So.Single>
        </So.Icons>
      </So.Wrapper>
    )
  }
}

export default Socials