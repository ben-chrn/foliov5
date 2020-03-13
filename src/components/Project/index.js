import React from "react"
import * as ScrollMagic from "scrollmagic"
import { TimelineMax, TweenMax, Power2 } from "gsap"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"

// Components
import Icon from '../Icon'

// Styles
import * as P from './styles'
import * as S from '../styles/variables/Typography'

class Project extends React.Component {

  constructor(props) {

    super(props)

    this.projectTitle = React.createRef()
    this.projectMisc = React.createRef()
    this.projectStack = React.createRef()
    this.projectDescription = React.createRef()
    this.projectLink = React.createRef()
    this.projectPicture = React.createRef()
  }

  componentDidMount() {
    
    this.tl = new TimelineMax()

    this.tl.fromTo(this.projectTitle.current, 0.5, {opacity:0, ease:Power2.easeOut}, {opacity:1, ease:Power2.easeOut}, 0)
    this.tl.fromTo(this.projectPicture.current, 1, {y:"-75px", opacity:0, ease:Power2.easeOut}, {y:0, opacity:1, ease:Power2.easeOut}, 0)
    this.tl.staggerFromTo(this.projectMisc.current.children, 1, {y:15, opacity:0, ease:Power2.easeOut}, {y:0, opacity:1, ease:Power2.easeOut}, .08, .1)
    this.tl.fromTo(this.projectStack.current, 0.5, {y:15, opacity:0, ease:Power2.easeOut}, {y:0, opacity:1, ease:Power2.easeOut}, .3)
    this.tl.fromTo(this.projectDescription.current, 1, {y:15, opacity:0, ease:Power2.easeOut}, {y:0, opacity:1, ease:Power2.easeOut}, .3)
    this.tl.fromTo(this.projectLink.current, 0.5, {y:15, opacity:0, ease:Power2.easeOut}, {y:0, opacity:1, ease:Power2.easeOut}, .3)

    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

    this.controller = new ScrollMagic.Controller()
    this.scene = new ScrollMagic.Scene({
      duration: 0,
      triggerElement:`#projectWrapper_${this.props.index}`,
      triggerHook: 0.5,
      reverse: false
    })
    .setTween(this.tl)
    .addTo(this.controller)
  }

  render() {
    const { project } = this.props
  
    return(
      <P.Wrapper id={`projectWrapper_${this.props.index}`}>
        <P.TextWrapper>
          <S.H2 ref={this.projectTitle}>{project.title}</S.H2>
          <P.Misc ref={this.projectMisc}>
            <S.Mark>{project.dates[0]}</S.Mark>
            <S.Mark>{project.dates[1]}</S.Mark>
            <S.Mark>{project.role}</S.Mark>
          </P.Misc>
          <P.Stack ref={this.projectStack}>
            {project.stack.map(tech => (
              <Icon key={tech } type={tech} />
            ))}
          </P.Stack>
          <S.P ref={this.projectDescription}>{project.description}</S.P>
          <P.Link ref={this.projectLink}><S.A href={project.url} target="_blank">Link</S.A><Icon type="arrow-right"/></P.Link>
        </P.TextWrapper>
        <P.PicWrapper ref={this.projectPicture}><img alt={project.title} src={require(`../../../static/${project.fileName}`)} /></P.PicWrapper>
      </P.Wrapper>
    )
  }

}

export default Project