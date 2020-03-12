import styled from 'styled-components'
import fonts from './Fonts'
import colors from './Colors'
import paddings from './Paddings'

let ffamily = fonts.family,
    fweight = fonts.weights,
    fsize = fonts.sizes

export const H1 = styled.h1`
  font-family: ${ffamily.title};
  font-weight: ${fweight.semibold};
  font-size: ${fsize.title};
  color: ${colors.title};
  line-height: 1.2;
`

export const H2 = styled.h2`
  font-family: ${ffamily.title};
  font-weight: ${fweight.medium};
  font-size: ${fsize.title};
  color: ${colors.title};
  line-height: 1.2;
`

export const H3 = styled.h3`
  font-family: ${ffamily.title};
  font-weight: ${fweight.medium};
  font-size: ${fsize.mark};
  color: ${colors.highlight};
`

export const A = styled.a`
  font-family: ${ffamily.content};
  font-weight: ${fweight.regular};
  font-size: ${fsize.content};
  color: ${colors.white};
  line-height: 1.4;
  position: relative;
  display: inline-block;
  text-decoration:none;
  padding: ${paddings.rg} 0;

  &:after {
    content: "";
    position:absolute;
    bottom: 12px;
    left: auto;
    right:0%;
    width: 0;
    height: 1px;
    background: ${colors.highlight};
    transition: width .2s ease-in-out;
  }

  &:hover {
    &:after {
      width: 100%;
      right:0;
      left: 0;
    }
  }
`

export const P = styled.p`
  font-family: ${ffamily.content};
  font-weight: ${fweight.regular};
  font-size: ${fsize.content};
  color: ${colors.content};
  line-height: 1.4;
`

export const Mark = styled.mark`
  font-family: ${ffamily.content};
  font-weight: ${fweight.medium};
  font-size: ${fsize.mark};
  color: ${colors.highlight};
  text-transform: uppercase;
  background: none;
  line-height: 1.4;
`

export const I = styled.i`
  color:${colors.highlight}
`